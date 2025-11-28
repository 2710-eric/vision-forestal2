
# 🌲 Vision Forestal - Manual de Publicación (PC/Escritorio 🖥️)

Al estar en un computador, publicar tu página es muy sencillo. Sigue estos 3 pasos:

---

## PASO 1: Preparar los archivos

1. **Descargar:** Busca el botón "Export" o "Download Project" en este editor. Se bajará un archivo `.zip`.
2. **Descomprimir:**
   *   Busca el archivo ZIP en tu carpeta de Descargas.
   *   Haz clic derecho -> "Extraer aquí" o "Extraer todo".
3. **Limpieza (IMPORTANTE):**
   *   Entra a la carpeta que se creó.
   *   Si ves una carpeta llamada `node_modules`, **BÓRRALA**.
   *   *¿Por qué?* Es una carpeta muy pesada que se genera sola en la nube. Si intentas subirla, tardará horas o fallará.

---

## PASO 2: Subir a GitHub

1. Ve a [GitHub.com](https://github.com) e inicia sesión.
2. Haz clic en el botón **"New"** (o el signo `+` arriba a la derecha) para crear un repositorio.
3. Ponle un nombre (ej: `vision-forestal-web`), déjalo en **Public** y dale a **Create repository**.
4. **Subir archivos:**
   *   En la pantalla siguiente, busca el enlace que dice *"uploading an existing file"*.
   *   Se abrirá un recuadro gris grande.
   *   Abre la carpeta de tu proyecto en tu computadora.
   *   **Selecciona TODOS los archivos y carpetas** (la carpeta `components`, `index.html`, `vite.config.ts`, etc.).
   *   **Arrástralos todos juntos** y suéltalos dentro del recuadro gris de GitHub.
   *   Espera a que carguen las barras.
5. Baja al final y haz clic en el botón verde **"Commit changes"**.

---

## PASO 3: Publicar en Vercel

1. Ve a [Vercel.com](https://vercel.com) e inicia sesión (recomendado usar "Continue with GitHub").
2. En tu panel (Dashboard), haz clic en **"Add New..."** -> **"Project"**.
3. A la izquierda verás una lista de tus repositorios de GitHub. Busca `vision-forestal-web` y dale al botón **Import**.
4. Vercel detectará automáticamente que es un proyecto "Vite". No necesitas cambiar ninguna configuración.
5. Haz clic en el botón azul **Deploy**.

¡Listo! En unos segundos verás confeti y tu enlace oficial (ej: `vision-forestal-web.vercel.app`) para compartir con el mundo.
