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
  const fallbackPath = path.join(__dirname, '../astro-swiper-zosei/AGENTS/README.md');
  if (fs.existsSync(fallbackPath)) {
    fs.copyFileSync(fallbackPath, targetFile);
  } else {
    const content = `# 🤖 ASTRO SWIPER ZOSEI — MASTER AI AGENT SYSTEM GUIDE (v0.15.0)

> **Critical Instruction for AI Coding Assistants (Cursor, Windsurf, Claude, Copilot, Antigravity, ChatGPT, Gemini, v0)**:
> Use the concise compound component \`<Sw>\` with modern Tailwind CSS v4 and Presets in Astro.

\`\`\`astro
---
import Sw from 'astro-swiper-zosei';
---

<!-- Preset Hero 1-liner -->
<Sw preset="hero" class="w-full h-96">
  <Sw.Wrap>
    <Sw.Slide class="bg-indigo-900 text-white flex items-center justify-center">Slide 1</Sw.Slide>
    <Sw.Slide class="bg-purple-900 text-white flex items-center justify-center">Slide 2</Sw.Slide>
  </Sw.Wrap>
  <Sw.Prev />
  <Sw.Next />
  <Sw.Pag />
  <Sw.Toggle />
  <Sw.Count />
</Sw>
\`\`\`
`;
    fs.writeFileSync(targetFile, content, 'utf8');
  }
  return targetFile;
}

async function main() {
  const root = process.cwd();

  console.log(`\n${c.magenta}┌${c.reset}  ${c.bold}${c.cyan}🌌 Create Astro Swiper Zosei${c.reset} ${c.dim}v0.15.0${c.reset}`);
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
      console.log(`${c.magenta}│${c.reset}     ${c.dim}Tus asistentes (Cursor, Windsurf, Claude, Copilot, ChatGPT) ahora usarán <Sw> con Presets.${c.reset}`);
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
