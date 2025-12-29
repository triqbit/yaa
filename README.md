# YAA.Group Website

YAA.Group is a vertically integrated business platform that designs, owns, and operates value-chain platforms to deliver certainty in volatile markets and optionality through integration across food, energy, materials, finance, healthcare, and digital. The website showcases how YAA.Group secures critical inputs, stabilizes offtake, and keeps essential value chains running across 65+ countries.

## Project Goals

- Present a clear, high-level narrative of YAA.Group as a **value-chain architect** and operator for resilient, predictable supply.
- Highlight the group's integrated platforms across resources, infrastructure, brands, finance, healthcare, and digital, with emphasis on resilience and optionality.
- Communicate concrete outcomes such as stabilizing farmgate prices, de-risking critical inputs, and building circular, low-carbon resource flows.
- Provide a structured entry point for offtakers, asset owners, public-sector partners, and innovators to explore collaboration and start a resilience conversation.
- Lay a scalable foundation for future sections (platform deep dives, case studies, insights, and contact workflows) without locking into a heavy framework.

## Current Scope

- Static marketing site for YAA.Group with a focus on positioning, messaging, and clarity of the value-chain platform model.
- Content themed around resilience, integrated platforms, and optionality in global value chains, aligned with the live YAA site copy.
- Structure designed to expand into additional pages and flows (platforms, sectors, partners, resources, and conversations).

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/triqbit/yaa.git
   cd yaa
   ```
2. Open `index.html` in your browser, or serve the folder with any simple static server.

## Status

- Active development.
- Content and structure are being iterated to fully reflect YAA.Group's platforms, partner journeys, and resilience narrative.


- Active development with continuous improvements to content, structure, and functionality.
- Recent focus on platform architecture, responsive design, and SEO optimization.

## Technology Stack

- **Frontend**: HTML5, CSS3 (BEM Architecture), Vanilla JavaScript (ES6+)
- **Styling**: CSS Custom Properties, Mobile-first Responsive Design
- **SEO**: Comprehensive sitemap.xml, robots.txt, Open Graph meta tags, structured data
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation support
- **Performance**: DOM caching, debounce/throttle utilities, lazy loading with Intersection Observer

## File Structure

```
yaa/
├── index.html                 # Main landing page with hero, platforms, and contact sections
├── css/
│   ├── style.css             # BEM architecture with CSS custom properties (486 lines)
│   └── responsive.css        # Mobile-first breakpoints and device optimization (346 lines)
├── js/
│   └── main.js               # Vanilla JavaScript module with event handling & accessibility (376 lines)
├── robots.txt                # SEO crawler directives for search engines
├── sitemap.xml               # Comprehensive XML sitemap with 33+ URLs
├── README.md                 # Project documentation
├── DEPLOYMENT_GUIDE.md       # Deployment and hosting instructions
├── CONTRIBUTING.md           # Contribution guidelines
├── CHANGELOG.md              # Version history and updates
├── DEVELOPMENT_ROADMAP.md    # Future features and roadmap
├── QA_IMPROVEMENTS.md        # Quality assurance and testing guidelines
└── favicon files             # Brand assets
```

## Key Features

### Design & UX
- **Hero Section**: Animated gradient background with value proposition and CTAs
- **Platform Grid**: 10 integrated platform cards with hover effects and transitions
- **Responsive Navigation**: Mobile hamburger menu with smooth transitions
- **Contact Form**: Complete form with name, organization, email, and message fields
- **Accessibility**: Full keyboard navigation, ARIA labels, semantic HTML

### Technical Implementation
- **CSS Variables**: Dynamic theming with color, spacing, and typography scales
- **Breakpoint Support**: Extra small (320px), small (576px), medium (768px), large (992px), extra large (1200px+)
- **JavaScript Module**: IIFE pattern for encapsulation, no external dependencies
- **Performance**: Debounced scroll and resize handlers, DOM element caching
- **Analytics Ready**: Structured data for Open Graph, Twitter Cards, and Schema.org

## Development Guidelines

### Code Style
- **CSS**: BEM (Block Element Modifier) naming convention
- **JavaScript**: ES6+ with "use strict" mode, proper error handling
- **HTML**: Semantic markup with proper heading hierarchy and ARIA attributes

### Browser Support
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

For contribution guidelines, see [CONTRIBUTING.md](CONTRIBUTING.md).

## Deployment

For deployment instructions, see [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md).

## Changelog

For recent updates and version history, see [CHANGELOG.md](CHANGELOG.md).

## License

MIT License - See LICENSE file for details

## Contact

For inquiries about YAA.Group or this website:
- Email: contact@yaa.group
- Website: https://yaa.group
