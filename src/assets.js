export const assetUrl = path => `${import.meta.env.BASE_URL}${path.replace(/^\//,'')}`;

export const assetMarkup = markup => markup.replace(/((?:src|href)=")\/images\//g,(_,attribute)=>`${attribute}${assetUrl('images/')}`);
