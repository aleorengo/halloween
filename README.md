# The Witching Hour

A mobile-first Halloween invitation with photographic crimson stationery, black letterpress type, a distressed gothic headline inspired by the supplied Nocturne reference, and an antique silver botanical frame. The complete top arch retains its proportions; the side vines repeat seamlessly and stay outside the party components.

A subtle aged charcoal paper texture covers the page. The headline has a readable gothic capital A and uneven ink coverage to give it a worn printed finish.

The tray stays fixed while the seal releases, the flap opens, and the paper slides out. The opening waits for the photos and fonts, supports replay, and respects reduced-motion preferences.

The date and time appear once, printed directly into the paper photograph, with an accessible text equivalent. The address and directions link sit beside it. Three short components cover cocktails, costumes, and games, using the supplied cocktail and costume photos and a muted tarot photograph. There is no calendar button.

Each ritual opens a mobile-first inspiration page. The cocktail collage uses the supplied references, with their screenshot interface cropped out in the layout, faded colour, worn paper borders and folded or broken corners. General tips cover colour, edible glitter, syrup and candy garnishes. Guests bring ingredients to assemble their drinks here.

The costume page has animated photographic ruby dice, female/male styling and 30 costume ideas per option. Every idea has a matching partner revealed with the couple-version button. The dice are optional inspiration; guests can bring their own costume ideas. A shuffled deck gives every idea once before repeating; controls pause while rolling and reduced motion reveals the result immediately. Nine expandable Halloween games include setup and rules. Category links, browser history and a return link support navigation without replaying the invitation.

```sh
npm install
npm run dev
```

`npm run build` creates the static site in `dist/`. Generated assets and prompts are documented in `assets/image-generation.md`.

The invitation is hosted on GitHub Pages at https://aleorengo.github.io/halloween/. Pushing to `main` runs `.github/workflows/pages.yml`, builds the site for its Pages path, and publishes `dist/`. Local builds use relative asset paths so the same output also works under a subdirectory.
