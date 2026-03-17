## 📝 Descripción del proyecto

- SPA (Single Page Application) construida con **React** y **React Router**.
- Se consumen datos desde **DummyJSON API**:
  - `/posts` → lista de posts
  - `/users` → información de usuarios
  - `/posts/:id` → detalles de un post
- Funcionalidades:
  - Iniciar sesión y cerrar sesión
  - Listar todos los posts
  - Buscar posts por `id` o `userId`
  - Ver detalles del post, autor, vistas, likes y dislikes

## 🔑 Credenciales de prueba

Para iniciar sesión en la aplicación, utiliza los siguientes datos de prueba:

- **Usuario:** admin
- **Contraseña:** admin123

> ⚠️ Nota: Estas credenciales solo funcionan para propósitos de prueba. 
  

---

## 📂 Estructura del proyecto
react-blog-app/ # Carpeta raíz del proyecto
├─ node_modules/ # Dependencias instaladas por npm
├─ src/ # Carpeta con todo el código fuente
│ ├─ pages/ # Componentes de páginas
│ │ ├─ Home.jsx # Página principal con lista de posts y buscador
│ │ ├─ Login.jsx # Página de login
│ │ └─ PostDetail.jsx # Página de contenido para los  detalles de un post
│ ├─ App.jsx # Componente principal que contiene las rutas
│ └─ index.jsx # pagina de inicio
├─ package.json # Configuración y dependencias del proyecto
├─ package-lock.json # Bloqueo de versiones de dependencias
├─ README.md # Este archivo con documentación
└─ vite.config.js # Configuración de Vite