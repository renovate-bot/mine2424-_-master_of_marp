# Startup Pitch Quick Reference

## ⏱️ Pitch Types & Duration

| Type | Duration | Sections | Use Case |
|------|----------|----------|----------|
| **Simple** | 5 min | Problem, Solution, Market, Team, Ask | Single product/service |
| **Business** | 7 min | + Go-to-Market | Marketing/sales critical |
| **Complex** | 7 min | + Timeline | Phased expansion |
| **Deep Tech** | 10 min | + Technology + Timeline | Tech breakthrough |

## 🚀 Quick Commands

```bash
# Create new pitch
marp-startup new simple

# Validate pitch
marp-startup validate pitch.md

# Check completeness
marp-startup analyze pitch.md

# AI assistance
marp-startup generate "Your idea"
```

## 📋 Required Sections

### All Pitches Must Have:
- [ ] Title slide with one-liner
- [ ] Problem definition
- [ ] Solution explanation
- [ ] Market size (TAM/SAM/SOM)
- [ ] Competition analysis
- [ ] Traction/validation
- [ ] Team credentials
- [ ] Clear ask

### Additional by Type:
- **Business**: Go-to-Market strategy
- **Complex**: Timeline/phases
- **Deep Tech**: Technology details, roadmap

## 🎨 Design Rules

### Fonts
- **Minimum: 56pt** (larger than standard)
- Headings: 72pt+
- Title: 96pt+

### Content
- One idea per slide
- Max 6 bullets
- 15-20 seconds per slide
- Specific numbers only

## 📊 Key Slides

### Title
```markdown
<!-- _class: title -->
# Company Name
One-line description (20-30 chars)
![width:200px](logo.png)
```

### Problem
```markdown
# Customer Problem
**Target**: [Specific segment]
- [Quantified pain #1]
- [Business impact]
- [Current solution fails]
```

### Traction
```markdown
<!-- _class: traction -->
# Traction
<div class="metrics">
  <div class="metric">
    <div class="metric-value">$1.2M</div>
    <div class="metric-label">ARR</div>
  </div>
</div>
```

### Ask
```markdown
<!-- _class: ask -->
# Ask
- **Raising**: $10M Series A
- **Use**: R&D 40%, Sales 40%
- **Need**: Strategic investors
```

## ❌ Common Mistakes

1. **Too much text** → Split slides
2. **Vague claims** → Use specific data
3. **No traction** → Show any validation
4. **Weak team** → Highlight credentials
5. **No ask** → Be specific

## ✅ Validation Checklist

```bash
# Run automated check
marp-startup validate pitch.md
```

Manual checks:
- [ ] Using `theme: startup`
- [ ] All sections present
- [ ] Fonts ≥ 56pt
- [ ] Specific metrics
- [ ] Within time limit
- [ ] Images included
- [ ] Problem-solution fit clear

## 📈 Metrics to Include

### Traction
- Revenue (MRR/ARR)
- Users/Customers
- Growth rate
- Key partnerships
- LOIs/Contracts

### Market
- TAM (Total Addressable)
- SAM (Serviceable Addressable)
- SOM (Serviceable Obtainable)
- CAGR
- Bottom-up calculation

### Unit Economics
- CAC (Customer Acquisition Cost)
- LTV (Lifetime Value)
- Gross margins
- Payback period

## 🎯 Pitch Flow

1. **Hook** - Title & problem
2. **Solution** - Your approach
3. **Proof** - Traction/validation
4. **Scale** - Market & growth
5. **Team** - Why you
6. **Ask** - What you need

## 💡 Pro Tips

### Storytelling
- Start with customer pain
- Build to your solution
- Show evidence it works
- Explain the big vision
- Prove you're the team

### Timing
- Practice out loud
- 20 sec/slide (5 min)
- 15 sec/slide (7-10 min)
- Leave time for Q&A

### Investor Psychology
- Lead with traction
- Address concerns early
- Show coachability
- Create FOMO

## 🔗 Resources

- [Full Guide](en/startup-guide.md)
- [Templates](../src/templates/)
- [Original Framework](https://bit.ly/umada-pitch-template)
- [Example Decks](https://foundx.jp)

---

**Remember**: The deck supports your story. You are the product, not the slides.