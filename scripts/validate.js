#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');
const yaml = require('yaml');

let hasErrors = false;

// Validation rules based on 2025 presentation guidelines
const rules = {
  maxBulletsPerSlide: 6,
  maxWordsPerBullet: 6,
  minHeadingSize: 40,
  minContentSize: 28,
  maxSlidesRecommended: 30
};

function validatePresentation(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const slides = content.split('\n---\n');
  const errors = [];
  const warnings = [];
  
  // Extract frontmatter
  let frontmatter = {};
  if (content.startsWith('---\n')) {
    const endIndex = content.indexOf('\n---\n', 4);
    if (endIndex > 0) {
      try {
        frontmatter = yaml.parse(content.substring(4, endIndex));
      } catch (e) {
        errors.push('Invalid frontmatter YAML');
      }
    }
  }
  
  // Check if Marp is enabled
  if (!frontmatter.marp) {
    warnings.push('Marp not enabled in frontmatter (marp: true)');
  }
  
  // Check theme
  if (!frontmatter.theme) {
    warnings.push('No theme specified in frontmatter');
  }
  
  // Check slide count
  if (slides.length > rules.maxSlidesRecommended) {
    warnings.push(`Presentation has ${slides.length} slides (recommended max: ${rules.maxSlidesRecommended})`);
  }
  
  // Validate each slide
  slides.forEach((slide, index) => {
    const slideNum = index + 1;
    const lines = slide.split('\n').filter(line => line.trim());
    
    // Check for bullets (6x6 rule)
    const bulletLines = lines.filter(line => line.match(/^[\s]*[-*+]\s/));
    if (bulletLines.length > rules.maxBulletsPerSlide) {
      errors.push(`Slide ${slideNum}: Has ${bulletLines.length} bullet points (max: ${rules.maxBulletsPerSlide})`);
    }
    
    // Check words per bullet
    bulletLines.forEach((bullet, bulletIndex) => {
      const words = bullet.replace(/^[\s]*[-*+]\s/, '').split(/\s+/).length;
      if (words > rules.maxWordsPerBullet) {
        warnings.push(`Slide ${slideNum}, bullet ${bulletIndex + 1}: Has ${words} words (recommended max: ${rules.maxWordsPerBullet})`);
      }
    });
    
    // Check for missing headings
    const hasHeading = lines.some(line => line.match(/^#{1,6}\s/));
    if (!hasHeading && lines.length > 2) {
      warnings.push(`Slide ${slideNum}: No heading found`);
    }
    
    // Check for overly long lines
    lines.forEach((line, lineIndex) => {
      if (line.length > 120 && !line.includes('http')) {
        warnings.push(`Slide ${slideNum}, line ${lineIndex + 1}: Line too long (${line.length} chars)`);
      }
    });
  });
  
  return { errors, warnings };
}

// Main execution
console.log('🔍 Validating presentations...\n');

const files = glob.sync('src/**/*.md', {
  ignore: ['**/node_modules/**', '**/templates/**']
});

if (files.length === 0) {
  console.log('No markdown files found to validate');
  process.exit(0);
}

files.forEach(file => {
  const { errors, warnings } = validatePresentation(file);
  const relativePath = path.relative(process.cwd(), file);
  
  if (errors.length === 0 && warnings.length === 0) {
    console.log(`✅ ${relativePath}`);
  } else {
    console.log(`\n📄 ${relativePath}`);
    
    if (errors.length > 0) {
      hasErrors = true;
      console.log('\n❌ Errors:');
      errors.forEach(error => console.log(`   - ${error}`));
    }
    
    if (warnings.length > 0) {
      console.log('\n⚠️  Warnings:');
      warnings.forEach(warning => console.log(`   - ${warning}`));
    }
    
    console.log('');
  }
});

console.log('\n📊 Validation Summary:');
console.log(`   - Files checked: ${files.length}`);
console.log(`   - Status: ${hasErrors ? '❌ Errors found' : '✅ All good'}`);
console.log('\n💡 Tips:');
console.log('   - Follow the 6×6 rule: max 6 bullets, 6 words per bullet');
console.log('   - Use headings of at least 40pt (h1, h2)');
console.log('   - Keep presentations under 30 slides');

process.exit(hasErrors ? 1 : 0);