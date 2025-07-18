# Shell Scripts Documentation

This project includes powerful shell scripts that make working with Marp presentations entirely from the terminal.

## Installation

Run the installation script to create global commands:

```bash
./scripts/install-marp-cli.sh
```

This will:
1. Create symlinks in `/usr/local/bin` or `~/.local/bin`
2. Add the directory to your PATH if needed
3. Install additional tools (marp-quick, marp-ai) if requested

## Main CLI Tool: `marp`

The main `marp` command provides a comprehensive interface for all presentation tasks.

### Commands

#### `marp new [name]`
Create a new presentation interactively.

```bash
marp new "Q4 Sales Review"
```

Features:
- Interactive prompts for title, theme, and template
- Automatic filename generation with optional date prefix
- Opens in your default editor after creation

#### `marp build <file> [--pdf]`
Build a presentation to HTML and optionally PDF.

```bash
marp build src/presentations/my_slides.md
marp build src/presentations/my_slides.md --pdf
```

#### `marp watch [file]`
Watch for changes and auto-rebuild.

```bash
marp watch  # Watch all files
marp watch src/presentations/specific.md  # Watch specific file
```

#### `marp serve`
Start a preview server with live reload.

```bash
marp serve
# Server starts at http://localhost:3000
```

#### `marp dev`
Start development mode (watch + serve combined).

```bash
marp dev
```

#### `marp validate [file] [--all]`
Validate presentations against design rules.

```bash
marp validate  # Current directory
marp validate src/presentations/my_slides.md  # Specific file
marp validate --all  # All presentations
```

#### `marp list`
List all presentations with metadata.

```bash
marp list
# Output:
# 📁 Presentations in src/presentations/:
#   • 20250718_quarterly_review.md (modified: 2025-07-18 14:30, size: 2.1K)
#   • technical_overview.md (modified: 2025-07-17 09:15, size: 3.5K)
```

#### `marp open <file>`
Build and open presentation in browser.

```bash
marp open src/presentations/my_slides.md
```

#### `marp export <file>`
Export to multiple formats interactively.

```bash
marp export src/presentations/my_slides.md
# Exports to HTML, PDF, and optionally PowerPoint
```

#### `marp clean`
Clean the build directory.

```bash
marp clean
```

## Quick Creation Tool: `marp-quick`

Create presentations from clipboard content, typed input, or files with automatic formatting.

### Usage

```bash
marp-quick
```

### Features

1. **Multiple Input Sources**:
   - Clipboard (paste from any source)
   - Direct typing/pasting
   - File input

2. **Automatic Formatting**:
   - Applies 6×6 rule automatically
   - Converts long paragraphs to bullets
   - Splits content into appropriate slides
   - Adds proper Marp structure

3. **Smart Conversion**:
   - Detects headings and creates slide breaks
   - Limits bullets per slide
   - Truncates long bullet points

### Example Workflow

1. Copy text from a document or webpage
2. Run `marp-quick`
3. Choose "Clipboard" as source
4. Enter presentation title
5. Select theme
6. Automatically generates formatted presentation

## AI Integration Tool: `marp-ai`

Generate presentations using AI assistance (works with Claude Code or other AI tools).

### Usage

```bash
marp-ai
```

### Features

1. **Prompt Generation**:
   - Creates detailed prompts for AI tools
   - Includes all formatting requirements
   - Specifies presentation type and structure

2. **Integration Options**:
   - Copy prompt to clipboard
   - Save prompt to file
   - Paste AI response directly
   - Use built-in templates

3. **Presentation Types**:
   - Business/Executive
   - Technical/Developer
   - Educational/Training
   - Sales/Marketing
   - General/Informational

### Workflow with Claude Code

1. Run `marp-ai`
2. Enter your topic
3. Select presentation type
4. Choose "Copy prompt to clipboard"
5. Paste into Claude Code
6. Copy AI response
7. Run `marp-ai` again and paste response

## Environment Variables

The scripts respect these environment variables:

- `EDITOR`: Your preferred text editor (default: nano)
- `PORT`: Server port for preview (default: 3000)

## Tips and Tricks

### Aliases

Add these to your shell configuration for even quicker access:

```bash
alias mp='marp'
alias mpn='marp new'
alias mpd='marp dev'
alias mpb='marp build'
alias mpv='marp validate'
```

### Integration with Git

Create a pre-commit hook to validate presentations:

```bash
#!/bin/bash
# .git/hooks/pre-commit
marp validate --all || exit 1
```

### Batch Operations

Process multiple presentations:

```bash
# Build all presentations
for file in src/presentations/*.md; do
    marp build "$file" --pdf
done

# Validate specific pattern
find src -name "*2025*.md" -exec marp validate {} \;
```

### Custom Templates

Create your own templates in `src/templates/` and use them:

```bash
cp src/templates/my_custom.md src/presentations/new_pres.md
marp build src/presentations/new_pres.md
```

## Troubleshooting

### Command not found

If `marp` command is not found after installation:

1. Check if the symlink exists:
   ```bash
   ls -la /usr/local/bin/marp
   # or
   ls -la ~/.local/bin/marp
   ```

2. Ensure the directory is in your PATH:
   ```bash
   echo $PATH
   ```

3. Reload your shell configuration:
   ```bash
   source ~/.bashrc  # or ~/.zshrc
   ```

### Permission Issues

If you get permission errors:

```bash
# Use user directory instead
mkdir -p ~/.local/bin
./scripts/install-marp-cli.sh
```

### Script Errors

Enable debug mode to see detailed output:

```bash
bash -x ./scripts/marp build src/presentations/test.md
```

## Advanced Usage

### Custom Themes

Use custom themes with any command:

```bash
marp new "My Presentation" --theme custom/mytheme
```

### CI/CD Integration

Use in GitHub Actions or other CI/CD:

```yaml
- name: Validate presentations
  run: |
    npm install
    ./scripts/marp validate --all
    
- name: Build all presentations
  run: |
    ./scripts/marp build --all --pdf
```

### Docker Usage

Create a Dockerfile for containerized usage:

```dockerfile
FROM node:24.4.1
WORKDIR /app
COPY . .
RUN npm install
RUN chmod +x scripts/*
CMD ["./scripts/marp", "serve"]
```