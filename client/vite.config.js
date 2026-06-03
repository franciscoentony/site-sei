import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [react(), tailwindcss()],
    // Se for 'build' (GitHub), usa '/site-sei/'. Se for dev (Localhost), usa '/' 
    base: command === 'build' ? '/site-sei/' : '/',
  }
})

