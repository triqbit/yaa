# Legal Pages Template & Implementation Guide

## Overview
This document provides templates and guidelines for creating the remaining 7 legal/policy pages to match the cookies.html structure already created.

## Footer Navigation Structure (Already Implemented)

All legal pages share the same footer with links to all 8 pages:
```html
<div class="footer-column">
  <h3>Legal</h3>
  <ul class="footer-links">
    <li><a href="how-to-use.html">How to Use This Website</a></li>
    <li><a href="terms-of-use.html">Terms of Use</a></li>
    <li><a href="privacy-policy.html">Privacy Policy</a></li>
    <li><a href="cookies.html">Cookies & Tracking</a></li>
    <li><a href="social-media-guidelines.html">Social Media Guidelines</a></li>
    <li><a href="technical-requirements.html">Technical Requirements</a></li>
    <li><a href="data-requests.html">Personal Data Requests</a></li>
    <li><a href="index.html#sitemap">Sitemap</a></li>
  </ul>
</div>
```

## 8 Legal Pages Checklist

### ✅ 1. cookies.html
**Status**: CREATED
- File: `cookies.html`
- Title: Cookies & Tracking
- Topics: Cookie types, management, third-party cookies, consent
- Commit: feat(legal): create cookies.html page with footer navigation to 8 legal pages

### 2. privacy-policy.html
**Status**: PENDING
- File: `privacy-policy.html`
- Title: Privacy Policy
- Key Sections:
  - Information Collection
  - Information Use
  - Data Protection
  - User Rights (GDPR, CCPA)
  - Data Retention
  - Third-Party Services
  - Contact Information

### 3. terms-of-use.html
**Status**: PENDING
- File: `terms-of-use.html`
- Title: Terms of Use
- Key Sections:
  - Acceptance of Terms
  - User Conduct
  - Intellectual Property
  - Disclaimers
  - Limitation of Liability
  - Indemnification
  - Termination

### 4. how-to-use.html
**Status**: PENDING
- File: `how-to-use.html`
- Title: How to Use This Website
- Key Sections:
  - Navigation Guide
  - Accessibility Features
  - Browser Requirements
  - Features & Functions
  - Contact Methods
  - Technical Support

### 5. social-media-guidelines.html
**Status**: PENDING
- File: `social-media-guidelines.html`
- Title: Social Media Guidelines
- Key Sections:
  - Community Standards
  - Content Policy
  - Engagement Guidelines
  - Reporting & Moderation
  - Brand Guidelines
  - Link Sharing Policy

### 6. technical-requirements.html
**Status**: PENDING
- File: `technical-requirements.html`
- Title: Technical Requirements
- Key Sections:
  - Browser Support
  - Device Compatibility
  - JavaScript Requirements
  - Recommended Specifications
  - Troubleshooting
  - Accessibility Tools

### 7. data-requests.html
**Status**: PENDING
- File: `data-requests.html`
- Title: Personal Data Requests
- Key Sections:
  - Data Access Rights
  - Data Deletion Requests
  - Data Portability
  - Request Process
  - Timeline & Response
  - Legal Basis

### 8. index.html Footer Updates
**Status**: PENDING
- Location: Footer in `index.html`
- Action: Ensure all 8 legal page links exist in footer
- Verify: Links work from main page

## HTML Template Base

All legal pages follow this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[PAGE_TITLE] - YAA.Group</title>
  <meta name="description" content="[PAGE_DESCRIPTION]">
  
  <!-- SEO & Social -->
  <link rel="canonical" href="https://triqbit.github.io/yaa/[PAGE_FILE].html">
  <meta property="og:title" content="[PAGE_TITLE] - YAA.Group">
  <meta property="og:description" content="[PAGE_DESCRIPTION]">
  <meta property="og:url" content="https://triqbit.github.io/yaa/[PAGE_FILE].html">
  <meta property="og:type" content="website">
  <meta name="twitter:card" content="summary">
  
  <!-- Favicon -->
  <link rel="icon" type="image/png" href="favicon.y.chat.png">
  
  <!-- Styles -->
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/responsive.css">
  
  <style>
    main { padding: 4rem 1rem; max-width: 900px; margin: 0 auto; }
    .page-title { font-size: 2.5rem; margin-bottom: 1rem; color: var(--text-primary, #f9fafb); }
    .page-subtitle { font-size: 1.1rem; color: var(--text-muted, #9ca3af); margin-bottom: 3rem; }
    section { margin-bottom: 3rem; }
    h2 { font-size: 1.8rem; margin-top: 2rem; margin-bottom: 1rem; color: var(--text-strong, #f9fafb); }
    p, li { line-height: 1.6; color: var(--text-secondary, #e5e7eb); margin-bottom: 1rem; }
    ul { margin-left: 2rem; margin-bottom: 1rem; }
    strong { color: var(--text-primary, #f9fafb); font-weight: 600; }
  </style>
</head>
<body>
  <!-- HEADER -->
  <header role="banner">
    <div class="header-inner container">
      <a href="index.html" class="brand" aria-label="YAA.Group homepage">
        <span class="brand-logo">
          <img src="images/yaa-logo.svg" alt="YAA.Group">
        </span>
      </a>
      <nav class="primary-nav" aria-label="Primary navigation">
        <ul class="primary-nav-list">
          <li><a href="index.html#systems">Platforms</a></li>
          <li><a href="index.html#services">Services</a></li>
          <li><a href="index.html#resilience">Resilience</a></li>
          <li><a href="index.html#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <!-- MAIN -->
  <main role="main">
    <h1 class="page-title">[PAGE_TITLE]</h1>
    <p class="page-subtitle">[PAGE_SUBTITLE]</p>
    
    <!-- SECTIONS -->
    <section>
      <h2>Section Title</h2>
      <p>Content here...</p>
    </section>
  </main>

  <!-- FOOTER (COPY FROM cookies.html) -->
  <footer role="contentinfo" class="site-footer">
    <!-- Copy entire footer from cookies.html -->
  </footer>

  <script>
    document.getElementById('current-year').textContent = new Date().getFullYear();
  </script>
  <script src="js/main.js" defer></script>
</body>
</html>
```

## Implementation Instructions

### For Each Remaining Page:

1. **Create File** in GitHub editor
   - Name: `[page-name].html`
   - Copy base template above

2. **Customize Head**
   - Update `<title>` with page-specific title
   - Update `<meta name="description">`
   - Update `og:title` and `og:description`
   - Update `<link rel="canonical">` href

3. **Add Content**
   - Write 5-8 sections with relevant information
   - Use semantic HTML (h2, p, ul, li)
   - Add links where appropriate
   - Maintain consistent styling

4. **Copy Footer**
   - Copy entire `<footer>` from cookies.html
   - Footer contains all 8 legal page links
   - No modifications needed to footer

5. **Commit**
   - Commit message format:
   ```
   feat(legal): create [page-name].html page with full footer navigation
   
   Add [PAGE_TITLE] page with:
   - [Section 1]
   - [Section 2]
   - [Section 3]
   - Complete footer with all 8 legal pages
   - SEO metadata and accessibility features
   ```

## Pages to Create (In Order)

```bash
# Quick copy-paste filenames for creation:
privacy-policy.html
terms-of-use.html
how-to-use.html
social-media-guidelines.html
technical-requirements.html
data-requests.html
```

## Footer Validation

Once all 8 pages are created, validate footer links:

- [ ] cookies.html links to all 7 others
- [ ] privacy-policy.html links to all 7 others
- [ ] terms-of-use.html links to all 7 others
- [ ] how-to-use.html links to all 7 others
- [ ] social-media-guidelines.html links to all 7 others
- [ ] technical-requirements.html links to all 7 others
- [ ] data-requests.html links to all 7 others
- [ ] index.html footer updated with all 8 links

## Quality Checklist

For each page:
- [ ] Semantic HTML (proper heading hierarchy, roles)
- [ ] Mobile responsive (tested at 320px, 768px, 1024px)
- [ ] WCAG 2.1 AA accessible (contrast, focus states, ARIA)
- [ ] Footer contains all 8 legal page links
- [ ] SEO metadata complete (title, description, og tags)
- [ ] Professional styling consistent with cookies.html
- [ ] Links work (internal to other legal pages, external where needed)
- [ ] Tested in Chrome, Firefox, Safari

---

**Total Pages**: 8  
**Completed**: 1 (cookies.html)  
**Remaining**: 7  
**Footer Links**: Identical across all pages  
**Status**: In progress
