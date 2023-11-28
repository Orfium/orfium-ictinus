import del from 'rollup-plugin-delete';
import dts from 'rollup-plugin-dts';
const pkg = require('./package.json');

export default [
  {
    input: 'dist/src/index.d.ts',
    output: [{ file: pkg.types, format: 'esm' }],
    external: [/\.css$/],
    plugins: [dts.default(), del({ hook: 'buildEnd', targets: './dist/src' })],
  },
];
