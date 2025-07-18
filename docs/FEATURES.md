# Marp Template Features Overview

This document provides a comprehensive overview of all features available in the Marp template system.

## Core Features

### 1. Design System

#### 6×6 Rule Implementation
- Maximum 6 bullet points per slide
- Maximum 6 words per bullet point
- Automatic validation and enforcement

#### Typography Standards
- **Standard presentations**: 28pt minimum font size
- **Startup pitches**: 56pt minimum font size
- Heading hierarchy: 40pt+ for h1/h2

#### Themes
1. **Base** - Professional default theme
2. **Minimal** - Clean, focused design
3. **Vibrant** - Colorful, gradient-rich
4. **Startup** - Specialized for investor pitches

### 2. Presentation Types

#### General Presentations
- Business reviews
- Technical documentation
- Educational content
- Marketing materials

#### Startup Pitches
- **Simple Business** (5 min)
- **Business-Heavy** (7 min)
- **Complex/Timeline** (7 min)
- **Deep Tech** (10 min)

### 3. CLI Tools

#### Main Tool: `marp`
```bash
marp new          # Create presentation
marp build        # Build to HTML/PDF
marp watch        # Auto-rebuild
marp serve        # Preview server
marp dev          # Development mode
marp validate     # Check rules
marp list         # List presentations
marp clean        # Clean builds
```

#### Quick Creation: `marp-quick`
- Create from clipboard
- Auto-format content
- Apply 6×6 rule
- Smart slide splitting

#### AI Integration: `marp-ai`
- Generate prompts
- Structure content
- Type-specific templates
- Claude/ChatGPT compatible

#### Startup Tool: `marp-startup`
```bash
marp-startup new [type]      # Create pitch
marp-startup validate        # Check pitch rules
marp-startup analyze         # Completeness check
marp-startup generate        # AI assistance
```

### 4. Validation System

#### General Validation
- 6×6 rule compliance
- Font size requirements
- Slide structure
- Image optimization

#### Startup Validation
- Required sections present
- Specific metrics included
- Team credentials shown
- Clear ask defined
- 56pt font enforcement

### 5. Build System

#### Output Formats
- HTML (interactive)
- PDF (printable)
- PowerPoint (editable)

#### Features
- Live reload
- Watch mode
- Batch building
- CI/CD integration

### 6. Components

#### Containers
```markdown
::: note
Important information
:::

::: alert [type]
Alert message
:::

::: columns
Multi-column layout
:::
```

#### Special Classes
- `<!-- _class: title -->` - Title slides
- `<!-- _class: section -->` - Section dividers
- `<!-- _class: dark -->` - Dark theme
- `<!-- _class: traction -->` - Metrics display
- `<!-- _class: ask -->` - Call to action

### 7. AI Integration

#### Claude Code Commands
- `/marp-new` - Create presentation
- `/marp-slide` - Generate slide
- `/marp-validate` - Check rules
- `/marp-convert` - Convert content

#### Rules Files
- `.claude/CLAUDE.md` - General rules
- `.claude/CLAUDE_STARTUP.md` - Startup rules

### 8. Templates

#### General Templates
- `basic.md` - Standard presentation
- `technical.md` - Technical content
- `business.md` - Business context

#### Startup Templates
- `startup-simple.md` - 5-min pitch
- `startup-business.md` - Business-heavy
- `startup-complex.md` - Timeline focus
- `startup-deeptech.md` - Technology focus

### 9. Automation

#### GitHub Actions
- Automatic validation
- Build on push
- Deploy to GitHub Pages

#### Pre-commit Hooks
- Validate before commit
- Check formatting
- Optimize images

### 10. Internationalization

#### Language Support
- English documentation
- Japanese documentation
- Japanese font support
- Multi-language templates

## Quick Reference

### Creating Presentations

```bash
# General presentation
marp new "My Presentation"

# Startup pitch
marp-startup new simple

# From clipboard
marp-quick

# With AI
marp-ai
```

### Building & Preview

```bash
# Build single
marp build presentation.md

# Build with PDF
marp build presentation.md --pdf

# Development mode
marp dev

# Build all
npm run build:all
```

### Validation

```bash
# General validation
marp validate presentation.md

# Startup validation
marp-startup validate pitch.md

# Analyze completeness
marp-startup analyze pitch.md
```

## Best Practices

### Content Creation
1. One idea per slide
2. Use visuals over text
3. Follow font size minimums
4. Include speaker notes
5. Test timing

### Startup Pitches
1. Start with problem
2. Show traction early
3. Be specific with numbers
4. Highlight team-market fit
5. Clear ask at end

### Development Workflow
1. Create with templates
2. Validate frequently
3. Preview while editing
4. Test on different screens
5. Export multiple formats

## Troubleshooting

### Common Issues

1. **Font too small**
   - Use validation tools
   - Check theme minimums

2. **Too much content**
   - Split into multiple slides
   - Use 6×6 rule

3. **Missing sections**
   - Run completeness check
   - Use appropriate template

4. **Build errors**
   - Check markdown syntax
   - Validate frontmatter

## Resources

- [GitHub Repository](https://github.com/yourusername/master_of_marp)
- [Marp Documentation](https://marp.app/)
- [Design Guidelines](en/design-guidelines.md)
- [Startup Guide](en/startup-guide.md)
- [Shell Scripts Guide](en/shell-scripts.md)

## Credits

- Base system inspired by [awesome-marp-template](https://github.com/yKicchan/awesome-marp-template)
- AI integration from [cursor-to-marp](https://github.com/Kumaiu/cursor-to-marp)
- Startup framework by [Takaaki Umada](https://takaumada.com/)
- Design guidelines based on 2025 best practices