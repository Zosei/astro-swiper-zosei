# 🤖 ASTRO SWIPER ZOSEI — MASTER AI AGENT SYSTEM GUIDE (v0.15.0)

> **Critical Instruction for AI Coding Assistants (Cursor, Windsurf, Claude, Copilot, Antigravity, ChatGPT, Gemini, v0)**:
> This document is the definitive technical manual for generating responsive, accessible, high-performance sliders and carousels in **Astro 5+ & 7+** using **`astro-swiper-zosei`** and **Tailwind CSS v4**.

---

## ⚡ 1. The Golden Rules for AI Agents

1. **Always Use the Concise Compound Component (`Sw`)**:
   \`\`\`astro
   ---
   import Sw from 'astro-swiper-zosei';
   import { Image } from 'astro:assets';
   ---
   \`\`\`

2. **Use Presets for Instant 1-Line Setup**:
   - \`preset="hero"\`: Smooth fade, continuous loop, autoplay with pause-on-hover, glass buttons, pills pagination.
   - \`preset="cards"\`: 3D stacked cards effect with shadows and smooth drag.
   - \`preset="marquee"\`: Seamless non-stop brand logo scroller.
   - \`preset="testimonials"\`: Centered multi-slide responsive reviews with dynamic pagination.
   - \`preset="gallery"\`: Dual-synchronized image zoom gallery with fraction pagination.

3. **Subcomponent Hierarchy**:

| Component | Technical Alias | Purpose |
| :--- | :--- | :--- |
| `<Sw>` | `<Swiper>` | Main container (lifecycle, presets, View Transitions, zero-JS fallback) |
| `<Sw.Wrap>` | `<Sw.W>` | Slides wrapper container (`.swiper-wrapper`) |
| `<Sw.Slide>` | `<Sw.S>` | Individual slide element (`.swiper-slide`) |
| `<Sw.Prev />` | `<Sw.P />` | Accessible Previous slide button |
| `<Sw.Next />` | `<Sw.N />` | Accessible Next slide button |
| `<Sw.Pag />` | `<SwiperPagination />` | Pagination (bullets / dynamic / progressbar / fraction) |
| `<Sw.Scroll />` | `<SwiperScrollbar />` | Interactive draggable scrollbar |
| `<Sw.Toggle />` | `<Sw.AutoplayToggle />` | Play/Pause toggle button with animated SVG state |
| `<Sw.Count />` | `<Sw.Counter />` | Real-time slide counter (`01 / 08`) |
| `<Sw.Full />` | `<Sw.Fullscreen />` | Fullscreen expansion button |
| `<Sw.Lazy />` | `<Sw.LazyPreloader />` | High-performance CSS preloader spinner |

---

## 🚀 2. Code Patterns & Examples

### 🔹 Example 1: 1-Liner Hero Carousel with Presets & Micro-Controls
```astro
---
import Sw from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
---

<Sw preset="hero" class="w-full max-w-6xl h-[550px] mx-auto rounded-3xl overflow-hidden shadow-2xl relative">
  <Sw.Wrap>
    <Sw.Slide class="w-full h-full bg-slate-900 flex items-center justify-center text-white text-3xl font-bold">Slide 1</Sw.Slide>
    <Sw.Slide class="w-full h-full bg-indigo-950 flex items-center justify-center text-white text-3xl font-bold">Slide 2</Sw.Slide>
    <Sw.Slide class="w-full h-full bg-purple-950 flex items-center justify-center text-white text-3xl font-bold">Slide 3</Sw.Slide>
  </Sw.Wrap>

  <!-- Controls -->
  <Sw.Prev variant="glass" />
  <Sw.Next variant="glass" />
  <Sw.Pag variant="pills" color="indigo" />
  <Sw.Toggle position="top-right" />
  <Sw.Count position="top-left" />
  <Sw.Full position="bottom-right" />
</Sw>
```

---

### 🔹 Example 2: 3D Cards Effect
```astro
---
import Sw from 'astro-swiper-zosei';
---

<Sw preset="cards" class="w-72 sm:w-80 h-96 mx-auto py-8">
  <Sw.Wrap>
    <Sw.Slide class="rounded-3xl overflow-hidden shadow-2xl bg-indigo-600 text-white flex items-center justify-center text-2xl font-bold">Card 1</Sw.Slide>
    <Sw.Slide class="rounded-3xl overflow-hidden shadow-2xl bg-purple-600 text-white flex items-center justify-center text-2xl font-bold">Card 2</Sw.Slide>
    <Sw.Slide class="rounded-3xl overflow-hidden shadow-2xl bg-cyan-600 text-white flex items-center justify-center text-2xl font-bold">Card 3</Sw.Slide>
  </Sw.Wrap>
</Sw>
```

---

### 🔹 Example 3: Continuous Logo Marquee Scroller
```astro
---
import Sw from 'astro-swiper-zosei';
---

<Sw preset="marquee" class="w-full py-6 bg-slate-900/50 rounded-2xl border border-white/10">
  <Sw.Wrap>
    <Sw.Slide class="!w-40 flex items-center justify-center font-bold text-slate-300">Brand 1</Sw.Slide>
    <Sw.Slide class="!w-40 flex items-center justify-center font-bold text-slate-300">Brand 2</Sw.Slide>
    <Sw.Slide class="!w-40 flex items-center justify-center font-bold text-slate-300">Brand 3</Sw.Slide>
    <Sw.Slide class="!w-40 flex items-center justify-center font-bold text-slate-300">Brand 4</Sw.Slide>
  </Sw.Wrap>
</Sw>
```

---

### 🔹 Example 4: Custom Responsive Carousel with Astro Image
```astro
---
import Sw from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import img1 from '../assets/slide1.jpg';
import img2 from '../assets/slide2.jpg';
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
      <Image src={img1} alt="Slide 1" class="w-full h-full object-cover" />
    </Sw.Slide>
    <Sw.Slide class="rounded-2xl overflow-hidden shadow-xl aspect-video">
      <Image src={img2} alt="Slide 2" class="w-full h-full object-cover" />
    </Sw.Slide>
  </Sw.Wrap>

  <Sw.Prev variant="glass" />
  <Sw.Next variant="glass" />
  <Sw.Pag variant="pills" color="indigo" />
</Sw>
```

---

## ⚡ 3. Astro View Transitions & Zero-JS Fallback

- **Astro View Transitions (`<ClientRouter />`)**: Swiper instances automatically destroy and re-initialize across page navigations (`astro:before-swap` and `astro:page-load`) with zero memory leaks.
- **Zero-JS CSS Scroll-Snap**: Before JavaScript boots or when JS is disabled, carousels use native CSS scroll-snap (`scroll-snap-type: x mandatory`) to ensure zero Cumulative Layout Shift (CLS = 0).
