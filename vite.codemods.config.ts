import path from 'path';
import fg from 'fast-glob';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

const codemodsEntries = Object.fromEntries(
  fg
    .sync('codemods/**/*.ts')
    .map((file) => [
      path.relative('codemods', file.slice(0, file.length - path.extname(file).length)),
      path.resolve(file),
    ])
);

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    dts({
      outDir: path.resolve(__dirname, 'dist/codemods'),
      include: ['codemods/**/*.ts'],
      exclude: ['__mocks__'],
    }),
  ],
  build: {
    rollupOptions: {
      input: codemodsEntries,
      output: {
        dir: path.resolve(__dirname, 'dist/codemods'),
        format: 'es',
        entryFileNames: '[name].js',
      },
      external: ['react', 'react-dom', 'emotion-reset', /@emotion\/styled/, /@emotion\/react/],
    },
  },
});
