
import fs from 'fs';


function generateBadge(branch, version) {
  fetch(`https://img.shields.io/badge/${branch}-${version}-blue.svg`)
    .then((res) => res.text())
    .then((svg) => {
      fs.writeFileSync(`badges/${branch}-version.svg`, svg);
  
    })
    .catch(console.error);
}

generateBadge('develop', '1.0.0');

