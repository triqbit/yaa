# CSS Architecture Guide

## Overview

This document defines the modular CSS structure for the YAA.Group website, following BEM (Block, Element, Modifier) methodology for naming conventions and component-based organization.

## Design Philosophy

1. **Single Responsibility**: Each CSS file has one clear purpose
2. **Reusability**: Components are self-contained and composable
3. **Maintainability**: Clear naming conventions and documentation
4. **Performance**: Minimal CSS, efficient selectors, no duplication
5. **Accessibility**: WCAG 2.1 AA compliance by design

## File Structure

```
css/
├── tokens.css              # Design tokens (colors, typography, spacing)
├── reset.css               # Base element resets
├── layout.css              # Container, grid, flexbox utilities
├── typography.css         # Text styles, headings, paragraphs
├── components/
│   ├── header.css          # Header navigation bar
│   ├── navigation.css      # Navigation menu & mega-menu
│   ├── hero.css            # Hero section
│   ├── cards.css           # Card components
│   ├── buttons.css         # Button styles
│   ├── forms.css           # Form elements
│   ├─═ footer.css          # Footer
│   ├─═ stats.css           # Statistics band
│   ├─═ sections.css        # Section styles
├─═ utilities/
│   ├─═ spacing.css         # Margin/padding utilities
│   ├─═ visibility.css      # Display/visibility utilities
│   ├─═ text.css            # Text utilities
├─═ responsive/
│   ├─═ mobile.css          # Mobile breakpoint styles
│   ├─═ tablet.css          # Tablet breakpoint styles
│   ├─═ desktop.css         # Desktop breakpoint styles
├─═ index.css              # Main import file (production)
```

## BEM Naming Convention

### Block
A standalone entity that is meaningful on its own.

```css
.header { }
.card { }
.button { }
```

### Element
A part of a block that has no standalone meaning and is semantically tied to its block.

```css
.header__logo { }
.card__title { }
.button__icon { }
```

### Modifier
A flag on a block or element that represents a different state or variation.

```css
.button--primary { }
.button--large { }
.card--featured { }
.header--sticky { }
```

### Examples of Good BEM

```css
/* Block */
.hero { }

/* Elements of .hero */
.hero__content { }
.hero__title { }
.hero__subtitle { }
.hero__cta { }

/* Modifiers */
.hero--dark { }
.hero__cta--primary { }
.hero__title--large { }
```

## Import Order

When combining CSS files, follow this order to prevent conflicts:

```css
/* 1. Design Tokens & Variables */
@import 'tokens.css';

/* 2. Base Resets */
@import 'reset.css';

/* 3. Layout System */
@import 'layout.css';

/* 4. Typography */
@import 'typography.css';

/* 5. Components */
@import 'components/header.css';
@import 'components/navigation.css';
@import 'components/hero.css';
@import 'components/cards.css';
@import 'components/buttons.css';
@import 'components/forms.css';
@import 'components/footer.css';

/* 6. Utilities */
@import 'utilities/spacing.css';
@import 'utilities/visibility.css';
@import 'utilities/text.css';

/* 7. Responsive Overrides */
@import 'responsive/mobile.css';
@import 'responsive/tablet.css';
@import 'responsive/desktop.css';
```

## Component Guidelines

### Minimal Nesting

**Good:**
```css
.card { }
.card__header { }
.card__title { }
.card__body { }
```

**Bad:**
```css
.card {
  .header {
    .title { }
  }
}
```

### Use CSS Custom Properties

**Good:**
```css
.button {
  padding: var(--space-4) var(--space-6);
  background-color: var(--color-brand-primary);
  font-size: var(--font-size-base);
  transition: background-color var(--transition-base);
}
```

**Bad:**
```css
.button {
  padding: 16px 24px;
  background-color: #0B9BA8;
  font-size: 16px;
  transition: background-color 0.2s ease;
}
```

### Specificity Rules

- Use single class selectors when possible
- Avoid ID selectors
- Avoid `!important` (except reset overrides)
- Maximum selector depth: 3 levels

**Good:**
```css
.card { }
.card__header { }
.card__header--featured { }
```

**Bad:**
```css
div.card > .header { }
#card .header .title { }
.card .header .title !important { }
```

## Responsive Design

Use mobile-first approach:

```css
/* Mobile styles (default) */
.hero { 
  font-size: var(--font-size-2xl);
}

/* Tablet and above */
@media (min-width: 768px) {
  .hero {
    font-size: var(--font-size-5xl);
  }
}

/* Desktop and above */
@media (min-width: 1024px) {
  .hero {
    font-size: var(--font-size-6xl);
  }
}
```

## Breakpoint Variables

Always use CSS custom properties for breakpoints:

```css
@media (min-width: var(--breakpoint-sm)) { }  /* 576px */
@media (min-width: var(--breakpoint-md)) { }  /* 768px */
@media (min-width: var(--breakpoint-lg)) { }  /* 1024px */
@media (min-width: var(--breakpoint-xl)) { }  /* 1280px */
```

## Accessibility Considerations

### Focus States

All interactive elements must have visible focus:

```css
.button:focus-visible {
  outline: 2px solid var(--color-brand-primary);
  outline-offset: 2px;
}
```

### Color Contrast

Maintain WCAG AA contrast ratios:
- Normal text: 4.5:1
- Large text: 3:1

### Reduced Motion

Always respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  .component {
    transition: none;
    animation: none;
  }
}
```

## Common Patterns

### Container Pattern

```css
.container {
  width: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--space-4);
}
```

### Grid Pattern

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--space-6);
}
```

### Stack Pattern

```css
.stack {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}
```

## Maintenance Checklist

Before committing CSS changes:

- [ ] No duplicate selectors or rules
- [ ] All tokens are used (no hardcoded values)
- [ ] BEM naming followed consistently
- [ ] Accessibility (focus states, contrast)
- [ ] Responsive design tested
- [ ] No unused CSS
- [ ] File size reasonable

## Performance Tips

1. **Minimize selector specificity** - Faster matching
2. **Avoid universal selectors** - Can slow down parsing
3. **Use shorthand properties** - Reduce CSS size
4. **Critical CSS inlining** - Above-the-fold styles
5. **Lazy load non-critical CSS** - After page load

## Version History

| Date | Version | Changes |
|------|---------|----------|
| Dec 2025 | 1.0 | Initial architecture definition |

---

**Last Updated**: December 2025  
**Maintainer**: Development Team  
**Status**: Active
