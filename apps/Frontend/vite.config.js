import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {},
    __VITE_NODE_ENV__: JSON.stringify(process.env.VITE_NODE_ENV)
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      external: []
    }
  },
  server: {
    port: 5178,
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL,
        changeOrigin: true,
        secure: false
      }
    }
  }
})