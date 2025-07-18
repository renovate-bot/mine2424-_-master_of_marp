# /marp-new

Create a new Marp presentation with proper structure and formatting.

## Usage
```
/marp-new [title] [theme] [type]
```

## Parameters
- `title`: Presentation title (required)
- `theme`: Theme to use (optional, defaults to 'base')
- `type`: Presentation type (optional)
  - `general`: Standard presentation
  - `startup-simple`: 5-min startup pitch
  - `startup-business`: 7-min business-heavy pitch
  - `startup-complex`: 7-min timeline/complex pitch
  - `startup-deeptech`: 10-min deep tech pitch

## Examples
```
/marp-new "Q4 Business Review" minimal
/marp-new "AI Logistics Platform" startup startup-simple
/marp-new "Biotech Innovation" startup startup-deeptech
```

## What it does
1. Creates a new markdown file in `src/presentations/`
2. Adds proper frontmatter configuration
3. Includes starter template based on content type
4. Follows all presentation design rules
5. Uses the 6×6 rule for content

## Template Structure
- Title slide
- Agenda/Overview
- 3-5 main content sections
- Conclusion/Next steps
- Thank you slide

The command will ask for additional details like:
- Subtitle (optional)
- Author name
- Presentation type (business/technical/general)
- Whether to include date in filename