# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Master of Marp is a comprehensive presentation framework built on Marp (Markdown Presentation Ecosystem) that enforces modern presentation design guidelines. It provides multiple themes, validation tools, and AI-assisted presentation creation capabilities.

## Essential Commands

### Development
```bash
# Create new presentation interactively
npm run new

# Development mode (watch + live server)
npm run dev

# Build single presentation
npm run build src/presentations/my_presentation.md

# Build all presentations
npm run build:all

# Validate presentations against design rules
npm run validate

# Watch for changes
npm run watch

# Start preview server
npm run serve
```

### Export Formats
```bash
# Export to PDF
npm run export:pdf src/presentations/my_presentation.md

# Export to HTML
npm run export:html src/presentations/my_presentation.md

# Export to PowerPoint
npm run export:pptx src/presentations/my_presentation.md
```

### Theme Management
```bash
# Build themes
npm run theme:build

# Watch theme changes
npm run theme:watch
```

### CLI Tools
```bash
# AI-powered presentation generator
./scripts/marp-ai

# Create from clipboard content
./scripts/marp-quick

# Create startup pitch deck
./scripts/marp-startup new simple
```

## High-Level Architecture

### Core Components

1. **Marp Engine** (`config/engine.js`)
   - Custom Marp engine with markdown-it plugins
   - Enables containers, attributes, syntax highlighting
   - Supports custom components (notes, alerts, columns)

2. **Theme System** (`themes/`)
   - Base theme: Default, professional design
   - Minimal theme: Clean, minimalist approach
   - Vibrant theme: Bold, colorful design
   - Startup theme: Specialized for pitch decks
   - CSS-based theming with SCSS support

3. **Validation Framework** (`scripts/validate.js`)
   - Enforces 6×6 rule (max 6 bullets, 6 words each)
   - Checks typography standards (min font sizes)
   - Validates slide structure and count
   - Startup-specific validation rules

4. **Build Pipeline**
   - Uses Marp CLI for markdown → HTML/PDF conversion
   - Browser-sync for live reload during development
   - Chokidar for file watching
   - Sharp for image optimization

### Directory Structure

- `src/presentations/`: User presentations (main workspace)
- `src/templates/`: Starter templates
- `themes/`: CSS theme files
- `scripts/`: Build and utility scripts
- `.claude/`: AI assistant rules and commands
- `config/`: Engine and build configuration
- `assets/`: Static resources (fonts, images, icons)

### Key Design Rules

1. **6×6 Rule**: Maximum 6 bullet points with 6 words each
2. **Typography**: Headings ≥40pt, content ≥28pt (never <24pt)
3. **Structure**: One main idea per slide, strategic whitespace
4. **Slide Count**: Recommended maximum of 30 slides

### Presentation Frontmatter

Every presentation must include:
```yaml
---
marp: true
theme: base  # or minimal, vibrant, startup
paginate: true
footer: Presentation Title
---
```

### Special CSS Classes

- `<!-- _class: title -->`: Title slides
- `<!-- _class: section -->`: Section dividers
- `<!-- _class: dark -->`: Dark mode slides

### Container Syntax

```markdown
::: note
Important note content
:::

::: alert info
Information alert
:::

::: columns
::: column
Left content
:::
::: column
Right content
:::
:::
```

## Development Workflow

1. Create presentation: `npm run new` or copy template
2. Edit in `src/presentations/` directory
3. Run `npm run dev` for live preview
4. Validate with `npm run validate`
5. Export to desired format

## Important Notes

- Always validate presentations before exporting
- Place all presentations in `src/presentations/`
- Use existing themes before creating custom ones
- Follow the established naming convention: `YYYYMMDD_title.md` or `descriptive_title.md`
- Optimize images before including them
- Test exports in target presentation software