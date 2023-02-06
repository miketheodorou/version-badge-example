
import fs from 'fs';
import { join } from 'path'

export function getPackageVersion(path) {
  const packageJson = fs.readFileSync(join(path, 'package.json')).toString();
  const version = JSON.parse(packageJson).version;

  return version;
}

export function generateBadge(branch, version) {
  return fetch(`https://img.shields.io/badge/${branch}-${version}-blue.svg`)
    .then((res) => res.text())
    .then((svg) => fs.writeFileSync(`badges/${branch}-version.svg`, svg))
    .catch(console.error);
}

