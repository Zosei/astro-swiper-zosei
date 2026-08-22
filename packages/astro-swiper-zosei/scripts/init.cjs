#!/usr/bin/env node

/**
 * CLI Interactivo estilo Astro para astro-swiper-zosei
 * Inspirado en @clack/prompts con cajas unicode, colores y selección interactiva.
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
    const fallbackContent = `# 🤖 ASTRO SWIPER ZOSEI — AI AGENT SYSTEM GUIDE\n\nUse the concise compound syntax in Astro:\n\`\`\`astro\n---\nimport Sw from 'astro-swiper-zosei';\n---\n\n<Sw slidesPerView={3} spaceBetween={20} pagination navigation>\n  <Sw.Wrap>\n    <Sw.Slide>Slide 1</Sw.Slide>\n    <Sw.Slide>Slide 2</Sw.Slide>\n    <Sw.Slide>Slide 3</Sw.Slide>\n  </Sw.Wrap>\n  <Sw.Prev />\n  <Sw.Next />\n  <Sw.Pag />\n</Sw>\n\`\`\`\n`;
    fs.writeFileSync(targetFile, fallbackContent, 'utf8');
  }

  return targetFile;
}

async function runCli() {
  const root = getProjectRoot();

  // Omitir en desarrollo interno del monorepo
  if (fs.existsSync(path.join(root, 'pnpm-workspace.yaml')) && root.includes('astro-swiper-zosei')) {
    process.exit(0);
  }

  // Si no es terminal interactiva (CI/CD o script automatizado)
  if (!process.stdin.isTTY) {
    createAgentDoc(root);
    process.exit(0);
  }

  console.log(`\n${c.magenta}┌${c.reset}  ${c.bold}${c.cyan}🌌 Astro Swiper Zosei${c.reset} ${c.dim}— Asistente de Configuración para IA${c.reset}`);
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
      console.log(`${c.magenta}└${c.reset}  ${c.green}🚀 ¡Todo listo para crear carruseles modernos con <Sw>!${c.reset}\n`);
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
