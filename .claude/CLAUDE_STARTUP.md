# Claude Code Rules for Startup Pitch Presentations

## Overview
This document defines specific rules for creating startup pitch presentations using Marp, based on the comprehensive startup pitch template by Takaaki Umada (東京大学 FoundX).

## Startup Pitch Structure

### Business Types and Sections
Select appropriate sections based on business type:

1. **Simple Business (5 min)**
   - ① Basic Information
   - ② Problem-Solution
   - ⑤ Competitive Environment
   - ⑦ Business & Team
   - (⑧ Finance - optional)

2. **Business-Heavy (7 min)**
   - ① Basic Information
   - ② Problem-Solution
   - ⑤ Competitive Environment
   - ⑥ Go-to-Market
   - ⑦ Business & Team
   - (⑧ Finance - optional)

3. **Complex/Timeline Business (7 min)**
   - ① Basic Information
   - ② Problem-Solution
   - ④ Timeline
   - ⑤ Competitive Environment
   - ⑦ Business & Team
   - (⑧ Finance - optional)

4. **Deep Tech (10 min)**
   - ① Basic Information
   - ② Problem-Solution
   - ③ Technology
   - ④ Timeline
   - ⑤ Competitive Environment
   - ⑦ Business & Team
   - (⑧ Finance - optional)

## Content Rules

### Font Size Requirements
- **Minimum font size: 56pt** for all content slides
- Exception: Technical diagrams and tables can use smaller fonts if necessary
- Title slides can use larger fonts (64pt+)

### Information Density
- **One main idea per slide**
- Maximum 6 bullet points per slide (inherited from 6×6 rule)
- Prioritize clarity over completeness
- Use multiple slides rather than cramming information

### Time Management
- **20 seconds per slide** for 5-minute pitches
- **15 seconds per slide** for 7-10 minute pitches
- Always rehearse to ensure timing

## Section-Specific Guidelines

### ① Basic Information Section

#### Title Slide
```markdown
<!-- _class: title -->

# Company/Product Name

One-line description (20-30 Japanese characters)

Company Logo
```
- Keep description under 10 seconds to read
- Avoid abstract statements like "democratizing AI"
- Use metaphors sparingly (e.g., "Airbnb for construction equipment")

#### Business Overview (Optional)
- Use for complex businesses only
- 15-second explanation maximum
- Include visual diagram
- Focus on "what we do" not vision/mission

### ② Problem-Solution Section

#### Market Background
- Provide context for unfamiliar audiences
- Highlight market changes or inflection points
- Use specific data, not abstractions
- 10-20 seconds speaking time

#### Customer Problem
```markdown
# Customer Problem

- Specific customer segment
- Concrete pain point 1
- Measurable impact
- Current alternatives failing
- Urgency factor
```
- Clearly define WHO the customer is
- Distinguish between market problems and customer problems
- Show problem severity

#### True Problem (Optional)
- Use when surface problem differs from root cause
- Provide unique insights
- Explain why problem persists

#### Solution
- Explain WHY this solution
- Show problem-solution fit
- Keep explanation concise
- Focus on uniqueness

#### Product
- Use screenshots/mockups
- Show actual product if available
- Define value chain scope

### ③ Technology Section (Deep Tech Only)

#### Technology Overview
```markdown
# Technology Overview

[Visual diagram of technology]

Key features:
- Performance metric 1
- Innovation aspect
- Scalability potential
```

#### Competitive Technology Comparison
Use table format:
```markdown
| Feature | Our Tech | Competitor A | Competitor B |
|---------|----------|--------------|--------------|
| Performance | X | Y | Z |
| Cost | $A | $B | $C |
| Scalability | High | Medium | Low |
```

#### Technical Challenges
```markdown
| Technical Item | Current State | Target |
|----------------|---------------|--------|
| Durability | 10 years | 15 years |
| Efficiency | 70% | 90% |
```

#### Development Roadmap
- Use timeline visualization
- Link to business milestones
- Include funding rounds

### ④ Timeline Section

#### Expansion Strategy
```markdown
# Expansion Strategy

Phase 1 (202X-202X): Entry with [specific market]
Market size: $X billion

Phase 2 (202X-202X): Expand to [adjacent market]  
Market size: $Y billion

Phase 3 (202X-203X): Reach [final vision]
Market size: $Z billion
```

#### Business Roadmap
Include integrated view:
- Revenue projections (bottom-up calculation)
- Business milestones
- Technical progress
- Funding rounds

### ⑤ Competitive Environment

#### Market Size
- Show growth trajectory
- Use reliable sources
- Consider realistic market share (max 30%)
- Target 10B+ JPY revenue in 10 years

#### Competition Analysis
```markdown
| Company | Value Prop | Differentiation | Valuation |
|---------|------------|-----------------|-----------|
| Comp A | X | Y | $ZM |
| Comp B | X | Y | $ZM |
| Us | X | Y | Target: $ZM |
```

#### Game Rules
- Define how to win in this market
- Be specific about success metrics
- Show understanding of market dynamics

#### Victory Conditions
- Quantify what "winning" means
- Use specific numbers
- Can have multiple conditions

#### Winning Strategy
- Path to victory conditions
- Why now is the right time
- Startup-specific advantages

#### Long-term Moat
- Network effects
- Scale economies
- Technology barriers
- Regulatory advantages
- Brand strength

### ⑥ Go-to-Market Section

#### Marketing Strategy
- Proven channels
- Customer acquisition insights
- Unique advantages (followers, partnerships)

#### Sales Strategy
- Sales methodology
- Key relationships
- Pipeline status

#### GTM Roadmap
- Quarterly milestones
- Channel development
- Partnership timeline

### ⑦ Business & Team Section

#### Traction
```markdown
# Traction

[Chart showing growth]

- Current MRR: $X
- Users: Y
- Growth rate: Z% MoM
- Key customers: [logos]
```
- Use actual data, not projections
- Include LOIs if no revenue
- Show customer testimonials

#### Business Model
- Keep it simple
- Text over complex diagrams
- Clear revenue streams

#### Team
```markdown
# Team

[Photo] Name
Strong credential related to business

[Photo] Name  
Strong credential related to business
```
- Full-time members only
- Show founder-market fit
- Highlight relevant experience

#### Ask
- Be specific about needs
- Funding amount
- Hiring needs
- Introduction requests

### ⑧ Finance Section (Fundraising Only)

#### Funding Request
```markdown
# Funding Request

Target: $X-Y million
Use of funds:
- R&D: 40%
- Sales/Marketing: 30%
- Team: 20%
- Other: 10%
```

#### Milestones to Next Round
- 18-24 month runway
- Clear achievements
- Next round prerequisites

#### Risk Analysis
```markdown
| Risk Type | Risk | Mitigation | Response |
|-----------|------|------------|----------|
| Technical | X | Y | Z |
| Market | X | Y | Z |
| Execution | X | Y | Z |
```

## Slide Design Rules

### Visual Hierarchy
1. **Title**: Largest, most prominent
2. **Key message**: Second level
3. **Supporting details**: Standard size
4. **Disclaimers**: Smallest acceptable

### Color Usage
- Use color purposefully
- Maintain consistency
- Ensure high contrast
- Limit to 3-4 colors max

### Data Visualization
- Simplify charts
- Highlight key insights
- Remove unnecessary elements
- Use annotations

## Common Mistakes to Avoid

1. **Too much text**: Break into multiple slides
2. **Small fonts**: Stick to 56pt minimum
3. **Complex diagrams**: Simplify or split
4. **Vague statements**: Use specific data
5. **Missing traction**: Show any validation
6. **No ask**: Always include clear request
7. **Tech focus over business**: Balance both
8. **Unrealistic projections**: Use bottom-up calculations

## Writing Order Recommendation

1. ② Problem-Solution (core value prop)
2. ④ Timeline (expansion strategy)
3. ⑤ Competition (market understanding)
4. ③ Technology (if applicable)
5. ⑥ GTM (growth strategy)
6. ⑦ Business/Team (execution ability)
7. ⑧ Finance (funding needs)
8. ① Basic Info (polish last)

## Validation Checklist

- [ ] All slides readable at 56pt+
- [ ] Each slide has one main point
- [ ] Total time within limit
- [ ] Clear problem-solution fit
- [ ] Realistic market size
- [ ] Defensible differentiation
- [ ] Strong team-market fit
- [ ] Specific ask included
- [ ] Traction demonstrated
- [ ] Risks acknowledged

## AI Prompts for Pitch Creation

When using AI to help create pitches:

```
Create a startup pitch following this structure:
- Business type: [Simple/Business-Heavy/Complex/Deep Tech]
- Target duration: [5/7/10] minutes
- Company: [name]
- One-liner: [description]

Include these sections:
[List relevant sections based on business type]

Follow these rules:
- One main idea per slide
- Minimum 56pt font size
- Specific data over generalizations
- Clear visuals over text
- Bottom-up calculations
```

Remember: The pitch supports your story. You are the presenter, not the slides.