import { assetUrl } from './assets.js';

// Thirty adult costume concepts, each with female and male styling.
export const costumeIdeas = [
  ['Vampire countess','Vampire count','A velvet dress, lace gloves and a crimson lip.','An open-collar shirt, velvet jacket and dark trousers.','Fangs, pale makeup and a tiny trail of blood.'],
  ['A devil after dark','A devil after dark','A red dress or bodysuit, sheer tights and boots.','A red or black suit with an open shirt.','Small horns, smoky eyes and a wicked red detail.'],
  ['The haunted bride','The runaway groom','An ivory slip dress, a torn veil and dark flowers.','A rumpled suit, a loosened tie and a dead rose.','Smudged eyes and a little fake blood on the collar.'],
  ['Midnight witch','Midnight warlock','A black corset, flowing skirt and silver jewellery.','A dark shirt, long coat and silver rings.','Kohl eyes, a spellbook and a mysterious pendant.'],
  ['The lace ghost','The silk ghost','A pale lace dress with flowing sleeves.','An ivory shirt, pale trousers and a loose scarf.','Pale makeup and dark, hollow eyes.'],
  ['Fallen angel','Fallen angel','A black slip dress, harness details and dark wings.','A black vest, trousers and dark wings.','A broken halo and smudged silver eyeliner.'],
  ['Black widow','Spider lord','A fitted black dress, fishnets and long gloves.','A black suit with a silver chain across the chest.','Web-like eyeliner and a spider brooch.'],
  ['The masked phantom','The masked phantom','A dramatic gown with a lace half-mask.','A white shirt, black cape and a half-mask.','One hidden eye, a black rose and theatrical poise.'],
  ['The cursed pirate','The cursed pirate','A lace-up top, leather trousers and a waist sash.','An open white shirt, dark trousers and a waist sash.','Kohl eyes, tarnished jewellery and a haunted stare.'],
  ['Queen of the underworld','King of the underworld','A long black dress with a high slit and metal accents.','A dark tailored suit with a dramatic cape.','A dark crown and deep burgundy eye makeup.'],
  ['Medusa','The gorgon','A draped green dress and gold jewellery.','A green or black shirt with draped gold details.','A snake headpiece and metallic green eye makeup.'],
  ['The fortune teller','The fortune teller','A velvet skirt, fitted top and layered necklaces.','A dark shirt, velvet waistcoat and stacked rings.','Tarot cards, smoky eyes and an impossible prediction.'],
  ['Lady Death','The reaper','A black hooded dress with a striking belt.','A long black coat over a fitted dark outfit.','A skeletal half-face and a dark hood.'],
  ['Dark fairy','Dark fae','A sheer-layered dress and lace-up boots.','A fitted black shirt, leather trousers and boots.','Black wings, pointed ears and silver freckles.'],
  ['Undead rock star','Undead rock star','A leather skirt or trousers and a ripped band tee.','Leather trousers and a ripped or open shirt.','Smudged eyeliner, fake tattoos and a bite mark.'],
  ['Vampire hunter','Vampire hunter','A corset, leather trousers and a long coat.','A dark shirt, harness and a long leather-look coat.','A silver cross, boots and a wooden prop stake.'],
  ['Zombie prom queen','Zombie prom king','A ruined party dress, sash and tiara.','A dishevelled dinner jacket and a crooked bow tie.','Pale skin, bruised eye makeup and a dead corsage.'],
  ['The awakened mummy','The awakened mummy','An ivory fitted outfit with loosely wrapped fabric.','An ivory shirt and trousers with loose fabric wraps.','Weathered makeup and dark eyes peeking through.'],
  ['Dancing skeleton','Dancing skeleton','A black bodysuit or dress with painted bones.','A fitted black outfit with painted bones.','A skeleton face, silver highlights and a little glitter.'],
  ['The silent slasher','The silent slasher','A sleek black outfit, boots and a white mask.','A dark jumpsuit or black shirt and trousers.','A blank mask and a harmless theatrical prop.'],
  ['The cursed duchess','The cursed duke','A satin dress, choker and dramatic gloves.','A brocade waistcoat, white shirt and dark trousers.','A cracked porcelain face and an antique cameo.'],
  ['The headless rider','The headless horseman','A fitted riding jacket, tall boots and a cape.','A dark riding coat, tall boots and a cape.','A pumpkin tucked under your arm and a haunted look.'],
  ['The plague doctor','The plague doctor','A belted black dress or coat with long gloves.','A tailored black coat with leather-look gloves.','A beaked mask and a wide-brimmed hat.'],
  ['The potion mistress','The potion master','A fitted dark outfit and a dramatic apron.','A rolled-sleeve shirt, waistcoat and dark apron.','Little labelled potion bottles and a stained fingertip.'],
  ['Crimson enchantress','The big bad wolf','A red cape over a black dress and boots.','A black shirt, faux-fur collar and dark trousers.','A ruby lip, deep red hood and an enchanted stare.','Wolf ears, sharp teeth and wild hair.'],
  ['Sea witch','The drowned captain','A dark green dress with pearly, sea-worn jewellery.','A dark jacket, striped shirt and battered captain’s hat.','Wet-look hair, smudged eyes and a sea-green complexion.'],
  ['Raven sorceress','Raven prince','A feather-trimmed dress or a sleek black jumpsuit.','An all-black outfit with a feathered collar.','A raven brooch and sharp, winged black eyeliner.'],
  ['Morticia Addams','Gomez Addams','A long fitted black dress and sleek centre-parted hair.','A pinstripe suit, narrow tie and slicked-back hair.','A pale face, a crimson lip and a single dark rose.','A fine moustache, dramatic brows and a rose.'],
  ['The possessed nun','The possessed priest','A black dress, white collar and a flowing veil.','A black shirt, white collar and a long dark coat.','Smudged eyes, a cracked cross and a truly unnerving smile.'],
  ['The gothic ringmaster','The gothic ringmaster','A fitted red jacket, black shorts or trousers and boots.','A red tailcoat, black waistcoat and fitted trousers.','A top hat, dark eye makeup and a sinister welcome.'],
];

const die = (side) => {
  const left = side==='left';
  const viewBox = left?'120 185 750 780':'800 30 650 740';
  const outline = left?'M141 463 481 204 815 420 850 765 511 951 249 811Z':'M818 224 1152 51 1430 414 1302 665 1138 750 830 538Z';
  return `<span class="dice-scene"><span class="die"><svg class="spooky-die" viewBox="${viewBox}" aria-hidden="true"><defs><clipPath id="dice-${side}"><path d="${outline}"/></clipPath></defs><image href="${assetUrl('/images/blood-red-dice.webp')}" width="1536" height="1024" clip-path="url(#dice-${side})"/></svg></span></span>`;
};

export const costumeGameMarkup = () => `
  <section class="costume-game" aria-label="Costume dice game">
    <div class="costume-switch" role="group" aria-label="Costume styling">
      <button type="button" data-costume-gender="female" aria-pressed="true" aria-controls="costume-result">Female</button>
      <button type="button" data-costume-gender="male" aria-pressed="false" aria-controls="costume-result">Male</button>
    </div>
    <p class="costume-promise">30 alter egos. Spooky, sexy, a little dramatic.</p>
    <button class="roll-costume" type="button"><span class="dice-pair" aria-hidden="true">${die('left')}${die('right')}</span><span class="roll-label">Roll the dice</span></button>
    <div id="costume-result" class="costume-result" role="status" aria-live="polite" aria-atomic="true" aria-busy="false">
      <span class="costume-star" aria-hidden="true">✦</span><h2>Your alter ego awaits.</h2><p>Pick your styling. Let fate dress you.</p>
    </div>
    <p class="costume-counter">A different idea with every roll.</p>
  </section>`;

const state = {gender:'female',decks:{female:[],male:[]},last:{female:null,male:null}};

function nextCostume(gender) {
  const deck = state.decks[gender];
  if (!deck.length) {
    deck.push(...costumeIdeas.map((_,index)=>index));
    for (let i=deck.length-1;i>0;i--) {
      const j=Math.floor(Math.random()*(i+1));
      [deck[i],deck[j]]=[deck[j],deck[i]];
    }
    // A fresh round never starts with the previous round’s final costume.
    if (deck.at(-1) === state.last[gender]) [deck[0],deck[deck.length-1]]=[deck.at(-1),deck[0]];
  }
  const index = deck.pop();
  state.last[gender] = index;
  return {idea:costumeIdeas[index],seen:costumeIdeas.length-deck.length};
}

export function setupCostumeGame(root) {
  const switches = [...root.querySelectorAll('[data-costume-gender]')];
  const button = root.querySelector('.roll-costume');
  const result = root.querySelector('.costume-result');
  const counter = root.querySelector('.costume-counter');
  const label = root.querySelector('.roll-label');
  const dice = [...root.querySelectorAll('.die')];
  let timer;
  const setSwitches = () => switches.forEach(item=>item.setAttribute('aria-pressed',String(item.dataset.costumeGender===state.gender)));
  setSwitches();

  switches.forEach(item=>item.addEventListener('click',()=>{
    if (item.dataset.costumeGender===state.gender) return;
    state.gender=item.dataset.costumeGender;
    setSwitches();
    result.innerHTML='<span class="costume-star" aria-hidden="true">✦</span><h2>A new disguise?</h2><p>Roll for your next alter ego.</p>';
    counter.textContent='A different idea with every roll.';
    label.textContent='Roll the dice';
  }));

  button.addEventListener('click',()=>{
    if (button.disabled) return;
    button.disabled=true;
    switches.forEach(item=>item.disabled=true);
    result.setAttribute('aria-busy','true');
    label.textContent='Summoning your alter ego…';
    button.classList.add('is-rolling');
    const finish = () => {
      const {idea,seen}=nextCostume(state.gender);
      const male=state.gender==='male';
      result.innerHTML=`<span class="costume-star" aria-hidden="true">✦</span><h2>${idea[male?1:0]}</h2><p class="costume-look">${idea[male?3:2]}</p><p class="costume-detail"><span>Make it haunting</span>${idea[male&&idea[5]?5:4]}</p>`;
      counter.textContent=`${seen} of 30 revealed · ${male?'Male':'Female'} styling`;
      dice.forEach(item=>{
        item.style.setProperty('--dice-angle',`${Math.floor(Math.random()*21)-10}deg`);
      });
      button.classList.remove('is-rolling');
      button.disabled=false;
      switches.forEach(item=>item.disabled=false);
      result.setAttribute('aria-busy','false');
      label.textContent='Roll again';
      const bounds = result.getBoundingClientRect();
      if (root.isConnected && (bounds.bottom > innerHeight-16 || bounds.top < 0)) result.scrollIntoView({block:'nearest',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
    };
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) finish();
    else timer=setTimeout(finish,780);
  });
  return () => clearTimeout(timer);
}
