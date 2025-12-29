/**
 * YAA Project - Main JavaScript Module
 * Vanilla JavaScript (No Dependencies)
 * Follows ES6+ Standards & Best Practices
 */

'use strict';

// ============================================================================
// Module: Application Core
// ============================================================================

const YAAApp = (() => {
  /**
   * Configuration object for application settings
   * @type {Object}
   */
  const config = {
    breakpoints: {
      mobile: 575,
      tablet: 767,
      desktop: 1200,
    },
    animationDuration: 300,
    debounceDelay: 250,
  };

  /**
   * Cache frequently accessed DOM elements
   * @type {Object}
   */
  const elements = {};

  /**
   * Initialize the application
   * @returns {void}
   */
  const init = () => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', bootstrap);
    } else {
      bootstrap();
    }
  };

  /**
   * Bootstrap function - called when DOM is ready
   * @returns {void}
   */
  const bootstrap = () => {
    cacheDOM();
    bindEvents();
    initializeComponents();
  };

  /**
   * Cache frequently used DOM elements
   * @returns {void}
   */
  const cacheDOM = () => {
    elements.navbar = document.querySelector('.navbar');
    elements.navbarMenu = document.querySelector('.navbar__menu');
    elements.navbarLinks = document.querySelectorAll('.navbar__link');
    elements.buttons = document.querySelectorAll('.btn');
    elements.cards = document.querySelectorAll('.card');
    elements.window = window;
    elements.document = document;
  };

  /**
   * Bind event listeners to DOM elements
   * @returns {void}
   */
  const bindEvents = () => {
    // Navbar link click handler
    if (elements.navbarLinks.length) {
      elements.navbarLinks.forEach((link) => {
        link.addEventListener('click', handleNavClick);
      });
    }

    // Button click handler
    if (elements.buttons.length) {
      elements.buttons.forEach((btn) => {
        btn.addEventListener('click', handleButtonClick);
      });
    }

    // Window resize handler (debounced)
    elements.window.addEventListener('resize', debounce(handleResize, config.debounceDelay));

    // Scroll event handler
    elements.window.addEventListener('scroll', debounce(handleScroll, config.debounceDelay));
  };

  /**
   * Initialize interactive components
   * @returns {void}
   */
  const initializeComponents = () => {
    setActiveNavLink();
    observeElements();
    addAccessibilityFeatures();
  };

  /**
   * Handle navbar link clicks
   * @param {Event} event - Click event
   * @returns {void}
   */
  const handleNavClick = (event) => {
    event.preventDefault();
    const link = event.currentTarget;

    // Remove active class from all links
    elements.navbarLinks.forEach((l) => {
      l.classList.remove('navbar__link--active');
    });

    // Add active class to clicked link
    link.classList.add('navbar__link--active');

    // Optional: Handle smooth scroll to section
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  /**
   * Handle button clicks
   * @param {Event} event - Click event
   * @returns {void}
   */
  const handleButtonClick = (event) => {
    const button = event.currentTarget;
    const action = button.getAttribute('data-action');

    if (!action) return;

    switch (action) {
      case 'scroll-top':
        scrollToTop();
        break;
      case 'navigate':
        navigateToSection(button.getAttribute('data-target'));
        break;
      default:
        console.log(`Action '${action}' not implemented`);
    }
  };

  /**
   * Handle window resize
   * @returns {void}
   */
  const handleResize = () => {
    updateActiveNavLink();
  };

  /**
   * Handle window scroll
   * @returns {void}
   */
  const handleScroll = () => {
    updateStickyNavigation();
  };

  /**
   * Set active navigation link based on current scroll position
   * @returns {void}
   */
  const setActiveNavLink = () => {
    const scrollPosition = window.scrollY + 100;

    elements.navbarLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      const target = document.querySelector(href);
      if (!target) return;

      const { offsetTop, offsetHeight } = target;
      const isActive = scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight;

      link.classList.toggle('navbar__link--active', isActive);
    });
  };

  /**
   * Update navigation link active state
   * @returns {void}
   */
  const updateActiveNavLink = () => {
    setActiveNavLink();
  };

  /**
   * Update sticky navigation styling
   * @returns {void}
   */
  const updateStickyNavigation = () => {
    if (!elements.navbar) return;

    const isScrolled = window.scrollY > 10;
    elements.navbar.classList.toggle('navbar--scrolled', isScrolled);
  };

  /**
   * Observe elements for intersection (lazy loading, animations)
   * @returns {void}
   */
  const observeElements = () => {
    if (!('IntersectionObserver' in window)) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    // Observe all sections and cards
    document.querySelectorAll('.section, .card').forEach((el) => {
      observer.observe(el);
    });
  };

  /**
   * Add accessibility features
   * @returns {void}
   */
  const addAccessibilityFeatures = () => {
    // Add ARIA labels if missing
    elements.buttons.forEach((btn, index) => {
      if (!btn.getAttribute('aria-label')) {
        const text = btn.textContent.trim() || `Button ${index + 1}`;
        btn.setAttribute('aria-label', text);
      }
    });

    // Keyboard navigation support
    document.addEventListener('keydown', handleKeyboardNav);
  };

  /**
   * Handle keyboard navigation (Tab, Enter, Space, Escape)
   * @param {KeyboardEvent} event - Keyboard event
   * @returns {void}
   */
  const handleKeyboardNav = (event) => {
    if (event.key === 'Escape') {
      // Handle escape key if needed
      const activeElement = document.activeElement;
      if (activeElement && activeElement !== document.body) {
        activeElement.blur();
      }
    }
  };

  /**
   * Scroll to top of page smoothly
   * @returns {void}
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  /**
   * Navigate to a specific section
   * @param {string} sectionId - ID of target section
   * @returns {void}
   */
  const navigateToSection = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  /**
   * Debounce function to limit execution frequency
   * @param {Function} func - Function to debounce
   * @param {number} delay - Delay in milliseconds
   * @returns {Function} Debounced function
   */
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  };

  /**
   * Throttle function to limit execution frequency
   * @param {Function} func - Function to throttle
   * @param {number} limit - Limit in milliseconds
   * @returns {Function} Throttled function
   */
  const throttle = (func, limit) => {
    let inThrottle;
    return (...args) => {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => {
          inThrottle = false;
        }, limit);
      }
    };
  };

  /**
   * Get current breakpoint
   * @returns {string} Current breakpoint name
   */
  const getCurrentBreakpoint = () => {
    const width = window.innerWidth;
    if (width <= config.breakpoints.mobile) return 'mobile';
    if (width <= config.breakpoints.tablet) return 'tablet';
    return 'desktop';
  };

  /**
   * Log utility for debugging
   * @param {string} message - Message to log
   * @param {*} data - Optional data to log
   * @returns {void}
   */
  const log = (message, data = null) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[YAAApp] ${message}`, data || '');
    }
  };

  /**
   * Public API
   */
  return {
    init,
    getCurrentBreakpoint,
    navigateToSection,
    scrollToTop,
  };
})();

// ============================================================================
// Application Initialization
// ============================================================================

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    YAAApp.init();
  });
} else {
  YAAApp.init();
}

// Export for module systems (if applicable)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = YAAApp;
}
