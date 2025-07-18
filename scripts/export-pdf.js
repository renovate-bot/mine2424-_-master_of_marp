#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs-extra');

const args = process.argv.slice(2);
const inputFile = args[0];

if (!inputFile) {
  console.error('Usage: npm run export:pdf <input-file>');
  process.exit(1);
}

const inputPath = path.resolve(inputFile);
const outputDir = path.join(process.cwd(), 'dist');
const baseName = path.basename(inputFile, '.md');
const pdfPath = path.join(outputDir, `${baseName}.pdf`);

// Ensure output directory exists
fs.ensureDirSync(outputDir);

try {
  console.log(`📄 Exporting to PDF: ${inputFile}...`);
  
  execSync(`npx marp ${inputPath} -o ${pdfPath} --pdf --config-file .marprc.yml`, {
    stdio: 'inherit'
  });
  
  console.log(`✅ PDF exported: ${pdfPath}`);
  
} catch (error) {
  console.error('PDF export failed:', error.message);
  process.exit(1);
}