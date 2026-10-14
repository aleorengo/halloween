import encryptedLocation from './location.encrypted.json';
import {decryptLocation} from './location-crypto.js';

export function setupLocation() {
  const panel = document.querySelector('.location-panel');
  const toggle = document.querySelector('.location-toggle');
  const form = panel.querySelector('form');
  const input = panel.querySelector('input');
  const submit = form.querySelector('button');
  const status = panel.querySelector('.location-status');
  const details = panel.querySelector('.location-details');
  const address = details.querySelector('.unlocked-address');
  const directions = details.querySelector('a');
  const lock = panel.querySelector('.location-lock');
  let request = 0;

  const clear = () => {
    request++;
    input.value = '';
    address.textContent = '';
    directions.removeAttribute('href');
    details.hidden = true;
    form.hidden = false;
    submit.disabled = false;
    status.textContent = '';
    panel.removeAttribute('aria-busy');
  };
  const close = () => {
    clear();
    panel.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    if (!panel.hidden) { close(); return; }
    panel.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
    input.focus({preventScroll: true});
    panel.scrollIntoView({block: 'nearest', behavior: 'smooth'});
  });
  lock.addEventListener('click', () => { clear(); input.focus({preventScroll: true}); });
  form.addEventListener('submit', async event => {
    event.preventDefault();
    const password = input.value.trim();
    input.value = '';
    if (!password) { status.textContent = 'Enter the password shared by your host.'; input.focus(); return; }
    if (!crypto?.subtle) { status.textContent = 'Open the invitation using a secure HTTPS link.'; return; }
    const current = ++request;
    submit.disabled = true;
    panel.setAttribute('aria-busy', 'true');
    status.textContent = 'Opening the location…';
    try {
      const location = await decryptLocation(encryptedLocation, password);
      if (current !== request) return;
      address.textContent = location.address;
      directions.href = location.directions;
      form.hidden = true;
      details.hidden = false;
      status.textContent = '';
      lock.focus({preventScroll: true});
    } catch {
      if (current !== request) return;
      status.textContent = 'That password didn’t unlock the location. Try again.';
      input.focus({preventScroll: true});
    } finally {
      if (current === request) { submit.disabled = false; panel.removeAttribute('aria-busy'); }
    }
  });
  panel.addEventListener('keydown', event => { if (event.key === 'Escape') { close(); toggle.focus(); } });
  // Neither the password nor the decrypted location is stored in browser storage or URLs.
  window.addEventListener('pagehide', close);
  window.addEventListener('hashchange', () => { if (location.hash.startsWith('#inspo/')) close(); });
}
