# Developer Next Steps

## Current Status

✅ **Foundation Established**
- Design token system created (css/tokens.css)
- CSS architecture guide documented
- Comprehensive refactor plan in place
- Professional repository structure

## Immediate Action Items (Next 1-2 weeks)

### Phase 1: Component CSS Extraction

#### Task 1.1: Create reset.css
```bash
# File: css/reset.css
# Duration: 2-3 hours
```

**Responsibilities:**
- Normalize all HTML5 elements
- Remove default margins/paddings
- Set base font family and sizing
- Define link and button resets
- Normalize form elements
- Reference: REFACTOR_PLAN.md, Phase 1

**Acceptance Criteria:**
- All elements use consistent base styles
- No hardcoded values (use tokens only)
- Zero conflicts with existing CSS
- Passes axe accessibility audit

#### Task 1.2: Create layout.css
```bash
# File: css/layout.css
# Duration: 3-4 hours
```

**Responsibilities:**
- Container utility class
- Grid system patterns
- Flexbox utilities
- Spacing helper classes

**Key Patterns:**
```css
.container { max-width: var(--container-max); margin: 0 auto; }
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); }
.flex { display: flex; gap: var(--space-4); }
```

#### Task 1.3: Create component files
```bash
# Files to create:
css/components/header.css
css/components/navigation.css
css/components/hero.css
css/components/cards.css
css/components/buttons.css
css/components/forms.css
css/components/footer.css

# Total duration: 2-3 days (8-12 hours)
```

**Process:**
1. Extract component from index.html
2. Consolidate duplicate styles
3. Convert to BEM naming
4. Replace hardcoded values with tokens
5. Test responsive breakpoints
6. Add accessibility checks (focus, contrast)

### Phase 2: HTML Refactoring (Week 2)

#### Task 2.1: Create modular HTML structure

**Strategy:**
- Break index.html into semantic sections
- Create header.html partial
- Create footer.html partial
- Keep main content in index.html for now
- Document component boundaries with comments

**Example Comment Structure:**
```html
<!-- SECTION: Header Navigation
     Component: header
     Files: header.css, navigation.css
     Classes: .header, .header__*, .nav, .nav__*
-->
<header class="header" role="banner">
  ...
</header>
<!-- END: Header Navigation -->
```

#### Task 2.2: Validate semantic HTML

- Check heading hierarchy (h1 → h2 → h3)
- Verify landmark roles (header, main, footer, nav)
- Ensure form labels and ARIA attributes
- Test keyboard navigation
- Run accessibility validator

### Phase 3: Responsive Refinement (Week 3)

#### Task 3.1: Mobile-first breakpoint review

```css
/* Create css/responsive/mobile.css for 320px+ */
/* Create css/responsive/tablet.css for 768px+ */
/* Create css/responsive/desktop.css for 1024px+ */
```

**Testing Checklist:**
- [ ] iPhone SE (375px)
- [ ] iPad (768px)
- [ ] Desktop (1440px)
- [ ] Ultra-wide (1920px)
- [ ] Touch target sizes (44px minimum)
- [ ] Text readability at all sizes

#### Task 3.2: Create responsive test suite

```bash
# Manual testing
- Use Chrome DevTools device emulation
- Test on actual devices
- Verify touch interactions
- Check orientation changes
```

### Phase 4: Performance Optimization (Week 4)

#### Task 4.1: CSS minification

```bash
# Create build script
# Use cssnano or PostCSS to minify
# Target: < 50KB total CSS (gzipped)
```

#### Task 4.2: Critical CSS inline

```html
<!-- Inline critical above-the-fold CSS -->
<style>
  /* Header, hero, first viewport styles */
</style>

<!-- Defer non-critical -->
<link rel="stylesheet" href="css/non-critical.css" media="print" onload="this.media='all'">
```

#### Task 4.3: Performance audit

```bash
# Run Lighthouse
# Target: 95+ score
# Check Core Web Vitals:
# - LCP < 2.5s
# - FID < 100ms
# - CLS < 0.1
```

## Code Review Checklist

Before committing each task:

- [ ] **BEM Naming**: All classes follow Block__Element--Modifier pattern
- [ ] **Tokens**: No hardcoded colors, sizes, or spacing values
- [ ] **Specificity**: Max selector depth is 3 levels
- [ ] **Accessibility**: Focus states visible, color contrast > 4.5:1
- [ ] **Responsiveness**: Tested at 320px, 768px, 1024px, 1920px
- [ ] **Duplication**: No repeated selectors or rule sets
- [ ] **Comments**: Complex rules are explained
- [ ] **Performance**: CSS file < 20KB each
- [ ] **Git**: Meaningful commit message with feat/fix/docs prefix

## Git Workflow

### Branch Strategy

```bash
# Create feature branch
git checkout -b feat/extract-header-component

# Make changes, test locally
git add css/components/header.css
git commit -m "feat(header): extract header styles with BEM naming"

# Push and create PR
git push origin feat/extract-header-component
```

### Commit Message Format

```
feat(component): short description

Detailed explanation of changes:
- What was changed
- Why it was changed
- Link to related issues

Files:
- css/components/header.css
- index.html (header section)

Testing:
- Tested at 320px, 768px, 1024px
- WCAG AA accessibility verified
```

## Tools & Resources

### Local Development Setup

```bash
# 1. Clone repo
git clone https://github.com/triqbit/yaa.git
cd yaa

# 2. Open in VS Code
code .

# 3. Install VS Code extensions
# - Stylelint (CSS linting)
# - HTMLhint (HTML validation)
# - Accessibility Insights (a11y)
# - Thunder Client (API testing)
```

### Validation Tools

- **CSS**: Stylelint with BEM plugin
- **HTML**: W3C HTML Validator
- **A11y**: WAVE, Axe DevTools, NVDA
- **Performance**: Lighthouse CLI, WebPageTest

### Reference Documentation

- [REFACTOR_PLAN.md](./REFACTOR_PLAN.md) - 6-week project timeline
- [css/CSS_ARCHITECTURE.md](./css/CSS_ARCHITECTURE.md) - Design system guide
- [css/tokens.css](./css/tokens.css) - Design token definitions
- [CONTRIBUTING.md](./CONTRIBUTING.md) - Contribution guidelines

## Estimated Timeline

| Week | Focus | Hours | Deliverables |
|------|-------|-------|---------------|
| 1 | Layout & Reset | 8-10 | reset.css, layout.css, components/header.css |
| 2 | Components | 12-15 | 6+ component CSS files, HTML refactoring |
| 3 | Responsive | 8-10 | Responsive breakpoint testing, mobile CSS |
| 4 | Performance | 8-10 | Optimization, accessibility audit, monitoring |
| 5 | Platform Pages | 12-15 | Food & Agri platform template |
| 6 | DevOps | 10-12 | Build pipeline, GitHub Actions, deployment |

**Total: 58-72 hours (~2-3 weeks for single developer)**

## Success Metrics

✅ When Phase 1 is complete:
- [ ] All CSS extracted into modular files
- [ ] Zero CSS duplication in codebase
- [ ] Lighthouse score >= 90
- [ ] 100% WCAG AA compliance
- [ ] Responsive design verified at all breakpoints
- [ ] Zero hardcoded design values
- [ ] All commits follow git conventions

## Questions or Blockers?

Create an issue in the repo or contact the team lead.

---

**Last Updated**: December 2025  
**Project Owner**: YAA.Group Development  
**Status**: 🔄 In Progress
