#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs-extra');

const args = process.argv.slice(2);
const inputFile = args[0];

if (!inputFile) {
  console.error('Usage: npm run build <input-file>');
  process.exit(1);
}

const inputPath = path.resolve(inputFile);
const outputDir = path.join(process.cwd(), 'dist');
const baseName = path.basename(inputFile, '.md');
const outputPath = path.join(outputDir, `${baseName}.html`);

// Ensure output directory exists
fs.ensureDirSync(outputDir);

try {
  console.log(`Building ${inputFile}...`);
  
  // Build HTML
  execSync(`npx marp ${inputPath} -o ${outputPath} --config-file .marprc.yml`, {
    stdio: 'inherit'
  });
  
  console.log(`✅ Built: ${outputPath}`);
  
  // Also build PDF if requested
  if (args.includes('--pdf')) {
    const pdfPath = path.join(outputDir, `${baseName}.pdf`);
    execSync(`npx marp ${inputPath} -o ${pdfPath} --pdf --config-file .marprc.yml`, {
      stdio: 'inherit'
    });
    console.log(`✅ PDF: ${pdfPath}`);
  }
  
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}