# 🧩 Admin Dashboard - Proyecto React + Vite + Tailwind

Este proyecto es una aplicación modular con enfoque administrativo construida en **React**, **Vite** y **TailwindCSS**. Está organizado para facilitar la escalabilidad, colaboración en equipo y mantenimiento a largo plazo.

---

## 📁 Estructura del Proyecto

```txt
src/
│
├── components/
│   ├── admin/         → Módulos administrativos: clientes, compras, ventas...
│   │   ├── clientes/
│   │   ├── compras/
│   │   └── ventas/
│   ├── layout/        → Estructura visual: Header, Sidebar, Layout general
│   └── ui/            → Componentes reutilizables: Button, Input, Modal, Toast, etc.
│
├── constants/         → Constantes del sistema (roles, rutas, colores, etc.)
├── hooks/             → Custom React Hooks (useFacturaForm, useGlobalToast, etc.)
├── lib/               → Funciones de ayuda/utilidades
├── pages/             → Rutas principales: login, dashboard, error, etc.
├── styles/            → Estilos globales (index.css)
└── theme/             → Configuración de Tailwind y tokens de diseño




npm install       # Instala dependencias
npm run dev       # Ejecuta en modo desarrollo
npm run build     # Compila para producción
