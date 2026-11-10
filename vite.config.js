import { defineConfig } from 'vite'

export default defineConfig({
  // GitHub Pages publica el sitio en https://scorpwik.github.io/tracker-de-gimnasio/
  base: '/tracker-de-gimnasio/',
  define: {
    'import.meta.env.VITE_FIREBASE_API_KEY': JSON.stringify(process.env.GOOGLE_API_KEY || process.env.VITE_FIREBASE_API_KEY || ''),
  },
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: true,
  },
  preview: {
    host: '0.0.0.0',
    port: 5000,
  },
})