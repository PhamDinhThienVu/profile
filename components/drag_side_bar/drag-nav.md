# 📦 DragNav Component

A lightweight, framework-free drag navigation component built with **HTML, CSS, and Vanilla JavaScript**.
Designed for smooth section navigation using drag gestures, with a structure that is **reusable, customizable, and scalable**.

---

# 🚀 Features

* 🧩 Component-based architecture (reusable)
* 🎯 Drag to navigate between sections
* 🖱️ Mouse + Touch support
* 🎨 Customizable via CSS classes (like Bootstrap)
* ⚡ No dependencies (pure JS)
* 📱 Responsive by default

---

# 📂 Project Structure

```
/project-root
  ├── index.html
  ├── styles.css
  ├── script.js
```

---

# 🛠️ Installation

No installation required.

Just include the files:

```html
<link rel="stylesheet" href="styles.css" />
<script src="script.js"></script>
```

---

# 🧪 Basic Usage

## 1. HTML Structure

```html
<div class="drag-nav drag-nav--dark" data-target="#main">
  <div class="drag-nav__item" data-section="hero">Hero</div>
  <div class="drag-nav__item" data-section="about">About</div>
</div>

<div class="drag-nav__trigger"></div>
<div class="drag-nav__hint">Hold & drag to navigate</div>

<main id="main">
  <section id="hero">Hero</section>
  <section id="about">About</section>
</main>
```

---

## 2. Initialize Component

```js
new DragNav(".drag-nav");
```

---

# ⚙️ How It Works

### 🧠 Core Concept

* Each `.drag-nav__item` maps to a section via:

```html
data-section="hero"
```

* JS automatically finds:

```js
document.getElementById(item.dataset.section)
```

👉 No need to hard-code sections in JavaScript.

---

# 🎨 Customization

## 1. Theme Variants

```html
<div class="drag-nav drag-nav--dark">
<div class="drag-nav drag-nav--light">
```

---

## 2. Style Modifiers

Add your own:

```css
.drag-nav--rounded .drag-nav__item {
  border-radius: 20px;
}

.drag-nav--pill .drag-nav__item {
  border-radius: 999px;
}
```

---

## 3. Responsive

Already included:

```css
@media (max-width: 768px) {
  .drag-nav {
    transform: scale(0.8);
  }
}
```

---

# 🔧 Advanced Usage

## Multiple Instances

```js
document.querySelectorAll(".drag-nav").forEach(el => {
  new DragNav(el);
});
```

---

## Custom Config (Extendable)

You can extend the component:

```html
<div class="drag-nav" data-sensitivity="30">
```

```js
this.sensitivity = this.root.dataset.sensitivity || 40;
```

---

# 🧪 Controls

| Action       | Behavior          |
| ------------ | ----------------- |
| Drag trigger | Navigate sections |
| Click item   | Jump to section   |
| Double click | Show hint         |
| Scroll       | Auto highlight    |

---

# 🧱 Design Philosophy

This component follows:

### ✅ Declarative HTML

* Structure defined via `data-*` attributes

### ✅ Class-based styling

* Like Bootstrap (`.component--modifier`)

### ✅ Decoupled JS

* JS reads HTML instead of controlling it

---

# 🐛 Common Issues

### ❌ Sections not scrolling

✔ Make sure IDs match:

```html
data-section="hero"
<section id="hero">
```

---

### ❌ Drag not working on mobile

✔ Ensure touch events are not blocked by CSS

---

### ❌ Multiple components conflict

✔ Use separate triggers per component (future improvement)

---

# 🤝 Contributing

We welcome contributions 🚀

---

## 1. Fork & Clone

```
git clone your-repo-url
```

---

## 2. Create a Feature Branch

```
git checkout -b feature/your-feature-name
```

---

## 3. Coding Guidelines

* Use **BEM naming convention**

  ```
  .drag-nav__item--active
  ```

* Keep JS **modular and reusable**

* Avoid hard-coded values

* Prefer `data-*` attributes for config

---

## 4. Test Your Changes

* Test on:

  * Desktop (mouse)
  * Mobile (touch)
* Check:

  * Drag behavior
  * Scroll sync
  * Responsiveness

---

## 5. Commit Convention

```
feat: add inertia drag
fix: resolve mobile touch bug
refactor: improve component structure
```

---

## 6. Submit Pull Request

Include:

* Description of changes
* Before/After behavior
* Screenshots (if UI changes)

---

# 💡 Roadmap (Future Ideas)

* [ ] Inertia drag (momentum scrolling)
* [ ] Keyboard navigation
* [ ] Accessibility (ARIA support)
* [ ] Multiple trigger support
* [ ] Animation customization API
* [ ] Convert to Web Component

---

# 📄 License

MIT License — free to use and modify.

---

# 🙌 Final Note

This project is a stepping stone toward building your own:

👉 UI Library
👉 Frontend Framework
👉 Design System

Keep iterating 🚀
