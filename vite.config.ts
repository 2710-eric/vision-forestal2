import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Cargar variables de entorno según el modo (development/production)
  // Fix: Property 'cwd' does not exist on type 'Process'
  const env = loadEnv(mode, (process as any).cwd(), '');

  return {
    plugins: [react()],
    base: '/',
    build: {
      outDir: 'dist',
    },
    server: {
      host: true
    },
    // Esto es vital: Reemplaza 'process.env.API_KEY' en el código por el valor real de Vercel
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  }
})