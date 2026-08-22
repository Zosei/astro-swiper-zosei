# 🤖 ASTRO SWIPER ZOSEI — AI AGENT SYSTEM GUIDE

> **Instruction for AI Coding Assistants (Cursor, Windsurf, Claude, Copilot, Antigravity, ChatGPT, Gemini, v0)**:
> This file contains the complete syntax reference, rules, and best practices for generating modern carousels and sliders in **Astro 5+ & 7+** using `astro-swiper-zosei`.

---

## ⚡ 1. Golden Rules for AI Agents

1. **Use Single Import Pattern (`Sw`)**:
   Always prefer importing `Sw` directly:
   ```astro
   ---
   import { Sw } from 'astro-swiper-zosei';
   ---
   ```
2. **100% Declarative via Props**:
   **NEVER write manual client `<script>` tags to initialize Swiper**. All Swiper parameters (`slidesPerView`, `spaceBetween`, `loop`, `autoplay`, `effect`, `navigation`, `pagination`, `breakpoints`, `thumbs`) MUST be passed as direct Astro component props to `<Sw>`.
3. **Tailwind CSS v4 Native**:
   Do NOT import legacy `.css` files. Do NOT use `<style>` blocks. Use Tailwind CSS utility classes on `<Sw>`, `<Sw.Wrap>`, and `<Sw.Slide>`.
4. **Required Structure**:
   `<Sw>` MUST wrap `<Sw.Wrap>`, which in turn MUST wrap `<Sw.Slide>` items.

---

## 📋 2. Component Reference & Aliases

| AI Component Name | Purpose | Usage Example |
| :--- | :--- | :--- |
| `<Sw>` | Root Carousel Container | `<Sw slidesPerView={3} spaceBetween={16} loop>` |
| `<Sw.Wrap>` | Slide Track Container | `<Sw.Wrap>...</Sw.Wrap>` |
| `<Sw.Slide>` | Individual Slide Element | `<Sw.Slide class="h-64 rounded-2xl bg-zinc-800 text-white">Slide 1</Sw.Slide>` |
| `<Sw.Prev>` | Previous Navigation Button | `<Sw.Prev variant="glass" size="md" color="indigo" />` |
| `<Sw.Next>` | Next Navigation Button | `<Sw.Next variant="glass" size="md" color="indigo" />` |
| `<Sw.Pag>` | Pagination Indicator | `<Sw.Pag variant="pills" color="indigo" />` |
| `<Sw.Scroll>` | Scrollbar Element | `<Sw.Scroll color="indigo" />` |
| `<Sw.Lazy>` | SVG Lazy Load Preloader | `<Sw.Lazy color="indigo" />` |

---

## 🚀 3. Canonical Patterns

### A. Responsive Carousel with Navigation & Pagination
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
  class="w-full max-w-6xl mx-auto py-6"
>
  <Sw.Wrap>
    <Sw.Slide class="h-72 rounded-3xl bg-slate-900 border border-slate-800 text-white flex items-center justify-center text-xl font-bold">
      Card 1
    </Sw.Slide>
    <Sw.Slide class="h-72 rounded-3xl bg-slate-900 border border-slate-800 text-white flex items-center justify-center text-xl font-bold">
      Card 2
    </Sw.Slide>
    <Sw.Slide class="h-72 rounded-3xl bg-slate-900 border border-slate-800 text-white flex items-center justify-center text-xl font-bold">
      Card 3
    </Sw.Slide>
  </Sw.Wrap>
  <Sw.Prev />
  <Sw.Next />
  <Sw.Pag />
</Sw>
```

---

### B. Autoplay with CPU-Saving Intersection Observer
```astro
---
import { Sw } from 'astro-swiper-zosei';
---

<Sw
  autoplay={{ delay: 3500, pauseOnMouseEnter: true }}
  pauseWhenHidden={true}
  loop={true}
  pagination={{ clickable: true }}
  class="w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl"
>
  <Sw.Wrap>
    <Sw.Slide class="h-80 bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-center text-2xl font-bold">
      Hero Slide 1
    </Sw.Slide>
    <Sw.Slide class="h-80 bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center text-2xl font-bold">
      Hero Slide 2
    </Sw.Slide>
  </Sw.Wrap>
  <Sw.Pag />
</Sw>
```

---

### C. 3D Cards Stack Effect
```astro
---
import { Sw } from 'astro-swiper-zosei';
---

<Sw effect="cards" grabCursor={true} class="w-64 h-96 mx-auto my-8">
  <Sw.Wrap>
    <Sw.Slide class="rounded-3xl bg-indigo-600 text-white p-6 shadow-2xl flex flex-col justify-end">
      <h3 class="text-xl font-bold">Interactive Card 1</h3>
    </Sw.Slide>
    <Sw.Slide class="rounded-3xl bg-purple-600 text-white p-6 shadow-2xl flex flex-col justify-end">
      <h3 class="text-xl font-bold">Interactive Card 2</h3>
    </Sw.Slide>
    <Sw.Slide class="rounded-3xl bg-pink-600 text-white p-6 shadow-2xl flex flex-col justify-end">
      <h3 class="text-xl font-bold">Interactive Card 3</h3>
    </Sw.Slide>
  </Sw.Wrap>
</Sw>
```

---

### D. Synced Main Carousel with Thumbnail Track
```astro
---
import { Sw } from 'astro-swiper-zosei';
---

<!-- Main Carousel -->
<Sw thumbs="#my-thumbs-track" navigation loop class="w-full max-w-4xl mx-auto mb-4">
  <Sw.Wrap>
    <Sw.Slide class="h-96 rounded-3xl bg-slate-900 text-white flex items-center justify-center">Main Slide 1</Sw.Slide>
    <Sw.Slide class="h-96 rounded-3xl bg-slate-900 text-white flex items-center justify-center">Main Slide 2</Sw.Slide>
  </Sw.Wrap>
  <Sw.Prev />
  <Sw.Next />
</Sw>

<!-- Thumbnail Track -->
<Sw id="my-thumbs-track" slidesPerView={4} spaceBetween={12} freeMode watchSlidesProgress class="w-full max-w-4xl mx-auto">
  <Sw.Wrap>
    <Sw.Slide class="h-24 rounded-2xl bg-slate-800 text-white flex items-center justify-center cursor-pointer">Thumb 1</Sw.Slide>
    <Sw.Slide class="h-24 rounded-2xl bg-slate-800 text-white flex items-center justify-center cursor-pointer">Thumb 2</Sw.Slide>
  </Sw.Wrap>
</Sw>
```

---

## ⚙️ 4. Complete Props Reference Cheat-Sheet

- **`slidesPerView`**: `number | 'auto'` (default: `1`)
- **`spaceBetween`**: `number` in pixels (gap between slides)
- **`direction`**: `'horizontal' | 'vertical'`
- **`loop`**: `boolean` (infinite continuous loop)
- **`rewind`**: `boolean` (smooth return to slide 1 upon reaching end)
- **`speed`**: `number` in ms (animation transition duration)
- **`effect`**: `'slide' | 'fade' | 'cube' | 'coverflow' | 'flip' | 'cards' | 'creative'`
- **`autoplay`**: `boolean | { delay: number, pauseOnMouseEnter: boolean, disableOnInteraction: boolean }`
- **`pauseWhenHidden`**: `boolean` (auto-pauses autoplay via IntersectionObserver when off-screen)
- **`lazyInit`**: `boolean` (defers Swiper instance initialization until container enters viewport)
- **`grabCursor`**: `boolean` (displays drag hand cursor)
- **`centeredSlides`**: `boolean` (keeps active slide in center of track)
- **`breakpoints`**: `Record<number, SwiperOptions>` (responsive screen width breakpoints)
- **`thumbs`**: `string` (CSS selector pointing to synced thumbnail slider)
