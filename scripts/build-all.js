#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs-extra');
const glob = require('glob');

const outputDir = path.join(process.cwd(), 'dist');
fs.ensureDirSync(outputDir);

// Find all markdown files in src directory
const files = glob.sync('src/**/*.md', {
  ignore: ['**/node_modules/**', '**/templates/**']
});

if (files.length === 0) {
  console.log('No markdown files found in src directory');
  process.exit(0);
}

console.log(`Found ${files.length} presentation(s) to build\n`);

let succeeded = 0;
let failed = 0;

files.forEach(file => {
  const baseName = path.basename(file, '.md');
  const relativePath = path.relative('src', file);
  const outputSubDir = path.dirname(relativePath);
  const outputPath = path.join(outputDir, outputSubDir, `${baseName}.html`);
  const pdfPath = path.join(outputDir, outputSubDir, `${baseName}.pdf`);
  
  // Ensure subdirectory exists
  fs.ensureDirSync(path.dirname(outputPath));
  
  try {
    console.log(`Building ${file}...`);
    
    // Build HTML
    execSync(`npx marp ${file} -o ${outputPath} --config-file .marprc.yml`, {
      stdio: 'pipe'
    });
    
    // Build PDF
    execSync(`npx marp ${file} -o ${pdfPath} --pdf --config-file .marprc.yml`, {
      stdio: 'pipe'
    });
    
    console.log(`✅ ${relativePath} → ${path.relative(process.cwd(), outputPath)}`);
    console.log(`✅ ${relativePath} → ${path.relative(process.cwd(), pdfPath)}\n`);
    succeeded++;
  } catch (error) {
    console.error(`❌ Failed to build ${file}: ${error.message}\n`);
    failed++;
  }
});

console.log(`\nBuild complete: ${succeeded} succeeded, ${failed} failed`);