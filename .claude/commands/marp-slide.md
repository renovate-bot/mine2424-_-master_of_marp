# /marp-slide

Generate a single Marp slide following the 6×6 rule and design guidelines.

## Usage
```
/marp-slide [type] "content"
```

## Parameters
- `type`: Slide type (title, section, content, list, code, image, columns)
- `content`: The content to format into a slide

## Examples

### List slide
```
/marp-slide list "Benefits of cloud computing: cost savings, scalability, flexibility, reliability, security, collaboration"
```

Output:
```markdown
# Benefits of Cloud Computing

- Cost savings
- Scalability 
- Flexibility
- Reliability
- Security benefits
- Enhanced collaboration
```

### Code slide
```
/marp-slide code "Show a Python function that calculates fibonacci"
```

### Columns slide
```
/marp-slide columns "Pros: fast, efficient, scalable. Cons: complex setup, learning curve"
```

## Slide Types

1. **title**: Title slide with main heading and subtitle
2. **section**: Section divider slide
3. **content**: Standard content slide with heading and text
4. **list**: Bulleted list (auto-applies 6×6 rule)
5. **code**: Code example with syntax highlighting
6. **image**: Image with caption
7. **columns**: Two-column layout
8. **table**: Data table (auto-formatted)

## Rules Applied
- Automatically limits to 6 bullets
- Ensures each bullet has ≤6 words
- Applies appropriate CSS classes
- Uses proper heading sizes
- Adds container markup when needed