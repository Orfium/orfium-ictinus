#!/usr/bin/env node

import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const runCodemods = (targetPath) => {
  // Convert the module URL to a directory path
  const dirname = fileURLToPath(new URL('.', import.meta.url));
  // Adjust the path to point to the 'dist/codemods' directory
  const codemodsPath = path.join(dirname, '../dist/codemods');

  const codemods = fs.readdirSync(codemodsPath)
    .filter(file => file.endsWith('.js'));

  codemods.forEach(codemod => {
    const codemodPath = path.join(codemodsPath, codemod);
    execSync(`npx jscodeshift --parser=tsx -t ${codemodPath} --extensions=ts,tsx ${targetPath}`, { stdio: 'inherit' });
  });
};

const targetPath = process.argv[2];
if (!targetPath) {
  console.error('Please provide a target path for the migration.');
  process.exit(1);
}

runCodemods(targetPath);
