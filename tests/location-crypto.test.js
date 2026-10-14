import {test} from 'node:test';
import assert from 'node:assert/strict';
import {encryptLocation, decryptLocation} from '../src/location-crypto.js';

test('location is recoverable only with the correct password and intact ciphertext', async () => {
  const location = {address: 'A private test venue', directions: 'https://maps.app.goo.gl/test-location'};
  const password = 'test-only-random-looking-password';
  const payload = await encryptLocation(location, password);
  assert.deepEqual(await decryptLocation(payload, password), location);
  assert.equal(JSON.stringify(payload).includes(location.address), false);
  assert.equal(JSON.stringify(payload).includes(location.directions), false);
  await assert.rejects(decryptLocation(payload, 'wrong-password'));
  const bytes = Buffer.from(payload.data, 'base64');
  bytes[0] ^= 1;
  await assert.rejects(decryptLocation({...payload, data: bytes.toString('base64')}, password));
  const another = await encryptLocation(location, password);
  assert.notEqual(another.salt, payload.salt);
  assert.notEqual(another.iv, payload.iv);
  assert.notEqual(another.data, payload.data);
});
