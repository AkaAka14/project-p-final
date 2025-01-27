import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const isProduction = mode === 'production'

  return {
    plugins: [react()],
    define: {
      'process.env': {},
      __VITE_NODE_ENV__: JSON.stringify(env.VITE_NODE_ENV)
    },
    build: {
      outDir: 'dist',
      sourcemap: !isProduction,
      rollupOptions: {
        external: []
      }
    },
    server: {
      port: 5178,
      proxy: isProduction ? {} : {
        '/api': {
          target: env.VITE_API_URL || 'http://localhost:3000',
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  }
})