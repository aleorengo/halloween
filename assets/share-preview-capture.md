# Link preview image

`public/images/share-preview.jpg` is a 1200 × 630 JPEG exported from a native T3 browser capture of the site's public artwork. It shows the gothic title, silver frame and photographic invitation. No password was entered, and no location was decrypted or rendered during capture.

Capture viewport: 1200 × 630. Images and fonts were decoded before capture. The paper's public date photograph was shown by setting the envelope's presentation state to `opened` in the temporary capture tab; this did not run decryption or change the production opening flow. Rituals, footer, replay and seal hint were hidden for the image. The standalone bottom crest was also hidden. The capture was resized and encoded as JPEG for sharing.

Temporary presentation CSS:

```css
*{animation:none!important;transition:none!important}
.rituals,footer,.seal-hint,.replay,.location-lock,.frame-crest-bottom{display:none!important}
.header{padding-block:20px}
.invite{padding-block:20px;width:calc(100% - 150px)}
.hero{min-height:465px}
.hero-copy h1{max-width:435px}
.letter-stage{max-width:440px;margin-bottom:0}
.event-details{padding-bottom:12px}
.desktop-crest{width:360px;opacity:.64}
.grain{opacity:.025}
```
