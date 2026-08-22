#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

try {
  const targetRoot = process.env.INIT_CWD || process.cwd();

  const isInternalDev =
    fs.existsSync(path.join(targetRoot, 'pnpm-workspace.yaml')) ||
    (fs.existsSync(path.join(targetRoot, 'packages', 'astro-swiper-zosei')) &&
     fs.existsSync(path.join(targetRoot, 'docs')));

  const isInsideNodeModules = targetRoot.includes('node_modules');

  if (isInternalDev || isInsideNodeModules) {
    process.exit(0);
  }

  const agentsDir = path.join(targetRoot, 'AGENTS');
  if (!fs.existsSync(agentsDir)) {
    fs.mkdirSync(agentsDir, { recursive: true });
  }

  const sourceDoc = path.join(__dirname, '..', 'AGENTS', 'README.md');
  const targetDoc = path.join(agentsDir, 'astro-swiper-zosei.md');

  if (fs.existsSync(sourceDoc)) {
    fs.copyFileSync(sourceDoc, targetDoc);
  }
} catch (e) {
  process.exit(0);
}
