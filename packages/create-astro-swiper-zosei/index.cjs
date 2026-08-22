#!/usr/bin/env node

/**
 * Interactive CLI for `npm create astro-swiper-zosei` / `pnpm create astro-swiper-zosei`
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const c = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  magenta: '\x1b[35m',
  gray: '\x1b[90m',
  white: '\x1b[37m',
};

function createAgentDoc(root) {
  const agentsDir = path.join(root, 'AGENTS');
  if (!fs.existsSync(agentsDir)) {
    fs.mkdirSync(agentsDir, { recursive: true });
  }

  const targetFile = path.join(agentsDir, 'astro-swiper-zosei.md');
  const content = `# 🤖 ASTRO SWIPER ZOSEI — MASTER AI AGENT SYSTEM GUIDE

> **Critical Instruction for AI Coding Assistants (Cursor, Windsurf, Claude, Copilot, Antigravity, ChatGPT, Gemini, v0)**:
> This document is the definitive technical manual for generating responsive, accessible, high-performance sliders and carousels in **Astro 5+ & 7+** using **\`astro-swiper-zosei\`** and **Tailwind CSS v4**.

---

## ⚡ 1. The Golden Rule: Concise Compound Component (\`<Sw>\`)

Always import and use the single unified compound component **\`Sw\`**:

\`\`\`astro
---
import Sw from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
---
\`\`\`

### Component Hierarchy & Subcomponents

| Component | Technical Alias | Traditional Name | Purpose |
| :--- | :--- | :--- | :--- |
| \`<Sw>\` | \`<Swiper>\` | \`<Container>\` | Main container (creates swiper instance and handles all configuration) |
| \`<Sw.Wrap>\` | \`<Sw.W>\` | \`<SwiperWrapper>\` | Slides wrapper container (\`.swiper-wrapper\`) |
| \`<Sw.Slide>\` | \`<Sw.S>\` | \`<SwiperSlide>\` | Individual slide element (\`.swiper-slide\`) |
| \`<Sw.Prev />\` | \`<Sw.P />\` | \`<ButtonPrev />\` | Accessible Previous slide button |
| \`<Sw.Next />\` | \`<Sw.N />\` | \`<ButtonNext />\` | Accessible Next slide button |
| \`<Sw.Pag />\` | \`<SwiperPagination />\` | \`<Pagination />\` | Pagination bullets, numbers or progress bar |
| \`<Sw.Scroll />\` | \`<SwiperScrollbar />\` | \`<Scrollbar />\` | Interactive draggable scrollbar |
| \`<Sw.Lazy />\` | \`<SwiperLazyPreloader />\` | \`<LazyPreloader />\` | High-performance CSS preloader spinner |

---

## 🚀 2. Code Patterns & Real-World Examples

### 🔹 Example 1: Standard Responsive Carousel with Astro Image
\`\`\`astro
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
\`\`\`

---

### 🔹 Example 2: 3D Cards Effect
\`\`\`astro
---
import Sw from 'astro-swiper-zosei';
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
\`\`\`

---

### 🔹 Example 3: 3D Coverflow Effect
\`\`\`astro
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
\`\`\`

---

## ⚙️ 3. Props & Options Pass-Through

All standard Swiper.js options are accepted directly as props or via \`options={{ ... }}\`:
- Core: \`direction\`, \`slidesPerView\`, \`spaceBetween\`, \`loop\`, \`rewind\`, \`speed\`, \`effect\`, \`centeredSlides\`, \`autoHeight\`, \`grabCursor\`, \`breakpoints\`.
- Modules: \`autoplay\`, \`navigation\`, \`pagination\`, \`scrollbar\`, \`freeMode\`, \`mousewheel\`, \`keyboard\`, \`zoom\`, \`grid\`, \`thumbs\`.
- Performance: \`lazyInit={true}\`, \`pauseWhenHidden={true}\`.
`;
  fs.writeFileSync(targetFile, content, 'utf8');
  return targetFile;
}

async function main() {
  const root = process.cwd();

  console.log(`\n${c.magenta}┌${c.reset}  ${c.bold}${c.cyan}🌌 Create Astro Swiper Zosei${c.reset} ${c.dim}v0.14.7${c.reset}`);
  console.log(`${c.magenta}│${c.reset}`);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const question = (query) => new Promise((resolve) => rl.question(query, resolve));

  try {
    const answer = await question(
      `${c.magenta}◇${c.reset}  ¿Deseas inicializar la documentación para Agentes IA en ${c.cyan}./AGENTS/${c.reset}? ${c.dim}(Y/n)${c.reset}: `
    );

    const clean = answer.trim().toLowerCase();
    const isYes = clean === '' || clean === 'y' || clean === 's' || clean === 'yes' || clean === 'si';

    if (isYes) {
      const filePath = createAgentDoc(root);
      const relativePath = path.relative(process.cwd(), filePath) || './AGENTS/astro-swiper-zosei.md';

      console.log(`${c.magenta}│${c.reset}`);
      console.log(`${c.magenta}├${c.reset}  ${c.green}✔${c.reset}  ${c.bold}Guía de IA creada con éxito en:${c.reset} ${c.cyan}${relativePath}${c.reset}`);
      console.log(`${c.magenta}│${c.reset}     ${c.dim}Tus asistentes (Cursor, Windsurf, Claude, Copilot, ChatGPT) ahora usarán <Sw>.${c.reset}`);
      console.log(`${c.magenta}│${c.reset}`);
      console.log(`${c.magenta}├${c.reset}  ${c.yellow}⭐ ¡Muchas gracias por elegir Astro Swiper Zosei!${c.reset}`);
      console.log(`${c.magenta}│${c.reset}     ${c.dim}🌐 Documentación & 50+ Demos en vivo:${c.reset} ${c.cyan}https://zosei.github.io/astro-swiper-zosei/${c.reset}`);
      console.log(`${c.magenta}│${c.reset}     ${c.dim}🌟 Apóyanos con una estrella en GitHub:${c.reset} ${c.cyan}https://github.com/Zosei/astro-swiper-zosei${c.reset}`);
      console.log(`${c.magenta}│${c.reset}`);
      console.log(`${c.magenta}└${c.reset}  ${c.green}🚀 ¡Instala la dependencia con:${c.reset} ${c.bold}${c.cyan}pnpm add astro-swiper-zosei swiper${c.reset}\n`);
    } else {
      console.log(`${c.magenta}│${c.reset}`);
      console.log(`${c.magenta}└${c.reset}  ${c.yellow}ℹ  Inicialización omitida.${c.reset}\n`);
    }
  } catch (err) {
    createAgentDoc(root);
  } finally {
    rl.close();
  }
}

main();
