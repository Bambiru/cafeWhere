/* vite.config.js */
import path from 'node:path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
    }),
  ],
  server: {
    open: true,
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
});
