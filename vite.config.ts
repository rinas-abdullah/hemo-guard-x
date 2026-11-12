import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' keeps the build portable (works from any folder or static host)
export default defineConfig({
  plugins: [react()],
  base: './',
})
