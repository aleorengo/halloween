function escapeText(value) {
  return value.replace(/\\/g, '\\\\').replace(/\r?\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;');
}

function foldLine(line) {
  const encoder = new TextEncoder();
  let result = '', part = '';
  for (const char of line) {
    if (encoder.encode(part + char).length > 75) {
      result += part + '\r\n';
      part = ' ';
    }
    part += char;
  }
  return result + part;
}

export function createCalendar(now = new Date()) {
  return [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//The Witching Hour//Halloween Invite//EN', 'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT', 'UID:witching-hour-20261025-pauclaris169@halloween.local',
    'DTSTAMP:' + now.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, ''),
    'DTSTART:20261025T183000Z', 'SUMMARY:' + escapeText('The Witching Hour — Halloween Party'),
    'LOCATION:' + escapeText('[private location removed]'),
    'DESCRIPTION:' + escapeText('Bring a Halloween-themed cocktail (with or without alcohol).\nHalloween spooky dress code is a must.\nThere will be food.\nBring a spooky Halloween game or an idea for one.'),
    'END:VEVENT', 'END:VCALENDAR', ''
  ].map(foldLine).join('\r\n');
}
