# Analysis of Marp Template Repositories and Presentation Design Best Practices

## Executive Summary

This analysis examines two Marp template repositories and modern presentation design guidelines to extract key features, structures, and best practices for creating an effective Marp-based presentation system.

## Repository Analysis

### 1. awesome-marp-template (yKicchan)

#### Project Structure
```
├── scripts/          # Utility scripts for automation
├── src/             # Slide content directory
├── template/        # Slide template files
├── themes/          # CSS customization files
└── GitHub Actions   # CI/CD automation
```

#### Key Features
- **Automated Workflow**: GitHub Actions for automatic deployment to GitHub Pages
- **Enhanced Markdown**: Extended syntax via plugins (markdown-it-container, markdown-it-attrs, markdown-it-mark, markdown-it-prism)
- **Flexible Theming**: Custom CSS utility classes inspired by Tailwind CSS
- **Development Tools**: Node.js v20.18.0, pnpm package management, Marp CLI

#### Best Practices Observed
1. Template-driven workflow for consistency
2. Separation of content (src) from styling (themes)
3. Automated deployment pipeline
4. Extensible plugin architecture

### 2. cursor-to-marp (Kumaiu)

#### Project Structure
```
├── .cursor/rules/    # AI generation rules
├── .images/         # Image assets
├── input/           # Source content
└── templates/       # Slide templates
```

#### Key Features
- **AI-Assisted Generation**: Uses Cursor IDE's AI chat for intelligent slide creation
- **Strict Formatting Rules**: Character limits, layout constraints, image usage guidelines
- **Theme Integration**: Recommends specific CSS themes (e.g., freud.css)
- **Font Support**: 'Hiragino Sans' and 'Noto Sans CJK JP' for international content

#### Unique Approach
- Leverages AI for markdown to Marp conversion
- Predefined rules via "@slidemarprules"
- Standardized naming convention: `YYYYMMDD_タイトル.md`

## Presentation Design Guidelines (2025 Best Practices)

### Core Design Principles
1. **6×6 Rule**: Maximum 6 bullet points per slide, 6 words per line
2. **One Main Idea**: Single concept per slide
3. **White Space**: Strategic use for visual breathing room
4. **Keywords Over Sentences**: Distill ideas to essential phrases

### Typography Guidelines
- **Font Sizes**: 
  - Headings: 40pt minimum
  - Content: 28pt minimum (never below 24pt)
- **Font Variety**: Limit to 2-3 fonts maximum
- **Consistency**: Maintain throughout presentation

### Visual Design
- **Strategic Images**: Place near relevant text (Mayer's principles)
- **Color Schemes**: Dark backgrounds for dark rooms, avoid clashing colors
- **Infographics**: Convert text-heavy slides to visual representations
- **Device Mockups**: For digital product demonstrations

### Content Organization
- **Information Pacing**: Spread content across multiple slides
- **Title Slides**: Use as breathers between sections
- **Supporting Role**: Slides support, not lead the presentation
- **Widescreen Optimization**: Design for 16:9 ratio

## Recommended Features for Marp Template System

### 1. Project Structure
```
marp_template_for_mine2424/
├── .github/workflows/    # CI/CD automation
├── scripts/             # Build and utility scripts
├── src/                 # Slide content
│   ├── templates/       # Reusable slide templates
│   └── presentations/   # Individual presentations
├── themes/              # CSS themes and styles
│   ├── base/           # Core theme files
│   └── custom/         # User customizations
├── assets/             # Images, icons, fonts
├── config/             # Configuration files
└── docs/               # Documentation
```

### 2. Theme System
- Base themes following 2025 design guidelines
- Utility classes for common patterns
- Font size presets (40pt/28pt standards)
- Color scheme variations (light/dark modes)
- White space management utilities

### 3. Automation Features
- GitHub Actions for building and deploying
- Pre-commit hooks for validation
- Auto-generation of PDF exports
- Image optimization pipeline
- Font embedding automation

### 4. Content Helpers
- Template library for common slide types
- Markdown extensions for enhanced formatting
- Code syntax highlighting with filenames
- Column layout helpers
- Alert/callout components

### 5. AI Integration Support
- Structured templates for AI generation
- Validation rules for content constraints
- Integration with Cursor IDE workflows
- Batch processing capabilities

### 6. Development Tools
- Live preview server
- Hot reload for theme changes
- Multi-presentation management
- Version control friendly structure
- Export to multiple formats (PDF, HTML, PPTX)

## Implementation Recommendations

1. **Start with Structure**: Create the recommended directory structure with clear separation of concerns
2. **Build Core Themes**: Develop base themes following the 2025 design guidelines
3. **Implement Automation**: Set up GitHub Actions and build scripts early
4. **Create Templates**: Build a library of reusable slide templates
5. **Add AI Support**: Structure templates to work well with AI generation tools
6. **Document Everything**: Clear documentation for theme customization and usage

## Conclusion

The ideal Marp template system should combine the automation and extensibility of awesome-marp-template with the AI-friendly structure of cursor-to-marp, while adhering to modern presentation design principles. This hybrid approach will create a powerful, flexible, and user-friendly presentation creation system.