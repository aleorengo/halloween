import {readFile, writeFile, mkdir} from 'node:fs/promises';
import {randomInt} from 'node:crypto';
import {resolve, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {encryptLocation} from '../src/location-crypto.js';

const [inputPath, passwordPath] = process.argv.slice(2);
if (!inputPath || !passwordPath) throw new Error('Usage: npm run encrypt-location -- /private/location.json /private/password.txt');
const repository = resolve(dirname(fileURLToPath(import.meta.url)), '..');
for (const path of [inputPath, passwordPath]) {
  if (resolve(path).startsWith(repository + '/') || resolve(path) === repository) throw new Error('Keep both private files outside the repository.');
}
const location = JSON.parse(await readFile(inputPath, 'utf8'));
let password;
try { password = (await readFile(passwordPath, 'utf8')).trim(); }
catch (error) {
  if (error.code !== 'ENOENT') throw error;
  // Six independent, unbiased selections from EFF's 7,776-word list.
  const wordlist = await readFile(new URL('./data/eff-large-wordlist.txt', import.meta.url), 'utf8');
  const words = wordlist.trim().split(/\r?\n/).map(line => line.trim().split(/\s+/)[1]);
  if (words.length !== 7776 || new Set(words).size !== 7776) throw new Error('Invalid passphrase wordlist.');
  password = Array.from({length: 6}, () => words[randomInt(words.length)]).join(' ');
  await mkdir(dirname(resolve(passwordPath)), {recursive: true, mode: 0o700});
  await writeFile(passwordPath, password + '\n', {mode: 0o600, flag: 'wx'});
}
if (password.length < 20) throw new Error('Use a long, unpredictable password.');
const encrypted = await encryptLocation(location, password);
await writeFile(resolve(repository, 'src/location.encrypted.json'), JSON.stringify(encrypted, null, 2) + '\n');
console.log('Encrypted location saved. The password stays in the private password file.');
