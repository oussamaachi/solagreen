import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
    '/pv.png',
    '/bacs.png',
    '/hero_pv.png',
    '/isolation.png',
    '/hvac.png',
    '/audit.png',
    '/pac.png',
    '/cee.png'
];

const dirs = [path.join(__dirname, 'src/pages'), path.join(__dirname, 'src/pages/articles')];

dirs.forEach(dir => {
    fs.readdirSync(dir).filter(f => f.endsWith('.jsx')).forEach(file => {
        let p = path.join(dir, file);
        let content = fs.readFileSync(p, 'utf8');
        let changed = false;

        content = content.replace(/https:\/\/images\.unsplash\.com[^\"\'\`]+/g, () => {
            changed = true;
            return images[Math.floor(Math.random() * images.length)];
        });

        if (changed) {
            fs.writeFileSync(p, content);
        }
    });
});

console.log('All remaining unsplash links replaced.');
