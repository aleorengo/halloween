import { costumeGameMarkup, setupCostumeGame } from './costumes.js';
import { assetUrl } from './assets.js';

const photo = (src, alt, size, crop) => {
  src = assetUrl(src);
  if (!crop) return `<div class="inspo-photo"><img src="${src}" alt="${alt}" loading="lazy"/></div>`;
  const [width] = size;
  const [x, y, w, h] = crop;
  return `<div class="inspo-photo inspo-crop" style="aspect-ratio:${w}/${h}"><img src="${src}" alt="${alt}" loading="lazy" style="width:${width / w * 100}%;left:${-x / w * 100}%;top:${-y / h * 100}%"/></div>`;
};

const drinks = [
  {src:'cherry',alt:'Dark cherry cocktails in coupe glasses',size:[486,720],crop:[18,35,441,635]},
  {src:'eyeball',alt:'A martini with an eyeball garnish beside a red candle',size:[504,872],crop:[29,162,445,600]},
  {src:'spider-blood',alt:'A lime green cocktail with a black rim and spider decorations',size:[1010,820],crop:[24,30,461,672]},
  {src:'spider-blood',alt:'Ruby red cocktails with dripping red syrup around the rims',size:[1010,820],crop:[540,130,449,650]},
  {src:'martinis',alt:'A clear martini with two eyeball garnishes',size:[1552,876],crop:[540,294,455,550]},
  {src:'martinis',alt:'A red cocktail with an eyeball garnish against crimson curtains',size:[1552,876],crop:[1052,252,455,558]},
];

const pages = {
  cocktails:{label:'Cocktails',title:'Something wicked to sip.',intro:'Bring your ingredients and assemble your cocktail here. With or without alcohol.',body:()=>`
    <div class="cocktail-notes"><p class="cocktail-note-intro">A little theatre goes a long way.</p><ul>
      <li><strong>Change the colour.</strong> A little food colouring, berry juice or a poison-green twist.</li>
      <li><strong>Make it shimmer.</strong> Edible cocktail glitter or a sparkling sugar rim.</li>
      <li><strong>Add a drip of blood.</strong> Raspberry syrup or grenadine, dripping down the glass.</li>
      <li><strong>Give it a haunting garnish.</strong> Candy eyes, chocolate spiders, gummy worms or a black liquorice stirrer.</li>
    </ul></div>
    <div class="cocktail-collage" aria-label="Halloween cocktail moodboard">${drinks.map(drink=>`<figure class="collage-print">${photo(`/images/cocktail-inspo-${drink.src}.webp`,drink.alt,drink.size,drink.crop)}</figure>`).join('')}</div>`},
  costumes:{label:'Costumes',title:'Let fate dress you.',intro:'A Halloween costume is a must. Roll for a dark, daring disguise.',body:costumeGameMarkup},
  games:{label:'Games',title:'A little mischief.',intro:'Choose your kind of chaos. Bring a game, or come ready to start one.',body:()=>`
    <div class="party-games">${games.map(game=>`<details class="party-game" name="party-game"><summary><span><span class="game-title">${game.name}</span><span class="game-teaser">${game.teaser}</span></span><span class="game-plus" aria-hidden="true">+</span></summary><div class="game-instructions"><p class="game-meta">${game.players} · ${game.props}</p><p><strong>Set the scene.</strong> ${game.setup}</p><p><strong>How to play.</strong> ${game.play}</p></div></details>`).join('')}</div>
    <p class="inspo-tip"><span>✦</span> The best game is the one everyone gets into.</p>`},
};

const games = [
  {name:'Murder by moonlight',teaser:'One killer. A room full of suspects.',players:'5+ people',props:'Paper slips',setup:'Hand out folded slips: one says killer, the rest say guest. Keep your role secret.',play:'Mingle and make eye contact. The killer eliminates guests with a wink; victims wait a few seconds, then perform a dramatic death. Spot the killer before everyone falls.'},
  {name:'The secret coven',teaser:'Your charming friend might be a werewolf.',players:'7+ people',props:'Role slips',setup:'Choose a storyteller. Secretly assign two werewolves, one seer and the remaining villagers.',play:'At night everyone closes their eyes. The storyteller wakes the wolves to choose a victim, then the seer to check one player’s role. By day, everyone debates and votes out a suspect. Villagers win if both wolves are caught; wolves win when they match the villagers in number.'},
  {name:'Secret hexes',teaser:'Complete your curse without getting caught.',players:'4+ people',props:'Mission slips',setup:'Give each guest a secret mission: get someone to howl, convince them you’re 300 years old, or make three people say “blood”.',play:'Work your mission into the evening. When you succeed, reveal your hex. Anyone who suspects a mission can accuse you; if they name it correctly, your spell is broken.'},
  {name:'Trick or dare',teaser:'Pick a card. Meet your fate.',players:'3+ people',props:'A bowl of dare slips',setup:'Write little dares: perform a villain’s laugh, do a haunted catwalk, or deliver a dramatic vampire confession.',play:'Take turns drawing a dare. Perform it, or invent an equally theatrical challenge for yourself. Let the room choose its favourite performance.'},
  {name:'Séance of lies',teaser:'Two strange truths. One beautiful lie.',players:'3+ people',props:'Nothing',setup:'Think of two real, strange things that happened to you and one invented tale.',play:'Tell all three as if they’re true. Everyone votes for the invented story. Give your most convincing ghost-story voice, then reveal what really happened.'},
  {name:'Possessed charades',teaser:'Something has taken over the toaster.',players:'4+ people',props:'Prompt slips and a timer',setup:'Write absurd prompts: a possessed toaster, a vampire at the dentist, a ghost stuck in a lift, a witch on a dating app.',play:'Split into teams. Act out a prompt without speaking; your team gets one minute to guess. The stranger the performance, the better.'},
  {name:'Whispers from beyond',teaser:'A haunting message gets very confused.',players:'5+ people',props:'Nothing',setup:'Sit in a circle. The first person invents a creepy sentence full of ridiculous detail.',play:'Whisper it once to the next person. Pass it around without repeating. The last guest announces the message in a dramatic voice, then compare it with the original.'},
  {name:'The cursed object hunt',teaser:'Find the relics before the spell is sealed.',players:'4+ people',props:'Small objects or paper symbols',setup:'Hide five “cursed relics” around the room and write a short riddle for each hiding place.',play:'Give pairs or teams the riddles and ten minutes to find the relics. Each discovery needs a dramatic story explaining its curse. Most relics wins; best curse gets a bonus point.'},
  {name:'The final scream',teaser:'A horror scene with the wrong soundtrack.',players:'4+ people',props:'A phone with a muted horror clip',setup:'Choose a short horror-film scene and mute it. Assign the characters to two or three guests.',play:'The guests improvise the dialogue and sound effects live while the clip plays. Swap the cast and do it again. Vote for the funniest, creepiest or most chaotic version.'},
];

export function setupInspiration({onLeaveInvite}) {
  const invite = document.querySelector('.invite');
  const inspiration = document.querySelector('.inspiration');
  const originalTitle = document.title;
  let currentPage = null;
  let returnScroll = 0;
  let returnLink = null;
  let cleanupPage = () => {};

  document.querySelectorAll('[data-ritual]').forEach(link=>link.addEventListener('click',()=>{
    returnScroll = scrollY;
    returnLink = link;
  }));

  function renderRoute(initial = false) {
    cleanupPage();
    cleanupPage = () => {};
    const key = location.hash.match(/^#inspo\/(cocktails|costumes|games)$/)?.[1];
    const page = pages[key];
    if (page) {
      if (!currentPage) onLeaveInvite();
      currentPage = key;
      invite.hidden = true;
      inspiration.hidden = false;
      inspiration.innerHTML = `
        <a class="inspo-back" href="#rituals"><span aria-hidden="true">←</span> Back to the invite</a>
        <nav class="inspo-tabs" aria-label="Ritual inspiration">${Object.entries(pages).map(([route,item])=>`<a href="#inspo/${route}" ${key===route?'aria-current="page"':''}>${item.label}</a>`).join('')}</nav>
        <div class="inspo-heading"><p class="eyebrow">A LITTLE INSPIRATION</p><h1 id="inspiration-title" tabindex="-1">${page.title}</h1><p>${page.intro}</p></div>
        <div class="inspo-content">${page.body()}</div>
        <a class="inspo-back inspo-back-bottom" href="#rituals"><span aria-hidden="true">←</span> Back to the invite</a>`;
      if (key === 'costumes') cleanupPage = setupCostumeGame(inspiration);
      document.title = `${page.label} inspiration · The Witching Hour`;
      scrollTo(0,0);
      if (!initial) document.querySelector('#inspiration-title').focus({preventScroll:true});
    } else {
      const wasInspiration = !!currentPage;
      currentPage = null;
      inspiration.hidden = true;
      invite.hidden = false;
      document.title = originalTitle;
      if (wasInspiration) requestAnimationFrame(()=>{
        if (location.hash === '#rituals' || !location.hash) {
          if (returnLink) { scrollTo(0,returnScroll); returnLink.focus({preventScroll:true}); }
          else document.querySelector('#rituals').scrollIntoView({block:'start'});
        } else scrollTo(0,0);
      });
    }
  }
  addEventListener('hashchange',()=>renderRoute());
  renderRoute(true);
}
