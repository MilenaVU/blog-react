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
-----------------------------------------------------------------------
🚀 Tecnologías usadas

**Esta aplicación utiliza:**

🧩 React – Biblioteca de UI moderna
📍 React Router – Para navegación de páginas dentro de la SPA
🔐 Firebase Authentication – Login con Google
📡 Fetch API – Para consumir datos de DummyJSON
⚡ Vite – Para bundling y desarrollo rápido en React

---

## 📂 Estructura del proyecto
blog-react/
├─ blog-react/
│   ├─ public/                 # Archivos públicos
│   ├─ src/
│   │   ├─ components/         # Componentes reutilizables (Navbar, etc.)
│   │   ├─ context/            # Contextos de React, p. ej. AuthContext
│   │   ├─ pages/              # Páginas principales (Home, Login, PostDetail, Users)
│   │   ├─ assets/             # Imágenes y recursos
│   │   ├─ firebase.js         # Configuración de Firebase
│   │   ├─ App.jsx             # Componente principal con rutas
│   │   └─ main.jsx            # Punto de entrada de la app
│   ├─ package.json            # Dependencias y scripts
│   ├─ vite.config.js          # Config de Vite
│   └─ .gitignore              # Archivos ignorados por Git
├─ README.md                  # Documentación de este proyecto

🧠 **Flujo de navegación**

👤 Login (Google) → /login
📄 Home (lista de posts) → /
📌 Detalle de post → /post/:id
👥 Lista de usuarios → /users
🚪 Cerrar sesión → redirige al login

🧾 **Como instalar y usar**
git clone https://github.com/MilenaVU/blog-react.git
cd blog-react
npm install
npm run dev
