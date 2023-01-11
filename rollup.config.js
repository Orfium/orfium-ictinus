import fs from 'fs';

import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import svgr from '@svgr/rollup';
import del from 'rollup-plugin-delete';
import dts from 'rollup-plugin-dts';
import css from 'rollup-plugin-import-css';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

// To handle css files
import { terser } from 'rollup-plugin-terser';

const pkg = require('./package.json');

const regexesOfPackages = (externalPackages = []) =>
  externalPackages.map((packageName) => new RegExp(`^${packageName}(\/.*)?`));

export default [
  {
    input: ['./src/index.ts'],
    output: [
      {
        dir: 'dist',
        format: 'esm',
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
      typescript({
        tsconfig: './tsconfig.json',
        declarationDir: 'dist/types',
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
