#!/usr/bin/env node

const inquirer = require('inquirer');
const fs = require('fs-extra');
const path = require('path');
const { format } = require('date-fns');

async function createPresentation() {
  const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'Presentation title:',
      validate: input => input.trim() !== '' || 'Title is required'
    },
    {
      type: 'input',
      name: 'subtitle',
      message: 'Subtitle (optional):'
    },
    {
      type: 'input',
      name: 'author',
      message: 'Author name:',
      default: process.env.USER || 'Author'
    },
    {
      type: 'list',
      name: 'theme',
      message: 'Select theme:',
      choices: ['base', 'minimal', 'vibrant'],
      default: 'base'
    },
    {
      type: 'list',
      name: 'template',
      message: 'Select template:',
      choices: [
        { name: 'Basic Presentation', value: 'basic' },
        { name: 'Technical Presentation', value: 'technical' },
        { name: 'Business Presentation', value: 'business' },
        { name: 'Empty (blank)', value: 'empty' }
      ],
      default: 'basic'
    },
    {
      type: 'confirm',
      name: 'useDate',
      message: 'Include date in filename?',
      default: true
    }
  ];

  const answers = await inquirer.prompt(questions);
  
  // Generate filename
  const date = format(new Date(), 'yyyyMMdd');
  const sanitizedTitle = answers.title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
  const filename = answers.useDate ? `${date}_${sanitizedTitle}.md` : `${sanitizedTitle}.md`;
  const filePath = path.join(process.cwd(), 'src', 'presentations', filename);
  
  // Ensure directory exists
  fs.ensureDirSync(path.dirname(filePath));
  
  // Check if file already exists
  if (fs.existsSync(filePath)) {
    const overwrite = await inquirer.prompt([{
      type: 'confirm',
      name: 'overwrite',
      message: `File ${filename} already exists. Overwrite?`,
      default: false
    }]);
    
    if (!overwrite.overwrite) {
      console.log('Cancelled.');
      process.exit(0);
    }
  }
  
  // Get template content
  let content = getTemplate(answers);
  
  // Write file
  fs.writeFileSync(filePath, content);
  console.log(`\n✅ Created: ${filePath}`);
  console.log('\nYou can now:');
  console.log(`  - Edit: ${filePath}`);
  console.log('  - Build: npm run build ' + path.relative(process.cwd(), filePath));
  console.log('  - Watch: npm run dev');
}

function getTemplate(options) {
  const { title, subtitle, author, theme, template } = options;
  const date = format(new Date(), 'yyyy-MM-dd');
  
  const header = `---
marp: true
theme: ${theme}
paginate: true
footer: ${title}
---

<!-- _class: title -->

# ${title}
${subtitle ? `\n## ${subtitle}\n` : ''}
${author}

${date}

---

`;

  const templates = {
    empty: header,
    
    basic: header + `# Agenda

- Introduction
- Main Topic 1
- Main Topic 2
- Main Topic 3
- Conclusion

---

# Introduction

- Brief overview of the presentation
- Key objectives
- Expected outcomes

---

# Main Topic 1

- Key point 1
- Key point 2
- Key point 3

---

# Main Topic 2

- Important concept
- Supporting details
- Real-world applications

---

# Main Topic 3

::: columns
::: column
### Benefits
- Benefit 1
- Benefit 2
- Benefit 3
:::
::: column
### Considerations
- Point 1
- Point 2
- Point 3
:::
:::

---

# Conclusion

- Summary of key points
- Call to action
- Next steps

---

<!-- _class: section -->

# Thank You!

Questions?`,

    technical: header + `# Overview

- Problem Statement
- Technical Approach
- Implementation Details
- Performance & Results
- Future Work

---

# Problem Statement

::: note
Define the technical challenge clearly
:::

- Current limitations
- Technical requirements
- Success criteria

---

# Technical Approach

## Architecture Overview

\`\`\`mermaid
graph LR
    A[Input] --> B[Processing]
    B --> C[Output]
\`\`\`

---

# Implementation Details

\`\`\`javascript
// Example code snippet
function processData(input) {
  return input
    .filter(item => item.isValid)
    .map(item => transform(item))
    .reduce((acc, val) => [...acc, val], []);
}
\`\`\`

---

# Performance Results

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Speed | 100ms | 20ms | 80% |
| Memory | 50MB | 30MB | 40% |
| Accuracy | 85% | 95% | 10% |

---

# Lessons Learned

::: alert success
Key achievements and insights
:::

- Technical insights gained
- Challenges overcome
- Best practices identified

---

# Future Work

- Planned enhancements
- Scalability considerations
- Integration opportunities`,

    business: header + `# Executive Summary

- Business Context
- Strategic Initiative
- Implementation Plan
- Expected ROI
- Next Steps

---

# Business Context

::: columns
::: column
### Current State
- Challenge 1
- Challenge 2
- Challenge 3
:::
::: column
### Desired State
- Goal 1
- Goal 2
- Goal 3
:::
:::

---

# Strategic Initiative

## Key Objectives

1. **Objective 1**: Measurable outcome
2. **Objective 2**: Specific target
3. **Objective 3**: Business impact

---

# Implementation Timeline

| Phase | Duration | Key Deliverables |
|-------|----------|------------------|
| Phase 1 | 3 months | Foundation |
| Phase 2 | 6 months | Core Implementation |
| Phase 3 | 3 months | Launch & Optimize |

---

# Budget & Resources

::: alert info
Total Investment: $X.XM
:::

### Resource Allocation
- Personnel: 60%
- Technology: 25%
- Training: 10%
- Contingency: 5%

---

# Expected ROI

- **Year 1**: Break-even
- **Year 2**: 20% return
- **Year 3**: 45% return

---

# Risk Management

| Risk | Impact | Mitigation |
|------|--------|------------|
| Technical | High | Phased approach |
| Market | Medium | Pilot program |
| Resource | Low | Buffer included |

---

# Next Steps

1. Approve budget allocation
2. Form project team
3. Begin Phase 1 implementation
4. Monthly progress reviews`
  };

  return templates[template] || templates.basic;
}

// Run the script
createPresentation().catch(console.error);