import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/My-Portfolio/", // This should match your GitHub repo name
  server: {
    port: 3000
  }
});
