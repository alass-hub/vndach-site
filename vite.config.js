import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // base: '/' convient pour un domaine dédié (vndach.com).
  // Pour un sous-dossier, mettre par exemple base: '/site/'.
  base: '/',
  build: { outDir: 'dist' },
});
