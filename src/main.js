import './style.css';
import { setupInspiration } from './inspiration.js';
import { assetMarkup, assetUrl } from './assets.js';

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
              <feColorMatrix type="matrix" values=".353 0 0 0 .557 .725 0 0 0 .145 .616 0 0 0 .188 0 0 0 1 0" result="clean-ink"/>
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
        <div class="event-details entrance"><p class="event-address">[private location removed]</p><p class="event-city">BARCELONA</p></div>
      </div>
      <div class="letter-stage" data-state="closed" aria-busy="true">
        <svg class="envelope-photo" viewBox="0 115 768 768" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <clipPath id="photo-frame"><rect x="0" y="115" width="768" height="768"/></clipPath>
            <clipPath id="paper-shape"><path d="M157 276H612V420L441 570H320L157 420Z"/></clipPath>
            <clipPath id="closed-envelope-shape"><rect x="125" y="331" width="520" height="380"/><path d="M258 277 385 176 511 277Z"/></clipPath>
            <clipPath id="flap-shape"><path d="M131 333H641Q636 357 621 372L385 552 150 373Q134 359 131 333Z"/></clipPath>
            <clipPath id="seal-shape"><ellipse cx="385" cy="545" rx="57" ry="60"/></clipPath>
            <mask id="without-seal" maskUnits="userSpaceOnUse" x="0" y="0" width="768" height="1024"><rect width="768" height="1024" fill="white"/><ellipse cx="385" cy="545" rx="57" ry="60" fill="black"/></mask>
            <mask id="without-closed-flap" maskUnits="userSpaceOnUse" x="0" y="0" width="768" height="1024"><rect width="768" height="1024" fill="white"/><path d="M131 333H641Q636 357 621 372L385 552 150 373Q134 359 131 333Z" fill="black"/><ellipse cx="385" cy="545" rx="57" ry="60" fill="black"/></mask>
            <pattern id="crimson-lining" patternUnits="userSpaceOnUse" width="455" height="76"><image href="/images/envelope-photographic.webp" x="-160" y="-625" width="1536" height="1024"/></pattern>
            <mask id="envelope-front" maskUnits="userSpaceOnUse" x="0" y="0" width="768" height="1024">
              <rect width="768" height="1024" fill="white"/>
              <path d="M156 275H613V421L441 571H319L156 421Z" fill="black"/>
            </mask>
          </defs>
          <g clip-path="url(#photo-frame)">
            <image class="photo-underlay" href="/images/envelope-empty-photographic.webp" x="-768" y="0" width="1536" height="1024" aria-hidden="true"/>
            <g class="photo-paper">
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
            <image class="photo-closed-backdrop" href="/images/envelope-photographic.webp" width="1536" height="1024" aria-hidden="true"/>
            <image class="photo-closed" href="/images/envelope-photographic.webp" x="0" y="0" width="1536" height="1024" clip-path="url(#closed-envelope-shape)" mask="url(#without-closed-flap)" aria-hidden="true"/>
            <g class="photo-flap" clip-path="url(#flap-shape)" aria-hidden="true"><image href="/images/envelope-photographic.webp" x="0" y="0" width="1536" height="1024" mask="url(#without-seal)"/><ellipse cx="385" cy="545" rx="57" ry="60" fill="url(#crimson-lining)"/></g>
            <image class="photo-seal" href="/images/envelope-photographic.webp" x="0" y="0" width="1536" height="1024" clip-path="url(#seal-shape)" aria-hidden="true"/>
          </g>
        </svg>
        <button class="open-seal" aria-label="Open your Halloween invitation" aria-controls="invitation-date"></button>
        <button class="replay" aria-label="Replay the envelope opening animation" disabled>${icons.replay}<span>OPEN IT AGAIN</span></button>
      </div>
      <div class="actions entrance"><a class="directions" href="[private location removed]" target="_blank" rel="noopener noreferrer">${icons.pin} Get directions ${icons.arrow}</a></div>
    </section>
    <section id="rituals" class="rituals" aria-label="Three things for the party">
      <div class="ritual-header"><p>THREE LITTLE RITUALS</p><span>✦</span></div>
      <div class="ritual-grid">
        <a class="ritual entrance" href="#inspo/cocktails" data-ritual="cocktails" aria-label="Cocktail inspiration"><div class="ritual-image"><img src="/images/cocktails.webp" alt="Amber and red Halloween cocktails"/></div><div class="ritual-copy"><h2>A Halloween <em>cocktail.</em></h2><p>Bring ingredients to mix here.<br>With or without alcohol.</p></div></a>
        <a class="ritual entrance" href="#inspo/costumes" data-ritual="costumes" aria-label="Costume inspiration"><div class="ritual-image costume-image"><img src="/images/halloween-costume.webp" alt="A red devil costume casting a dramatic horned shadow"/></div><div class="ritual-copy"><h2>Dress <em>spooky.</em></h2><p>A Halloween costume is a must.</p></div></a>
        <a class="ritual entrance" href="#inspo/games" data-ritual="games" aria-label="Game inspiration"><div class="ritual-image game-image"><img src="/images/halloween-game-muted.webp" alt="Tarot cards and a crystal ball in muted red light"/></div><div class="ritual-copy"><h2>A wicked <em>game.</em></h2><p>Bring one, or come with an idea.</p></div></a>
      </div>
      <p class="food-note"><span>✦</span> There will be food. Come hungry. <span>✦</span></p>
    </section>
  </main>
  <main class="inspiration" hidden aria-labelledby="inspiration-title"></main>
  <footer><span>ALL SPIRITS WELCOME</span><p>Come for the spirits. Stay for the company.</p><span>✦</span></footer>
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
let openingTimer;
let openingFrame;
let restoreReplayFocus = false;

function finishOpening() {
  clearTimeout(openingTimer);
  cancelAnimationFrame(openingFrame);
  stage.dataset.state = 'opened';
  stage.setAttribute('aria-busy', 'false');
  replay.disabled = false;
  seal.disabled = true;
  if (restoreReplayFocus) replay.focus({preventScroll:true});
  restoreReplayFocus = false;
}

function openEnvelope() {
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
seal.addEventListener('click', openEnvelope);
replay.addEventListener('click', openEnvelope);
document.querySelector('.photo-paper').addEventListener('animationend', event => {
  if (event.animationName === 'slidePhotographicPaper') finishOpening();
});
reducedMotion.addEventListener('change', event => { if (event.matches) finishOpening(); });

const photograph = new Image();
photograph.src = assetUrl('/images/envelope-photographic.webp');
const emptyPhotograph = new Image();
emptyPhotograph.src = assetUrl('/images/envelope-empty-photographic.webp');
const printedPhotograph = new Image();
printedPhotograph.src = assetUrl('/images/envelope-letterpress-simple.webp');
const headline = new Image();
headline.src = assetUrl('/images/headline-worn-gothic-readable.webp');
Promise.all([photograph.decode(), emptyPhotograph.decode(), printedPhotograph.decode(), headline.decode(), document.fonts.ready]).then(() => {
  if (reducedMotion.matches) { finishOpening(); return; }
  // Wait for the photo and fonts before showing the sealed opening moment.
  if (stage.dataset.state === 'closed') openingTimer = setTimeout(openEnvelope, 700);
}).catch(finishOpening);

setupInspiration({onLeaveInvite:finishOpening});
