# The Witching Hour

A mobile-first Halloween invitation with photographic crimson stationery, black letterpress type, a distressed gothic headline inspired by the supplied Nocturne reference, and an antique silver botanical frame. The complete top arch retains its proportions on phones; a smaller, contoured crest sits independently above the desktop content. The side vines repeat seamlessly and stay outside the party components. Ritual links use red SVG arrows on every device.

A subtle aged charcoal paper texture covers the page. The headline has a readable gothic capital A and uneven ink coverage to give it a worn printed finish.

The invitation stays sealed until a guest taps the wax seal and enters the privately shared six-word passphrase in an engraved silver gothic doorway. Its crown and threshold retain their proportions, and the columns repeat at their native scale as the form grows. Successful decryption opens the flap and slides out the invitation while revealing centered directions and the address in place of the private-gathering label. The tray stays fixed throughout. The opening waits for the photos and fonts, supports replay, and respects reduced-motion preferences. “Seal it again” removes the decrypted location and requires the passphrase again.

The date and time appear once, printed directly into the paper photograph, with an accessible text equivalent. The location and directions link are encrypted and revealed only after a guest enters the privately shared invitation password. Three short components cover cocktails, costumes, and games, using the supplied cocktail and costume photos and a muted tarot photograph. There is no calendar button.

Each ritual opens a mobile-first inspiration page. The cocktail collage uses the supplied references, with their screenshot interface cropped out in the layout, faded colour, worn paper borders and folded or broken corners. General tips cover colour, edible glitter, syrup and candy garnishes. Guests bring ingredients to assemble their drinks here.

The costume page has animated photographic ruby dice, female/male styling and 30 costume ideas per option. Every idea has a matching partner revealed with the couple-version button. The dice are optional inspiration; guests can bring their own costume ideas. A shuffled deck gives every idea once before repeating; controls pause while rolling and reduced motion reveals the result immediately. Nine expandable Halloween games include setup and rules. Category links, browser history and a return link support navigation without replaying the invitation.

```sh
npm install
npm run dev
```

`npm run build` creates the static site in `dist/`. Generated assets and prompts are documented in `assets/image-generation.md`.

The invitation is hosted on GitHub Pages at https://aleorengo.github.io/halloween/. Pushing to `main` runs `.github/workflows/pages.yml`, builds the site for its Pages path, and publishes `dist/`. Local builds use relative asset paths so the same output also works under a subdirectory.

Static Open Graph metadata and a compressed 1200 × 630 [preview image](public/images/share-preview.jpg) support shared-link previews without running JavaScript. The preview contains only public invitation artwork and the date, never the address, map URL or passphrase. Its capture is documented in [assets/share-preview-capture.md](assets/share-preview-capture.md).

## Private location

Only `src/location.encrypted.json` is published. It contains AES-256-GCM ciphertext, a random salt and IV. The key is derived with PBKDF2-HMAC-SHA-256 (600,000 iterations). The randomly generated invitation password must be shared separately; it is never included in the site, URL, browser storage, or repository. Guests can hide the decrypted address again; leaving the page clears it too.

To change the location or rotate the password, keep a JSON file with `address` and `directions` fields and a password file **outside this repository**. Use a new password file path to generate a fresh six-word passphrase. Words are selected independently using Node's cryptographic random generator from [EFF's Long Wordlist](https://www.eff.org/dice); the word list is public, but the chosen passphrase stays private:

```sh
npm run encrypt-location -- /private/location.json /private/password.txt
npm test
npm run build -- --base=/halloween/
```

Commit only the updated ciphertext. Never commit private input files or passwords. Anyone with the password can read and share the location. Existing downloaded copies and historical GitHub references require separate cleanup; encryption cannot retract previously published information.
