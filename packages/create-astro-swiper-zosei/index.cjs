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
  const content = `# 🤖 ASTRO SWIPER ZOSEI — AI AGENT SYSTEM GUIDE

> **Instruction for AI Coding Assistants (Cursor, Windsurf, Claude, Copilot, Antigravity, ChatGPT, Gemini, v0)**:
> This file contains the complete syntax reference, rules, and best practices for generating modern carousels and sliders in **Astro 5+ & 7+** using \`astro-swiper-zosei\`.

---

## ⚡ 1. Golden Rules for AI Agents

1. **Use Single Import Pattern (\`Sw\`)**:
   Always prefer the concise compound component:
   \`\`\`astro
   ---
   import Sw from 'astro-swiper-zosei';
   ---
   \`\`\`

2. **Subcomponents Reference**:
   - \`<Sw.Wrap>\`: Slides wrapper container (\`.swiper-wrapper\`).
   - \`<Sw.Slide>\`: Individual slide container (\`.swiper-slide\`).
   - \`<Sw.Prev />\`: Accessible previous slide button.
   - \`<Sw.Next />\`: Accessible next slide button.
   - \`<Sw.Pag />\`: Pagination container (bullets / progress / fraction).
   - \`<Sw.Scroll />\`: Draggable scrollbar.
   - \`<Sw.Lazy />\`: Smooth loading spinner.

---

## 🚀 2. Standard Carousel Example

\`\`\`astro
---
import Sw from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
---

<Sw
  slidesPerView={1}
  spaceBetween={20}
  loop={true}
  navigation={true}
  pagination={{ clickable: true }}
  breakpoints={{
    640: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 30 }
  }}
  class="w-full max-w-5xl mx-auto py-8"
>
  <Sw.Wrap>
    <Sw.Slide class="rounded-2xl overflow-hidden shadow-xl aspect-video bg-slate-900 flex items-center justify-center">
      <span class="text-2xl font-bold text-white">Slide 1</span>
    </Sw.Slide>
    <Sw.Slide class="rounded-2xl overflow-hidden shadow-xl aspect-video bg-slate-900 flex items-center justify-center">
      <span class="text-2xl font-bold text-white">Slide 2</span>
    </Sw.Slide>
    <Sw.Slide class="rounded-2xl overflow-hidden shadow-xl aspect-video bg-slate-900 flex items-center justify-center">
      <span class="text-2xl font-bold text-white">Slide 3</span>
    </Sw.Slide>
  </Sw.Wrap>

  <!-- Optional Navigation & Pagination -->
  <Sw.Prev />
  <Sw.Next />
  <Sw.Pag />
</Sw>
\`\`\`
`;
  fs.writeFileSync(targetFile, content, 'utf8');
  return targetFile;
}

async function main() {
  const root = process.cwd();

  console.log(`\n${c.magenta}┌${c.reset}  ${c.bold}${c.cyan}🌌 Create Astro Swiper Zosei${c.reset} ${c.dim}v0.14.6${c.reset}`);
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
