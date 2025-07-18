#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs-extra');

const args = process.argv.slice(2);
const inputFile = args[0];

if (!inputFile) {
  console.error('Usage: npm run export:pptx <input-file>');
  process.exit(1);
}

const inputPath = path.resolve(inputFile);
const outputDir = path.join(process.cwd(), 'dist');
const baseName = path.basename(inputFile, '.md');
const pptxPath = path.join(outputDir, `${baseName}.pptx`);

// Ensure output directory exists
fs.ensureDirSync(outputDir);

try {
  console.log(`📊 Exporting to PowerPoint: ${inputFile}...`);
  
  execSync(`npx marp ${inputPath} -o ${pptxPath} --pptx --config-file .marprc.yml`, {
    stdio: 'inherit'
  });
  
  console.log(`✅ PowerPoint exported: ${pptxPath}`);
  
} catch (error) {
  console.error('PowerPoint export failed:', error.message);
  process.exit(1);
}