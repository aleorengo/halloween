"""Compose the sealed-envelope layers from the two photographic envelope panels.

The closed (left) and open (right) panels of envelope-photographic.webp show
different envelope bodies, so crossfading between them shows two envelopes.
Instead, the animation keeps the open panel's body throughout and seals it with:

- envelope-sealed-flap.webp: the closed flap, stretched about its hinge so it
  hinges where the open flap does and covers the open pocket, with the wax seal
  moved to its tip and a soft contact shadow.
- envelope-sealed-tray.webp: the tray hidden behind the open flap, taken from
  the closed panel (aligned to the open panel's tray) and stretched down to the
  hinge where the closed envelope covered it. Everywhere else the open panel's
  own tray shows, so the tray never shifts.

Coordinates are in the 768 x 1024 panel space used by the SVG viewBox.

    python3 assets/compose-sealed-envelope.py   # needs Pillow
"""
from pathlib import Path

from PIL import Image, ImageChops, ImageDraw, ImageFilter

IMAGES = Path(__file__).resolve().parent.parent / 'public' / 'images'
PANEL = (768, 1024)

CLOSED_HINGE = 332  # top edge of the closed flap in the left panel
OPEN_HINGE = 366    # base of the open flap in the right panel
FLAP_STRETCH = 1.17  # deepens the flap so it covers the open pocket
SEAL_CENTRE = (385, 545)
SEAL_TARGET = (385, 606)
SEAL_SCALE = 1.1
OPEN_FLAP = [(384, 166), (150, 370), (619, 370)]  # open flap; #open-flap-shape in src/main.js is this, 3 units wider
TRAY_SHIFT = -1  # the closed panel's tray sits 1px right of the open panel's

# Placement of each layer in the panel; mirrored by the x/y attributes in src/main.js.
FLAP_BOX = (122, 360, 650, 696)
TRAY_BOX = (138, 152, 632, 370)


def quadratic(p0, p1, p2, steps=24):
    return [((1 - t) ** 2 * p0[0] + 2 * (1 - t) * t * p1[0] + t * t * p2[0],
             (1 - t) ** 2 * p0[1] + 2 * (1 - t) * t * p1[1] + t * t * p2[1])
            for t in (i / steps for i in range(1, steps + 1))]


def closed_flap_mask():
    # Same outline as the closed flap in the photograph: rounded shoulders and a V to the seal.
    outline = [(131, 332), (641, 332), *quadratic((641, 332), (636, 357), (621, 372)),
               (385, 552), (150, 373), *quadratic((150, 373), (134, 359), (131, 332))]
    mask = Image.new('L', PANEL, 0)
    ImageDraw.Draw(mask).polygon(outline, fill=255)
    return mask


def sealed_flap(closed):
    flap = Image.new('RGBA', PANEL, (0, 0, 0, 0))
    flap.paste(closed, (0, 0), closed_flap_mask())
    # y_closed = CLOSED_HINGE + (y - OPEN_HINGE) / FLAP_STRETCH
    flap = flap.transform(PANEL, Image.AFFINE, (1, 0, 0, 0, 1 / FLAP_STRETCH, CLOSED_HINGE - OPEN_HINGE / FLAP_STRETCH), Image.BICUBIC)

    radius = 70
    cx, cy = SEAL_CENTRE
    seal = closed.crop((cx - radius, cy - radius, cx + radius, cy + radius)).convert('RGBA')
    seal_mask = Image.new('L', seal.size, 0)
    ImageDraw.Draw(seal_mask).ellipse((radius - 62, radius - 65, radius + 62, radius + 65), fill=255)
    seal.putalpha(seal_mask.filter(ImageFilter.GaussianBlur(2)))
    size = round(2 * radius * SEAL_SCALE)
    seal = seal.resize((size, size), Image.BICUBIC)
    flap.alpha_composite(seal, (round(SEAL_TARGET[0] - size / 2), round(SEAL_TARGET[1] - size / 2)))

    shadow = Image.new('RGBA', PANEL, (12, 2, 4, 0))
    shadow.putalpha(flap.getchannel('A').point(lambda a: a * 0.5).filter(ImageFilter.GaussianBlur(2.5)))
    layer = Image.new('RGBA', PANEL, (0, 0, 0, 0))
    layer.alpha_composite(shadow, (0, 2))
    layer.alpha_composite(flap)
    return layer.crop(FLAP_BOX)


def sealed_tray(closed):
    tray = ImageChops.offset(closed, TRAY_SHIFT, 0)
    # The closed envelope starts at y=330, so stretch tray rows 280-328 over 280-368 to reach the hinge.
    band = tray.crop((0, 280, PANEL[0], 328)).resize((PANEL[0], 88), Image.BICUBIC)
    tray.paste(band, (0, 280))
    # Cover just the open flap; the landed flap face (3 units wider) hides this soft edge before it fades.
    alpha = Image.new('L', PANEL, 0)
    ImageDraw.Draw(alpha).polygon(OPEN_FLAP, fill=255)
    alpha = alpha.filter(ImageFilter.MaxFilter(3)).filter(ImageFilter.GaussianBlur(1))
    # Stop exactly at the hinge, so nothing of it shows on the pocket once the flap lifts.
    ImageDraw.Draw(alpha).rectangle((0, OPEN_HINGE, PANEL[0], PANEL[1]), fill=0)
    tray = tray.convert('RGBA')
    tray.putalpha(alpha)
    return tray.crop(TRAY_BOX)


def main():
    closed = Image.open(IMAGES / 'envelope-photographic.webp').convert('RGB').crop((0, 0, *PANEL))
    sealed_flap(closed).save(IMAGES / 'envelope-sealed-flap.webp', quality=90, method=6)
    sealed_tray(closed).save(IMAGES / 'envelope-sealed-tray.webp', quality=90, method=6)


if __name__ == '__main__':
    main()
