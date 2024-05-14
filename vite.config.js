import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/3DPortfolio/',  // Set the base URL for GitHub Pages
  plugins: [react()],
  build: {
    outDir: 'dist',  // Set the output directory for the build files
    rollupOptions: {
      // Optionally configure Rollup if needed
    }
  }
});
