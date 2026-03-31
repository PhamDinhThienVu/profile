class DragNav {
  constructor(rootSelector) {
    this.root = document.querySelector(rootSelector);
    this.items = this.root.querySelectorAll(".drag-nav__item");
    this.trigger = document.querySelector(".drag-nav__trigger");
    this.hint = document.querySelector(".drag-nav__hint");

    this.sections = [...this.items].map(
      (item) => document.getElementById(item.dataset.section)
    );

    this.currentIndex = 0;
    this.isDragging = false;
    this.hasDragged = false;
    this.isOpen = false;

    this.init();
  }

  init() {
    this.bindEvents();
    this.highlight();
  }

  bindEvents() {
    // ===== DRAG (MOUSE) =====
    this.trigger.addEventListener("mousedown", (e) => this.start(e.clientY));
    document.addEventListener("mousemove", (e) => this.move(e.clientY));
    document.addEventListener("mouseup", () => this.end());

    // ===== DRAG (TOUCH) =====
    this.trigger.addEventListener("touchstart", (e) =>
      this.start(e.touches[0].clientY)
    );
    document.addEventListener("touchmove", (e) =>
      this.move(e.touches[0].clientY)
    );
    document.addEventListener("touchend", () => this.end());

    // ===== CLICK ITEM =====
    this.items.forEach((item, i) => {
      item.addEventListener("click", () => {
        this.scrollTo(i);
        this.closeNav();
      });
    });

    // ===== CLICK TRIGGER (FALLBACK) =====
    this.trigger.addEventListener("click", () => {
      if (this.hasDragged) return; // tránh click sau drag

      this.toggleNav();
      this.showHint();
    });

    // ===== DOUBLE CLICK → NEXT SECTION =====
    this.trigger.addEventListener("dblclick", () => {
      let next = (this.currentIndex + 1) % this.items.length;
      this.scrollTo(next);
    });

    // ===== CLICK OUTSIDE → CLOSE =====
    document.addEventListener("click", (e) => {
      if (!this.root.contains(e.target) && e.target !== this.trigger) {
        this.closeNav();
      }
    });

    // ===== SCROLL SYNC =====
    window.addEventListener("scroll", () => this.syncScroll());
  }

  // =========================
  // DRAG LOGIC
  // =========================
  start(y) {
    this.isDragging = true;
    this.hasDragged = false;
    this.startY = y;
    this.startIndex = this.currentIndex;
    this.root.classList.add("active");
  }

  move(y) {
    if (!this.isDragging) return;

    const delta = y - this.startY;

    if (Math.abs(delta) > 5) {
      this.hasDragged = true;
    }

    const step = Math.round(delta / 30);
    const index = Math.max(
      0,
      Math.min(this.items.length - 1, this.startIndex + step)
    );

    this.currentIndex = index;
    this.highlight();
  }

  end() {
    if (!this.isDragging) return;

    this.isDragging = false;
    this.root.classList.remove("active");

    if (this.hasDragged) {
      this.scrollTo(this.currentIndex);
    }
  }

  // =========================
  // NAVIGATION
  // =========================
  scrollTo(index) {
    this.currentIndex = index;

    this.sections[index].scrollIntoView({
      behavior: "smooth",
    });

    this.highlight();
  }

  highlight() {
    this.items.forEach((el, i) => {
      el.classList.toggle(
        "drag-nav__item--active",
        i === this.currentIndex
      );
    });
  }

  // =========================
  // STATE CONTROL
  // =========================
  toggleNav() {
    this.isOpen = !this.isOpen;
    this.root.classList.toggle("active", this.isOpen);
  }

  closeNav() {
    this.isOpen = false;
    this.root.classList.remove("active");
  }

  // =========================
  // UX HELPERS
  // =========================
  showHint() {
    if (!this.hint) return;

    this.hint.classList.add("show");
    setTimeout(() => this.hint.classList.remove("show"), 2000);
  }

  syncScroll() {
    let index = this.sections.findIndex((section) => {
      const rect = section.getBoundingClientRect();
      return rect.top >= 0 && rect.top < window.innerHeight / 2;
    });

    if (index !== -1 && index !== this.currentIndex) {
      this.currentIndex = index;
      this.highlight();
    }
  }
}

// INIT
new DragNav(".drag-nav");