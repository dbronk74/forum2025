// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Keep your @ → src alias for imports like "@/pages/Forum"
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  // Silence the "top-level await" warning without changing your browserslist
  esbuild: {
    supported: {
      'top-level-await': true,
    },
  },
})
