import process from 'node:process'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: process.env.VERCEL ? '/' : (command === 'build' ? '/MovieExplorer-A-2/' : '/'),
}))