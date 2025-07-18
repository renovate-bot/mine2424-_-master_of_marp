#!/usr/bin/env node

const browserSync = require('browser-sync').create();
const path = require('path');

const distDir = path.join(process.cwd(), 'dist');
const port = process.env.PORT || 3000;

console.log(`🚀 Starting server on http://localhost:${port}\n`);

browserSync.init({
  server: {
    baseDir: distDir,
    directory: true
  },
  port: port,
  ui: {
    port: port + 1
  },
  files: [`${distDir}/**/*.html`, `${distDir}/**/*.pdf`],
  watch: true,
  notify: false,
  open: false,
  logPrefix: 'Marp Server',
  logFileChanges: true
});

process.on('SIGINT', () => {
  console.log('\n✋ Stopping server...');
  browserSync.exit();
  process.exit(0);
});