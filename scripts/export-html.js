#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs-extra');

const args = process.argv.slice(2);
const inputFile = args[0];

if (!inputFile) {
  console.error('Usage: npm run export:html <input-file>');
  process.exit(1);
}

const inputPath = path.resolve(inputFile);
const outputDir = path.join(process.cwd(), 'dist');
const baseName = path.basename(inputFile, '.md');
const htmlPath = path.join(outputDir, `${baseName}.html`);

// Ensure output directory exists
fs.ensureDirSync(outputDir);

try {
  console.log(`🌐 Exporting to HTML: ${inputFile}...`);
  
  execSync(`npx marp ${inputPath} -o ${htmlPath} --config-file .marprc.yml`, {
    stdio: 'inherit'
  });
  
  console.log(`✅ HTML exported: ${htmlPath}`);
  
} catch (error) {
  console.error('HTML export failed:', error.message);
  process.exit(1);
}