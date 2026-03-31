class DragNav{
  constructor(rootSelector) {
    this.root = document.querySelector(rootSelector);
    this.items = this.root.querySelectorAll('.drag-nav__item');
    this.trigger = document.querySelector('.drag-nav__trigger');
    this.hint = document.querySelector('.drag-nav__hint');

    this.sections = [...this.items].map(
      item => document.getElementById(item.dataset.section)
    );

    this.currentIndex = 0;
    this.isDragging = false;

    this.init();
  }

  init(){
    this.bindEvents();
  }

  bindEvents() {
    this.trigger.addEventListener("mousedown", e => this.start(e.clientY));
    document.addEventListener("mousemove", e => this.move(e.clientY));
    document.addEventListener("mouseup", () => this.end());

    this.trigger.addEventListener("touchstart", e => this.start(e.touches[0].clientY));
    document.addEventListener("touchmove", e => this.move(e.touches[0].clientY));
    document.addEventListener("touchend", () => this.end());

    this.items.forEach((item, i) => {
      item.addEventListener("click", () => this.scrollTo(i));
    });

    this.trigger.addEventListener("dblclick", () => this.showHint());
  }

  start(y) {
    this.isDragging = true;
    this.startY = y;
    this.startIndex = this.currentIndex;
    this.root.classList.add("active");
  }

  move(y) {
    if (!this.isDragging) return;

    const delta = y - this.startY;
    const step = Math.round(delta / 40);

    const index = Math.max(0, Math.min(this.items.length - 1, this.startIndex + step));

    this.currentIndex = index;
    this.highlight();
  }

  end() {
    if (!this.isDragging) return;

    this.isDragging = false;
    this.root.classList.remove("active");

    this.scrollTo(this.currentIndex);
  }

  scrollTo(index) {
    this.currentIndex = index;
    this.sections[index].scrollIntoView({ behavior: "smooth" });
    this.highlight();
  }


  highlight() {
    this.items.forEach((el, i) => {
      el.classList.toggle("drag-nav__item--active", i === this.currentIndex);
    });
  }

  showHint() {
    this.hint.classList.add("show");
    setTimeout(() => this.hint.classList.remove("show"), 2000);
  }
}

new DragNav(".drag-nav");