// Copyright (c) Zosei
// MIT License

const fs = require('fs');
const path = require('path');

try {
  // Find consuming project root (where node_modules is installed)
  const packageDir = path.resolve(__dirname, '..');
  const sourceAgentGuide = path.join(packageDir, 'AGENTS', 'README.md');

  if (!fs.existsSync(sourceAgentGuide)) {
    process.exit(0);
  }

  // Determine root project directory when installed as dependency
  let projectRoot = process.env.INIT_CWD || process.cwd();

  // Don't auto-create inside development monorepo itself
  if (
    projectRoot === packageDir ||
    fs.existsSync(path.join(projectRoot, 'pnpm-workspace.yaml')) ||
    fs.existsSync(path.join(projectRoot, 'packages', 'astro-swiper-zosei')) ||
    projectRoot.endsWith('astro-swiper-zosei')
  ) {
    process.exit(0);
  }

  const targetAgentDir = path.join(projectRoot, 'AGENTS');
  const targetAgentGuide = path.join(targetAgentDir, 'astro-swiper-zosei.md');

  if (!fs.existsSync(targetAgentDir)) {
    fs.mkdirSync(targetAgentDir, { recursive: true });
  }

  if (!fs.existsSync(targetAgentGuide)) {
    fs.copyFileSync(sourceAgentGuide, targetAgentGuide);
    console.log('\x1b[32m%s\x1b[0m', '✔ [astro-swiper-zosei]: Created AGENTS/astro-swiper-zosei.md for AI assistants (Cursor, Windsurf, Copilot).');
  }
} catch (err) {
  // Non-blocking: never fail npm install if filesystem permissions are restricted
}
