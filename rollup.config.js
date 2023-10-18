import { optimizeLodashImports } from '@optimize-lodash/rollup-plugin';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import svgr from '@svgr/rollup';
import del from 'rollup-plugin-delete';
import dts from 'rollup-plugin-dts';
import css from 'rollup-plugin-import-css';
// eslint-disable-next-line import/order
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

// To handle css files
import { terser } from 'rollup-plugin-terser';

// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require('./package.json');

const regexesOfPackages = (externalPackages = []) =>
  externalPackages.map((packageName) => new RegExp(`^${packageName}(/.*)?`));

export default [
  {
    input: ['./src/index.ts'],
    output: [
      {
        dir: 'dist',
        format: 'esm',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        preserveModules: true,
      },
    ],
    external: [
      'react',
      'react-dom',
      'emotion-reset',
      /@emotion\/styled/,
      /@emotion\/react/,
      ...regexesOfPackages([
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.peerDependencies || {}),
      ]),
    ],
    plugins: [
      peerDepsExternal(),
      nodeResolve({}),
      commonjs(),
      svgr(),
      optimizeLodashImports(),
      typescript({
        tsconfig: './tsconfig.json',
      }),
      css(),
      terser(),
    ],
  },
  {
    input: 'dist/types/index.d.ts',
    output: [{ file: pkg.types, format: 'esm' }],
    external: [/\.css$/],
    plugins: [dts.default(), del({ hook: 'buildEnd', targets: './dist/types' })],
  },
];
