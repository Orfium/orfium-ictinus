import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  resolve: {
    // Force a single React instance (18) so workspace packages (e.g. ictinus) don't pull in React 19
    dedupe: ['react', 'react-dom'],
  },
});
