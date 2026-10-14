import './style.css';
import { setupInspiration } from './inspiration.js';
import { assetMarkup, assetUrl } from './assets.js';
import { setupLocation } from './location.js';

const icons = {
  arrow:'<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" stroke="currentColor" stroke-width="1.5"/></svg>',
  pin:'<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" stroke="currentColor" stroke-width="1.4"/><circle cx="12" cy="10" r="2" stroke="currentColor" stroke-width="1.4"/></svg>',
  replay:'<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 10a8 8 0 1 1 1 7M4 4v6h6" stroke="currentColor" stroke-width="1.4"/></svg>',
};
document.querySelector('#app').innerHTML = assetMarkup(`
  <div class="grain" aria-hidden="true"></div>
  <div class="page-frame" aria-hidden="true"></div>
  <div class="frame-rails" aria-hidden="true"></div>
  <svg class="frame-arch" viewBox="0 0 1024 540" aria-hidden="true"><image href="/images/silver-botanical-frame.webp" width="1024" height="1536"/></svg>
  <svg class="desktop-crest" viewBox="0 0 1024 350" aria-hidden="true">
    <defs><clipPath id="desktop-crest-shape"><path d="M0 0H1024V240H930C925 270 908 300 871 320C833 346 783 332 754 303C731 282 720 258 715 236H660V220H364V220H309V236C304 258 293 282 270 303C240 332 190 346 153 320C116 300 99 270 94 240H0Z"/></clipPath></defs>
    <image href="/images/silver-botanical-frame.webp" width="1024" height="1536" clip-path="url(#desktop-crest-shape)"/>
  </svg>
  <svg class="frame-body" viewBox="0 116 1024 1536" preserveAspectRatio="none" aria-hidden="true">
    <defs>
      <clipPath id="vine-segment"><rect width="1024" height="768"/></clipPath>
      <pattern id="continuous-vines" width="1024" height="1536" patternUnits="userSpaceOnUse">
        <g clip-path="url(#vine-segment)"><image href="/images/silver-botanical-frame.webp" y="-384" width="1024" height="1536"/></g>
        <g transform="translate(0 1536) scale(1 -1)"><g clip-path="url(#vine-segment)"><image href="/images/silver-botanical-frame.webp" y="-384" width="1024" height="1536"/></g></g>
      </pattern>
      <mask id="vine-edges" maskUnits="userSpaceOnUse" x="0" y="0" width="1024" height="10000"><rect width="180" height="10000" fill="white"/><rect x="844" width="180" height="10000" fill="white"/></mask>
    </defs>
    <rect width="1024" height="10000" fill="url(#continuous-vines)" mask="url(#vine-edges)"/>
  </svg>
  <div class="frame-crest frame-crest-top" aria-hidden="true"></div>
  <div class="frame-crest frame-crest-bottom" aria-hidden="true"></div>
  <header class="header"><a href="#" class="wordmark"><span>THE WITCHING HOUR</span></a><span class="header-note">AFTER DARK <i>✦</i> BARCELONA</span></header>
  <main class="invite">
    <section class="hero" aria-labelledby="invite-title">
      <div class="hero-copy">
        <p class="eyebrow entrance">A HALLOWEEN GATHERING</p>
        <h1 id="invite-title" class="entrance"><span class="headline-copy">A wicked little night.</span><svg class="headline-lettering" viewBox="102 79 1453 861" aria-hidden="true">
          <defs>
            <filter id="headline-ink" x="-2%" y="-2%" width="104%" height="104%" color-interpolation-filters="sRGB">
              <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 1 0"/>
              <feComponentTransfer><feFuncR type="discrete" tableValues="0 0 1 1"/><feFuncG type="discrete" tableValues="0 0 1 1"/><feFuncB type="discrete" tableValues="0 0 1 1"/></feComponentTransfer>
              <feColorMatrix type="matrix" values=".204 0 0 0 .706 .639 0 0 0 .231 .518 0 0 0 .286 0 0 0 1 0" result="clean-ink"/>
              <feMorphology in="SourceAlpha" operator="erode" radius="1.5" result="ink-interior"/>
              <feComposite in="SourceAlpha" in2="ink-interior" operator="arithmetic" k2=".55" k3=".45" result="soft-edges"/>
              <feComposite in="clean-ink" in2="soft-edges" operator="in" result="edge-faded-ink"/>
              <feTurbulence type="fractalNoise" baseFrequency=".34 .39" numOctaves="3" seed="12" stitchTiles="stitch" result="paper-tooth"/>
              <feColorMatrix in="paper-tooth" type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 .5 .5 .5 0 0" result="ink-coverage"/>
              <feComposite in="edge-faded-ink" in2="ink-coverage" operator="in"/>
            </filter>
          </defs>
          <image href="/images/headline-worn-gothic-readable.webp" width="1632" height="964" filter="url(#headline-ink)"/>
        </svg></h1>
      </div>
      <div class="letter-stage" data-state="closed" aria-busy="true">
        <div class="envelope-photo">
          <svg class="envelope-scene" viewBox="0 115 768 768" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <clipPath id="photo-frame"><rect x="0" y="115" width="768" height="768"/></clipPath>
              <clipPath id="paper-shape"><path d="M157 276H612V420L441 570H320L157 420Z"/></clipPath>
              <mask id="envelope-front" maskUnits="userSpaceOnUse" x="0" y="0" width="768" height="1024">
                <rect width="768" height="1024" fill="white"/>
                <path d="M156 272H613V421L441 571H319L156 421Z" fill="black"/>
              </mask>
            </defs>
            <g clip-path="url(#photo-frame)">
              <image class="photo-underlay" href="/images/envelope-empty-photographic.webp" x="-768" y="0" width="1536" height="1024" aria-hidden="true"/>
              <g class="photo-paper" aria-hidden="true">
                <image class="printed-paper" href="/images/envelope-letterpress-simple.webp" x="-768" y="0" width="1536" height="1024" clip-path="url(#paper-shape)" aria-hidden="true"/>
                <foreignObject x="157" y="276" width="455" height="294">
                  <div xmlns="http://www.w3.org/1999/xhtml" class="letter-print letter-copy-accessible">
                    <p class="letter-heading silver-emboss">You’re invited</p>
                    <p id="invitation-date" class="letter-date silver-emboss">25 <span>Oct</span></p>
                    <p class="letter-time silver-emboss"><span>Sunday</span><span class="time-divider" aria-hidden="true">·</span><span>19.30</span></p>
                  </div>
                </foreignObject>
              </g>
              <image class="photo-front" href="/images/envelope-photographic.webp" x="-768" y="0" width="1536" height="1024" mask="url(#envelope-front)" aria-hidden="true"/>
              <image class="closed-tray" href="/images/envelope-sealed-tray.webp" x="138" y="152" width="494" height="218" aria-hidden="true"/>
            </g>
          </svg>
          <div class="photo-flap" aria-hidden="true">
            <div class="flap-face flap-outside"><svg viewBox="0 115 768 768" xmlns="http://www.w3.org/2000/svg">
              <image href="/images/envelope-sealed-flap.webp" x="122" y="360" width="528" height="336"/>
            </svg></div>
            <div class="flap-face flap-inside"><svg viewBox="0 115 768 768" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <clipPath id="open-flap-shape"><path d="M384 162 145 370H624Z"/></clipPath>
                <mask id="open-flap-front" maskUnits="userSpaceOnUse" x="0" y="0" width="768" height="1024"><rect width="768" height="1024" fill="white"/><path d="M156 272H613V421L441 571H319L156 421Z" fill="black"/></mask>
              </defs>
              <g clip-path="url(#open-flap-shape)">
                <image href="/images/envelope-empty-photographic.webp" x="-768" width="1536" height="1024"/>
                <image href="/images/envelope-photographic.webp" x="-768" width="1536" height="1024" mask="url(#open-flap-front)"/>
              </g>
            </svg></div>
          </div>
        </div>
        <button class="open-seal" aria-label="Unlock your Halloween invitation" aria-controls="seal-dialog" disabled></button>
        <button class="seal-hint" type="button" aria-controls="seal-dialog" disabled>Tap the seal to open</button>
        <button class="replay" aria-label="Replay the envelope opening animation" disabled>${icons.replay}<span>OPEN IT AGAIN</span></button>
      </div>
      <div class="event-details entrance"><p class="event-address">A private gathering</p><p class="event-city">BARCELONA</p></div>
      <div class="actions entrance">
        <div class="location-control">
            <div class="location-details" hidden>
              <p class="unlocked-address"></p>
              <a class="directions" target="_blank" rel="noopener noreferrer">${icons.pin} Get directions ${icons.arrow}</a>
              <button class="location-lock" type="button">Seal it again</button>
            </div>
        </div>
      </div>
    </section>
    <section id="rituals" class="rituals" aria-label="Three things for the party">
      <div class="ritual-header"><p>THREE LITTLE RITUALS</p><span>✦</span></div>
      <div class="ritual-grid">
        <a class="ritual entrance" href="#inspo/cocktails" data-ritual="cocktails" aria-label="Cocktail inspiration"><div class="ritual-image"><img src="/images/cocktails.webp" alt="Amber and red Halloween cocktails"/></div><div class="ritual-copy"><h2>A Halloween <em>cocktail.</em></h2><p>Bring ingredients to mix here.</p></div><span class="ritual-arrow" aria-hidden="true">${icons.arrow}</span></a>
        <a class="ritual entrance" href="#inspo/costumes" data-ritual="costumes" aria-label="Costume inspiration"><div class="ritual-image costume-image"><img src="/images/halloween-costume.webp" alt="A red devil costume casting a dramatic horned shadow"/></div><div class="ritual-copy"><h2>Dress <em>spooky.</em></h2><p>A Halloween costume is a must.</p></div><span class="ritual-arrow" aria-hidden="true">${icons.arrow}</span></a>
        <a class="ritual entrance" href="#inspo/games" data-ritual="games" aria-label="Game inspiration"><div class="ritual-image game-image"><img src="/images/halloween-game-muted.webp" alt="Tarot cards and a crystal ball in muted red light"/></div><div class="ritual-copy"><h2>A wicked <em>game.</em></h2><p>Bring one, or come with an idea.</p></div><span class="ritual-arrow" aria-hidden="true">${icons.arrow}</span></a>
      </div>
      <p class="food-note"><span aria-hidden="true">✦</span><span class="food-copy">There will be food.<br>Come hungry.</span><span aria-hidden="true">✦</span></p>
    </section>
  </main>
  <main class="inspiration" hidden aria-labelledby="inspiration-title"></main>
  <footer><span>ALL SPIRITS WELCOME</span><p>Come for the spirits.<br>Stay for the company.</p><span>✦</span></footer>
  <dialog class="seal-dialog" id="seal-dialog" aria-labelledby="seal-dialog-title" aria-describedby="seal-dialog-description">
    <button class="seal-dialog-close" type="button" aria-label="Close passphrase prompt">×</button>
    <p class="seal-dialog-eyebrow">FOR INVITED SPIRITS</p>
    <span class="seal-dialog-star" aria-hidden="true">✦</span>
    <h2 id="seal-dialog-title">Break the seal.</h2>
    <p id="seal-dialog-description">Six words. One wicked little night.</p>
    <form>
      <label for="location-password">Your secret passphrase</label>
      <input id="location-password" type="password" required autocomplete="off" autocapitalize="none" spellcheck="false" placeholder="The words shared by your host" />
      <button class="location-submit" type="submit">Open my invitation ${icons.arrow}</button>
    </form>
    <p class="location-status" role="status" aria-live="polite"></p>
  </dialog>
`);

const stage = document.querySelector('.letter-stage');
const frameBody = document.querySelector('.frame-body');
new ResizeObserver(() => {
  const {width, height} = frameBody.getBoundingClientRect();
  if (width > 0 && height > 0) frameBody.setAttribute('viewBox', `0 116 1024 ${height * 1024 / width}`);
}).observe(frameBody);
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const replay = document.querySelector('.replay');
const seal = document.querySelector('.open-seal');
const sealHint = document.querySelector('.seal-hint');
let invitationUnlocked = false;
let openingTimer;
let openingFrame;
let restoreReplayFocus = false;

function finishOpening() {
  if (!invitationUnlocked) return;
  clearTimeout(openingTimer);
  cancelAnimationFrame(openingFrame);
  stage.dataset.state = 'opened';
  document.querySelector('.photo-paper').removeAttribute('aria-hidden');
  stage.setAttribute('aria-busy', 'false');
  replay.disabled = false;
  seal.disabled = true;
  if (restoreReplayFocus) replay.focus({preventScroll:true});
  restoreReplayFocus = false;
}

function openEnvelope() {
  if (!invitationUnlocked) return;
  if (stage.dataset.state === 'opening') return;
  clearTimeout(openingTimer);
  cancelAnimationFrame(openingFrame);
  restoreReplayFocus = document.activeElement === replay;
  if (reducedMotion.matches) { finishOpening(); return; }
  replay.disabled = true;
  seal.disabled = true;
  stage.setAttribute('aria-busy', 'true');
  stage.dataset.state = 'closed';
  // Commit a complete closed frame before replaying the photographic layers.
  openingFrame = requestAnimationFrame(() => {
    openingFrame = requestAnimationFrame(() => { stage.dataset.state = 'opening'; });
  });
}
replay.addEventListener('click', openEnvelope);
document.querySelector('.photo-paper').addEventListener('animationend', event => {
  if (event.animationName === 'slidePhotographicPaper') finishOpening();
});
reducedMotion.addEventListener('change', event => { if (event.matches && invitationUnlocked) finishOpening(); });

setupLocation({
  onUnlock: () => { invitationUnlocked = true; stage.classList.add('is-unlocked'); openEnvelope(); },
  onLock: () => {
    invitationUnlocked = false;
    clearTimeout(openingTimer);
    cancelAnimationFrame(openingFrame);
    restoreReplayFocus = false;
    stage.classList.remove('is-unlocked');
    stage.dataset.state = 'closed';
    document.querySelector('.photo-paper').setAttribute('aria-hidden', 'true');
    stage.setAttribute('aria-busy', 'false');
    replay.disabled = true;
    seal.disabled = !stage.classList.contains('is-loaded');
    sealHint.disabled = seal.disabled;
  },
});

const decodePhoto = path => {
  const image = new Image();
  image.src = assetUrl(path);
  return image.decode();
};
const photos = ['envelope-photographic', 'envelope-empty-photographic', 'envelope-sealed-flap', 'envelope-sealed-tray', 'envelope-letterpress-simple', 'headline-worn-gothic-readable'];
// The sealed envelope is layered from several photos, so it stays hidden until all of them can be drawn together.
const revealEnvelope = () => {
  stage.classList.add('is-loaded');
  stage.setAttribute('aria-busy', 'false');
  seal.disabled = false;
  sealHint.disabled = false;
};
Promise.all([...photos.map(name => decodePhoto(`/images/${name}.webp`)), document.fonts.ready]).then(() => {
  revealEnvelope();
  // The invitation stays sealed until the location has been successfully decrypted.
}).catch(revealEnvelope);

setupInspiration({onLeaveInvite:finishOpening});
