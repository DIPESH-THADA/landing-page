import "../scss/main.scss";

// ═══════════════════════════════════════════════
//  LIGHT NATION CHURCH — MAIN TYPESCRIPT
// ═══════════════════════════════════════════════

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initNavbar();
  initHeroParticles();
  initCounters();
  initEventCountdowns();
  initTestimonialsSlider();
  initGalleryLightbox();
  initVideoModal();
  initContactForm();
  initDonationForm();
  initScrollReveal();
  initBackToTop();
  initSmoothScroll();
  initNewsletterForm();
});

// ═══ THEME TOGGLE ═══
function initThemeToggle(): void {
  const toggle = document.getElementById("themeToggle") as HTMLButtonElement;
  const html = document.documentElement;

  const saved = localStorage.getItem("ln-theme") || "dark";
  html.setAttribute("data-theme", saved);

  toggle?.addEventListener("click", () => {
    const current = html.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    localStorage.setItem("ln-theme", next);
    showToast(next === "dark" ? "🌙 Dark mode on" : "☀️ Light mode on");
  });
}

// ═══ NAVBAR ═══
function initNavbar(): void {
  const navbar = document.getElementById("navbar") as HTMLElement;
  const hamburger = document.getElementById("hamburger") as HTMLButtonElement;
  const navLinks = document.getElementById("navLinks") as HTMLElement;

  // Overlay for mobile menu
  const overlay = document.createElement("div");
  overlay.className = "nav-overlay";
  document.body.appendChild(overlay);

  // Scroll effect
  const onScroll = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 60);

    // Active link on scroll
    const sections = document.querySelectorAll("section[id]");
    const scrollPos = window.scrollY + 100;

    sections.forEach((section) => {
      const el = section as HTMLElement;
      const top = el.offsetTop;
      const h = el.offsetHeight;
      const id = el.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + h) {
        document
          .querySelectorAll(".nav-link")
          .forEach((l) => l.classList.remove("active"));
        document
          .querySelector(`.nav-link[href="#${id}"]`)
          ?.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });

  // Mobile hamburger
  const toggleMenu = (open: boolean) => {
    hamburger.classList.toggle("open", open);
    navLinks.classList.toggle("open", open);
    overlay.classList.toggle("show", open);
    document.body.style.overflow = open ? "hidden" : "";
  };

  hamburger?.addEventListener("click", () => {
    const isOpen = navLinks.classList.contains("open");
    toggleMenu(!isOpen);
  });

  overlay.addEventListener("click", () => toggleMenu(false));

  // Close on link click
  navLinks?.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => toggleMenu(false));
  });
}

// ═══ HERO PARTICLES ═══
function initHeroParticles(): void {
  const container = document.getElementById("heroParticles");
  if (!container) return;

  const count = 18;
  for (let i = 0; i < count; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    const size = Math.random() * 4 + 2;
    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}%;
      --duration: ${Math.random() * 10 + 7}s;
      --delay: ${Math.random() * 8}s;
    `;
    container.appendChild(p);
  }
}

// ═══ COUNTERS ═══
function initCounters(): void {
  const counters = document.querySelectorAll("[data-count]");

  const animateCounter = (el: Element) => {
    const target = parseInt(el.getAttribute("data-count") || "0");
    const duration = 2000;
    const start = performance.now();

    const update = (time: number) => {
      const elapsed = time - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      el.textContent =
        current >= 1000 ? current.toLocaleString() : String(current);
      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 },
  );

  counters.forEach((counter) => observer.observe(counter));
}

// ═══ EVENT COUNTDOWNS ═══
function initEventCountdowns(): void {
  const countdownEls = document.querySelectorAll(".event-countdown[data-date]");

  const update = () => {
    countdownEls.forEach((el) => {
      const dateStr = el.getAttribute("data-date") || "";
      const target = new Date(dateStr).getTime();
      const now = Date.now();
      const diff = target - now;

      if (diff <= 0) {
        el.innerHTML =
          '<span style="color:var(--accent);font-size:0.8rem;font-weight:600">Event Passed</span>';
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);

      el.innerHTML = [
        ["d", days],
        ["h", hours],
        ["m", mins],
        ["s", secs],
      ]
        .map(
          ([label, val]) => `
        <div class="cd-unit">
          <span class="cd-number">${String(val).padStart(2, "0")}</span>
          <span class="cd-label">${label}</span>
        </div>
      `,
        )
        .join("");
    });
  };

  update();
  setInterval(update, 1000);
}

// ═══ TESTIMONIALS SLIDER ═══
function initTestimonialsSlider(): void {
  const track = document.getElementById("testimonialTrack") as HTMLElement;
  const prevBtn = document.getElementById(
    "prevTestimonial",
  ) as HTMLButtonElement;
  const nextBtn = document.getElementById(
    "nextTestimonial",
  ) as HTMLButtonElement;
  const dotsContainer = document.getElementById("sliderDots") as HTMLElement;

  if (!track) return;

  const cards = track.querySelectorAll(".testimonial-card");
  let current = 0;
  let autoplay: ReturnType<typeof setInterval>;

  const getPerPage = () => {
    if (window.innerWidth <= 680) return 1;
    if (window.innerWidth <= 1000) return 2;
    return 3;
  };

  const totalSlides = () => Math.ceil(cards.length / getPerPage());

  // Build dots
  const buildDots = () => {
    dotsContainer.innerHTML = "";
    for (let i = 0; i < totalSlides(); i++) {
      const dot = document.createElement("button");
      dot.className = "slider-dot" + (i === current ? " active" : "");
      dot.setAttribute("aria-label", `Slide ${i + 1}`);
      dot.addEventListener("click", () => goTo(i));
      dotsContainer.appendChild(dot);
    }
  };

  const goTo = (index: number) => {
    const total = totalSlides();
    current = (index + total) % total;
    const perPage = getPerPage();
    const cardWidth = (track.parentElement?.offsetWidth || 0) / perPage;
    const gap = 24;
    track.style.transform = `translateX(-${current * (cardWidth + gap) * perPage}px)`;

    document.querySelectorAll(".slider-dot").forEach((d, i) => {
      d.classList.toggle("active", i === current);
    });
  };

  buildDots();

  prevBtn?.addEventListener("click", () => {
    goTo(current - 1);
    resetAuto();
  });
  nextBtn?.addEventListener("click", () => {
    goTo(current + 1);
    resetAuto();
  });

  const resetAuto = () => {
    clearInterval(autoplay);
    autoplay = setInterval(() => goTo(current + 1), 5000);
  };

  autoplay = setInterval(() => goTo(current + 1), 5000);
  window.addEventListener("resize", () => {
    buildDots();
    goTo(0);
  });
}

// ═══ GALLERY LIGHTBOX ═══
function initGalleryLightbox(): void {
  const items = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("lightbox") as HTMLElement;
  const lightboxImg = document.getElementById(
    "lightboxImg",
  ) as HTMLImageElement;
  const lightboxCaption = document.getElementById(
    "lightboxCaption",
  ) as HTMLElement;
  const backdrop = document.getElementById("lightboxBackdrop") as HTMLElement;
  const closeBtn = document.getElementById(
    "lightboxClose",
  ) as HTMLButtonElement;
  const prevBtn = document.getElementById("lightboxPrev") as HTMLButtonElement;
  const nextBtn = document.getElementById("lightboxNext") as HTMLButtonElement;

  let currentIndex = 0;
  const images: { src: string; caption: string }[] = [];

  items.forEach((item, i) => {
    const src = item.getAttribute("data-src") || "";
    const caption = item.getAttribute("data-caption") || "";
    images.push({ src, caption });

    item.addEventListener("click", () => open(i));
  });

  const open = (index: number) => {
    currentIndex = index;
    lightboxImg.src = images[index].src;
    lightboxCaption.textContent = images[index].caption;
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
  };

  const prev = () => open((currentIndex - 1 + images.length) % images.length);
  const next = () => open((currentIndex + 1) % images.length);

  closeBtn?.addEventListener("click", close);
  backdrop?.addEventListener("click", close);
  prevBtn?.addEventListener("click", prev);
  nextBtn?.addEventListener("click", next);

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  });
}

// ═══ VIDEO MODAL ═══
function initVideoModal(): void {
  const playBtn = document.getElementById("playSermon") as HTMLButtonElement;
  const modal = document.getElementById("videoModal") as HTMLElement;
  const backdrop = document.getElementById("videoBackdrop") as HTMLElement;
  const closeBtn = document.getElementById("modalClose") as HTMLButtonElement;
  const iframe = document.getElementById("sermonIframe") as HTMLIFrameElement;

  const open = () => {
    // Using a sample YouTube embed — replace with real sermon URL
    iframe.src = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    iframe.src = "";
    modal.classList.remove("open");
    document.body.style.overflow = "";
  };

  playBtn?.addEventListener("click", open);
  closeBtn?.addEventListener("click", close);
  backdrop?.addEventListener("click", close);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) close();
  });
}

// ═══ CONTACT FORM ═══
function initContactForm(): void {
  const form = document.getElementById("contactForm") as HTMLFormElement;
  const submitBtn = document.getElementById("submitBtn") as HTMLButtonElement;
  const success = document.getElementById("formSuccess") as HTMLElement;

  form?.addEventListener("submit", async (e) => {
    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    // Simulate API call
    await new Promise((res) => setTimeout(res, 1800));

    submitBtn.style.display = "none";
    success.classList.add("show");
    form.reset();

    setTimeout(() => {
      submitBtn.style.display = "";
      submitBtn.disabled = false;
      submitBtn.innerHTML = `Send Message <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>`;
      success.classList.remove("show");
    }, 5000);
  });
}

// ═══ DONATION FORM ═══
function initDonationForm(): void {
  const amountBtns = document.querySelectorAll(".amount-btn");
  const customInput = document.getElementById(
    "donationAmount",
  ) as HTMLInputElement;
  const donateBtn = document.getElementById("donateBtn") as HTMLButtonElement;

  amountBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      amountBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const amount = btn.getAttribute("data-amount") || "";
      if (customInput) customInput.value = amount;
    });
  });

  customInput?.addEventListener("input", () => {
    amountBtns.forEach((b) => b.classList.remove("active"));
  });

  donateBtn?.addEventListener("click", () => {
    const amount = customInput?.value || "25";
    showToast(`❤️ Thank you for giving $${amount}!`);
  });
}

// ═══ SCROLL REVEAL ═══
function initScrollReveal(): void {
  const els = document.querySelectorAll(
    ".glass-card, .section-header, .about-grid > *, .stat-item, .pillar, .event-card, .branch-card, .ministry-card, .testimonial-card",
  );

  els.forEach((el) => el.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add("revealed"), i * 60);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
  );

  els.forEach((el) => observer.observe(el));
}

// ═══ BACK TO TOP ═══
function initBackToTop(): void {
  const btn = document.getElementById("backToTop") as HTMLButtonElement;

  window.addEventListener(
    "scroll",
    () => {
      btn?.classList.toggle("visible", window.scrollY > 600);
    },
    { passive: true },
  );

  btn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ═══ SMOOTH SCROLL ═══
function initSmoothScroll(): void {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const navH = document.getElementById("navbar")?.offsetHeight || 80;
      const top = (target as HTMLElement).offsetTop - navH;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
}

// ═══ NEWSLETTER ═══
function initNewsletterForm(): void {
  const form = document.getElementById("newsletterForm") as HTMLFormElement;

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast("✅ You're subscribed! God bless you.");
    form.reset();
  });
}

// ═══ TOAST ═══
function showToast(message: string): void {
  let toast = document.querySelector(".toast") as HTMLElement;
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => toast.classList.remove("show"), 3000);
}
