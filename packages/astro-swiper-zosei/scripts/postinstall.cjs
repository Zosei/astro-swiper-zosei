#!/usr/bin/env node

/**
 * Hook postinstall para astro-swiper-zosei
 * Crea automáticamente la carpeta AGENTS/ y el archivo astro-swiper-zosei.md
 * en la raíz del proyecto consumidor (donde el usuario ejecutó npm i / pnpm add).
 */

const fs = require('fs');
const path = require('path');

function getConsumerProjectRoot() {
  // 1. Prioridad: INIT_CWD proporcionado por npm/pnpm/yarn
  if (process.env.INIT_CWD) {
    const isMonorepo = fs.existsSync(path.join(process.env.INIT_CWD, 'pnpm-workspace.yaml'));
    if (!isMonorepo) {
      return process.env.INIT_CWD;
    }
  }

  // 2. Respaldo: Navegar hacia arriba saliendo de cualquier nivel de node_modules
  let currentDir = path.resolve(__dirname, '..');
  while (currentDir && currentDir !== path.parse(currentDir).root) {
    if (path.basename(currentDir) === 'node_modules') {
      const candidateRoot = path.dirname(currentDir);
      const isMonorepo = fs.existsSync(path.join(candidateRoot, 'pnpm-workspace.yaml'));
      if (!candidateRoot.includes('node_modules') && !isMonorepo && fs.existsSync(path.join(candidateRoot, 'package.json'))) {
        return candidateRoot;
      }
    }
    currentDir = path.dirname(currentDir);
  }

  return null;
}

try {
  const root = getConsumerProjectRoot();

  if (root) {
    const agentsDir = path.join(root, 'AGENTS');
    if (!fs.existsSync(agentsDir)) {
      fs.mkdirSync(agentsDir, { recursive: true });
    }

    const targetFile = path.join(agentsDir, 'astro-swiper-zosei.md');
    const sourceFile = path.join(__dirname, '..', 'AGENTS', 'README.md');

    if (fs.existsSync(sourceFile)) {
      fs.copyFileSync(sourceFile, targetFile);
    }
  }
} catch (e) {
  // Silencioso para no interrumpir el flujo del instalador
  process.exit(0);
}
