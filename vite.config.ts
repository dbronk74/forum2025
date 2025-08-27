import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(() => {
  // Vercel sets VERCEL_ENV = "production" | "preview" | "development"
  const isProd = process.env.VERCEL_ENV === 'production'

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    // Enable sourcemaps for preview builds so errors de-minify in DevTools
    build: {
      sourcemap: !isProd,
      target: 'esnext',
    },
  }
})
