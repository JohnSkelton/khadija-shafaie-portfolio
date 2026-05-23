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
    
    const observer = new MutationObserver(updateCursorTargets);
    observer.observe(document.body, { childList: true, subtree: true });
  } else {
    if (cursor) cursor.style.display = 'none';
    if (cursorDot) cursorDot.style.display = 'none';
  }

  // --- 3. ReactBits SplitText / BlurText Entrance Animation ---
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    const childSpans = heroTitle.querySelectorAll('span');
    let globalCharIndex = 0;
    
    childSpans.forEach(span => {
      const text = span.textContent;
      span.innerHTML = '';
      const chars = text.split('');
      
      chars.forEach(char => {
        const charSpan = document.createElement('span');
        charSpan.className = 'char-span';
        // Preserve space characters
        charSpan.textContent = char === ' ' ? '\u00A0' : char;
        // Elastic stagger delays
        charSpan.style.animationDelay = `${globalCharIndex * 0.035}s`;
        span.appendChild(charSpan);
        globalCharIndex++;
      });
    });
  }

  // --- 4. ReactBits Magnetic Attractions (Buttons & Logo & Nav) ---
  const magnetElements = document.querySelectorAll('.btn, nav a, .logo, .social-link');
  if (window.matchMedia('(pointer: fine)').matches) {
    magnetElements.forEach(elem => {
      elem.addEventListener('mousemove', (e) => {
        const rect = elem.getBoundingClientRect();
        // Offset of cursor relative to element center
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        // Attract element 35% towards mouse
        elem.style.transform = `translate(${x * 0.35}px, ${y * 0.35}px)`;
        elem.style.transition = 'none';
      });
      
      elem.addEventListener('mouseleave', () => {
        elem.style.transform = 'translate(0px, 0px)';
        elem.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      });
    });
  }

  // --- 5. ReactBits Spotlight Card 3D Parallax Tilt ---
  const artworkCards = document.querySelectorAll('.artwork-card');
  artworkCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; 
      const y = e.clientY - rect.top;  
      
      card.style.setProperty('--x', `${x}px`);
      card.style.setProperty('--y', `${y}px`);
      
      // Calculate rotation angles based on cursor offset from card center
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = -(y - centerY) / 12; // Moderate tilt
      const rotateY = (x - centerX) / 12;
      
      card.style.setProperty('--rotate-x', `${rotateX}deg`);
      card.style.setProperty('--rotate-y', `${rotateY}deg`);
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--rotate-x', '0deg');
      card.style.setProperty('--rotate-y', '0deg');
    });
  });

  // --- 6. Dynamic Header Scrolling Logic ---
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // --- 7. Mobile Menu Slide-Out Drawer Toggle ---
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      menuToggle.classList.toggle('open');
      
      const spans = menuToggle.querySelectorAll('span');
      if (menuToggle.classList.contains('open')) {
        spans[0].style.transform = 'translateY(8px) rotate(45deg)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'translateY(-8px) rotate(-45deg)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });

    // Close mobile nav drawer on link click
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('open');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      });
    });
  }

  // --- 8. Interactive Portfolio Filtering ---
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
          }, 40 * index); // Beautiful dynamic stagger reveal
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

  // --- 9. Premium Lightbox Modal Implementation ---
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

  const updateLightboxContent = (index) => {
    currentActiveIndex = index;
    const art = ARTWORKS_DATABASE[index];
    
    // Zoom reset
    lightboxImg.classList.remove('zoomed');
    
    // Fade reveal animation
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
    document.body.style.overflow = 'hidden'; 
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

  // Wire Card click events
  artworkCards.forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.getAttribute('data-index'));
      openLightbox(idx);
    });
  });

  // Hero section showcase click handler
  const heroShowcase = document.getElementById('hero-showcase-frame');
  if (heroShowcase) {
    heroShowcase.addEventListener('click', () => {
      openLightbox(0); 
    });
  }

  // Close triggers
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBack) lightboxBack.addEventListener('click', closeLightbox);
  
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.classList.contains('lightbox-viewer')) {
        closeLightbox();
      }
    });
  }

  // Navigation arrows
  if (lightboxNext) lightboxNext.addEventListener('click', nextArtwork);
  if (lightboxPrev) lightboxPrev.addEventListener('click', prevArtwork);

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextArtwork();
    if (e.key === 'ArrowLeft') prevArtwork();
  });

  // Lightbox Zoom detail trigger
  if (lightboxImg) {
    lightboxImg.addEventListener('click', () => {
      lightboxImg.classList.toggle('zoomed');
    });
  }

  // Acquisition inquiry routing
  if (lightboxInquire) {
    lightboxInquire.addEventListener('click', () => {
      const currentArt = ARTWORKS_DATABASE[currentActiveIndex];
      const subjectInput = document.getElementById('subject');
      const messageInput = document.getElementById('message');
      
      if (subjectInput) {
        subjectInput.value = `Artwork Acquisition: "${currentArt.title}"`;
        subjectInput.dispatchEvent(new Event('input'));
      }
      
      if (messageInput) {
        messageInput.value = `Hello Khadija,\n\nI am interested in acquiring your original masterpiece, "${currentArt.title}" (${currentArt.medium}, ${currentArt.dimensions}). Please provide availability, price, and shipping details.\n\nThank you.`;
        messageInput.dispatchEvent(new Event('input'));
      }
      
      closeLightbox();
      
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // --- 10. Interactive Toast Notification Utility ---
  const showToast = (message, isSuccess = true) => {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    
    const icon = isSuccess ? '&#10003;' : '&#9888;';
    toast.innerHTML = `<span class="toast-success-icon">${icon}</span> <span>${message}</span>`;
    
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
      toast.classList.add('hiding');
      setTimeout(() => {
        toast.remove();
      }, 400);
    }, 4000);
  };

  // --- 11. Contact Form Submissions Handling ---
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'TRANSMITTING...';
      submitBtn.disabled = true;
      
      setTimeout(() => {
        showToast(`Message from ${name} transmitted successfully to Khadija's studio.`);
        contactForm.reset();
        
        const inputs = contactForm.querySelectorAll('.form-input');
        inputs.forEach(input => {
          input.dispatchEvent(new Event('input'));
        });
        
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 1500);
    });
  }

  // --- 12. Dynamic Timing & Copyright Initialization ---
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
    setInterval(updateTime, 1000); 
  }

  // Smooth Scroll dynamic active navigation highlights
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');
  
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= (sectionTop - 240)) {
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
