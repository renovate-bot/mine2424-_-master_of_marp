# Presentation Design Guidelines (2025)

## Core Principles

### 1. The 6×6 Rule

The most fundamental rule for creating effective presentations:

- **Maximum 6 bullet points per slide**
- **Maximum 6 words per bullet point**

This constraint forces clarity and prevents information overload. When you find yourself exceeding these limits, it's a signal to split content across multiple slides.

#### Good Example:
```markdown
# Project Benefits

- Reduces operational costs
- Improves team productivity
- Enhances customer satisfaction
- Streamlines business processes
- Increases market competitiveness
```

#### Bad Example:
```markdown
# Project Benefits

- Significantly reduces operational costs across all departments
- Improves team productivity through automated workflows and better tools
- Enhances customer satisfaction by providing faster response times
- Streamlines complex business processes making them more efficient
- Increases market competitiveness through innovation and quality
- Provides better data insights for decision making
- Enables remote work capabilities for all employees
```

### 2. Typography Standards

Clear, readable text is essential for effective presentations:

- **Headings**: Minimum 40pt (use h1, h2 in Marp)
- **Body text**: Minimum 28pt (never go below 24pt)
- **Code**: Minimum 24pt with syntax highlighting
- **Font families**: Limit to 2-3 maximum

### 3. One Idea Per Slide

Each slide should convey a single, clear message. This:
- Helps audience focus
- Improves retention
- Makes presentations easier to follow
- Allows for better pacing

### 4. Strategic White Space

White space isn't empty space—it's a design element that:
- Reduces cognitive load
- Highlights important content
- Creates visual hierarchy
- Improves readability

### 5. Visual Hierarchy

Create clear visual relationships:
1. **Primary**: Main heading (largest)
2. **Secondary**: Subheadings (medium)
3. **Tertiary**: Body text (standard)
4. **Supporting**: Captions, notes (smaller)

## Content Guidelines

### Text vs. Visuals

- **Use visuals** when explaining concepts, showing data, or demonstrating processes
- **Use text** for key points, definitions, or action items
- **Combine both** strategically, never overwhelm with either

### Image Placement

Follow Mayer's Multimedia Learning Principles:
- Place images near relevant text
- Use images that add value, not decoration
- Ensure images are high quality and readable
- Include captions when necessary

### Color Usage

- **Primary color**: For headings and emphasis
- **Secondary color**: For subheadings and accents
- **Neutral colors**: For body text and backgrounds
- **Alert colors**: Sparingly for warnings or highlights

#### Accessibility
- Ensure sufficient contrast (WCAG AA standard)
- Don't rely on color alone to convey information
- Test presentations in grayscale

## Slide Types and Their Purpose

### 1. Title Slide
- Sets the tone
- Includes presentation title, subtitle, author, date
- Can include organization logo

### 2. Agenda/Overview
- Provides roadmap
- Sets expectations
- Should be high-level (5-7 items max)

### 3. Section Dividers
- Signal major topic changes
- Provide mental breaks
- Can reference agenda

### 4. Content Slides
- Follow 6×6 rule
- One main idea
- Supporting details

### 5. Data/Chart Slides
- Simplify complex data
- Highlight key insights
- Include clear labels

### 6. Conclusion/Summary
- Reinforce key messages
- Provide clear takeaways
- Include next steps

### 7. Thank You/Questions
- Professional closing
- Contact information
- Open for discussion

## Common Mistakes to Avoid

### 1. Wall of Text
**Problem**: Slides filled with paragraphs
**Solution**: Extract key points, use bullets

### 2. Tiny Fonts
**Problem**: Text below 24pt
**Solution**: Less content, larger fonts

### 3. Cluttered Slides
**Problem**: Too many elements competing for attention
**Solution**: Simplify, use multiple slides

### 4. Inconsistent Styling
**Problem**: Different fonts, colors, layouts
**Solution**: Use consistent theme throughout

### 5. Poor Contrast
**Problem**: Light text on light background
**Solution**: Ensure strong contrast

### 6. Overuse of Animation
**Problem**: Distracting transitions and effects
**Solution**: Use sparingly and purposefully

## Best Practices for Different Contexts

### Technical Presentations
- Include code examples (properly formatted)
- Use diagrams for architecture
- Provide technical depth in appendix
- Balance detail with clarity

### Business Presentations
- Focus on value and impact
- Use data visualization
- Include executive summary
- Emphasize ROI and outcomes

### Educational Presentations
- Build concepts progressively
- Include examples and exercises
- Provide references
- Use repetition for key concepts

## Validation Checklist

Before finalizing any presentation:

- [ ] All slides follow 6×6 rule
- [ ] Fonts meet minimum size requirements
- [ ] Each slide has clear purpose
- [ ] Consistent styling throughout
- [ ] Images are high quality and relevant
- [ ] Color contrast is sufficient
- [ ] Total slide count is appropriate
- [ ] Flow is logical and easy to follow
- [ ] Key messages are clear
- [ ] Call to action is present

## Tools and Resources

### Validation
Use `npm run validate` to automatically check:
- 6×6 rule compliance
- Font size requirements
- Slide structure
- Image optimization

### Templates
Start with provided templates:
- `basic.md` - General purpose
- `technical.md` - For technical content
- `business.md` - For business contexts

### Themes
Choose appropriate theme:
- `base` - Professional, versatile
- `minimal` - Clean, focused
- `vibrant` - Dynamic, energetic

## Conclusion

Great presentations are not about showing everything you know—they're about communicating key ideas effectively. By following these guidelines, you'll create presentations that engage, inform, and inspire your audience.

Remember: The slides support your message, they don't deliver it. You are the presenter, not the slides.