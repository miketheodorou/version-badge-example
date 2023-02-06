
import fs from 'fs';

export function generateBadge(branch, version) {
  return fetch(`https://img.shields.io/badge/${branch}-${version}-blue.svg`)
    .then((res) => res.text())
    .then((svg) => {
      fs.writeFileSync(`badges/${branch}-version.svg`, svg);
  
    })
    .catch(console.error);
}

