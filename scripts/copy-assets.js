/*eslint-disable*/
const fs = require('fs');
const path = require('path');

function copyFolderSync(from, to) {
  if (!fs.existsSync(to)) {
    fs.mkdirSync(to);
  }
  fs.readdirSync(from).forEach(element => {
    if (fs.lstatSync(path.join(from, element)).isFile()) {
      if (path.extname(element) === '.svg') {
        fs.copyFileSync(path.join(from, element), path.join(to, element));
      }
    } else {
      copyFolderSync(path.join(from, element), path.join(to, element));
    }
  });
}

copyFolderSync(
  path.resolve(__dirname, '../src/components/Icon/assets/**/'),
  path.resolve(__dirname, '../dist/components/Icon/assets/**/')
);
