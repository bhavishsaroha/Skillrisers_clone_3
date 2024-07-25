import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist', // This should be the directory where Vite outputs build files
  },
  plugins: [react()],
})
