# Gym Tracker

## Ejecutar en Replit

La aplicación usa React + Vite y se inicia con:

```bash
npm install
npm run dev
```

El modo demo no necesita credenciales: las rutinas, sesiones, métricas, fotos y biblioteca global de ejercicios se guardan en el `localStorage` del navegador. Firebase se activa con el secreto `GOOGLE_API_KEY` y las variables públicas `VITE_FIREBASE_*` configuradas en el entorno compartido.

La app se abre en `http://localhost:5000/tracker-de-gimnasio/`. Esa ruta es el `base` de Vite, el mismo subdirectorio de la demo en GitHub Pages.
