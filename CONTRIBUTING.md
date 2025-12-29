# Contributing Guidelines

## Project Standards

This project follows professional development standards with emphasis on code quality, documentation, and version control best practices.

---

## Code of Conduct

- **Professionalism**: Maintain professional communication and conduct
- **Quality**: Deliver high-quality, well-tested code
- **Documentation**: Thoroughly document all changes
- **Accessibility**: Ensure WCAG 2.1 AA compliance minimum
- **Performance**: Optimize for speed and user experience
- **Security**: Follow security best practices

---

## Git Workflow

### Branch Naming Convention
```
feature/feature-name      # New features
fix/bug-description       # Bug fixes
docs/documentation-name   # Documentation updates
style/css-changes        # CSS/styling changes
refactor/code-section    # Code refactoring
perf/optimization-name   # Performance improvements
chore/maintenance-task   # Maintenance tasks
```

### Commit Message Format

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): subject

body

footer
```

**Types:**
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` CSS/formatting
- `refactor:` Code restructuring
- `perf:` Performance improvement
- `chore:` Build/dependency updates
- `test:` Test additions/updates

**Examples:**
```bash
feat(homepage): add hero section with responsive design
fix(navigation): correct mobile menu alignment on iOS
docs(readme): update installation instructions
perf(images): optimize asset delivery with WebP format
```

---

## Development Workflow

### Step 1: Create Feature Branch
```bash
git checkout main
git pull origin main
git checkout -b feature/your-feature-name
```

### Step 2: Make Changes
- Write clean, semantic HTML
- Use CSS Grid/Flexbox for layouts
- Implement mobile-first design
- Add inline comments for complex logic
- Keep files organized and modular

### Step 3: Test Thoroughly
- [ ] Test in Chrome, Safari, Firefox
- [ ] Test on mobile devices
- [ ] Verify all links work
- [ ] Check form submissions
- [ ] Run Lighthouse audit (target >90)
- [ ] No console errors
- [ ] Spell-check content

### Step 4: Commit Changes
```bash
git add .
git commit -m "type(scope): descriptive message"
git push origin feature/your-feature-name
```

### Step 5: Create Pull Request
- Go to GitHub repo
- Click "Compare & pull request"
- Fill in PR template with:
  - What changed
  - Why it changed
  - How to test
  - Related issues
- Request review
- Merge after approval

---

## Code Quality Standards

### HTML
- Semantic HTML5 tags only
- Proper heading hierarchy (h1 → h6)
- ARIA labels for accessibility
- Clean, readable code
- Comments for complex sections

### CSS
- Mobile-first approach
- BEM naming convention
- CSS variables for theming
- No inline styles
- Organized by sections
- Minified in production

### JavaScript
- ES6+ standards
- Clear, descriptive variable names
- Functions under 50 lines
- No console.log in production
- Proper error handling
- Comments for complex logic

---

## SEO Requirements

All changes must maintain or improve SEO:

- [ ] Meta tags present (title, description, og:*)
- [ ] Proper heading hierarchy
- [ ] Alt text on all images
- [ ] Internal linking strategy
- [ ] Mobile responsiveness
- [ ] Page load < 3 seconds
- [ ] Core Web Vitals optimized
- [ ] Robots.txt configured
- [ ] Sitemap updated
- [ ] Structured data (Schema.org)

---

## Performance Checklist

- [ ] Images optimized (<100KB each)
- [ ] Lazy loading implemented
- [ ] CSS/JS minified
- [ ] Caching headers set
- [ ] Gzip compression enabled
- [ ] No render-blocking resources
- [ ] Critical CSS inline
- [ ] Fonts optimized (web-safe or WOFF2)
- [ ] Lighthouse score >90
- [ ] First Contentful Paint <1.5s

---

## Accessibility Standards (WCAG 2.1 AA)

- [ ] Color contrast ratio ≥4.5:1
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Form labels associated
- [ ] ARIA roles correct
- [ ] Skip links present
- [ ] Alt text descriptive
- [ ] No flashing content
- [ ] Text resizable to 200%
- [ ] No color alone for meaning

---

## Documentation Requirements

Every PR must include:

1. **Commit Messages**: Clear, descriptive, conventional format
2. **Code Comments**: For complex logic, business rules
3. **README Updates**: If new features added
4. **CHANGELOG Entry**: Document in CHANGELOG.md
5. **Testing Notes**: How to verify changes

---

## Version Management

### Semantic Versioning (MAJOR.MINOR.PATCH)

- **MAJOR**: Breaking changes (v2.0.0)
- **MINOR**: New features, backward compatible (v1.1.0)
- **PATCH**: Bug fixes (v1.0.1)

### Release Process

1. Update version in package files
2. Document changes in CHANGELOG.md
3. Create Git tag: `v1.0.0`
4. Push tag: `git push origin v1.0.0`
5. Create GitHub Release

---

## Review Criteria

Pull requests will be evaluated on:

- **Code Quality**: Clean, readable, maintainable
- **Functionality**: Works as intended, no regressions
- **Testing**: Properly tested across browsers/devices
- **Documentation**: Well-commented, documented
- **Performance**: No negative impact on performance
- **Accessibility**: WCAG compliant
- **SEO**: Maintains or improves SEO
- **Commit History**: Clear, conventional commits

---

## Resources

- [Conventional Commits](https://www.conventionalcommits.org/)
- [BEM CSS Naming](http://getbem.com/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Web.dev Learning](https://web.dev/learn/)
- [MDN Web Docs](https://developer.mozilla.org/)

---

## Questions?

Refer to DEVELOPMENT_ROADMAP.md for detailed development guidelines and setup instructions.
