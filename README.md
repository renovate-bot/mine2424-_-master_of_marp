# Master of Marp

**The Ultimate Marp Presentation Framework**

[日本語版](docs/ja/README.md)

A comprehensive Marp presentation template system following modern presentation design guidelines (2025). This template combines best practices from multiple sources with strict design rules to create professional, accessible, and visually appealing presentations.

## Features

- 🎨 **Multiple Themes**: Base, Minimal, Vibrant, and Startup themes
- 📐 **2025 Design Guidelines**: Implements 6×6 rule and modern typography standards
- 🤖 **Claude Code Integration**: Custom commands and rules for AI-assisted slide creation
- 🛠️ **Utility Scripts**: Build, watch, serve, validate, and more
- 📱 **Responsive Design**: Optimized for 16:9 widescreen format
- 🌏 **International Support**: Full Japanese font support
- ✅ **Validation Tools**: Ensure presentations follow best practices
- 🚀 **Startup Pitch Support**: Specialized templates and validation for investor decks

## Quick Start

### Prerequisites

- Node.js 24.4.1 or higher
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd master_of_marp

# Install dependencies
pnpm install
```

### Create Your First Presentation

```bash
# Interactive presentation creator
npm run new

# Or manually create in src/presentations/
cp src/templates/basic.md src/presentations/my_presentation.md

# For startup pitches
./scripts/marp-startup new simple
```

### Build and Preview

```bash
# Build a single presentation
npm run build src/presentations/my_presentation.md

# Watch for changes and auto-rebuild
npm run watch

# Start development server with live reload
npm run dev

# Build all presentations
npm run build:all
```

## Project Structure

```
master_of_marp/
├── .github/workflows/    # CI/CD automation
├── scripts/             # Build and utility scripts
├── src/                 # Source files
│   ├── templates/       # Presentation templates
│   └── presentations/   # Your presentations
├── themes/              # CSS themes
│   ├── base/           # Default theme
│   └── custom/         # Additional themes
├── assets/             # Images, fonts, icons
├── config/             # Configuration files
├── docs/               # Documentation
└── .claude/            # Claude Code rules and commands
```

## Design Guidelines

### 6×6 Rule
- Maximum 6 bullet points per slide
- Maximum 6 words per bullet point
- Promotes clarity and readability

### Typography Standards
- Headings: Minimum 40pt
- Content: Minimum 28pt (never below 24pt)
- Limited to 2-3 fonts maximum

### Content Principles
- One main idea per slide
- Strategic use of white space
- Keywords over full sentences
- Images placed near relevant text

## Available Themes

### Base Theme
Default theme with professional styling, optimized spacing, and comprehensive utility classes.

```yaml
theme: base
```

### Minimal Theme
Clean, minimalist design focusing on content with subtle styling.

```yaml
theme: minimal
```

### Vibrant Theme
Colorful, gradient-rich theme for dynamic presentations.

```yaml
theme: vibrant
```

### Startup Theme
Specialized theme for investor pitch decks with 56pt minimum font size and pitch-specific components.

```yaml
theme: startup
```

## Scripts and Commands

### Shell Scripts (Terminal Tools)

Install global CLI access:
```bash
./scripts/install-marp-cli.sh
```

After installation, use these commands from anywhere:

- `marp new [name]` - Create a new presentation
- `marp build <file>` - Build presentation to HTML/PDF
- `marp watch` - Watch and auto-rebuild
- `marp serve` - Start preview server
- `marp dev` - Development mode (watch + serve)
- `marp validate` - Validate presentations
- `marp list` - List all presentations
- `marp open <file>` - Open in browser
- `marp clean` - Clean build directory
- `marp-quick` - Create presentation from clipboard/input
- `marp-ai` - AI-powered presentation generator
- `marp-startup` - Startup pitch deck creator and validator

### NPM Scripts
- `npm run build <file>` - Build single presentation
- `npm run build:all` - Build all presentations
- `npm run export:pdf` - Export to PDF
- `npm run export:pptx` - Export to PowerPoint
- `npm run watch` - Watch for file changes
- `npm run serve` - Start preview server
- `npm run dev` - Watch + serve (development mode)
- `npm run new` - Create new presentation interactively
- `npm run validate` - Validate presentations against rules
- `npm run optimize:images` - Optimize images in assets/

## Claude Code Integration

This template includes special integration with Claude Code for AI-assisted presentation creation.

### Custom Commands

- `/marp-new` - Create a new presentation
- `/marp-slide` - Generate a single slide
- `/marp-validate` - Validate presentation
- `/marp-convert` - Convert content to Marp format

### Rules File

The `.claude/CLAUDE.md` file contains comprehensive rules for Claude Code to follow when creating or editing presentations.

## Advanced Features

### Container Components

```markdown
::: note
Important information highlighted
:::

::: alert info
Information alert with styling
:::

::: columns
::: column
Left column content
:::
::: column
Right column content
:::
:::
```

### Special Slide Classes

```markdown
<!-- _class: title -->
# Title Slide

<!-- _class: section -->
# Section Divider

<!-- _class: dark -->
# Dark Theme Slide
```

## Validation

Run validation to ensure your presentations follow best practices:

```bash
npm run validate

# With auto-fix
npm run validate -- --fix
```

## Contributing

Contributions are welcome! Please ensure:
1. Follow the existing code style
2. Add tests for new features
3. Update documentation
4. Run validation before submitting

## License

MIT License - see LICENSE file for details

## Resources

- [Marp Official Documentation](https://marp.app/)
- [Presentation Design Guidelines](docs/en/design-guidelines.md)
- [Startup Pitch Guide](docs/en/startup-guide.md)
- [Claude Code Rules](.claude/CLAUDE.md)
- [Startup Pitch Rules](.claude/CLAUDE_STARTUP.md)
- [Shell Scripts Documentation](docs/en/shell-scripts.md)