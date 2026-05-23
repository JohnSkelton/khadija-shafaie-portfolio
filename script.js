/* ==========================================================================
   KHADIJA SHAFAIE - MODERN ART PORTFOLIO INTERACTIONS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. Master Artwork Database ---
  const ARTWORKS_DATABASE = [
    {
      title: "Ethereal Echoes",
      medium: "Oil & Mixed Media on Canvas",
      dimensions: "120 x 150 cm",
      year: "2025",
      desc: "An immersive exploration of light and dark, tracing the boundary between memory and sensation. Crafted using natural pigments, layered marble dust, and cold wax on fine Belgian linen.",
      src: "701829111_2099772177555102_3731586498534513463_n.jpg"
    },
    {
      title: "Whispers in Obsidian",
      medium: "Oil on Linen",
      dimensions: "100 x 100 cm",
      year: "2025",
      desc: "Subtle lines of warm champagne gold fracturing across a textured, pitch-black base, evoking the feeling of emerging mineral structures deep within carbon-rich rock.",
      src: "702271909_989204240136049_4333181375427494616_n.jpg"
    },
    {
      title: "Transient Moments",
      medium: "Acrylic & Charcoal on Panel",
      dimensions: "90 x 120 cm",
      year: "2024",
      desc: "Expressive black ink flows overlaid with raw gestural charcoal lines. Captures the extreme fragility of fleeting feelings and changing environments.",
      src: "702359888_1531232461987448_1344308428849471727_n.jpg"
    },
    {
      title: "Silent Resonance",
      medium: "Charcoal on Cotton Paper",
      dimensions: "70 x 100 cm",
      year: "2024",
      desc: "A structural study of dark masses and tactile depth. Employs compressed willow charcoal and dense carbon washes to project weight and spatial gravity.",
      src: "702945760_1285651840381556_4381733400227208815_n.jpg"
    },
    {
      title: "Fractured Reflection",
      medium: "Mixed Media on Oak",
      dimensions: "110 x 140 cm",
      year: "2025",
      desc: "A dynamic layered composition featuring metallic inclusions, concrete plaster, and polymer finishes, creating an architectural window into personal reflection.",
      src: "703110410_1699284747974826_1129497323829790875_n.jpg"
    },
    {
      title: "Astral Conjunction",
      medium: "Oil & Gold Leaf on Board",
      dimensions: "80 x 80 cm",
      year: "2025",
      desc: "An organic celestial event captured through heavy tactile impasto techniques, illuminated with hand-burnished 23.75k gold leaf flakes.",
      src: "704072314_2054255565162663_1874421751968236481_n.jpg"
    },
    {
      title: "Luminous Depths",
      medium: "Digital Abstraction (Giclée)",
      dimensions: "160 x 160 cm",
      year: "2024",
      desc: "An algorithmic, fluid simulation representing the intersections of natural mineral erosion and neural pathways, printed on premium archival museum cotton rag.",
      src: "704306458_956698647261784_7593195142266578493_n.jpg"
    },
    {
      title: "Symphony of Shadows",
      medium: "Charcoal, Gesso & Ink",
      dimensions: "80 x 100 cm",
      year: "2024",
      desc: "A rapid, dramatic monochromatic landscape reflecting natural geological lines, using deep sumi ink flows and dry-brush charcoal sweeps.",
      src: "704725731_1757721701911110_682278848542453462_n.jpg"
    },
    {
      title: "Chroma Genesis",
      medium: "Oil on Linen Panel",
      dimensions: "130 x 130 cm",
      year: "2025",
      desc: "Warm earth hues and vibrant golds rising out of a cold industrial grey field, symbolizing the chemical birth of dynamic organic forms.",
      src: "704867605_2209141963173485_1607472156139481387_n.jpg"
    },
    {
      title: "Nebula Drift",
      medium: "Mixed Mineral on Canvas",
      dimensions: "100 x 130 cm",
      year: "2025",
      desc: "Swirling lapis lazuli, copper powder, and iron oxides floating in clear resin layers, yielding deep, three-dimensional cosmic flows.",
      src: "705211886_1113962978467756_1557480987856235636_n.jpg"
    },
    {
      title: "Liminal Gateway",
      medium: "Oil & High-Gloss Enamel",
      dimensions: "150 x 180 cm",
      year: "2025",
      desc: "A monumental doorway of deep, shimmering washes contrasted with thick, textured obsidian edges, capturing the threshold of infinite visual spaces.",
      src: "706970926_972991398953910_660439918019223296_n.jpg"
    }
  ];

  let currentActiveIndex = 0;

  // --- 2. Custom Magnetic Cursor ---
  const cursor = document.getElementById('custom-cursor');
  const cursorDot = document.getElementById('custom-cursor-dot');
  
  if (window.matchMedia('(pointer: fine)').matches) {
    document.addEventListener('mousemove', (e) => {
      // Smooth out cursor placement
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      
      cursorDot.style.left = `${e.clientX}px`;
      cursorDot.style.top = `${e.clientY}px`;
    });

    const addCursorHover = () => {
      cursor.classList.add('hovered');
    };
    
    const removeCursorHover = () => {
      cursor.classList.remove('hovered');
    };

    // Apply to all elements that can be clicked
    const updateCursorTargets = () => {
      const targets = document.querySelectorAll('a, button, .artwork-card, input, textarea, .cursor-target');
      targets.forEach(target => {
        target.removeEventListener('mouseenter', addCursorHover);
        target.removeEventListener('mouseleave', removeCursorHover);
        target.addEventListener('mouseenter', addCursorHover);
        target.addEventListener('mouseleave', removeCursorHover);
      });
    };
    updateCursorTargets();
    
    // Watch for dynamic updates
    const observer = new MutationObserver(updateCursorTargets);
    observer.observe(document.body, { childList: true, subtree: true });
  } else {
    // Hide cursors on touchscreen
    if (cursor) cursor.style.display = 'none';
    if (cursorDot) cursorDot.style.display = 'none';
  }

  // --- 3. Dynamic Header Scrolling Logic ---
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // --- 4. Mobile Menu Navigation Navigation Toggle ---
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      menuToggle.classList.toggle('open');
      
      // Animate hamburger to X
      const spans = menuToggle.querySelectorAll('span');
      if (menuToggle.classList.contains('open')) {
        spans[0].style.transform = 'translateY(7px) rotate(45deg)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
        navMenu.style.display = 'flex';
        navMenu.style.position = 'fixed';
        navMenu.style.top = '0';
        navMenu.style.left = '0';
        navMenu.style.width = '100vw';
        navMenu.style.height = '100vh';
        navMenu.style.backgroundColor = 'rgba(7,7,8,0.98)';
        navMenu.style.alignItems = 'center';
        navMenu.style.justifyContent = 'center';
        navMenu.style.zIndex = '1000';
        navMenu.querySelector('ul').style.flexDirection = 'column';
        navMenu.querySelector('ul').style.alignItems = 'center';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
        navMenu.removeAttribute('style');
        navMenu.querySelector('ul').removeAttribute('style');
      }
    });

    // Close mobile nav on link click
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('open');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
        navMenu.removeAttribute('style');
        navMenu.querySelector('ul').removeAttribute('style');
      });
    });
  }

  // --- 5. Interactive Portfolio Filtering ---
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      galleryItems.forEach((item, index) => {
        const itemCategories = item.getAttribute('data-category').split(' ');
        
        if (filterVal === 'all' || itemCategories.includes(filterVal)) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0) scale(1)';
          }, 50 * index); // Beautiful Staggered reveal
        } else {
          item.style.opacity = '0';
          item.style.transform = 'translateY(20px) scale(0.95)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // --- 6. Highly Premium Lightbox Modal Implementation ---
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxMedium = document.getElementById('lightbox-medium');
  const lightboxDimensions = document.getElementById('lightbox-dimensions');
  const lightboxYear = document.getElementById('lightbox-year');
  const lightboxNum = document.getElementById('lightbox-num');
  
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');
  const lightboxBack = document.getElementById('lightbox-back');
  const lightboxInquire = document.getElementById('lightbox-inquire');
  const artworkCards = document.querySelectorAll('.artwork-card');

  const updateLightboxContent = (index) => {
    currentActiveIndex = index;
    const art = ARTWORKS_DATABASE[index];
    
    // Zoom Reset
    lightboxImg.classList.remove('zoomed');
    
    // Fade out image, swap, then fade in
    lightboxImg.style.opacity = '0';
    lightboxImg.style.transform = 'scale(0.97)';
    
    setTimeout(() => {
      lightboxImg.src = art.src;
      lightboxImg.alt = art.title;
      lightboxTitle.textContent = art.title;
      lightboxDesc.textContent = art.desc;
      lightboxMedium.textContent = art.medium;
      lightboxDimensions.textContent = art.dimensions;
      lightboxYear.textContent = art.year;
      lightboxNum.textContent = `${String(index + 1).padStart(2, '0')} / ${String(ARTWORKS_DATABASE.length).padStart(2, '0')}`;
      
      lightboxImg.style.opacity = '1';
      lightboxImg.style.transform = 'scale(1)';
    }, 200);
  };

  const openLightbox = (index) => {
    updateLightboxContent(index);
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Stop background scrolling
  };

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  };

  const nextArtwork = () => {
    let nextIndex = currentActiveIndex + 1;
    if (nextIndex >= ARTWORKS_DATABASE.length) nextIndex = 0;
    updateLightboxContent(nextIndex);
  };

  const prevArtwork = () => {
    let prevIndex = currentActiveIndex - 1;
    if (prevIndex < 0) prevIndex = ARTWORKS_DATABASE.length - 1;
    updateLightboxContent(prevIndex);
  };

  // Wire Card Clicks
  artworkCards.forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.getAttribute('data-index'));
      openLightbox(idx);
    });
  });

  // Hero section showcase frame click
  const heroShowcase = document.getElementById('hero-showcase-frame');
  if (heroShowcase) {
    heroShowcase.addEventListener('click', () => {
      openLightbox(0); // Opens Ethereal Echoes
    });
  }

  // Lightbox Close triggers
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBack) lightboxBack.addEventListener('click', closeLightbox);
  
  // Viewer backdrop click (closes lightbox only if clicking outside the image)
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.classList.contains('lightbox-viewer')) {
        closeLightbox();
      }
    });
  }

  // Navigation
  if (lightboxNext) lightboxNext.addEventListener('click', nextArtwork);
  if (lightboxPrev) lightboxPrev.addEventListener('click', prevArtwork);

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextArtwork();
    if (e.key === 'ArrowLeft') prevArtwork();
  });

  // Dynamic Lightbox Zoom Details
  if (lightboxImg) {
    lightboxImg.addEventListener('click', () => {
      lightboxImg.classList.toggle('zoomed');
    });
  }

  // Lightbox inquire link - dynamic routing to contact form
  if (lightboxInquire) {
    lightboxInquire.addEventListener('click', () => {
      const currentArt = ARTWORKS_DATABASE[currentActiveIndex];
      const subjectInput = document.getElementById('subject');
      const messageInput = document.getElementById('message');
      
      if (subjectInput) {
        subjectInput.value = `Artwork Acquisition: "${currentArt.title}"`;
        // Trigger float label update
        subjectInput.dispatchEvent(new Event('input'));
      }
      
      if (messageInput) {
        messageInput.value = `Hello Khadija,\n\nI am interested in acquiring your original masterpiece, "${currentArt.title}" (${currentArt.medium}, ${currentArt.dimensions}). Please provide availability, price, and shipping details.\n\nThank you.`;
        messageInput.dispatchEvent(new Event('input'));
      }
      
      closeLightbox();
      
      // Smooth scroll down to contact section
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // --- 7. Interactive Toast Notification Utility ---
  const showToast = (message, isSuccess = true) => {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    
    const icon = isSuccess ? '&#10003;' : '&#9888;';
    toast.innerHTML = `<span class="toast-success-icon">${icon}</span> <span>${message}</span>`;
    
    toastContainer.appendChild(toast);
    
    // Auto remove toast
    setTimeout(() => {
      toast.classList.add('hiding');
      setTimeout(() => {
        toast.remove();
      }, 400);
    }, 4000);
  };

  // --- 8. Contact Form Submissions Handling ---
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // Simulate highly secure contemporary API call
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'TRANSMITTING...';
      submitBtn.disabled = true;
      
      setTimeout(() => {
        showToast(`Message from ${name} transmitted successfully to Khadija's studio.`);
        contactForm.reset();
        
        // Reset label positions
        const inputs = contactForm.querySelectorAll('.form-input');
        inputs.forEach(input => {
          input.dispatchEvent(new Event('input'));
        });
        
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 1500);
    });
  }

  // --- 9. Dynamic Timing & Copyright Initialization ---
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const timeDiv = document.getElementById('footer-time');
  if (timeDiv) {
    const updateTime = () => {
      const now = new Date();
      timeDiv.textContent = now.toISOString().split('.')[0].replace('T', ' / ');
    };
    updateTime();
    setInterval(updateTime, 1000); // Live Studio Clock
  }

  // Smooth Section active state nav updates
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');
  
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

});
