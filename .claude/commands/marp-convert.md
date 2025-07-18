# /marp-convert

Convert existing content (text, markdown, or other formats) into a properly formatted Marp presentation.

## Usage
```
/marp-convert "content" [options]
```

## Parameters
- `content`: The content to convert (can be text, markdown, or paste from other sources)
- `options`: Conversion options (theme, style, format)

## Examples

### From plain text
```
/marp-convert "Introduction to Machine Learning. What is ML? Types of ML: Supervised, Unsupervised, Reinforcement. Applications in business. Getting started with ML."
```

### From existing markdown
```
/marp-convert @file.md --theme vibrant
```

### From outline
```
/marp-convert "
1. Project Overview
   - Goals
   - Timeline
   - Budget
2. Technical Approach
   - Architecture
   - Technologies
3. Next Steps
"
```

## Conversion Rules

1. **Intelligent Splitting**
   - Detects natural section breaks
   - Creates slides based on headings
   - Applies 6×6 rule automatically

2. **Content Enhancement**
   - Converts long paragraphs to bullet points
   - Adds appropriate headings
   - Creates visual hierarchy

3. **Format Detection**
   - Recognizes lists, code blocks, tables
   - Preserves formatting where appropriate
   - Optimizes for presentation format

4. **Structure Creation**
   - Adds title slide
   - Creates agenda from headings
   - Inserts section dividers
   - Adds conclusion slide

## Options

- `--theme [name]`: Specify theme (base, minimal, vibrant)
- `--split-by [method]`: Split method (heading, paragraph, sentence)
- `--max-slides [n]`: Limit number of slides
- `--include-notes`: Convert detailed content to speaker notes
- `--style [type]`: Presentation style (business, technical, educational)

## Output Example

Input:
```
Machine Learning is transforming how we analyze data and make decisions. It encompasses various techniques including supervised learning where we train models with labeled data, unsupervised learning for pattern discovery, and reinforcement learning for decision-making systems.
```

Output:
```markdown
---
marp: true
theme: base
paginate: true
---

<!-- _class: title -->

# Machine Learning

Transforming Data Analysis and Decision Making

---

# Overview

- Data analysis transformation
- Decision making enhancement
- Multiple technique categories
- Wide application range

---

# Learning Techniques

- **Supervised**: Labeled data training
- **Unsupervised**: Pattern discovery
- **Reinforcement**: Decision systems
```