import fg from 'fast-glob';
import path from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const codemodsEntries = Object.fromEntries(
  fg
    .sync('codemods/**/*.ts')
    .map((file) => [
      path.relative('codemods', file.slice(0, file.length - path.extname(file).length)),
      path.resolve(file),
    ])
);

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    dts({
      outDirs: path.resolve(import.meta.dirname, 'dist/codemods'),
      include: ['codemods/**/*.ts'],
      exclude: ['__mocks__'],
    }),
  ],
  build: {
    lib: {
      entry: codemodsEntries,
      formats: ['cjs'],
    },
    rolldownOptions: {
      input: codemodsEntries,
      output: {
        dir: path.resolve(import.meta.dirname, 'dist/codemods'),
        format: 'cjs',
        entryFileNames: '[name].cjs',
      },
      external: ['react', 'react-dom', /@emotion\/styled/, /@emotion\/react/],
    },
  },
});
