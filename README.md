<p align="center">
  <img src="https://raw.githubusercontent.com/zosei/astro-swiper-zosei/main/docs/public/astro-swiper-logo.svg" alt="Astro Swiper Zosei Logo" width="160" height="160" />
</p>

# 🌌 Astro Swiper Zosei (Modern Edition)

> Componente nativo y 100% declarativo de [Swiper](https://swiperjs.com) para **Astro 7+ & 5+**, estilizado con **Tailwind CSS v4**, soporte de **Compound Component (`<Sw.Slide>`, `<Sw.Wrap>`)** y configuración directa por Props (cero JavaScript manual requerido).

[![Version](https://img.shields.io/npm/v/astro-swiper-zosei.svg?color=indigo)](https://www.npmjs.com/package/astro-swiper-zosei)
[![Astro](https://img.shields.io/badge/Astro-5%2B%20%7C%207%2B-FF5D01.svg?logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-38B2AC.svg?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Swiper](https://img.shields.io/badge/Swiper-v14%2B-6332F6.svg?logo=swiper&logoColor=white)](https://swiperjs.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

**[🌐 Web Oficial y 50+ Demos](https://zosei.github.io/astro-swiper-zosei/)** • **[✨ Interactive Playground](https://zosei.github.io/astro-swiper-zosei/playground/)** • **[📜 Changelog](https://zosei.github.io/astro-swiper-zosei/changelog/)** • **[📦 npm package](https://www.npmjs.com/package/astro-swiper-zosei)**

---

## 🌐 Idiomas / Languages

- [Español (Principal)](#-español)
- [English Documentation](#-english)

---

# 🇪🇸 Español

### ✨ Características Principales

- **Patrón de Importación Única (`Sw`)**: Importa solo `import { Sw } from 'astro-swiper-zosei'` y accede con notación técnica limpia: `<Sw>`, `<Sw.Wrap>`, `<Sw.Slide>`, `<Sw.Prev>`, `<Sw.Next>`, `<Sw.Pag>`, `<Sw.Scroll>`, `<Sw.Lazy>`.
- **100% Declarativo por Props**: Configura `autoplay`, `effect`, `breakpoints`, `navigation`, `pagination` y más directamente en las etiquetas Astro sin tocar JavaScript.
- **Tailwind CSS v4 Native**: Cero CSS disperso; diseño con utilidades modernas, glassmorphism y compatibilidad dark mode.
- **Intersection Observer Inteligente**: Pausa y reanuda el autoplay automáticamente cuando el carrusel entra o sale del viewport para ahorrar CPU y batería.
- **Sincronización Automática de Miniaturas (Thumbs)**: Vinculación sencilla entre el carrusel principal y las miniaturas mediante selectores simples.
- **Snippets para VS Code**: Autocompletado rápido con prefijos como `swiper-basic`, `swiper-autoplay`, `swiper-cards`, etc.

---

### 📦 Instalación

```bash
# Con pnpm (recomendado)
pnpm add astro-swiper-zosei swiper

# Con npm
npm install astro-swiper-zosei swiper

# Con yarn / bun
yarn add astro-swiper-zosei swiper
bun add astro-swiper-zosei swiper
```

---

### 🚀 Ejemplos de Uso Rápido

#### 1. Carrusel Moderno con Importación Única (`Sw`)

```astro
---
import { Sw } from 'astro-swiper-zosei';
---

<Sw
  slidesPerView={1}
  spaceBetween={16}
  breakpoints={{
    640: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 24 },
  }}
  navigation={true}
  pagination={{ clickable: true }}
  loop={true}
  class="w-full max-w-5xl mx-auto py-6"
>
  <Sw.Wrap>
    <Sw.Slide class="h-64 rounded-2xl bg-zinc-800 text-white flex items-center justify-center text-xl font-bold">
      Slide 1
    </Sw.Slide>
    <Sw.Slide class="h-64 rounded-2xl bg-zinc-800 text-white flex items-center justify-center text-xl font-bold">
      Slide 2
    </Sw.Slide>
    <Sw.Slide class="h-64 rounded-2xl bg-zinc-800 text-white flex items-center justify-center text-xl font-bold">
      Slide 3
    </Sw.Slide>
  </Sw.Wrap>
  <Sw.Prev />
  <Sw.Next />
  <Sw.Pag />
</Sw>
```

#### 2. Autoplay con Intersection Observer y Pausa en Hover

```astro
---
import { Sw } from 'astro-swiper-zosei';
---

<Sw
  autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
  pauseWhenHidden={true}
  loop={true}
  pagination={{ clickable: true }}
  class="w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl"
>
  <Sw.Wrap>
    <Sw.Slide class="h-80 bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-center text-2xl font-bold">
      Slide 1
    </Sw.Slide>
    <Sw.Slide class="h-80 bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center text-2xl font-bold">
      Slide 2
    </Sw.Slide>
  </Sw.Wrap>
  <Sw.Pag />
</Sw>
```

#### 3. Efecto 3D Cards

```astro
---
import { Sw } from 'astro-swiper-zosei';
---

<Sw effect="cards" grabCursor={true} class="w-64 h-96 mx-auto my-8">
  <Sw.Wrap>
    <Sw.Slide class="rounded-3xl bg-indigo-500 text-white p-6 shadow-2xl flex flex-col justify-end">Tarjeta 1</Sw.Slide>
    <Sw.Slide class="rounded-3xl bg-cyan-500 text-white p-6 shadow-2xl flex flex-col justify-end">Tarjeta 2</Sw.Slide>
    <Sw.Slide class="rounded-3xl bg-amber-500 text-white p-6 shadow-2xl flex flex-col justify-end">Tarjeta 3</Sw.Slide>
  </Sw.Wrap>
</Sw>
```

---

### 📋 Tabla de Abreviaciones Técnicas y Componentes

| Nombre Abreviado | Nombre Canónico | Descripción |
| :--- | :--- | :--- |
| `<Sw>` o `<Swiper>` | `<Container />` | Contenedor principal con gestión del ciclo de vida y configuración de props |
| `<Sw.Wrap>` | `<Wrapper />` | Contenedor flexible de las diapositivas |
| `<Sw.Slide>` | `<Slide />` | Diapositiva individual |
| `<Sw.Prev>` | `<ButtonPrev />` | Botón interactivo de navegación anterior (Tailwind v4) |
| `<Sw.Next>` | `<ButtonNext />` | Botón interactivo de navegación siguiente (Tailwind v4) |
| `<Sw.Pag>` | `<Pagination />` | Paginación por bullets, números o barra de progreso |
| `<Sw.Scroll>` | `<Scrollbar />` | Barra de desplazamiento arrastrable |
| `<Sw.Lazy>` | `<LazyPreloader />` | Spinner SVG para carga diferida de imágenes |

---

# 🇬🇧 English

### ✨ Key Features

- **Single Import Pattern (`Sw`)**: Import just `import { Sw } from 'astro-swiper-zosei'` and access concise technical components: `<Sw>`, `<Sw.Wrap>`, `<Sw.Slide>`, `<Sw.Prev>`, `<Sw.Next>`, `<Sw.Pag>`, `<Sw.Scroll>`, `<Sw.Lazy>`.
- **100% Declarative via Props**: Configure `autoplay`, `effect`, `breakpoints`, `navigation`, `pagination`, and more directly via Astro component props without writing manual JavaScript.
- **Tailwind CSS v4 Native**: Clean utility-based design with zero bloated CSS files.
- **Intelligent Intersection Observer**: Automatically pause/resume autoplay when carousels enter/leave the viewport.
- **Automatic Thumbnail Sync**: Link main carousels and thumbnail tracks with ease.

---

### 📦 Installation

```bash
pnpm add astro-swiper-zosei swiper
```

### 🚀 Usage

```astro
---
import { Sw } from 'astro-swiper-zosei';
---

<Sw slidesPerView={3} spaceBetween={20} loop navigation pagination>
  <Sw.Wrap>
    <Sw.Slide class="h-64 rounded-2xl bg-zinc-800 text-white flex items-center justify-center">Slide 1</Sw.Slide>
    <Sw.Slide class="h-64 rounded-2xl bg-zinc-800 text-white flex items-center justify-center">Slide 2</Sw.Slide>
    <Sw.Slide class="h-64 rounded-2xl bg-zinc-800 text-white flex items-center justify-center">Slide 3</Sw.Slide>
  </Sw.Wrap>
  <Sw.Prev />
  <Sw.Next />
  <Sw.Pag />
</Sw>
```

---

## 🎖️ Agradecimientos y Créditos / Credits & Acknowledgements

- **Inspiración y Base Original**: Este proyecto se originó a partir del trabajo inicial de [Pascal Brand](https://github.com/pascal-brand38) ([`astro-swiper`](https://github.com/pascal-brand38/astro-swiper)). Nuestro agradecimiento a Pascal Brand por haber sentado las primeras bases del componente para Astro.
- **Evolución y Rediseño Moderno (`astro-swiper-zosei`)**: Desarrollado y mantenido por [Zosei](https://github.com/zosei) como una evolución completa y reescrita para **Astro 7+ & 5+**, **Tailwind CSS v4**, configuración 100% declarativa por props, patrón de importación única (`<Sw.Slide>`), catálogo de demos dinámico, vistas previas interactivas y soporte moderno de TypeScript.

---

## 📄 Licencia / License

MIT License © 2026 [Zosei](https://github.com/zosei)
