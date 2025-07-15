// Erai Kolis - Track Page JavaScript
// Simplified and optimized for the current HTML structure

class TrackPageManager {
  constructor() {
    this.init();
  }

  init() {
    this.setupPlatformTracking();
    this.initializeMetaPixel();
    this.setupPerformanceOptimizations();
    this.trackPageInteractions();
  }

  // Platform Links Tracking
  setupPlatformTracking() {
    document.querySelectorAll(".platform-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        const platform = link.dataset.platform;
        this.trackPlatformClick(platform);

        // Log for debugging
        console.log(`User clicked ${platform} platform link`);
      });
    });
  }

  trackPlatformClick(platform) {
    // Track platform clicks with Meta Pixel
    if (typeof fbq !== "undefined") {
      fbq("track", "ViewContent", {
        content_name: "Колись я теж літав",
        content_category: "Music",
        content_type: "track",
        artist: "ERAI",
        platform: platform,
        value: 1.0,
        currency: "USD",
      });

      // Track as custom event for detailed analytics
      fbq("trackCustom", "PlatformClick", {
        platform: platform,
        track_title: "Колись я теж літав",
        artist: "ERAI",
      });
    }

    // Google Analytics tracking (if available)
    if (typeof gtag !== "undefined") {
      gtag("event", "platform_click", {
        event_category: "engagement",
        event_label: platform,
        custom_parameter_platform: platform,
      });
    }
  }

  // Meta Pixel Analytics
  initializeMetaPixel() {
    // Track page view with detailed content info
    if (typeof fbq !== "undefined") {
      fbq("track", "ViewContent", {
        content_name: "Колись я теж літав",
        content_category: "Music",
        content_type: "track",
        artist: "ERAI",
        value: 1.0,
        currency: "USD",
      });

      // Track as landing page view
      fbq("trackCustom", "TrackPageView", {
        track_title: "Колись я теж літав",
        artist: "ERAI",
        page_type: "track_landing",
      });
    }

    // Setup scroll depth tracking
    this.setupScrollTracking();
  }

  setupScrollTracking() {
    let scrollDepths = { 25: false, 50: false, 75: false, 100: false };

    window.addEventListener("scroll", () => {
      const scrollPercent =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;

      Object.keys(scrollDepths).forEach((depth) => {
        if (scrollPercent >= depth && !scrollDepths[depth]) {
          scrollDepths[depth] = true;
          this.trackScrollDepth(depth + "%");
        }
      });
    });
  }

  trackScrollDepth(depth) {
    if (typeof fbq !== "undefined") {
      fbq("trackCustom", "ScrollDepth", {
        content_name: "Колись я теж літав",
        artist: "ERAI",
        scroll_depth: depth,
      });
    }
  }

  // Performance Optimizations
  setupPerformanceOptimizations() {
    // Preload critical images if not already loaded
    this.preloadImages();

    // Setup intersection observer for lazy loading if needed
    this.setupIntersectionObserver();

    // Optimize image loading
    this.optimizeImages();
  }

  preloadImages() {
    const criticalImages = [
      "./assets/track-cover.webp",
      "./assets/track-cover.jpg",
    ];

    criticalImages.forEach((src) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.href = src;
      link.as = "image";
      document.head.appendChild(link);
    });
  }

  setupIntersectionObserver() {
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      });

      // Observe main sections for animation triggers
      document
        .querySelectorAll(".track-hero, .streaming-links")
        .forEach((section) => {
          observer.observe(section);
        });
    }
  }

  optimizeImages() {
    // Add loading states and error handling for images
    document.querySelectorAll("img").forEach((img) => {
      // If image is already loaded (cached), add loaded class immediately
      if (img.complete && img.naturalHeight !== 0) {
        img.classList.add("loaded");
      }

      img.addEventListener("load", () => {
        img.classList.add("loaded");
      });

      img.addEventListener("error", () => {
        // Show fallback or still make visible
        img.classList.add("loaded");
      });
    });
  }

  // Track Page Interactions
  trackPageInteractions() {
    // Track time spent on page
    this.trackTimeSpent();

    // Track hover interactions on platform links
    this.trackHoverInteractions();
  }

  trackTimeSpent() {
    const startTime = Date.now();

    // Track when user leaves page
    window.addEventListener("beforeunload", () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);

      if (typeof fbq !== "undefined" && timeSpent > 5) {
        fbq("trackCustom", "TimeSpent", {
          content_name: "Колись я теж літав",
          artist: "ERAI",
          time_spent_seconds: timeSpent,
        });
      }
    });
  }

  trackHoverInteractions() {
    document.querySelectorAll(".platform-link").forEach((link) => {
      let hoverStartTime;

      link.addEventListener("mouseenter", () => {
        hoverStartTime = Date.now();
      });

      link.addEventListener("mouseleave", () => {
        if (hoverStartTime) {
          const hoverDuration = Date.now() - hoverStartTime;

          if (hoverDuration > 1000) {
            // Only track if hovered for more than 1 second
            if (typeof fbq !== "undefined") {
              fbq("trackCustom", "PlatformHover", {
                platform: link.dataset.platform,
                hover_duration_ms: hoverDuration,
              });
            }
          }
        }
      });
    });
  }
}

// Utility Functions
const Utils = {
  // Mobile detection
  isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  },

  // Get user's preferred language
  getUserLanguage() {
    return navigator.language || navigator.userLanguage || "en";
  },

  // Format time for analytics
  formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  },
};

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize the main track page manager
  new TrackPageManager();

  // Add enhanced CSS for animations and states
  const style = document.createElement("style");
  style.textContent = `
    /* Enhanced loading and interaction states */
    img {
      transition: opacity 0.3s ease;
      opacity: 0;
    }
    
    img.loaded,
    .track-cover {
      opacity: 1 !important;
    }
    
    .platform-link {
      transition: all 0.3s ease;
    }
    
    .platform-link:hover {
      transform: translateY(-2px);
      filter: brightness(1.1);
    }
    
    .track-hero,
    .streaming-links {
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.6s ease;
    }
    
    .track-hero.visible,
    .streaming-links.visible {
      opacity: 1;
      transform: translateY(0);
    }
    
    /* Loading states */
    .loading {
      position: relative;
      overflow: hidden;
    }
    
    .loading::after {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
      animation: shimmer 1.5s infinite;
    }
    
    @keyframes shimmer {
      0% { left: -100%; }
      100% { left: 100%; }
    }
  `;
  document.head.appendChild(style);

  // Add visible class to sections for animations
  setTimeout(() => {
    document
      .querySelectorAll(".track-hero, .streaming-links")
      .forEach((section) => {
        section.classList.add("visible");
      });
  }, 100);
});

// Service Worker Registration for caching
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./sw.js")
      .then((registration) => {
        console.log("Service Worker registered successfully:", registration);
      })
      .catch((error) => {
        console.log("Service Worker registration failed:", error);
      });
  });
}

// Global error handling
window.addEventListener("error", (e) => {
  console.error("JavaScript error:", e.error);

  // Track errors with Meta Pixel for debugging
  if (typeof fbq !== "undefined") {
    fbq("trackCustom", "JSError", {
      error_message: e.message,
      error_filename: e.filename,
      error_lineno: e.lineno,
      page_url: window.location.href,
    });
  }
});

// Performance monitoring
window.addEventListener("load", () => {
  // Track page load performance
  if ("performance" in window) {
    const loadTime =
      performance.timing.loadEventEnd - performance.timing.navigationStart;

    if (typeof fbq !== "undefined") {
      fbq("trackCustom", "PagePerformance", {
        load_time_ms: loadTime,
        user_agent: navigator.userAgent.substring(0, 100), // Truncate for privacy
      });
    }
  }
});

// Export for potential testing
if (typeof module !== "undefined" && module.exports) {
  module.exports = { TrackPageManager, Utils };
}
