import encryptedLocation from './location.encrypted.json';
import {decryptLocation} from './location-crypto.js';

export function setupLocation({onUnlock, onLock}) {
  const dialog = document.querySelector('.seal-dialog');
  const seal = document.querySelector('.open-seal');
  const hint = document.querySelector('.seal-hint');
  const form = dialog.querySelector('form');
  const input = dialog.querySelector('input');
  const submit = form.querySelector('button');
  const status = dialog.querySelector('.location-status');
  const details = document.querySelector('.location-details');
  const placeholder = document.querySelector('.location-placeholder');
  const address = details.querySelector('.unlocked-address');
  const directions = details.querySelector('a');
  const lock = details.querySelector('.location-lock');
  let request = 0;

  const clear = () => {
    request++;
    input.value = '';
    address.textContent = '';
    directions.removeAttribute('href');
    details.hidden = true;
    placeholder.hidden = false;
    submit.disabled = false;
    status.textContent = '';
    dialog.removeAttribute('aria-busy');
  };
  const relock = () => {
    clear();
    if (dialog.open) dialog.close();
    onLock();
  };

  const prompt = () => {
    status.textContent = '';
    dialog.showModal();
    input.focus({preventScroll: true});
  };
  seal.addEventListener('click', prompt);
  hint.addEventListener('click', prompt);
  const cancelPending = () => { request++; input.value = ''; };
  dialog.querySelector('.seal-dialog-close').addEventListener('click', () => { cancelPending(); dialog.close(); });
  dialog.addEventListener('cancel', cancelPending);
  dialog.addEventListener('close', () => {
    request++;
    input.value = '';
    submit.disabled = false;
    dialog.removeAttribute('aria-busy');
    status.textContent = '';
  });
  lock.addEventListener('click', () => { relock(); hint.focus({preventScroll: true}); });
  form.addEventListener('submit', async event => {
    event.preventDefault();
    const password = input.value.trim().replace(/\s+/g, ' ');
    input.value = '';
    if (!password) { status.textContent = 'Enter the six words shared by your host.'; input.focus(); return; }
    if (!crypto?.subtle) { status.textContent = 'Open the invitation using a secure HTTPS link.'; return; }
    const current = ++request;
    submit.disabled = true;
    dialog.setAttribute('aria-busy', 'true');
    status.textContent = 'A moment. The seal is breaking…';
    try {
      const location = await decryptLocation(encryptedLocation, password);
      if (current !== request) return;
      address.textContent = location.address;
      directions.href = location.directions;
      details.hidden = false;
      placeholder.hidden = true;
      status.textContent = '';
      dialog.close();
      onUnlock();
    } catch {
      if (current !== request) return;
      status.textContent = 'The seal holds. Check your secret words and try again.';
      input.focus({preventScroll: true});
    } finally {
      if (current === request) { submit.disabled = false; dialog.removeAttribute('aria-busy'); }
    }
  });
  // Neither the password nor the decrypted location is stored in browser storage or URLs.
  window.addEventListener('pagehide', relock);
  window.addEventListener('hashchange', () => { if (location.hash.startsWith('#inspo/')) relock(); });
}
