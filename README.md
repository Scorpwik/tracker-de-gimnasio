# Tracker de gimnasio

Gym Tracker es una aplicación web para anotar tus entrenamientos, armar tus rutinas y seguir tu progreso físico. Está hecha para usarla en el celular, en el gimnasio: pantalla oscura, navegación inferior y los registros guardados en el propio dispositivo cuando la señal es mala.

**Demostración:** [https://scorpwik.github.io/tracker-de-gimnasio/](https://scorpwik.github.io/tracker-de-gimnasio/)

## Qué hace

Al abrirla entras al entrenamiento del día. Marcas cada serie con peso, repeticiones y si la lograste, y la app guarda la sesión. Las rutinas, los entrenos, el peso, las medidas y las fotos quedan en el `localStorage` de este navegador.

Si Firebase responde, entra con una sesión anónima y copia esos datos a Cloud Firestore. Desde Perfil puedes crear una cuenta con correo y contraseña para verlos en otra computadora o en otro celular. Si la nube no está disponible, sigues entrenando con lo que ya está guardado en el dispositivo.

La app se mueve por pestañas (Hoy, Rutinas, Métricas, Fotos y Perfil). El enrutador es un `HashRouter`, así que GitHub Pages puede servirla en un subdirectorio sin reescribir rutas.

## Funciones

- **Hoy.** Rutina del día (o la que elijas), cronómetro de la sesión, series con peso y repeticiones, estados logrado o parcial, récord personal, lo que hiciste la vez anterior y temporizador de descanso con vibración. Puedes sumar o quitar series y marcarlas como calentamiento, normal o al fallo.
- **Rutinas.** Crear, editar y eliminar sesiones por día de la semana, con color, calentamiento y orden de ejercicios. La búsqueda usa la biblioteca; si el ejercicio no existe, lo creas ahí mismo. Cada ejercicio tiene series, repeticiones, peso y descanso. El plan inicial trae Push, Pull, Piernas, Upper, Lower y Core en casa.
- **Guías.** En la biblioteca, cada ejercicio indica el músculo que trabaja y cómo ejecutarlo, y abre una búsqueda para ver un video.
- **Métricas.** Volumen de la semana, entrenos de la semana, racha, gráfica de carga por ejercicio, calendario, historial para ver, editar o borrar una sesión, y peso corporal con grasa estimada y notas.
- **Fotos.** Cámara o galería, varias fotos por fecha, etiquetas (frente, perfil, espalda u otro), compresión en el propio celular, comparación de dos fotos y medidas de hombros, pecho, brazos, antebrazos, cadera, piernas y pantorrillas.
- **Perfil.** Color de acento, descanso por defecto, editor de la biblioteca (los cambios se aplican a las rutinas que usan ese ejercicio), exportación de rutinas y sesiones en JSON, borrado de los datos locales e inicio o cierre de sesión.
- **Instalable.** Manifest y service worker para agregarla a la pantalla de inicio. La interfaz queda en caché; los registros viven en el navegador.

## Tecnologías

- React 19 y Vite 8
- React Router 7 (`HashRouter`)
- Firebase 12: Authentication, Cloud Firestore y Analytics
- lucide-react para los íconos
- browser-image-compression para reducir las fotos antes de guardarlas
- Manifest y service worker (PWA)
- GitHub Actions para publicar en GitHub Pages

## Demostración

La versión publicada está en:

https://scorpwik.github.io/tracker-de-gimnasio/

En `vite.config.js`, `base` es `/tracker-de-gimnasio/`. Así los archivos JavaScript y CSS se piden dentro de esa carpeta, que es la ruta del repositorio en GitHub Pages. El manifest, los íconos y el service worker usan rutas relativas (`./`), y el enrutador no depende del nombre de la carpeta.

## Cómo ejecutarla en tu computadora

Necesitas Node.js 20.

```bash
npm install
cp .env.example .env
npm run dev
```

Abre [http://localhost:5000/tracker-de-gimnasio/](http://localhost:5000/tracker-de-gimnasio/). Si entras solo a `http://localhost:5000/`, Vite redirige a esa misma ruta.

Sin tocar el `.env`, la app usa la configuración pública de Firebase que ya está en el código y, en paralelo, guarda todo en este navegador. Para usar otro proyecto, completa las variables `VITE_FIREBASE_*` de `.env.example` (la API key va en `VITE_FIREBASE_API_KEY`). En Authentication activa el acceso anónimo y el de correo con contraseña. En Firestore publica `firestore.rules`.

Las fotos se comprimen y se guardan como datos de la propia app; no hace falta Storage para el flujo actual.

Para generar y revisar la versión de producción:

```bash
npm run build
npm run preview
```

La vista previa usa el mismo puerto y la misma ruta: [http://localhost:5000/tracker-de-gimnasio/](http://localhost:5000/tracker-de-gimnasio/).

## Publicación

Cada push a `main` ejecuta `.github/workflows/deploy.yml`: instala dependencias, construye el proyecto y lo sube a GitHub Pages. En el repositorio, la fuente de Pages tiene que ser **GitHub Actions**.

Estos secrets alimentan la build:

`FIREBASE_API_KEY`, `FIREBASE_AUTH_DOMAIN`, `FIREBASE_PROJECT_ID`, `FIREBASE_STORAGE_BUCKET`, `FIREBASE_MESSAGING_SENDER_ID` y `FIREBASE_APP_ID`.
