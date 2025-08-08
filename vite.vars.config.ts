import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import path from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths(), vanillaExtractPlugin()],
  publicDir: false,
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/css/vars.css.ts'),
      formats: ['es'],
      fileName: 'vars',
    },
    rollupOptions: {
      output: {
        assetFileNames: 'vars.css',
      },
    },
    outDir: 'dist/vars',
  },
});
