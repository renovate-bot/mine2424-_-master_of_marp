#!/usr/bin/env node

const chokidar = require('chokidar');
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs-extra');

const outputDir = path.join(process.cwd(), 'dist');
fs.ensureDirSync(outputDir);

console.log('👀 Watching for changes in src/ directory...\n');

// Watch for markdown files
const watcher = chokidar.watch('src/**/*.md', {
  ignored: /(^|[\/\\])\../,
  persistent: true,
  ignoreInitial: true
});

// Build file function
const buildFile = (filePath) => {
  const baseName = path.basename(filePath, '.md');
  const relativePath = path.relative('src', filePath);
  const outputSubDir = path.dirname(relativePath);
  const outputPath = path.join(outputDir, outputSubDir, `${baseName}.html`);
  
  // Ensure subdirectory exists
  fs.ensureDirSync(path.dirname(outputPath));
  
  try {
    console.log(`🔨 Building ${relativePath}...`);
    execSync(`npx marp ${filePath} -o ${outputPath} --config-file .marprc.yml`, {
      stdio: 'pipe'
    });
    console.log(`✅ Built: ${path.relative(process.cwd(), outputPath)}`);
    console.log('👀 Watching for changes...\n');
  } catch (error) {
    console.error(`❌ Build failed: ${error.message}`);
    console.log('👀 Watching for changes...\n');
  }
};

// Watch events
watcher
  .on('add', buildFile)
  .on('change', buildFile)
  .on('unlink', (filePath) => {
    const baseName = path.basename(filePath, '.md');
    const relativePath = path.relative('src', filePath);
    const outputSubDir = path.dirname(relativePath);
    const outputPath = path.join(outputDir, outputSubDir, `${baseName}.html`);
    
    if (fs.existsSync(outputPath)) {
      fs.removeSync(outputPath);
      console.log(`🗑️  Removed: ${path.relative(process.cwd(), outputPath)}`);
      console.log('👀 Watching for changes...\n');
    }
  });

// Handle exit
process.on('SIGINT', () => {
  console.log('\n✋ Stopping watcher...');
  watcher.close();
  process.exit(0);
});