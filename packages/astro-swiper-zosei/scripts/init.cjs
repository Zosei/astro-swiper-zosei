#!/usr/bin/env node

/**
 * CLI Interactivo estilo Astro para astro-swiper-zosei
 * Inspirado en @clack/prompts con cajas unicode, colores y generador de componentes.
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Colores ANSI estilo Astro CLI
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

function getProjectRoot() {
  if (process.env.INIT_CWD) {
    const isMonorepo = fs.existsSync(path.join(process.env.INIT_CWD, 'pnpm-workspace.yaml'));
    if (!isMonorepo) return process.env.INIT_CWD;
  }
  let current = path.resolve(process.cwd());
  while (current && current !== path.parse(current).root) {
    if (path.basename(current) === 'node_modules') {
      const parent = path.dirname(current);
      if (!parent.includes('node_modules') && fs.existsSync(path.join(parent, 'package.json'))) {
        return parent;
      }
    }
    current = path.dirname(current);
  }
  return process.cwd();
}

function createAgentDoc(root) {
  const agentsDir = path.join(root, 'AGENTS');
  if (!fs.existsSync(agentsDir)) {
    fs.mkdirSync(agentsDir, { recursive: true });
  }

  const targetFile = path.join(agentsDir, 'astro-swiper-zosei.md');
  const sourceFile = path.join(__dirname, '..', 'AGENTS', 'README.md');

  if (fs.existsSync(sourceFile)) {
    fs.copyFileSync(sourceFile, targetFile);
  } else {
    const fallbackPath = path.join(__dirname, '../../docs/AGENTS/astro-swiper-zosei.md');
    if (fs.existsSync(fallbackPath)) {
      fs.copyFileSync(fallbackPath, targetFile);
    }
  }

  return targetFile;
}

const TEMPLATES = {
  hero: `---
import Sw from 'astro-swiper-zosei';
---

<Sw preset="hero" class="w-full h-[550px] rounded-3xl overflow-hidden shadow-2xl relative">
  <Sw.Wrap>
    <Sw.Slide class="w-full h-full bg-gradient-to-br from-indigo-900 via-slate-900 to-black flex items-center justify-center p-8">
      <div class="text-center max-w-xl">
        <h2 class="text-4xl font-extrabold text-white mb-3">Slide 1: Experiencia Increíble</h2>
        <p class="text-slate-300 text-lg">Construido con Astro 7+ y Tailwind CSS v4.</p>
      </div>
    </Sw.Slide>
    <Sw.Slide class="w-full h-full bg-gradient-to-br from-purple-900 via-slate-900 to-black flex items-center justify-center p-8">
      <div class="text-center max-w-xl">
        <h2 class="text-4xl font-extrabold text-white mb-3">Slide 2: Efecto Fade Fluido</h2>
        <p class="text-slate-300 text-lg">Optimizado con Intersection Observer.</p>
      </div>
    </Sw.Slide>
  </Sw.Wrap>

  <!-- Controles interactivos -->
  <Sw.Prev variant="glass" />
  <Sw.Next variant="glass" />
  <Sw.Pag variant="pills" color="indigo" />
  <Sw.Toggle position="top-right" />
  <Sw.Count position="top-left" />
  <Sw.Full position="bottom-right" />
</Sw>
`,
  cards: `---
import Sw from 'astro-swiper-zosei';
---

<Sw preset="cards" class="w-72 sm:w-80 h-96 mx-auto py-8">
  <Sw.Wrap>
    <Sw.Slide class="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-indigo-600 to-purple-800 flex items-center justify-center p-6 text-white text-2xl font-bold">
      Tarjeta 1
    </Sw.Slide>
    <Sw.Slide class="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-cyan-600 to-blue-800 flex items-center justify-center p-6 text-white text-2xl font-bold">
      Tarjeta 2
    </Sw.Slide>
    <Sw.Slide class="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-rose-600 to-orange-800 flex items-center justify-center p-6 text-white text-2xl font-bold">
      Tarjeta 3
    </Sw.Slide>
  </Sw.Wrap>
</Sw>
`,
  marquee: `---
import Sw from 'astro-swiper-zosei';
---

<Sw preset="marquee" class="w-full py-6 bg-slate-900/50 backdrop-blur-md rounded-2xl border border-white/10">
  <Sw.Wrap>
    <Sw.Slide class="!w-40 flex items-center justify-center p-4 font-bold text-slate-300 text-lg">Marca Alfa</Sw.Slide>
    <Sw.Slide class="!w-40 flex items-center justify-center p-4 font-bold text-slate-300 text-lg">Marca Beta</Sw.Slide>
    <Sw.Slide class="!w-40 flex items-center justify-center p-4 font-bold text-slate-300 text-lg">Marca Gamma</Sw.Slide>
    <Sw.Slide class="!w-40 flex items-center justify-center p-4 font-bold text-slate-300 text-lg">Marca Delta</Sw.Slide>
    <Sw.Slide class="!w-40 flex items-center justify-center p-4 font-bold text-slate-300 text-lg">Marca Epsilon</Sw.Slide>
  </Sw.Wrap>
</Sw>
`,
  testimonials: `---
import Sw from 'astro-swiper-zosei';
---

<Sw preset="testimonials" class="w-full max-w-6xl mx-auto py-10">
  <Sw.Wrap>
    <Sw.Slide class="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl flex flex-col justify-between">
      <p class="text-slate-300 text-base mb-6 leading-relaxed">"La mejor librería de carruseles para Astro. Cero configuración compleja y rendimiento impecable."</p>
      <div>
        <h4 class="font-bold text-white">Carlos Dev</h4>
        <span class="text-xs text-indigo-400">Frontend Architect</span>
      </div>
    </Sw.Slide>
    <Sw.Slide class="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl flex flex-col justify-between">
      <p class="text-slate-300 text-base mb-6 leading-relaxed">"Los presets y la sintaxis corta &lt;Sw&gt; nos ahorraron horas de desarrollo."</p>
      <div>
        <h4 class="font-bold text-white">María Luna</h4>
        <span class="text-xs text-indigo-400">Tech Lead</span>
      </div>
    </Sw.Slide>
  </Sw.Wrap>
  <Sw.Pag variant="dynamic" color="purple" class="mt-8" />
</Sw>
`,
};

function addTemplate(templateName) {
  const root = getProjectRoot();
  const validNames = Object.keys(TEMPLATES);
  const targetName = templateName ? templateName.toLowerCase() : 'hero';

  if (!validNames.includes(targetName)) {
    console.log(`\n${c.yellow}⚠️ Plantilla "${templateName}" no encontrada.${c.reset}`);
    console.log(`Plantillas disponibles: ${c.cyan}${validNames.join(', ')}${c.reset}\n`);
    process.exit(1);
  }

  const componentsDir = path.join(root, 'src', 'components');
  if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir, { recursive: true });
  }

  const fileName = `${targetName.charAt(0).toUpperCase() + targetName.slice(1)}Carousel.astro`;
  const targetPath = path.join(componentsDir, fileName);

  fs.writeFileSync(targetPath, TEMPLATES[targetName], 'utf8');

  console.log(`\n${c.magenta}┌${c.reset}  ${c.bold}${c.cyan}🌌 Astro Swiper Zosei${c.reset} ${c.dim}— Component Generator${c.reset}`);
  console.log(`${c.magenta}│${c.reset}`);
  console.log(`${c.magenta}├${c.reset}  ${c.green}✔${c.reset}  Componente creado en: ${c.cyan}./src/components/${fileName}${c.reset}`);
  console.log(`${c.magenta}│${c.reset}     ${c.dim}Plantilla: preset="${targetName}" con Tailwind CSS v4.${c.reset}`);
  console.log(`${c.magenta}│${c.reset}`);
  console.log(`${c.magenta}└${c.reset}  ${c.green}🚀 ¡Úsalo en tus páginas con: import ${fileName.replace('.astro', '')} from '../components/${fileName}';${c.reset}\n`);
}

async function runCli() {
  const args = process.argv.slice(2);
  if (args[0] === 'add') {
    addTemplate(args[1] || 'hero');
    return;
  }

  const root = getProjectRoot();

  // Omitir en desarrollo interno del monorepo
  if (fs.existsSync(path.join(root, 'pnpm-workspace.yaml')) && root.includes('astro-swiper-zosei')) {
    process.exit(0);
  }

  if (!process.stdin.isTTY) {
    createAgentDoc(root);
    process.exit(0);
  }

  console.log(`\n${c.magenta}┌${c.reset}  ${c.bold}${c.cyan}🌌 Astro Swiper Zosei${c.reset} ${c.dim}v0.15.0 — Asistente de Configuración para IA${c.reset}`);
  console.log(`${c.magenta}│${c.reset}`);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const question = (query) => new Promise((resolve) => rl.question(query, resolve));

  try {
    const answer = await question(
      `${c.magenta}◇${c.reset}  ¿Deseas generar la documentación para Agentes IA en ${c.cyan}./AGENTS/${c.reset}? ${c.dim}(Y/n)${c.reset}: `
    );

    const clean = answer.trim().toLowerCase();
    const isYes = clean === '' || clean === 'y' || clean === 's' || clean === 'yes' || clean === 'si';

    if (isYes) {
      const filePath = createAgentDoc(root);
      const relativePath = path.relative(process.cwd(), filePath) || './AGENTS/astro-swiper-zosei.md';

      console.log(`${c.magenta}│${c.reset}`);
      console.log(`${c.magenta}├${c.reset}  ${c.green}✔${c.reset}  ${c.bold}Guía de IA creada con éxito en:${c.reset} ${c.cyan}${relativePath}${c.reset}`);
      console.log(`${c.magenta}│${c.reset}     ${c.dim}Compatible con Cursor, Windsurf, Claude, Copilot, ChatGPT y Antigravity.${c.reset}`);
      console.log(`${c.magenta}│${c.reset}`);
      console.log(`${c.magenta}├${c.reset}  ${c.yellow}⭐ ¡Muchas gracias por elegir Astro Swiper Zosei!${c.reset}`);
      console.log(`${c.magenta}│${c.reset}     ${c.dim}🌐 Documentación & 50+ Demos en vivo:${c.reset} ${c.cyan}https://zosei.github.io/astro-swiper-zosei/${c.reset}`);
      console.log(`${c.magenta}│${c.reset}     ${c.dim}🌟 Apóyanos con una estrella en GitHub:${c.reset} ${c.cyan}https://github.com/Zosei/astro-swiper-zosei${c.reset}`);
      console.log(`${c.magenta}│${c.reset}`);
      console.log(`${c.magenta}└${c.reset}  ${c.green}🚀 ¡Todo listo para crear experiencias visuales increíbles en Astro!${c.reset}\n`);
    } else {
      console.log(`${c.magenta}│${c.reset}`);
      console.log(`${c.magenta}└${c.reset}  ${c.yellow}ℹ  Generación de documentación omitida.${c.reset}\n`);
    }
  } catch (err) {
    createAgentDoc(root);
  } finally {
    rl.close();
  }
}

runCli();
