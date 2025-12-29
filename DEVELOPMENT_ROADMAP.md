# YAA.Group Website Development Roadmap

## Overview
This document outlines the development strategy for the YAA.Group website using GitHub free tier, macOS, and Visual Studio Code. The project will be developed iteratively in phases, with continuous deployment to GitHub Pages.

---

## Setup & Environment

### Tools Required (Already Installed)
- macOS
- Visual Studio Code
- Git (included with VS Code)
- Browser (Chrome/Safari for testing)

### Initial Setup Commands
```bash
# Clone the repository
cd ~/Documents
git clone https://github.com/triqbit/yaa.git
cd yaa
code .  # Opens VS Code

# Configure Git (first time only)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### VS Code Extensions to Install
1. **Live Server** - Real-time preview of HTML/CSS changes
2. **Git Graph** - Visual git history
3. **Prettier** - Code formatting
4. **HTML Snippets** - HTML boilerplate templates

---

## Project Structure

```
yaa/
├── index.html                 # Home page
├── about.html                 # About YAA.Group
├── platforms.html             # Platforms overview
├── contact.html               # Contact form
├── css/
│   ├── style.css              # Main stylesheet
│   └── responsive.css         # Mobile/tablet styles
├── js/
│   ├── main.js                # Navigation & interactions
│   └── forms.js               # Form handling
├── images/
│   ├── logo.svg
│   ├── hero-bg.png
│   └── platform-icons/
├── assets/
│   └── documents/
├── docs/
│   ├── DEVELOPMENT_ROADMAP.md (this file)
│   └── LOCAL_SETUP_GUIDE.md
├── .gitignore                 # Git exclusions
├── README.md                  # Project overview
└── CHANGELOG.md               # Version history
```

---

## Development Phases

### Phase 0: Foundation (COMPLETE)
- ✅ README.md with project description and goals
- ✅ CHANGELOG.md with semantic versioning template
- ✅ Git repository initialized
- ⏳ Project structure created

### Phase 1: Core Pages (v1.1.0 - Homepage & Navigation)
**Timeline:** 1-2 weeks

**Tasks:**
- [ ] Create folder structure (css/, js/, images/)
- [ ] Build responsive HTML skeleton
- [ ] Design hero section with YAA value proposition
- [ ] Build navigation menu (desktop & mobile)
- [ ] Create footer with links
- [ ] Add basic CSS styling
- [ ] Test on mobile devices
- [ ] Commit to feature branch → merge to main

**Deliverables:**
- Responsive homepage
- Navigation system
- Mobile-friendly layout

**Commands:**
```bash
git checkout -b feature/v1.1-homepage
# Make changes, test with Live Server
git add .
git commit -m "feat: build responsive homepage with hero section"
git push origin feature/v1.1-homepage
# Create PR and merge on GitHub
```

---

### Phase 2: Platform Pages (v1.2.0)
**Timeline:** 2-3 weeks

**Tasks:**
- [ ] Create platforms.html template
- [ ] Build individual platform pages:
  - Food & Agriculture
  - Energy & Resources
  - Materials & Sustainability
  - Finance & Risk Management
  - Healthcare & Resilience
  - Digital & Innovation
- [ ] Add platform icons and images
- [ ] Write compelling platform descriptions
- [ ] Create internal navigation between platforms

**Deliverables:**
- 6 detailed platform pages
- Platform showcase section on homepage
- Internal linking system

---

### Phase 3: Interactive Features (v1.3.0)
**Timeline:** 2-3 weeks

**Tasks:**
- [ ] Create contact.html with form
- [ ] Integrate Formspree (free tier) for email submissions
- [ ] Add FAQ section
- [ ] Implement search functionality (simple JS)
- [ ] Add testimonials/case studies
- [ ] Create smooth scrolling navigation

**Deliverables:**
- Functional contact form
- FAQ accordion
- Case study showcase
- Enhanced user interactivity

**Integration Example:**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="email" name="email" required>
  <textarea name="message"></textarea>
  <button type="submit">Send</button>
</form>
```

---

### Phase 4: Performance & Accessibility (v1.4.0)
**Timeline:** 1-2 weeks

**Tasks:**
- [ ] Optimize images (compress, WebP format)
- [ ] Minify CSS and JavaScript
- [ ] Implement lazy loading for images
- [ ] Add SEO meta tags
- [ ] WCAG accessibility compliance
- [ ] Performance testing (Lighthouse)
- [ ] Mobile responsiveness audit

**Commands:**
```bash
# Test with Chrome DevTools Lighthouse
Ctrl+Shift+P → Lighthouse → Generate Report
```

---

### Phase 5: Advanced Features (v1.5.0+)
**Timeline:** Ongoing

**Future Enhancements:**
- [ ] Blog/Insights section
- [ ] Newsletter signup (ConvertKit free tier)
- [ ] Partner directory
- [ ] Google Analytics integration
- [ ] Internationalization (multiple languages)
- [ ] API integration for dynamic content
- [ ] Dark mode toggle
- [ ] Advanced filtering and search

---

## Deployment Strategy

### GitHub Pages Setup
1. Go to repo → **Settings** → **Pages**
2. Select **Deploy from a branch**
3. Choose **main** branch, **/(root)** folder
4. Save

**Live Site:** https://triqbit.github.io/yaa

### Deployment Workflow
```bash
# Local development
git checkout -b feature/new-feature
# Make changes, test locally
git add .
git commit -m "feat: add new feature"
git push origin feature/new-feature

# Create Pull Request on GitHub
# Review → Merge to main
# GitHub Pages auto-deploys within minutes
```

---

## Version Management

### Semantic Versioning
- **MAJOR.MINOR.PATCH**
- v1.0.0 = Initial release
- v1.1.0 = New feature (homepage)
- v1.1.1 = Bug fix
- v2.0.0 = Breaking changes

### Update CHANGELOG.md
Before each release, document changes:
```markdown
## [1.1.0] - 2025-01-15

### Added
- Responsive homepage with hero section
- Navigation menu (desktop & mobile)
- Footer with links

### Fixed
- Mobile menu alignment
```

---

## GitHub Free Tier Resources

| Feature | Limit | Usage |
|---------|-------|-------|
| **Repositories** | Unlimited | Project code |
| **Git Storage** | 1GB/repo | Large files |
| **GitHub Pages** | Unlimited | Static hosting |
| **CI/CD (Actions)** | 2000 min/month | Auto-deploy |
| **Issues** | Unlimited | Task tracking |
| **Discussions** | Unlimited | Community |
| **Wiki** | Included | Documentation |
| **Projects** | Included | Kanban board |

---

## Daily Workflow

### 1. Start Working
```bash
git checkout main
git pull origin main
git checkout -b feature/name-of-feature
```

### 2. Development
- Make changes in VS Code
- Test with Live Server (Right-click HTML → Open with Live Server)
- Save frequently

### 3. Commit Changes
```bash
# View changes
git status

# Stage files
git add .

# Commit with descriptive message
git commit -m "feat: description of changes"

# Push to GitHub
git push origin feature/name-of-feature
```

### 4. Create Pull Request
- Go to GitHub repo
- Click "Compare & pull request"
- Add description
- Click "Merge pull request"

### 5. Update Locally
```bash
git checkout main
git pull origin main
```

---

## Commit Message Format

Use conventional commits:
```
type: subject

Body (optional)
```

**Types:**
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - CSS/formatting
- `refactor:` - Code reorganization
- `perf:` - Performance improvement
- `chore:` - Maintenance

**Examples:**
```bash
git commit -m "feat: add responsive navigation menu"
git commit -m "fix: correct hero image alignment on mobile"
git commit -m "docs: update README with deployment instructions"
```

---

## Testing Checklist

### Before Each Commit
- [ ] Visual changes look correct in browser
- [ ] No console errors (Open DevTools: F12)
- [ ] Links work correctly
- [ ] Forms submit properly
- [ ] Mobile view is responsive (resize window or DevTools)
- [ ] Load time is acceptable (Lighthouse score > 90)

### Before Publishing
- [ ] Test on multiple browsers (Chrome, Safari, Firefox)
- [ ] Test on physical iPhone/Android
- [ ] Spell check content
- [ ] Verify all links are working
- [ ] Test contact form submission

---

## Useful Resources

### Free Tools & Services
- **GitHub Pages**: Static hosting
- **Formspree**: Contact form handling
- **Unsplash/Pexels**: Free stock images
- **Coolors.co**: Color palette generator
- **Google Fonts**: Free fonts
- **Figma**: Design tool (free plan)

### Learning Resources
- [GitHub Docs](https://docs.github.com)
- [MDN Web Docs](https://developer.mozilla.org)
- [CSS-Tricks](https://css-tricks.com)
- [Web.dev](https://web.dev)

---

## Q&A / Troubleshooting

**Q: How do I undo the last commit?**
```bash
git reset --soft HEAD~1  # Keep changes
git reset --hard HEAD~1  # Discard changes
```

**Q: Site not updating on GitHub Pages?**
- Clear browser cache (Cmd+Shift+R)
- Wait 2-3 minutes for deployment
- Check Actions tab for build errors

**Q: How do I sync my local changes with GitHub?**
```bash
git pull origin main  # Get latest from GitHub
git push origin main  # Send local changes to GitHub
```

---

## Success Metrics

- **v1.1.0**: Responsive homepage live
- **v1.2.0**: All platform pages complete
- **v1.3.0**: Contact form + interactions working
- **v1.4.0**: Lighthouse score > 90
- **v1.5.0**: Advanced features deployed

---

## Next Steps

1. ✅ Foundation set (README, CHANGELOG, Git repo)
2. ⏳ Create folder structure
3. ⏳ Start Phase 1 (Homepage)
4. ⏳ Iterate through phases
5. ⏳ Celebrate launch!

**Let's build something great! 🚀**
