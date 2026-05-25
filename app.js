/* ==========================================================================
   Arthur Valente — Shared application code
   - Custom cursor with image hover state
   - Soft page transitions
   - Lazy image fade-in
   - Scroll-aware navbar
   - Reveal-on-scroll for elements
   - Lightbox (used by project pages)
   ========================================================================== */

(function () {
  'use strict';

  // ─────────────────────────────────────────────────────────────────────────
  // PAGE LOAD
  // ─────────────────────────────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', function () {
    requestAnimationFrame(function () {
      document.body.classList.add('loaded');
    });
    init();
  });

  function init() {
    setupCursor();
    setupNavScroll();
    setupLazyMedia();
    setupReveals();
    setupPageTransitions();
    setupActiveNavSubtle();
    setupImageProtection();
  }

  // ─────────────────────────────────────────────────────────────────────────
  // IMAGE PROTECTION — deters casual right-click + drag downloads.
  // Note: this is not bulletproof (anyone can grab via DevTools), but it
  // blocks the 95% of users who'd casually right-click → save image.
  // ─────────────────────────────────────────────────────────────────────────
  function setupImageProtection() {
    // Block right-click on images and image containers
    document.addEventListener('contextmenu', function (e) {
      var t = e.target;
      if (!(t instanceof Element)) return;
      if (t.tagName === 'IMG' ||
          t.closest('.media, .lb-image-wrap, .project-hero, .gallery-figure')) {
        e.preventDefault();
      }
    });

    // Block drag of images
    document.addEventListener('dragstart', function (e) {
      var t = e.target;
      if (!(t instanceof Element)) return;
      if (t.tagName === 'IMG') {
        e.preventDefault();
      }
    });
  }

  // ─────────────────────────────────────────────────────────────────────────
  // CUSTOM CURSOR
  // ─────────────────────────────────────────────────────────────────────────
  function setupCursor() {
    var hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!hasFinePointer || reduced) return;

    var dot = document.createElement('div');
    dot.className = 'cursor-dot';
    var ring = document.createElement('div');
    ring.className = 'cursor-ring';
    ring.innerHTML = '<span class="cursor-label">View</span>';
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    var mouseX = window.innerWidth / 2;
    var mouseY = window.innerHeight / 2;
    var dotX = mouseX, dotY = mouseY;
    var ringX = mouseX, ringY = mouseY;
    var ready = false;

    document.addEventListener('mousemove', function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!ready) {
        ready = true;
        document.body.classList.add('cursor-ready');
      }
    }, { passive: true });

    document.addEventListener('mouseleave', function () {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    });
    document.addEventListener('mouseenter', function () {
      dot.style.opacity = '';
      ring.style.opacity = '';
    });

    function tick() {
      // dot follows quickly with subtle smoothing
      dotX += (mouseX - dotX) * 0.85;
      dotY += (mouseY - dotY) * 0.85;
      // ring follows with a longer lerp for elegance
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      dot.style.transform = 'translate3d(' + dotX + 'px,' + dotY + 'px,0) translate(-50%,-50%)';
      ring.style.transform = 'translate3d(' + ringX + 'px,' + ringY + 'px,0) translate(-50%,-50%)';

      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);

    // Hover states
    document.addEventListener('mouseover', function (e) {
      var el = e.target;
      if (!(el instanceof Element)) return;

      if (el.closest('[data-cursor="image"]')) {
        var label = el.closest('[data-cursor-label]');
        var labelText = label ? label.getAttribute('data-cursor-label') : 'View';
        ring.querySelector('.cursor-label').textContent = labelText;
        ring.classList.add('hover-img');
        ring.classList.remove('hover-link', 'hover-close');
      } else if (el.closest('[data-cursor="close"]')) {
        ring.querySelector('.cursor-label').textContent = 'Close';
        ring.classList.add('hover-close');
        ring.classList.remove('hover-img', 'hover-link');
      } else if (el.closest('a, button, [role="button"]')) {
        ring.classList.add('hover-link');
        ring.classList.remove('hover-img', 'hover-close');
      } else {
        ring.classList.remove('hover-img', 'hover-link', 'hover-close');
      }
    });
  }

  // ─────────────────────────────────────────────────────────────────────────
  // NAV SCROLL STATE
  // ─────────────────────────────────────────────────────────────────────────
  function setupNavScroll() {
    var nav = document.querySelector('nav.site-nav');
    if (!nav) return;
    var ticking = false;
    function onScroll() {
      if (window.scrollY > 14) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(onScroll);
        ticking = true;
      }
    }, { passive: true });
    onScroll();
  }

  // ─────────────────────────────────────────────────────────────────────────
  // LAZY IMAGE FADE-IN
  // ─────────────────────────────────────────────────────────────────────────
  function setupLazyMedia() {
    var medias = document.querySelectorAll('.media');
    medias.forEach(function (m) {
      var img = m.querySelector('img');
      if (!img) return;
      if (img.complete && img.naturalWidth > 0) {
        m.classList.add('loaded');
      } else {
        img.addEventListener('load', function () { m.classList.add('loaded'); }, { once: true });
        img.addEventListener('error', function () { m.classList.add('loaded'); }, { once: true });
      }
    });
  }

  // ─────────────────────────────────────────────────────────────────────────
  // REVEAL ON SCROLL
  // ─────────────────────────────────────────────────────────────────────────
  function setupReveals() {
    var targets = document.querySelectorAll('[data-reveal]');
    if (!targets.length || !('IntersectionObserver' in window)) {
      targets.forEach(function (el) { el.classList.add('visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    targets.forEach(function (el) { io.observe(el); });
  }

  // ─────────────────────────────────────────────────────────────────────────
  // PAGE TRANSITIONS
  // Intercept internal links, fade body out, navigate.
  // Browser back/forward triggers the natural fade-in via .loaded class.
  // ─────────────────────────────────────────────────────────────────────────
  function setupPageTransitions() {
    var veil = document.createElement('div');
    veil.className = 'page-veil';
    document.body.appendChild(veil);

    function isInternal(href) {
      if (!href) return false;
      if (href.indexOf('mailto:') === 0) return false;
      if (href.indexOf('tel:') === 0) return false;
      if (href.indexOf('#') === 0) return false;
      if (/^https?:\/\//i.test(href)) {
        try {
          var url = new URL(href);
          return url.origin === window.location.origin;
        } catch (e) { return false; }
      }
      return true;
    }

    document.addEventListener('click', function (e) {
      var anchor = e.target.closest && e.target.closest('a');
      if (!anchor) return;
      var href = anchor.getAttribute('href');
      if (!isInternal(href)) return;
      if (anchor.target === '_blank') return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;

      // Same page anchor — let it happen
      var current = window.location.pathname.split('/').pop() || 'index.html';
      var target = href.split('#')[0].split('?')[0];
      if (target === current && href.indexOf('?') === -1) return;

      e.preventDefault();
      veil.classList.add('in');
      document.body.classList.remove('loaded');
      setTimeout(function () { window.location.href = href; }, 420);
    });

    // Ensure pages restored from bfcache fade in cleanly
    window.addEventListener('pageshow', function (e) {
      if (e.persisted) {
        veil.classList.remove('in');
        document.body.classList.add('loaded');
      }
    });
  }

  // ─────────────────────────────────────────────────────────────────────────
  // ACTIVE NAV INDICATOR — keep .active on the link that matches current page
  // ─────────────────────────────────────────────────────────────────────────
  function setupActiveNavSubtle() {
    var links = document.querySelectorAll('.nav-links a');
    var current = window.location.pathname.split('/').pop() || 'index.html';
    if (current === 'project.html') current = 'index.html';
    links.forEach(function (a) {
      var href = a.getAttribute('href');
      if (href === current) a.classList.add('active');
      else a.classList.remove('active');
    });
  }

  // ─────────────────────────────────────────────────────────────────────────
  // LIGHTBOX  (called manually by pages that opt in)
  // ─────────────────────────────────────────────────────────────────────────
  window.Lightbox = (function () {
    var lb, lbInner, lbImg, lbSub, lbTitle, lbCounter, items, current;

    function build() {
      if (lb) return;
      lb = document.createElement('div');
      lb.className = 'lightbox';
      lb.innerHTML =
        '<div class="lightbox-inner">' +
          '<div class="lb-image-wrap"><img alt=""/></div>' +
          '<div class="lb-caption">' +
            '<p class="lb-sub"></p>' +
            '<p class="lb-title"></p>' +
            '<p class="lb-counter"></p>' +
          '</div>' +
        '</div>' +
        '<button class="lb-close" data-cursor="close" aria-label="Close"></button>' +
        '<button class="lb-prev" aria-label="Previous"></button>' +
        '<button class="lb-next" aria-label="Next"></button>';
      document.body.appendChild(lb);

      lbInner = lb.querySelector('.lightbox-inner');
      lbImg = lb.querySelector('.lb-image-wrap img');
      lbSub = lb.querySelector('.lb-sub');
      lbTitle = lb.querySelector('.lb-title');
      lbCounter = lb.querySelector('.lb-counter');

      lb.querySelector('.lb-close').addEventListener('click', close);
      lb.querySelector('.lb-prev').addEventListener('click', function () { go(-1); });
      lb.querySelector('.lb-next').addEventListener('click', function () { go(1); });

      lb.addEventListener('click', function (e) {
        if (e.target === lb || e.target === lbInner || e.target.classList.contains('lb-image-wrap')) {
          close();
        }
      });

      document.addEventListener('keydown', function (e) {
        if (!lb.classList.contains('open')) return;
        if (e.key === 'Escape') close();
        else if (e.key === 'ArrowLeft') go(-1);
        else if (e.key === 'ArrowRight') go(1);
      });

      // Touch swipe
      var startX = 0, startY = 0, swiping = false;
      lb.addEventListener('touchstart', function (e) {
        if (!e.touches.length) return;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        swiping = true;
      }, { passive: true });
      lb.addEventListener('touchend', function (e) {
        if (!swiping || !e.changedTouches.length) return;
        var dx = e.changedTouches[0].clientX - startX;
        var dy = e.changedTouches[0].clientY - startY;
        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
          if (dx < 0) go(1); else go(-1);
        } else if (dy < -80) {
          close();
        }
        swiping = false;
      }, { passive: true });
    }

    function open(list, idx) {
      build();
      items = list;
      current = idx || 0;
      render();
      lb.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function close() {
      if (!lb) return;
      lb.classList.remove('open');
      document.body.style.overflow = '';
    }

    function go(dir) {
      if (!items || !items.length) return;
      current = (current + dir + items.length) % items.length;
      render();
    }

    function render() {
      var item = items[current];
      var wrap = lb.querySelector('.lb-image-wrap');
      wrap.classList.add('transitioning');
      lbImg.classList.remove('loaded');

      var preload = new Image();
      preload.onload = function () {
        lbImg.src = item.src;
        lbImg.alt = item.title || '';
        requestAnimationFrame(function () {
          lbImg.classList.add('loaded');
          wrap.classList.remove('transitioning');
        });
      };
      preload.onerror = function () {
        lbImg.src = item.src;
        wrap.classList.remove('transitioning');
      };
      preload.src = item.src;

      lbSub.textContent = item.sub || '';
      lbTitle.textContent = item.title || '';
      lbCounter.textContent = (current + 1) + ' / ' + items.length;
    }

    return { open: open, close: close };
  })();
})();
