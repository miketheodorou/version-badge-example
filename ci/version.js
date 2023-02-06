
import fs from 'fs';
import { join } from 'path'

export function getPackageVersion(path) {
  const packageJson = fs.readFileSync(join(path, 'package.json')).toString();
  const version = JSON.parse(packageJson).version;

  return version;
}

