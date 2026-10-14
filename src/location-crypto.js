const encoder = new TextEncoder();
const context = encoder.encode('halloween-location:v1');
const iterations = 600000;

const toBase64 = bytes => btoa(String.fromCharCode(...bytes));
const fromBase64 = value => Uint8Array.from(atob(value), character => character.charCodeAt(0));

async function deriveKey(password, salt, usage) {
  const material = await crypto.subtle.importKey('raw', encoder.encode(password), 'PBKDF2', false, ['deriveKey']);
  return crypto.subtle.deriveKey(
    {name: 'PBKDF2', hash: 'SHA-256', salt, iterations},
    material, {name: 'AES-GCM', length: 256}, false, [usage],
  );
}

function validateLocation(location) {
  if (typeof location?.address !== 'string' || !location.address.trim() || location.address.length > 250) throw new Error('Invalid location');
  const url = new URL(location.directions);
  if (url.protocol !== 'https:' || !['maps.app.goo.gl', 'www.google.com', 'maps.google.com'].includes(url.hostname) || url.username || url.password) throw new Error('Invalid directions');
  return {address: location.address, directions: url.href};
}

export async function encryptLocation(location, password) {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await deriveKey(password, salt, 'encrypt');
  const data = await crypto.subtle.encrypt(
    {name: 'AES-GCM', iv, additionalData: context, tagLength: 128},
    key, encoder.encode(JSON.stringify(validateLocation(location))),
  );
  return {version: 1, iterations, salt: toBase64(salt), iv: toBase64(iv), data: toBase64(new Uint8Array(data))};
}

export async function decryptLocation(payload, password) {
  if (payload.version !== 1 || payload.iterations !== iterations) throw new Error('Invalid encrypted location');
  const salt = fromBase64(payload.salt);
  const iv = fromBase64(payload.iv);
  if (salt.length !== 16 || iv.length !== 12) throw new Error('Invalid encrypted location');
  const key = await deriveKey(password, salt, 'decrypt');
  const data = await crypto.subtle.decrypt(
    {name: 'AES-GCM', iv, additionalData: context, tagLength: 128}, key, fromBase64(payload.data),
  );
  return validateLocation(JSON.parse(new TextDecoder().decode(data)));
}
