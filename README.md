# 🧸 Jugalia - Tienda de Juguetes

**Jugalia** es una tienda virtual de juguetes desarrollada con **React** y **TypeScript**. Este proyecto combina herramientas modernas de desarrollo web para crear una experiencia de compra atractiva y eficiente, con funcionalidades como un carrito de compras persistente y un diseño modular que facilita su mantenibilidad y escalabilidad.

🔗 **[Visita la aplicación en producción](https://spontaneous-gaufre-8b7300.netlify.app/)**

## 🚀 Tecnologías y Herramientas Utilizadas

- **React**: Biblioteca JavaScript que permite construir interfaces de usuario con componentes reutilizables, manteniendo el código organizado y escalable.
- **TypeScript**: Añade tipado estático para mejorar la detección de errores en el desarrollo y la consistencia de los datos en toda la aplicación.
- **Vite**: Herramienta moderna y rápida para construir y gestionar el entorno de desarrollo, optimizando el rendimiento en el desarrollo y la creación de builds.
- **CSS Personalizado**: Versión persoanlizada de Bootstrap para crear un diseño atractivo y adaptable, lo que permite un mayor control sobre el estilo.

## 📂 Estructura del Proyecto

La estructura modular facilita la escalabilidad y la organización del código:

- **src/**
  - **components/**: Componentes reutilizables que forman la interfaz de usuario, como `Header`, `Footer`, y `JugueteCard`.
  - **data/**: Contiene la base de datos de prueba (`db_juguetes.ts`), que almacena los datos de los productos iniciales.
  - **hooks/**: Contiene hooks personalizados como `useCart`, que encapsulan la lógica de manejo del carrito y aseguran un control centralizado del estado.
  - **types/**: Contiene las definiciones de tipos y estructuras de datos para mantener la consistencia en el proyecto.

## 🎯 Funcionalidades Destacadas

- **Carrito de Compras Persistente**: Permite añadir, incrementar, decrementar y eliminar productos del carrito, con persistencia en `LocalStorage` para retener los datos entre sesiones.
- **Interfaz Responsiva y Modular**: El diseño está basado en un CSS personalizado inspirado en Bootstrap, adaptándose perfectamente a dispositivos móviles y de escritorio, manteniendo una experiencia visual consistente.
- **Optimización del Control de Estado**: Implementación de `useMemo` y `useCart` para mejorar el rendimiento general de la aplicación y reducir renderizados innecesarios.

## 📜 Licencia

Este proyecto está licenciado bajo la Licencia MIT.
