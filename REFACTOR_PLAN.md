# YAA.Group Website - Professional Refactor Plan

## Executive Summary
This document outlines the systematic refactoring of the YAA.Group website from a monolithic HTML/CSS structure into a professional, scalable, component-based architecture.

## Phase 1: Design Tokens & CSS Architecture (Week 1)

### Objectives
- Consolidate all design tokens into a single source of truth
- Eliminate CSS duplication and conflicting rules
- Create BEM-compliant component naming scheme
- Implement CSS custom properties for dynamic theming

### Deliverables
1. **tokens.css** - Centralized design system
   - Color palette (primary, secondary, accent, surfaces, text)
   - Typography scale (font-sizes, font-weights, line-heights)
   - Spacing scale (margins, paddings, gaps)
   - Border radius values
   - Shadow definitions
   - Animation/transition timing functions
   - Z-index scale

2. **reset.css** - Normalized base styles
   - HTML5 semantic resets
   - Form element normalization
   - Box-sizing reset
   - Custom scrollbar styling

3. **responsive.css** - Mobile-first breakpoints
   - xs: 320px (mobile)
   - sm: 576px (tablet portrait)
   - md: 768px (tablet landscape)
   - lg: 1024px (desktop)
   - xl: 1280px (wide desktop)
   - 2xl: 1536px (ultra-wide)

## Phase 2: Component Architecture (Week 2)

### Component Library Structure
```
css/
├── tokens/
│   ├── colors.css
│   ├── typography.css
│   ├── spacing.css
│   └── shadows.css
├── layout/
│   ├── container.css
│   ├── grid.css
│   └── flexbox.css
├── components/
│   ├── header.css
│   ├── navigation.css
│   ├── hero.css
│   ├── buttons.css
│   ├── cards.css
│   ├── forms.css
│   └── footer.css
├── utilities/
│   ├── visibility.css
│   ├── spacing.css
│   ├── text.css
│   └── effects.css
└── responsive/
    ├── mobile.css
    ├── tablet.css
    └── desktop.css
```

## Phase 3: HTML Modularization (Week 3)

### Component Extraction
1. **Header Component**
   - Logo branding
   - Primary navigation with mega-menu
   - Mobile hamburger toggle
   - Sticky scroll behavior

2. **Hero Section**
   - Hero content grid
   - Call-to-action buttons
   - Hero card with metrics
   - Gradient backgrounds

3. **Stats Band**
   - 4-column stat display
   - Responsive collapse to 2 columns
   - Animated counter values (optional)

4. **Platform Showcase Grid**
   - 6 platform cards
   - Icon, title, description
   - Metric chips
   - Hover interactions

5. **Systems Grid**
   - 10 system cards (2-column)
   - Index badges
   - Benefit statement
   - Description text

6. **Proof Strip**
   - Left content (badge, title, pills)
   - Right grid (3-column proof cards)
   - Responsive: single column on mobile

7. **Services Strip**
   - Left: service title and tags
   - Right: 2-column service list
   - Responsive: single column on mobile

8. **Contact Section**
   - Contact box (left)
   - Contact form (right)
   - Responsive: stacked on mobile

9. **Footer**
   - Footer grid (4 columns)
   - Footer bottom (3 sections: left, center, right)
   - Social icons

## Phase 4: Performance & Accessibility (Week 4)

### Performance Optimizations
- Critical CSS inlining (above-the-fold)
- Deferred non-critical CSS loading
- Image optimization and lazy loading
- Minification and gzip compression
- Service worker for offline caching

### Accessibility Enhancements
- WCAG 2.1 AA compliance audit
- ARIA labels and roles review
- Keyboard navigation testing
- Focus management
- Color contrast ratios (APCA)
- Screen reader optimization
- Semantic HTML validation

### Performance Metrics Targets
- Lighthouse Score: 95+
- Core Web Vitals:
  - LCP: < 2.5s
  - FID: < 100ms
  - CLS: < 0.1
- First Paint: < 1.5s
- Total Bundle Size: < 150KB (gzipped)

## Phase 5: Platform Pages & Templating (Week 5)

### Platform Page Template
Create reusable template for each vertical (Food & Agri, Energy, Healthcare, etc.)

**Template Structure:**
1. Hero section (platform-specific)
2. Overview grid (3-column)
3. Key challenges section
4. Solution framework
5. Case studies / proof points
6. Integration touchpoints
7. Call-to-action
8. Related platforms navigation

### First Implementation: Food & Agriculture
- Platform overview
- Farmgate pricing model
- Global reach (65+ countries)
- Integrated supply chain
- Sustainability metrics
- Partner testimonials

## Phase 6: Build Pipeline & DevOps (Week 6)

### Tools & Technologies
- **Build Tool**: Vite (for static site generation)
- **CSS Processing**: PostCSS with plugins
- **Minification**: terser + cssnano
- **Linting**: Stylelint + ESLint
- **Testing**: Vitest + Playwright
- **CI/CD**: GitHub Actions
- **Deployment**: GitHub Pages (automatic)

### GitHub Actions Workflows
```yaml
# 1. On PR: Lint & Test
# 2. On Merge to main: Build & Deploy
# 3. Scheduled: Performance audits
# 4. Scheduled: Accessibility scans
```

## Timeline & Milestones

| Week | Phase | Deliverables | Status |
|------|-------|--------------|--------|
| 1 | Design Tokens | tokens.css, reset.css, responsive.css | 🔄 In Progress |
| 2 | Components | Component CSS library | ⏳ Pending |
| 3 | HTML | Modular HTML structure | ⏳ Pending |
| 4 | Performance | Optimization + A11y | ⏳ Pending |
| 5 | Platforms | Platform templates | ⏳ Pending |
| 6 | DevOps | Build pipeline | ⏳ Pending |

## Success Criteria

✅ **Code Quality**
- Zero duplicate CSS rules
- BEM naming throughout
- < 10% unused CSS
- Accessible color contrasts

✅ **Performance**
- Lighthouse score 95+
- < 150KB total size (gzipped)
- < 2.5s LCP

✅ **Maintainability**
- Self-documenting component names
- Clear file structure
- Comprehensive comments
- Developer-friendly tooling

✅ **Scalability**
- Ready for 10+ platform pages
- Template-based approach
- Design system enforced

## Risk Mitigation

| Risk | Probability | Mitigation |
|------|-------------|------------|
| Breaking changes in CSS | Medium | Feature branch + staging review |
| Increased bundle size | Low | Tree-shaking + code splitting |
| Accessibility regression | Low | Automated a11y tests + manual audit |
| Performance degradation | Low | CI performance budgets |

---

**Owner**: Development Team  
**Last Updated**: December 2025  
**Status**: 🔄 In Progress
