# /marp-validate

Validate a Marp presentation against the 2025 design guidelines and rules.

## Usage
```
/marp-validate [file]
```

## Parameters
- `file`: Path to the markdown file to validate (optional, defaults to current file)

## Example
```
/marp-validate src/presentations/quarterly_review.md
```

## Validation Checks

### Structure
- ✓ Valid YAML frontmatter
- ✓ Marp enabled (`marp: true`)
- ✓ Theme specified
- ✓ Pagination enabled

### Content Rules
- ✓ 6×6 rule compliance
- ✓ Font size requirements (40pt/28pt)
- ✓ Slide count (<30 recommended)
- ✓ One idea per slide

### Typography
- ✓ Heading hierarchy
- ✓ Line length limits
- ✓ Proper code formatting
- ✓ Image placement

### Best Practices
- ✓ Title slide present
- ✓ Agenda included
- ✓ Section dividers used
- ✓ Conclusion slide

## Output Format
```
📄 quarterly_review.md
✅ Structure: Valid
⚠️  Warnings:
   - Slide 5: 7 bullet points (max: 6)
   - Slide 8: Bullet 3 has 8 words (max: 6)
   - Total slides: 35 (recommended: <30)
❌ Errors:
   - Slide 12: No heading found
   - Slide 15: Font size too small

Summary: 2 errors, 3 warnings
```

## Auto-fix Option
Add `--fix` to automatically correct common issues:
```
/marp-validate src/presentations/my_presentation.md --fix
```

This will:
- Split long bullets
- Add missing headings
- Fix frontmatter
- Optimize images