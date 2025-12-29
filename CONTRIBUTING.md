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


## 🚀 Advanced Contribution Topics

### Rebasing vs. Merging

When updating feature branches:

```bash
# Option 1: Rebase (keeps history clean)
git fetch origin
git rebase origin/main
git push --force-with-lease origin feature/your-feature

# Option 2: Merge (preserves branch history)
git merge origin/main
git push origin feature/your-feature
```

**Recommendation**: Use rebase for single-contributor features, merge for collaborative branches.

### Code Review Best Practices

#### For PR Authors
1. **Keep PRs Small**: Max 400 lines changed
2. **Self-Review First**: Check your own code before requesting review
3. **Provide Context**: Link to issues, design docs, or related PRs
4. **Address Feedback Promptly**: Don't let reviews go stale
5. **Request Re-review**: After addressing comments, request another review

#### For Reviewers
1. **Review Within 24 Hours**: Don't delay code reviews
2. **Be Constructive**: Suggest improvements, don't criticize
3. **Look Beyond Code**: Consider accessibility, performance, security
4. **Approve or Request Changes**: Don't leave ambiguous feedback
5. **Document Reasoning**: Explain why changes are needed

### Conflict Resolution

**When conflicts occur:**

```bash
# Update your branch
git fetch origin
git rebase origin/main

# Resolve conflicts in editor
# Look for <<<<<<<, =======, >>>>>>>

# Stage resolved files
git add .

# Continue rebase
git rebase --continue

# Force push to your branch
git push --force-with-lease origin feature/your-feature
```

## 📊 Testing Requirements

### Cross-Browser Testing

Before submitting PR, test in:
- **Desktop**: Chrome (latest), Firefox (latest), Safari (latest)
- **Mobile**: iOS Safari (latest), Android Chrome (latest)
- **Tablet**: iPad Safari, Android tablets

### Automated Testing

Run these before committing:

```bash
# Lighthouse audit (target 90+)
# Accessibility check with axe DevTools
# Spell-check content
# Validate HTML with W3C validator
# CSS lint with StyleLint
```

### Performance Testing

Use Chrome DevTools:
1. Open DevTools > Performance tab
2. Record user interactions
3. Check Largest Contentful Paint (LCP) < 2.5s
4. Check Cumulative Layout Shift (CLS) < 0.1
5. Check Interaction to Next Paint (INP) < 200ms

## 🔐 Security in Contributing

### Do Not

- Commit API keys, tokens, or secrets
- Include personal information
- Use third-party scripts without review
- Make database connections from frontend
- Hardcode credentials anywhere

### Do

- Use environment variables (in `.env.example`)
- Review third-party dependencies
- Keep dependencies updated
- Validate all user inputs
- Follow OWASP guidelines

## 📚 Documentation Standards

### Inline Code Comments

```javascript
// BAD: Obvious comment
const x = 5; // Set x to 5

// GOOD: Explains WHY
const maxRetries = 5; // API allows 60/min, max 5 retries
```

### Function Documentation

```javascript
/**
 * Toggles mobile menu visibility
 * @param {HTMLElement} menuElement - The menu container
 * @param {boolean} isOpen - Current menu state
 * @returns {boolean} New menu state
 */
function toggleMenu(menuElement, isOpen) {
  // Implementation
}
```

## 🌟 Contribution Workflow Tips

### Local Development Setup

```bash
# Clone and setup
git clone https://github.com/triqbit/yaa.git
cd yaa

# Create feature branch
git checkout -b feature/amazing-feature

# Open in VS Code
code .

# Start local testing
python -m http.server 8000
# Visit http://localhost:8000
```

### Commit Best Practices

- **One feature = One commit** (or logical groups)
- **Atomic commits**: Each commit should work independently
- **Meaningful messages**: Explain WHAT and WHY
- **Reference issues**: `Fixes #123` in commit body

## 🎉 Getting Help

### Common Issues

**"Permission denied (publickey)" error**
- Check SSH key: `ssh -T git@github.com`
- Add SSH key to GitHub settings
- Or use HTTPS instead: `git clone https://...`

**"Detached HEAD" state**
- Switch to main: `git checkout main`
- Or create a new branch: `git checkout -b feature/recovery`

**"Your branch has diverged"**
- Fetch latest: `git fetch origin`
- Rebase onto main: `git rebase origin/main`

---

**Thank you for contributing!** Your efforts make this project better.

**Last Updated**: December 29, 2025
**License**: MIT
