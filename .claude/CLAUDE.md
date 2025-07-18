# Claude Code Rules for Marp Presentations

## Overview
This document defines rules and guidelines for Claude Code when working with Marp presentations in this project.

## Core Presentation Design Rules (2025 Guidelines)

### 1. 6×6 Rule
- Maximum 6 bullet points per slide
- Maximum 6 words per bullet point
- Enforce brevity and clarity

### 2. Typography Standards
- Headings: Minimum 40pt (use h1, h2)
- Content: Minimum 28pt (never below 24pt)
- Limit to 2-3 fonts maximum

### 3. Content Guidelines
- One main idea per slide
- Use keywords instead of full sentences
- Strategic use of white space
- Place images near relevant text

### 4. Slide Structure
- Always include a title slide
- Use section dividers for major topics
- Limit presentations to ~30 slides
- Include agenda/overview slide

## Marp-Specific Rules

### 1. Frontmatter Requirements
Every Marp presentation MUST include:
```yaml
---
marp: true
theme: base  # or minimal, vibrant
paginate: true
footer: Presentation Title
---
```

### 2. Theme Usage
- Default to `base` theme unless specified
- Available themes: `base`, `minimal`, `vibrant`
- Custom themes go in `themes/custom/`

### 3. File Naming Convention
- Format: `YYYYMMDD_title.md` (if date needed)
- Or: `descriptive_title.md` (without date)
- Use lowercase with underscores
- Place in `src/presentations/`

### 4. Code Blocks
- Always specify language for syntax highlighting
- Include filename comments when relevant
- Keep code examples concise (max 10-15 lines)

Example:
```javascript
// utils/helper.js
function example() {
  return "concise example";
}
```

### 5. Special Classes
Use these CSS classes for better formatting:
- `<!-- _class: title -->` for title slides
- `<!-- _class: section -->` for section dividers
- `<!-- _class: dark -->` for dark mode slides

### 6. Container Usage
Available containers:
- `::: note` - For important notes
- `::: alert [type]` - For alerts (info, success, warning, danger)
- `::: columns` with `::: column` - For multi-column layouts

## Claude Commands

### /marp-new
Create a new presentation with interactive prompts.

### /marp-slide
Generate a single slide following the 6×6 rule.

### /marp-validate
Check if the current presentation follows all rules.

### /marp-convert
Convert existing content to Marp format.

### /marp-theme
Apply or change presentation theme.

## Validation Checklist

When creating or editing presentations, ensure:

1. [ ] Frontmatter is properly configured
2. [ ] 6×6 rule is followed
3. [ ] Font sizes meet minimum requirements
4. [ ] Images are optimized and placed strategically
5. [ ] Code blocks have language specifications
6. [ ] Slide count is reasonable (<30)
7. [ ] Each slide has a clear purpose
8. [ ] White space is used effectively

## Common Patterns

### Title Slide
```markdown
<!-- _class: title -->

# Presentation Title

## Optional Subtitle

Author Name

Date
```

### Section Divider
```markdown
<!-- _class: section -->

# Section Title
```

### Two-Column Layout
```markdown
::: columns
::: column
### Left Column
- Point 1
- Point 2
:::
::: column
### Right Column
- Point A
- Point B
:::
:::
```

### Code Example Slide
```markdown
# Code Example

```language
// filename.ext
code here
```
```

## Export Guidelines

1. Always validate before exporting
2. Export to both HTML and PDF
3. Test navigation and animations
4. Verify all images load correctly
5. Check font embedding in PDFs

## Error Prevention

- Never exceed 6 bullets per slide
- Always use semantic headings
- Avoid walls of text
- Don't use font sizes below 24pt
- Ensure contrast for readability
- Test on different screen sizes