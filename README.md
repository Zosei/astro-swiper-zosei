<p align="center">
  <img src="https://raw.githubusercontent.com/Zosei/astro-swiper-zosei/main/docs/public/astro-swiper-logo.svg" alt="Astro Swiper Zosei Logo" width="160" height="160" />
</p>

# 🌌 Astro Swiper Zosei (Modern Edition)

> Componente nativo y 100% declarativo de [Swiper](https://swiperjs.com) para **Astro 5+ & 7+**, estilizado con **Tailwind CSS v4**, soporte de **Compound Component (`<Sw.Slide>`, `<Sw.Wrap>`)**, presets listos para producción, View Transitions y configuración directa por Props.

[![Version](https://img.shields.io/npm/v/astro-swiper-zosei.svg?color=indigo)](https://www.npmjs.com/package/astro-swiper-zosei)
[![Astro](https://img.shields.io/badge/Astro-5%2B%20%7C%207%2B-FF5D01.svg?logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-38B2AC.svg?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Swiper](https://img.shields.io/badge/Swiper-v11%2B%20%7C%20v14%2B-6332F6.svg?logo=swiper&logoColor=white)](https://swiperjs.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

**[🌐 Web Oficial y 50+ Demos](https://zosei.github.io/astro-swiper-zosei/)** • **[✨ Interactive Playground](https://zosei.github.io/astro-swiper-zosei/playground/)** • **[📜 CHANGELOG.md](CHANGELOG.md)** • **[🌐 Web Changelog](https://zosei.github.io/astro-swiper-zosei/changelog/)** • **[📦 npm package](https://www.npmjs.com/package/astro-swiper-zosei)**

---

## 🌐 Idiomas / Languages

- [Español (Principal)](#-español)
- [English Documentation](#-english)

---

# 🇪🇸 Español

### ✨ Características Principales

- **Patrón de Importación Única (`Sw`)**: Importa solo `import Sw from 'astro-swiper-zosei'` (o `import { Sw } from 'astro-swiper-zosei'`) y accede a todos los subcomponentes: `<Sw>`, `<Sw.Wrap>`, `<Sw.Slide>`, `<Sw.Prev>`, `<Sw.Next>`, `<Sw.Arrow>`, `<Sw.Pag>`, `<Sw.Scroll>`, `<Sw.Toggle>`, `<Sw.Count>`, `<Sw.Full>`, `<Sw.Lazy>`.
- **Integración Oficial de Astro**: Instala automáticamente con `npx astro add astro-swiper-zosei` o importa `astroSwiper` desde `astro-swiper-zosei/integration`.
- **Presets Listos en 1 Línea (`preset`)**: Usa `preset="hero" | "cards" | "marquee" | "testimonials" | "gallery"` para configuraciones listas para producción.
- **Flechas Reutilizables (`<Sw.Arrow />`)**: Icono SVG geométrico sólido y nítido reutilizado en ambas direcciones (`direction="prev" | "next"`) en `<Sw.Prev />` y `<Sw.Next />`, con soporte automático RTL y vertical.
- **100% Declarativo por Props & View Transitions**: Configura `autoplay`, `effect`, `breakpoints`, `navigation`, `pagination`, `lazyInit` y `<ClientRouter />` sin JavaScript manual.
- **Tailwind CSS v4 Native & Zero-JS Fallback**: Utilidades modernas con `scroll-snap-type: x mandatory` antes de hidratar (CLS = 0).
- **Intersection Observer Inteligente**: Pausa y reanuda el autoplay automáticamente cuando el carrusel entra o sale del viewport.
- **Generador CLI y Guía para IA**: Incluye `npx astro-swiper-zosei add hero|cards|marquee|testimonials` y guía técnica en `AGENTS/astro-swiper-zosei.md`.

---

### 📦 Instalación

```bash
# Integración automática con Astro CLI (recomendado)
npx astro add astro-swiper-zosei

# Con pnpm
pnpm add astro-swiper-zosei swiper

# Con npm / yarn / bun
npm install astro-swiper-zosei swiper
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

#### 2. Hero en 1 Línea con Preset y Micro-Controles

```astro
---
import Sw from 'astro-swiper-zosei';
---

<Sw preset="hero" class="w-full max-w-5xl h-96 mx-auto rounded-3xl overflow-hidden shadow-2xl">
  <Sw.Wrap>
    <Sw.Slide class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-2xl font-bold">
      Slide 1
    </Sw.Slide>
    <Sw.Slide class="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-2xl font-bold">
      Slide 2
    </Sw.Slide>
  </Sw.Wrap>
  <Sw.Prev variant="glass" />
  <Sw.Next variant="glass" />
  <Sw.Pag variant="pills" />
  <Sw.Toggle position="top-right" />
  <Sw.Count position="top-left" />
  <Sw.Full position="bottom-right" />
</Sw>
```

#### 3. Reutilizar `<Sw.Arrow />` en Botones Personalizados

```astro
---
import { Sw } from 'astro-swiper-zosei';
---

<Sw.Prev variant="glow">
  <Sw.Arrow direction="prev" size="lg" />
</Sw.Prev>
<Sw.Next variant="glow">
  <Sw.Arrow direction="next" size="lg" />
</Sw.Next>
```

---

### 📋 Tabla de Abreviaciones Técnicas y Componentes

| Nombre Abreviado | Nombre Canónico | Descripción |
| :--- | :--- | :--- |
| `<Sw>` o `<Swiper>` | `<Container />` | Contenedor principal con ciclo de vida, presets y configuración de props |
| `<Sw.Wrap>` | `<Wrapper />` | Contenedor flexible de las diapositivas |
| `<Sw.Slide>` | `<Slide />` | Diapositiva individual |
| `<Sw.Prev>` | `<ButtonPrev />` | Botón interactivo de navegación anterior (Tailwind v4) |
| `<Sw.Next>` | `<ButtonNext />` | Botón interactivo de navegación siguiente (Tailwind v4) |
| `<Sw.Arrow>` | `<ArrowIcon />` | Icono SVG direccional reutilizable (`direction="prev" \| "next"`) |
| `<Sw.Pag>` | `<Pagination />` | Paginación por bullets, píldoras, fracción o barra de progreso |
| `<Sw.Scroll>` | `<Scrollbar />` | Barra de desplazamiento arrastrable |
| `<Sw.Toggle>` | `<AutoplayToggle />` | Botón Play/Pausa para carruseles con autoplay |
| `<Sw.Count>` | `<Counter />` | Contador de slides en tiempo real (`01 / 08`) |
| `<Sw.Full>` | `<Fullscreen />` | Botón nativo de pantalla completa |
| `<Sw.Lazy>` | `<LazyPreloader />` | Spinner SVG para carga diferida de imágenes |

---

# 🇬🇧 English

### ✨ Key Features

- **Single Import Pattern (`Sw`)**: Import `import Sw from 'astro-swiper-zosei'` and access `<Sw>`, `<Sw.Wrap>`, `<Sw.Slide>`, `<Sw.Prev>`, `<Sw.Next>`, `<Sw.Arrow>`, `<Sw.Pag>`, `<Sw.Scroll>`, `<Sw.Toggle>`, `<Sw.Count>`, `<Sw.Full>`, `<Sw.Lazy>`.
- **Official Astro Integration**: Run `npx astro add astro-swiper-zosei` or configure `astro-swiper-zosei/integration`.
- **1-Line Presets**: `preset="hero" | "cards" | "marquee" | "testimonials" | "gallery"` with View Transitions (`<ClientRouter />`) and Zero-JS CSS scroll-snap fallback.
- **Reusable Navigation Arrow (`<Sw.Arrow />`)**: Crisp solid geometric SVG shared across both directions (`direction="prev" | "next"`), compatible with Swiper 14 RTL and vertical layouts.
- **100% Declarative via Props**: Configure `autoplay`, `effect`, `breakpoints`, `navigation`, `pagination`, and `thumbs` directly via Astro props.

---

### 📦 Installation

```bash
npx astro add astro-swiper-zosei
# or
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
- **Evolución y Rediseño Moderno (`astro-swiper-zosei`)**: Desarrollado y mantenido por [Zosei](https://github.com/Zosei) como una evolución completa y reescrita para **Astro 5+ & 7+**, **Tailwind CSS v4**, configuración 100% declarativa por props, patrón de importación única (`<Sw.Slide>`), catálogo de demos dinámico, vistas previas interactivas y soporte moderno de TypeScript.

---

## 📄 Licencia / License

MIT License © 2026 [Zosei](https://github.com/Zosei)
