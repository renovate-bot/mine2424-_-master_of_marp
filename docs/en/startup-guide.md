# Startup Pitch Presentation Guide

This guide covers creating investor-ready startup pitch presentations using the Marp template system, following the comprehensive framework by Takaaki Umada (東京大学 FoundX).

## Quick Start

```bash
# Create a new startup pitch
./scripts/marp-startup new simple

# Validate your pitch
./scripts/marp-startup validate my_pitch.md

# Analyze completeness
./scripts/marp-startup analyze my_pitch.md
```

## Pitch Types and Duration

### 1. Simple Business (5 minutes)
For straightforward single-product businesses:
- Basic Information
- Problem & Solution
- Competition
- Business & Team
- (Finance - if fundraising)

### 2. Business-Heavy (7 minutes)
For businesses where marketing/sales is key:
- All Simple sections plus:
- Go-to-Market strategy

### 3. Complex/Timeline Business (7 minutes)
For compound startups or phased expansion:
- All Simple sections plus:
- Timeline/Expansion strategy

### 4. Deep Tech (10 minutes)
For technology-driven businesses:
- All Complex sections plus:
- Technology deep dive

## Design Requirements

### Font Sizes
- **Minimum 56pt** for all content
- Larger for headings (72pt+)
- Title slides can use 96pt+

### Information Density
- One main idea per slide
- Maximum 6 bullets (6×6 rule applies)
- 15-20 seconds per slide

### Visual Elements
- Use actual product screenshots
- Include data visualizations
- Add team photos
- Show customer logos

## Section Guidelines

### Title Slide

```markdown
<!-- _class: title -->

# Company Name

Building the future of [specific industry]

![width:200px](logo.png)
```

**Rules:**
- One-line description (20-30 characters)
- Avoid vague statements
- Include logo

### Problem & Solution

#### Market Background
- Why now? (10-20 seconds)
- Specific data points
- Regulatory/technology shifts
- Market inflection points

#### Customer Problem
- Define specific customer segment
- Quantify the pain
- Show urgency
- Current solution failures

#### Solution
- Clear problem-solution fit
- Why THIS solution
- Unique approach
- Keep it concise

### Market & Competition

#### Market Size
```markdown
# Market Size

- TAM: $50B (Global)
- SAM: $10B (Our segments)  
- SOM: $1B (5-year target)

Bottom-up: 100K companies × $10K/year = $1B
```

**Rules:**
- Use bottom-up calculations
- Show growth rate (CAGR)
- Be realistic (max 30% market share)

#### Competition
```markdown
| Company | Strength | Weakness | Valuation |
|---------|----------|----------|-----------|
| Leader | Scale | Expensive | $1B |
| Us | 10x faster | New | - |
```

### Traction

```markdown
<!-- _class: traction -->

# Traction

<div class="metrics">
  <div class="metric">
    <div class="metric-value">$2.4M</div>
    <div class="metric-label">ARR</div>
  </div>
  <div class="metric">
    <div class="metric-value">200%</div>
    <div class="metric-label">YoY Growth</div>
  </div>
</div>
```

**Include:**
- Real metrics (revenue, users, growth)
- Customer logos
- LOIs/contracts
- Key validations

### Team

```markdown
# Team

<div class="team-grid">
  <div class="team-member">
    <img src="ceo.jpg">
    <div class="team-member-info">
      <h3>CEO Name</h3>
      <p>Ex-Google, 10y experience</p>
    </div>
  </div>
</div>
```

**Show:**
- Founder-market fit
- Relevant experience
- Previous successes
- Full-time only

### The Ask

```markdown
<!-- _class: ask -->

# Ask

- **Raising**: $10M Series A
- **Use of funds**:
  - R&D: 40%
  - Sales: 40%
  - Ops: 20%
- **Looking for**:
  - Strategic investors
  - Board expertise
  - Customer intros
```

**Be specific about:**
- Amount raising
- Use of funds
- What you need beyond money

## Technology Section (Deep Tech)

### Technology Overview
- Visual architecture diagram
- Key performance metrics
- Competitive comparisons

### Technical Roadmap
```markdown
| Phase | Timeline | Milestone | Impact |
|-------|----------|-----------|--------|
| Current | Now | MVP | Validation |
| Phase 1 | Q2 2025 | v1.0 | First revenue |
| Phase 2 | Q4 2025 | Scale | $10M ARR |
```

### Cost Analysis
- Current vs. future costs
- Path to profitability
- Unit economics

## Timeline Section (Complex Business)

### Expansion Phases
```markdown
# Growth Strategy

**Phase 1**: Entry (2025-2026)
- Market: SMB SaaS
- Size: $2B
- Strategy: Direct sales

**Phase 2**: Expand (2026-2028)
- Market: Enterprise
- Size: $10B
- Strategy: Channel partners

**Phase 3**: Platform (2028+)
- Market: Ecosystem
- Size: $50B
- Strategy: API/Marketplace
```

## Common Mistakes to Avoid

### Content Mistakes
1. **Too much text** - Break into multiple slides
2. **No specifics** - Use real numbers
3. **Missing traction** - Show any validation
4. **Weak team slide** - Highlight credentials
5. **No ask** - Be clear what you want

### Design Mistakes
1. **Small fonts** - Stay above 56pt
2. **Cluttered slides** - One idea per slide
3. **No visuals** - Add charts/screenshots
4. **Poor contrast** - Ensure readability

### Structure Mistakes
1. **Wrong sections** - Match business type
2. **Poor flow** - Tell coherent story
3. **Too long** - Stay within time limit
4. **Missing basics** - Include all required sections

## Validation Checklist

Run validation:
```bash
./scripts/marp-startup validate pitch.md
```

Manual checks:
- [ ] Using startup theme
- [ ] All required sections present
- [ ] Specific metrics included
- [ ] Team credentials clear
- [ ] Ask is specific
- [ ] Within time limit
- [ ] Images/charts included
- [ ] Problem-solution fit clear
- [ ] Traction demonstrated
- [ ] Competition analyzed

## AI Assistance

Generate pitch structure:
```bash
./scripts/marp-startup generate "AI logistics platform"
```

This creates:
1. Detailed prompt for AI tools
2. Section structure
3. Content guidelines
4. Validation rules

## Best Practices

### Storytelling
1. Start with the problem
2. Build to your solution
3. Show proof it works
4. Explain how you'll win
5. Prove you're the team

### Data Presentation
- Use simple charts
- Highlight key numbers
- Compare to competitors
- Show growth trajectory

### Time Management
- Practice out loud
- Time each section
- Leave room for questions
- Have backup slides ready

### Investor Psychology
- Lead with strength
- Address concerns proactively
- Show coachability
- Demonstrate urgency

## Examples and Templates

Access templates:
```bash
# Simple business
cat src/templates/startup-simple.md

# With technology section
cat src/templates/startup-deeptech.md

# With timeline
cat src/templates/startup-complex.md
```

## Resources

- [Original Template (Japanese)](https://bit.ly/umada-pitch-template)
- [Startup Pitch Best Practices](https://foundx.jp)
- [Example Pitch Decks](https://www.slideshare.net/takaumada)

## Support

For questions or improvements:
- GitHub Issues
- Twitter: @tumada
- Website: https://takaumada.com

Remember: The pitch is just the beginning of the conversation. Focus on generating interest and getting to the next meeting.