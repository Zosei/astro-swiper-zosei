# 🤖 ASTRO SWIPER ZOSEI — MASTER AI AGENT SYSTEM GUIDE

> **Critical Instruction for AI Coding Assistants (Cursor, Windsurf, Claude, Copilot, Antigravity, ChatGPT, Gemini, v0)**:
> This document is the definitive technical manual for generating responsive, accessible, high-performance sliders and carousels in **Astro 5+ & 7+** using **`astro-swiper-zosei`** and **Tailwind CSS v4**.

---

## ⚡ 1. The Golden Rule: Concise Compound Component (`<Sw>`)

Always import and use the single unified compound component **`Sw`**:

```astro
---
import Sw from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
---
```

### Component Hierarchy & Subcomponents

| Component | Technical Alias | Traditional Name | Purpose |
| :--- | :--- | :--- | :--- |
| `<Sw>` | `<Swiper>` | `<Container>` | Main container (creates swiper instance and handles all configuration) |
| `<Sw.Wrap>` | `<Sw.W>` | `<SwiperWrapper>` | Slides wrapper container (`.swiper-wrapper`) |
| `<Sw.Slide>` | `<Sw.S>` | `<SwiperSlide>` | Individual slide element (`.swiper-slide`) |
| `<Sw.Prev />` | `<Sw.P />` | `<ButtonPrev />` | Accessible Previous slide button |
| `<Sw.Next />` | `<Sw.N />` | `<ButtonNext />` | Accessible Next slide button |
| `<Sw.Pag />` | `<SwiperPagination />` | `<Pagination />` | Pagination bullets, numbers or progress bar |
| `<Sw.Scroll />` | `<SwiperScrollbar />` | `<Scrollbar />` | Interactive draggable scrollbar |
| `<Sw.Lazy />` | `<SwiperLazyPreloader />` | `<LazyPreloader />` | High-performance CSS preloader spinner |

---

## 🚀 2. Code Patterns & Real-World Examples

### 🔹 Example 1: Standard Responsive Carousel with Astro Image
```astro
---
import Sw from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import myImage1 from '../assets/slide1.jpg';
import myImage2 from '../assets/slide2.jpg';
import myImage3 from '../assets/slide3.jpg';
---

<Sw
  slidesPerView={1}
  spaceBetween={24}
  loop={true}
  navigation={true}
  pagination={{ clickable: true }}
  breakpoints={{
    640: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 30 }
  }}
  class="w-full max-w-6xl mx-auto py-8"
>
  <Sw.Wrap>
    <Sw.Slide class="rounded-2xl overflow-hidden shadow-xl aspect-video">
      <Image src={myImage1} alt="Slide 1" class="w-full h-full object-cover" />
    </Sw.Slide>
    <Sw.Slide class="rounded-2xl overflow-hidden shadow-xl aspect-video">
      <Image src={myImage2} alt="Slide 2" class="w-full h-full object-cover" />
    </Sw.Slide>
    <Sw.Slide class="rounded-2xl overflow-hidden shadow-xl aspect-video">
      <Image src={myImage3} alt="Slide 3" class="w-full h-full object-cover" />
    </Sw.Slide>
  </Sw.Wrap>

  <!-- Modern Navigation & Pagination UI -->
  <Sw.Prev variant="glass" color="white" />
  <Sw.Next variant="glass" color="white" />
  <Sw.Pag variant="pills" color="indigo" />
</Sw>
```

---

### 🔹 Example 2: 3D Cards Effect
```astro
---
import Sw from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
---

<Sw
  effect="cards"
  grabCursor={true}
  cardsEffect={{
    perSlideOffset: 8,
    perSlideRotate: 2,
    rotate: true,
    slideShadows: true,
  }}
  class="w-72 sm:w-80 h-96 mx-auto"
>
  <Sw.Wrap>
    <Sw.Slide class="rounded-3xl overflow-hidden shadow-2xl bg-slate-900 flex items-center justify-center">
      <span class="text-white font-bold text-2xl">Card 1</span>
    </Sw.Slide>
    <Sw.Slide class="rounded-3xl overflow-hidden shadow-2xl bg-indigo-900 flex items-center justify-center">
      <span class="text-white font-bold text-2xl">Card 2</span>
    </Sw.Slide>
    <Sw.Slide class="rounded-3xl overflow-hidden shadow-2xl bg-purple-900 flex items-center justify-center">
      <span class="text-white font-bold text-2xl">Card 3</span>
    </Sw.Slide>
  </Sw.Wrap>
</Sw>
```

---

### 🔹 Example 3: 3D Coverflow Effect
```astro
---
import Sw from 'astro-swiper-zosei';
---

<Sw
  effect="coverflow"
  grabCursor={true}
  centeredSlides={true}
  slidesPerView="auto"
  coverflowEffect={{
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  }}
  pagination={{ clickable: true }}
  class="w-full py-8"
>
  <Sw.Wrap>
    <Sw.Slide class="!w-80 aspect-video rounded-2xl overflow-hidden shadow-2xl bg-slate-900">
      <div class="p-6 text-white">Slide 1</div>
    </Sw.Slide>
    <Sw.Slide class="!w-80 aspect-video rounded-2xl overflow-hidden shadow-2xl bg-slate-800">
      <div class="p-6 text-white">Slide 2</div>
    </Sw.Slide>
  </Sw.Wrap>
  <Sw.Pag variant="dynamic" color="purple" />
</Sw>
```

---

### 🔹 Example 4: Smooth Fade Effect with Autoplay
```astro
---
import Sw from 'astro-swiper-zosei';
---

<Sw
  effect="fade"
  fadeEffect={{ crossFade: true }}
  speed={800}
  autoplay={{
    delay: 3500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  }}
  loop={true}
  class="w-full h-[500px]"
>
  <Sw.Wrap>
    <Sw.Slide class="w-full h-full relative">
      <img src="/hero1.jpg" class="w-full h-full object-cover" alt="Hero 1" />
    </Sw.Slide>
    <Sw.Slide class="w-full h-full relative">
      <img src="/hero2.jpg" class="w-full h-full object-cover" alt="Hero 2" />
    </Sw.Slide>
  </Sw.Wrap>
  <Sw.Pag variant="pills" color="indigo" />
</Sw>
```

---

### 🔹 Example 5: Linked Thumbnails Gallery
```astro
---
import Sw from 'astro-swiper-zosei';
---

<!-- Main High-Res Gallery -->
<Sw
  spaceBetween={10}
  navigation={true}
  thumbs={{ swiper: '.gallery-thumbs' }}
  class="w-full max-w-4xl mx-auto h-96 rounded-2xl overflow-hidden mb-4"
>
  <Sw.Wrap>
    <Sw.Slide class="w-full h-full bg-slate-900 flex items-center justify-center text-white">HD Slide 1</Sw.Slide>
    <Sw.Slide class="w-full h-full bg-slate-800 flex items-center justify-center text-white">HD Slide 2</Sw.Slide>
    <Sw.Slide class="w-full h-full bg-slate-700 flex items-center justify-center text-white">HD Slide 3</Sw.Slide>
  </Sw.Wrap>
  <Sw.Prev />
  <Sw.Next />
</Sw>

<!-- Linked Thumbnails Row -->
<Sw
  spaceBetween={10}
  slidesPerView={4}
  freeMode={true}
  watchSlidesProgress={true}
  class="gallery-thumbs w-full max-w-4xl mx-auto h-24"
>
  <Sw.Wrap>
    <Sw.Slide class="rounded-xl overflow-hidden opacity-40 [&.swiper-slide-thumb-active]:opacity-100 cursor-pointer border-2 border-transparent [&.swiper-slide-thumb-active]:border-indigo-500 transition-all">
      <div class="w-full h-full bg-slate-900 flex items-center justify-center text-xs text-white">Thumb 1</div>
    </Sw.Slide>
    <Sw.Slide class="rounded-xl overflow-hidden opacity-40 [&.swiper-slide-thumb-active]:opacity-100 cursor-pointer border-2 border-transparent [&.swiper-slide-thumb-active]:border-indigo-500 transition-all">
      <div class="w-full h-full bg-slate-800 flex items-center justify-center text-xs text-white">Thumb 2</div>
    </Sw.Slide>
    <Sw.Slide class="rounded-xl overflow-hidden opacity-40 [&.swiper-slide-thumb-active]:opacity-100 cursor-pointer border-2 border-transparent [&.swiper-slide-thumb-active]:border-indigo-500 transition-all">
      <div class="w-full h-full bg-slate-700 flex items-center justify-center text-xs text-white">Thumb 3</div>
    </Sw.Slide>
  </Sw.Wrap>
</Sw>
```

---

### 🔹 Example 6: 3D Cube & Flip Effects
```astro
---
import Sw from 'astro-swiper-zosei';
---

<!-- 3D Cube -->
<Sw
  effect="cube"
  grabCursor={true}
  cubeEffect={{
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  }}
  pagination={true}
  class="w-72 h-72 mx-auto"
>
  <Sw.Wrap>
    <Sw.Slide class="bg-indigo-600 text-white flex items-center justify-center text-2xl font-bold">Face 1</Sw.Slide>
    <Sw.Slide class="bg-purple-600 text-white flex items-center justify-center text-2xl font-bold">Face 2</Sw.Slide>
    <Sw.Slide class="bg-cyan-600 text-white flex items-center justify-center text-2xl font-bold">Face 3</Sw.Slide>
    <Sw.Slide class="bg-amber-600 text-white flex items-center justify-center text-2xl font-bold">Face 4</Sw.Slide>
  </Sw.Wrap>
  <Sw.Pag />
</Sw>
```

---

### 🔹 Example 7: Free Mode, Mousewheel & Draggable Scrollbar
```astro
---
import Sw from 'astro-swiper-zosei';
---

<Sw
  slidesPerView="auto"
  spaceBetween={16}
  freeMode={{ enabled: true, momentum: true }}
  mousewheel={{ forceToAxis: true }}
  scrollbar={{ draggable: true }}
  class="w-full py-6"
>
  <Sw.Wrap>
    <Sw.Slide class="!w-64 h-48 rounded-2xl bg-slate-900 p-4 text-white flex flex-col justify-end">Card A</Sw.Slide>
    <Sw.Slide class="!w-64 h-48 rounded-2xl bg-slate-900 p-4 text-white flex flex-col justify-end">Card B</Sw.Slide>
    <Sw.Slide class="!w-64 h-48 rounded-2xl bg-slate-900 p-4 text-white flex flex-col justify-end">Card C</Sw.Slide>
    <Sw.Slide class="!w-64 h-48 rounded-2xl bg-slate-900 p-4 text-white flex flex-col justify-end">Card D</Sw.Slide>
  </Sw.Wrap>
  <Sw.Scroll />
</Sw>
```

---

## ⚙️ 3. Complete Props & Options Reference

Every single standard prop from Swiper.js is accepted directly or via the `options={{ ... }}` prop.

### Core Props
- **`direction`**: `'horizontal' | 'vertical'` (default: `'horizontal'`).
- **`slidesPerView`**: `number | 'auto'` (default: `1`).
- **`spaceBetween`**: `number` (px space between slides, default: `0`).
- **`loop`**: `boolean` (infinite continuous loop, default: `false`).
- **`rewind`**: `boolean` (rewind back to first slide when reaching end, default: `false`).
- **`speed`**: `number` (transition duration in ms, default: `300`).
- **`effect`**: `'slide' | 'fade' | 'cube' | 'coverflow' | 'flip' | 'cards' | 'creative'` (default: `'slide'`).
- **`centeredSlides`**: `boolean` (center active slide in viewport, default: `false`).
- **`autoHeight`**: `boolean` (dynamically adapt container height to active slide, default: `false`).
- **`grabCursor`**: `boolean` (show hand cursor on hover, default: `false`).
- **`breakpoints`**: `Record<number, SwiperOptions>` (responsive configurations by screen width).

### Auxiliary Modules Props
- **`autoplay`**: `boolean | { delay: number, pauseOnMouseEnter?: boolean, disableOnInteraction?: boolean }`
- **`navigation`**: `boolean | { nextEl?: string, prevEl?: string, hideOnClick?: boolean }`
- **`pagination`**: `boolean | { el?: string, clickable?: boolean, dynamicBullets?: boolean, type?: 'bullets' | 'fraction' | 'progressbar' }`
- **`scrollbar`**: `boolean | { el?: string, draggable?: boolean, hide?: boolean }`
- **`freeMode`**: `boolean | { enabled?: boolean, momentum?: boolean, sticky?: boolean }`
- **`mousewheel`**: `boolean | { forceToAxis?: boolean, invert?: boolean, sensitivity?: number }`
- **`keyboard`**: `boolean | { enabled?: boolean, onlyInViewport?: boolean }`
- **`zoom`**: `boolean | { maxRatio?: number, minRatio?: number, toggle?: boolean }`
- **`grid`**: `{ rows: number, fill?: 'row' | 'column' }`
- **`thumbs`**: `string | { swiper?: string | SwiperInstance }`

### Performance & Lazy Loading
- **`lazyInit`**: `boolean` (initializes Swiper only when it enters the viewport using IntersectionObserver).
- **`pauseWhenHidden`**: `boolean` (pauses autoplay when the slider scrolls out of view).
- **`options`**: `AstroSwiperOptions` (pass raw vanilla Swiper.js configuration objects directly).

---

## 🎨 4. Custom Styling with Tailwind CSS v4

All auxiliary components support built-in Tailwind v4 styling props:

- **`<Sw.Pag variant="pills" | "dots" | "dynamic" | "fraction" | "progressbar" color="indigo" | "purple" | "cyan" | "white" />`**
- **`<Sw.Prev variant="glass" | "solid" | "minimal" | "floating" color="white" | "indigo" | "cyan" size="sm" | "md" | "lg" />`**
- **`<Sw.Next variant="glass" | "solid" | "minimal" | "floating" color="white" | "indigo" | "cyan" size="sm" | "md" | "lg" />`**

No external `.css` files are needed. Everything is self-contained and pre-styled.
