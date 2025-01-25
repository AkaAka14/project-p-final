import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5178,
    proxy: {
      '/api': {
        target: 'http://${process.env.VITE_REACT_APP_API_URL}',
        changeOrigin: true,
        secure: false,
        ws: true
      }
    }
  }
})
