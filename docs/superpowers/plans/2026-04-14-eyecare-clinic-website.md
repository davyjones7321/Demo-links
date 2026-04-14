# Eye Care Clinic Website Implementation Plan

> **For agentic workers:** Use subagent-driven-development (recommended) or executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a professional 6-page static eye care clinic website with teal/white theme, responsive design, and 5 service pages.

**Architecture:** Static HTML/CSS/JS site with shared stylesheet. Each page shares header/nav, footer, and CSS. Mobile-first responsive approach with hamburger menu.

**Tech Stack:** HTML5, CSS3 (custom properties, flexbox, grid), Vanilla JavaScript, Google Fonts (Outfit + Source Sans 3)

---

## File Structure

```
eyecare/
├── index.html          (Home page)
├── about.html          (About/team page)
├── services.html       (Services overview)
├── gallery.html        (Photo gallery)
├── testimonials.html   (Patient reviews)
├── contact.html        (Contact form + info)
├── styles.css          (Shared stylesheet)
└── js/
    └── main.js         (Mobile menu, form validation)
```

---

## Task 1: Create Shared CSS (styles.css)

**Files:**
- Create: `eyecare/styles.css`

- [ ] **Step 1: Write CSS reset and custom properties**

```css
/* CSS Reset */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  /* Colors - Teal/White Professional Theme */
  --primary: #008B8B;
  --primary-dark: #006666;
  --primary-light: #20B2AA;
  --accent: #00CED1;
  --bg-light: #F5FAFA;
  --bg-white: #FFFFFF;
  --text-dark: #1A2F2F;
  --text-body: #4A5F5F;
  --text-light: #7A8F8F;
  --border: #E0F2F1;
  
  /* Typography */
  --font-display: 'Outfit', sans-serif;
  --font-body: 'Source Sans 3', sans-serif;
  
  /* Spacing */
  --section-padding: 80px 0;
  --container: 1200px;
  
  /* Transitions */
  --transition: 0.3s ease;
}
```

- [ ] **Step 2: Write base typography styles**

```css
body {
  font-family: var(--font-body);
  color: var(--text-body);
  line-height: 1.7;
  background: var(--bg-white);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
  color: var(--text-dark);
  line-height: 1.2;
}

h1 { font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 700; }
h2 { font-size: clamp(2rem, 4vw, 3rem); font-weight: 600; }
h3 { font-size: 1.5rem; font-weight: 600; }
```

- [ ] **Step 3: Write layout utilities**

```css
.container {
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 24px;
}

.section {
  padding: var(--section-padding);
}

.section-title {
  text-align: center;
  margin-bottom: 50px;
}

.section-title h2 {
  margin-bottom: 15px;
}

.section-title p {
  max-width: 600px;
  margin: 0 auto;
  color: var(--text-light);
}
```

- [ ] **Step 4: Write header/nav styles**

```css
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255,255,255,0.98);
  backdrop-filter: blur(10px);
  z-index: 1000;
  box-shadow: 0 2px 20px rgba(0,0,0,0.06);
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 24px;
  max-width: var(--container);
  margin: 0 auto;
}

.logo {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
}

.nav-menu {
  display: flex;
  gap: 8px;
  list-style: none;
}

.nav-link {
  padding: 10px 18px;
  color: var(--text-dark);
  text-decoration: none;
  font-weight: 500;
  border-radius: 8px;
  transition: var(--transition);
}

.nav-link:hover, .nav-link.active {
  background: var(--primary);
  color: white;
}

/* Mobile Menu */
.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.menu-toggle span {
  width: 25px;
  height: 3px;
  background: var(--primary);
  border-radius: 2px;
  transition: var(--transition);
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }
  
  .nav-menu {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: 20px;
    gap: 5px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    transition: var(--transition);
  }
  
  .nav-menu.active {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }
}
```

- [ ] **Step 5: Write hero section styles**

```css
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, var(--bg-light) 0%, var(--bg-white) 100%);
  padding-top: 80px;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 70%;
  height: 200%;
  background: radial-gradient(ellipse, rgba(0,139,139,0.08) 0%, transparent 70%);
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.hero-text h1 {
  margin-bottom: 25px;
}

.hero-text h1 span {
  color: var(--primary);
}

.hero-text p {
  font-size: 1.2rem;
  margin-bottom: 35px;
  color: var(--text-light);
}

.hero-buttons {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.hero-image {
  position: relative;
}

.hero-image img {
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 30px 60px rgba(0,0,0,0.15);
}

@media (max-width: 900px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero-buttons {
    justify-content: center;
  }
}
```

- [ ] **Step 6: Write button styles**

```css
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  font-size: 1rem;
  font-weight: 600;
  font-family: var(--font-display);
  border-radius: 10px;
  text-decoration: none;
  cursor: pointer;
  border: none;
  transition: var(--transition);
}

.btn-primary {
  background: var(--primary);
  color: white;
}

.btn-primary:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0,139,139,0.3);
}

.btn-outline {
  background: transparent;
  color: var(--primary);
  border: 2px solid var(--primary);
}

.btn-outline:hover {
  background: var(--primary);
  color: white;
}
```

- [ ] **Step 7: Write card and service styles**

```css
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.service-card {
  background: white;
  padding: 35px;
  border-radius: 16px;
  box-shadow: 0 5px 30px rgba(0,0,0,0.05);
  border: 1px solid var(--border);
  transition: var(--transition);
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0,139,139,0.15);
  border-color: var(--primary);
}

.service-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.service-card h3 {
  margin-bottom: 12px;
}

.service-card p {
  color: var(--text-light);
}
```

- [ ] **Step 8: Write footer styles**

```css
.footer {
  background: var(--text-dark);
  color: white;
  padding: 60px 0 30px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
}

.footer-logo {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 15px;
}

.footer-text {
  color: rgba(255,255,255,0.7);
  margin-bottom: 20px;
}

.footer h4 {
  color: white;
  margin-bottom: 20px;
}

.footer-links {
  list-style: none;
}

.footer-links li {
  margin-bottom: 10px;
}

.footer-links a {
  color: rgba(255,255,255,0.7);
  text-decoration: none;
  transition: var(--transition);
}

.footer-links a:hover {
  color: var(--accent);
}

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 30px;
  text-align: center;
  color: rgba(255,255,255,0.5);
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 500px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 9: Write page-specific styles (hero variations, forms, gallery)**

```css
/* Page Hero (inner pages) */
.page-hero {
  padding: 150px 0 80px;
  background: linear-gradient(135deg, var(--bg-light) 0%, var(--bg-white) 100%);
  text-align: center;
}

.page-hero h1 {
  margin-bottom: 15px;
}

.page-hero p {
  color: var(--text-light);
  font-size: 1.1rem;
}

/* Contact Form */
.contact-form {
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 5px 30px rgba(0,0,0,0.05);
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: var(--text-dark);
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 14px 18px;
  border: 2px solid var(--border);
  border-radius: 10px;
  font-family: var(--font-body);
  font-size: 1rem;
  transition: var(--transition);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary);
}

/* Gallery Grid */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.gallery-item {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 4/3;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition);
}

.gallery-item:hover img {
  transform: scale(1.05);
}

/* Testimonials */
.testimonial-card {
  background: white;
  padding: 35px;
  border-radius: 16px;
  box-shadow: 0 5px 30px rgba(0,0,0,0.05);
  margin-bottom: 30px;
}

.testimonial-card .stars {
  color: #FFB800;
  margin-bottom: 15px;
}

.testimonial-card blockquote {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 20px;
  font-style: italic;
}

.testimonial-card .author {
  display: flex;
  align-items: center;
  gap: 15px;
}

.testimonial-card .avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
}

/* Team Grid */
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.team-member {
  text-align: center;
}

.team-member .photo {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin: 0 auto 20px;
  overflow: hidden;
  border: 4px solid var(--primary);
}

.team-member .photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.team-member h3 {
  margin-bottom: 5px;
}

.team-member .role {
  color: var(--primary);
  font-weight: 500;
}
```

- [ ] **Step 10: Write animation keyframes and responsive tweaks**

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-text > * {
  animation: fadeInUp 0.8s ease forwards;
}

.hero-text > *:nth-child(2) { animation-delay: 0.1s; }
.hero-text > *:nth-child(3) { animation-delay: 0.2s; }
.hero-text > *:nth-child(4) { animation-delay: 0.3s; }
```

- [ ] **Step 11: Commit**

```bash
cd eyecare
git add styles.css
git commit -m "feat: create shared stylesheet with teal/white theme"
```

---

## Task 2: Create JavaScript (main.js)

**Files:**
- Create: `eyecare/js/main.js`
- Modify: All HTML pages (add script tag)

- [ ] **Step 1: Write mobile menu toggle**

```javascript
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });
  
  // Close menu when clicking a link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      menuToggle.classList.remove('active');
    });
  });
});
```

- [ ] **Step 2: Write form validation**

```javascript
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let isValid = true;
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');
    
    // Simple validation
    if (!name.value.trim()) {
      showError(name, 'Please enter your name');
      isValid = false;
    } else {
      clearError(name);
    }
    
    if (!email.value.trim() || !isValidEmail(email.value)) {
      showError(email, 'Please enter a valid email');
      isValid = false;
    } else {
      clearError(email);
    }
    
    if (!message.value.trim()) {
      showError(message, 'Please enter your message');
      isValid = false;
    } else {
      clearError(message);
    }
    
    if (isValid) {
      alert('Thank you for your message! We will contact you soon.');
      contactForm.reset();
    }
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError(input, message) {
  clearError(input);
  const error = document.createElement('span');
  error.className = 'error-message';
  error.style.color = '#e74c3c';
  error.style.fontSize = '0.85rem';
  error.style.display = 'block';
  error.style.marginTop = '5px';
  error.textContent = message;
  input.parentNode.appendChild(error);
  input.style.borderColor = '#e74c3c';
}

function clearError(input) {
  const error = input.parentNode.querySelector('.error-message');
  if (error) error.remove();
  input.style.borderColor = '';
}
```

- [ ] **Step 3: Write smooth scroll**

```javascript
// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
```

- [ ] **Step 4: Commit**

```bash
git add js/main.js
git commit -m "feat: add mobile menu and form validation"
```

---

## Task 3: Create Home Page (index.html)

**Files:**
- Create: `eyecare/index.html`

- [ ] **Step 1: Write header and hero section**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>VisionCare Eye Clinic | Expert Eye Care Services</title>
  <meta name="description" content="VisionCare Eye Clinic offers cataract surgery, LASIK, retina care, pediatric eye care, and glaucoma treatment by board-certified ophthalmologists.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Source+Sans+3:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="header">
    <nav class="nav">
      <a href="index.html" class="logo">
        <span class="logo-icon">👁</span>
        VisionCare
      </a>
      <button class="menu-toggle" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul class="nav-menu">
        <li><a href="index.html" class="nav-link active">Home</a></li>
        <li><a href="about.html" class="nav-link">About</a></li>
        <li><a href="services.html" class="nav-link">Services</a></li>
        <li><a href="gallery.html" class="nav-link">Gallery</a></li>
        <li><a href="testimonials.html" class="nav-link">Testimonials</a></li>
        <li><a href="contact.html" class="nav-link">Contact</a></li>
      </ul>
    </nav>
  </header>

  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h1>Clear Vision for a <span>Brighter Life</span></h1>
          <p>Experience world-class eye care with our team of board-certified ophthalmologists. Using cutting-edge technology to protect and restore your vision.</p>
          <div class="hero-buttons">
            <a href="contact.html" class="btn btn-primary">Book Appointment</a>
            <a href="services.html" class="btn btn-outline">Our Services</a>
          </div>
        </div>
        <div class="hero-image">
          <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=500&fit=crop" alt="Modern eye clinic">
        </div>
      </div>
    </div>
  </section>
```

- [ ] **Step 2: Write services preview section**

```html
  <section class="section" style="background: var(--bg-light);">
    <div class="container">
      <div class="section-title">
        <h2>Our Services</h2>
        <p>Comprehensive eye care solutions tailored to your needs</p>
      </div>
      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon">🔬</div>
          <h3>Cataract Surgery</h3>
          <p>Advanced micro-incision techniques for quick recovery and crystal-clear vision.</p>
        </div>
        <div class="service-card">
          <div class="service-icon">✨</div>
          <h3>LASIK</h3>
          <p>Blade-free laser vision correction to reduce or eliminate dependence on glasses.</p>
        </div>
        <div class="service-card">
          <div class="service-icon">👁</div>
          <h3>Retina Care</h3>
          <p>Expert diagnosis and treatment for retinal conditions and diseases.</p>
        </div>
        <div class="service-card">
          <div class="service-icon">👶</div>
          <h3>Pediatric Eye Care</h3>
          <p>Gentle, comprehensive eye exams and treatment for children of all ages.</p>
        </div>
        <div class="service-card">
          <div class="service-icon">💧</div>
          <h3>Glaucoma Treatment</h3>
          <p>Early detection and effective management to preserve your optic nerve.</p>
        </div>
      </div>
      <div style="text-align: center; margin-top: 40px;">
        <a href="services.html" class="btn btn-outline">View All Services</a>
      </div>
    </div>
  </section>
```

- [ ] **Step 3: Write why choose us and CTA section**

```html
  <section class="section">
    <div class="container">
      <div class="section-title">
        <h2>Why Choose VisionCare?</h2>
        <p>Trusted by thousands of patients for exceptional eye care</p>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 40px; text-align: center;">
        <div>
          <div style="font-size: 3rem; margin-bottom: 15px;">🏆</div>
          <h3 style="margin-bottom: 10px;">25+ Years Experience</h3>
          <p style="color: var(--text-light);">Decades of expertise in advanced eye procedures.</p>
        </div>
        <div>
          <div style="font-size: 3rem; margin-bottom: 15px;">🔬</div>
          <h3 style="margin-bottom: 10px;">Latest Technology</h3>
          <p style="color: var(--text-light);">State-of-the-art equipment for precise diagnostics.</p>
        </div>
        <div>
          <div style="font-size: 3rem; margin-bottom: 15px;">👨‍⚕️</div>
          <h3 style="margin-bottom: 10px;">Expert Surgeons</h3>
          <p style="color: var(--text-light);">Board-certified ophthalmologists with thousands of successful surgeries.</p>
        </div>
        <div>
          <div style="font-size: 3rem; margin-bottom: 15px;">❤️</div>
          <h3 style="margin-bottom: 10px;">Patient First</h3>
          <p style="color: var(--text-light);">Personalized care with compassion and dedication.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section" style="background: var(--primary); color: white; text-align: center;">
    <div class="container">
      <h2 style="color: white; margin-bottom: 20px;">Ready to See Clearly?</h2>
      <p style="color: rgba(255,255,255,0.9); margin-bottom: 30px; font-size: 1.2rem;">Schedule your comprehensive eye exam today and take the first step toward better vision.</p>
      <a href="contact.html" class="btn" style="background: white; color: var(--primary);">Book Free Consultation</a>
    </div>
  </section>
```

- [ ] **Step 4: Write footer and close**

```html
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-logo">👁 VisionCare</div>
          <p class="footer-text">Providing exceptional eye care services with compassion and cutting-edge technology since 1998.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul class="footer-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul class="footer-links">
            <li><a href="services.html">Cataract Surgery</a></li>
            <li><a href="services.html">LASIK</a></li>
            <li><a href="services.html">Retina Care</a></li>
            <li><a href="services.html">Glaucoma</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul class="footer-links">
            <li>123 Medical Center Dr</li>
            <li>Cityville, ST 12345</li>
            <li>(555) 123-4567</li>
            <li>info@visioncare.com</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 VisionCare Eye Clinic. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 5: Commit**

```bash
git add index.html
git commit -m "feat: create home page with hero and services preview"
```

---

## Task 4: Create About Page (about.html)

**Files:**
- Create: `eyecare/about.html`

- [ ] **Step 1: Write full about page with team section**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About Us | VisionCare Eye Clinic</title>
  <meta name="description" content="Learn about VisionCare's team of expert ophthalmologists and our commitment to exceptional eye care.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Source+Sans+3:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="header">
    <nav class="nav">
      <a href="index.html" class="logo">
        <span class="logo-icon">👁</span>
        VisionCare
      </a>
      <button class="menu-toggle" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul class="nav-menu">
        <li><a href="index.html" class="nav-link">Home</a></li>
        <li><a href="about.html" class="nav-link active">About</a></li>
        <li><a href="services.html" class="nav-link">Services</a></li>
        <li><a href="gallery.html" class="nav-link">Gallery</a></li>
        <li><a href="testimonials.html" class="nav-link">Testimonials</a></li>
        <li><a href="contact.html" class="nav-link">Contact</a></li>
      </ul>
    </nav>
  </header>

  <section class="page-hero">
    <div class="container">
      <h1>About VisionCare</h1>
      <p>Dedicated to preserving and restoring vision since 1998</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;">
        <div>
          <h2 style="margin-bottom: 25px;">Our Story</h2>
          <p style="margin-bottom: 20px;">Founded in 1998 by Dr. Robert Chen, VisionCare Eye Clinic began with a simple mission: to provide compassionate, world-class eye care to our community. What started as a small practice has grown into one of the region's most trusted eye care centers.</p>
          <p style="margin-bottom: 20px;">Today, our team of board-certified ophthalmologists and optometrists continues that tradition, combining decades of experience with the latest advances in eye care technology. We've performed over 50,000 successful procedures and counting.</p>
          <p>Our state-of-the-art facility features the most advanced diagnostic and surgical equipment available, ensuring our patients receive the highest standard of care in a comfortable, welcoming environment.</p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=450&fit=crop" alt="VisionCare clinic interior" style="width: 100%; border-radius: 16px; box-shadow: 0 20px 50px rgba(0,0,0,0.1);">
        </div>
      </div>
    </div>
  </section>

  <section class="section" style="background: var(--bg-light);">
    <div class="container">
      <div class="section-title">
        <h2>Meet Our Team</h2>
        <p>Expert care from experienced professionals</p>
      </div>
      <div class="team-grid">
        <div class="team-member">
          <div class="photo">
            <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face" alt="Dr. Robert Chen">
          </div>
          <h3>Dr. Robert Chen</h3>
          <p class="role">Founder & Chief Surgeon</p>
          <p style="color: var(--text-light); font-size: 0.95rem; margin-top: 10px;">30+ years experience, Harvard trained</p>
        </div>
        <div class="team-member">
          <div class="photo">
            <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face" alt="Dr. Sarah Williams">
          </div>
          <h3>Dr. Sarah Williams</h3>
          <p class="role">Ophthalmologist</p>
          <p style="color: var(--text-light); font-size: 0.95rem; margin-top: 10px;">Specializes in LASIK & cataract surgery</p>
        </div>
        <div class="team-member">
          <div class="photo">
            <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&fit=crop&crop=face" alt="Dr. Michael Park">
          </div>
          <h3>Dr. Michael Park</h3>
          <p class="role">Retina Specialist</p>
          <p style="color: var(--text-light); font-size: 0.95rem; margin-top: 10px;">Expert in diabetic retinopathy</p>
        </div>
        <div class="team-member">
          <div class="photo">
            <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop&crop=face" alt="Dr. Emily Rodriguez">
          </div>
          <h3>Dr. Emily Rodriguez</h3>
          <p class="role">Pediatric Ophthalmologist</p>
          <p style="color: var(--text-light); font-size: 0.95rem; margin-top: 10px;">Child eye care specialist</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-title">
        <h2>Our Mission & Values</h2>
      </div>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px;">
        <div style="text-align: center; padding: 30px;">
          <div style="font-size: 2.5rem; margin-bottom: 15px;">🎯</div>
          <h3 style="margin-bottom: 10px;">Excellence</h3>
          <p style="color: var(--text-light);">We strive for the highest standards in everything we do, from diagnosis to treatment.</p>
        </div>
        <div style="text-align: center; padding: 30px;">
          <div style="font-size: 2.5rem; margin-bottom: 15px;">🤝</div>
          <h3 style="margin-bottom: 10px;">Compassion</h3>
          <p style="color: var(--text-light);">Every patient receives personalized care with genuine empathy and understanding.</p>
        </div>
        <div style="text-align: center; padding: 30px;">
          <div style="font-size: 2.5rem; margin-bottom: 15px;">💡</div>
          <h3 style="margin-bottom: 10px;">Innovation</h3>
          <p style="color: var(--text-light);">We continuously adopt new technologies and techniques to better serve our patients.</p>
        </div>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-logo">👁 VisionCare</div>
          <p class="footer-text">Providing exceptional eye care services with compassion and cutting-edge technology since 1998.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul class="footer-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul class="footer-links">
            <li><a href="services.html">Cataract Surgery</a></li>
            <li><a href="services.html">LASIK</a></li>
            <li><a href="services.html">Retina Care</a></li>
            <li><a href="services.html">Glaucoma</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul class="footer-links">
            <li>123 Medical Center Dr</li>
            <li>Cityville, ST 12345</li>
            <li>(555) 123-4567</li>
            <li>info@visioncare.com</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 VisionCare Eye Clinic. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Add responsive media query for about page**

Add to styles.css:
```css
@media (max-width: 900px) {
  .section > .container > div[style*="grid-template-columns: 1fr 1fr"] {
    grid-template-columns: 1fr !important;
  }
  
  .section .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

- [ ] **Step 3: Commit**

```bash
git add about.html styles.css
git commit -m "feat: create about page with team section"
```

---

## Task 5: Create Services Page (services.html)

**Files:**
- Create: `eyecare/services.html`

- [ ] **Write complete services page with 5 detailed service cards**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Our Services | VisionCare Eye Clinic</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Source+Sans+3:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="header">
    <nav class="nav">
      <a href="index.html" class="logo">
        <span class="logo-icon">👁</span>
        VisionCare
      </a>
      <button class="menu-toggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-menu">
        <li><a href="index.html" class="nav-link">Home</a></li>
        <li><a href="about.html" class="nav-link">About</a></li>
        <li><a href="services.html" class="nav-link active">Services</a></li>
        <li><a href="gallery.html" class="nav-link">Gallery</a></li>
        <li><a href="testimonials.html" class="nav-link">Testimonials</a></li>
        <li><a href="contact.html" class="nav-link">Contact</a></li>
      </ul>
    </nav>
  </header>

  <section class="page-hero">
    <div class="container">
      <h1>Our Services</h1>
      <p>Comprehensive eye care for every stage of life</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="services-grid">
        <!-- Cataract Surgery -->
        <div class="service-card">
          <div class="service-icon">🔬</div>
          <h3>Cataract Surgery</h3>
          <p style="margin-bottom: 15px;">Restore clear vision with our advanced micro-incision cataract surgery. We use premium intraocular lenses (IOLs) to reduce dependence on glasses.</p>
          <ul style="color: var(--text-light); margin-bottom: 20px; padding-left: 20px;">
            <li>Blade-free technique</li>
            <li>Premium lens options</li>
            <li>Quick recovery (24-48 hours)</li>
            <li>95% success rate</li>
          </ul>
          <a href="contact.html" class="btn btn-primary" style="width: 100%; justify-content: center;">Schedule Consultation</a>
        </div>

        <!-- LASIK -->
        <div class="service-card">
          <div class="service-icon">✨</div>
          <h3>LASIK Vision Correction</h3>
          <p style="margin-bottom: 15px;">Experience freedom from glasses and contacts with our state-of-the-art blade-free LASIK procedure using the latest laser technology.</p>
          <ul style="color: var(--text-light); margin-bottom: 20px; padding-left: 20px;">
            <li>iDesign wavefront mapping</li>
            <li>All-laser, no blade</li>
            <li>20/20 vision or better</li>
            <li>Same-day procedure</li>
          </ul>
          <a href="contact.html" class="btn btn-primary" style="width: 100%; justify-content: center;">Schedule Consultation</a>
        </div>

        <!-- Retina Care -->
        <div class="service-card">
          <div class="service-icon">👁</div>
          <h3>Retina Care</h3>
          <p style="margin-bottom: 15px;">Expert diagnosis and treatment for retinal conditions including macular degeneration, diabetic retinopathy, and retinal detachment.</p>
          <ul style="color: var(--text-light); margin-bottom: 20px; padding-left: 20px;">
            <li>Advanced OCT imaging</li>
            <li>Intravitreal injections</li>
            <li>Retinal laser therapy</li>
            <li>Vitreoretinal surgery</li>
          </ul>
          <a href="contact.html" class="btn btn-primary" style="width: 100%; justify-content: center;">Schedule Consultation</a>
        </div>

        <!-- Pediatric Eye Care -->
        <div class="service-card">
          <div class="service-icon">👶</div>
          <h3>Pediatric Eye Care</h3>
          <p style="margin-bottom: 15px;">Gentle, comprehensive eye exams and treatment for children. We detect and treat vision problems early for optimal development.</p>
          <ul style="color: var(--text-light); margin-bottom: 20px; padding-left: 20px;">
            <li>Child-friendly environment</li>
            <li>Amblyopia (lazy eye) treatment</li>
            <li>Strabismus (crossed eyes)</li>
            <li>Myopia management</li>
          </ul>
          <a href="contact.html" class="btn btn-primary" style="width: 100%; justify-content: center;">Schedule Consultation</a>
        </div>

        <!-- Glaucoma Treatment -->
        <div class="service-card">
          <div class="service-icon">💧</div>
          <h3>Glaucoma Treatment</h3>
          <p style="margin-bottom: 15px;">Early detection and effective management to preserve your optic nerve. We offer comprehensive glaucoma screening and treatment.</p>
          <ul style="color: var(--text-light); margin-bottom: 20px; padding-left: 20px;">
            <li>Advanced screening</li>
            <li>Medication management</li>
            <li>Laser trabeculoplasty</li>
            <li>Surgical options</li>
          </ul>
          <a href="contact.html" class="btn btn-primary" style="width: 100%; justify-content: center;">Schedule Consultation</a>
        </div>
      </div>
    </div>
  </section>

  <section class="section" style="background: var(--bg-light);">
    <div class="container" style="text-align: center;">
      <h2 style="margin-bottom: 20px;">Need a Comprehensive Eye Exam?</h2>
      <p style="color: var(--text-light); max-width: 600px; margin: 0 auto 30px;">Regular eye exams are essential for maintaining good vision and detecting problems early. Schedule your exam today.</p>
      <a href="contact.html" class="btn btn-primary">Book Eye Exam</a>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-logo">👁 VisionCare</div>
          <p class="footer-text">Providing exceptional eye care services with compassion and cutting-edge technology since 1998.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul class="footer-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul class="footer-links">
            <li><a href="services.html">Cataract Surgery</a></li>
            <li><a href="services.html">LASIK</a></li>
            <li><a href="services.html">Retina Care</a></li>
            <li><a href="services.html">Glaucoma</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul class="footer-links">
            <li>123 Medical Center Dr</li>
            <li>Cityville, ST 12345</li>
            <li>(555) 123-4567</li>
            <li>info@visioncare.com</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 VisionCare Eye Clinic. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Commit**

```bash
git add services.html
git commit -m "feat: create services page with 5 service cards"
```

---

## Task 6: Create Gallery Page (gallery.html)

**Files:**
- Create: `eyecare/gallery.html`

- [ ] **Write gallery page with clinic photos**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gallery | VisionCare Eye Clinic</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Source+Sans+3:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="header">
    <nav class="nav">
      <a href="index.html" class="logo">
        <span class="logo-icon">👁</span>
        VisionCare
      </a>
      <button class="menu-toggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-menu">
        <li><a href="index.html" class="nav-link">Home</a></li>
        <li><a href="about.html" class="nav-link">About</a></li>
        <li><a href="services.html" class="nav-link">Services</a></li>
        <li><a href="gallery.html" class="nav-link active">Gallery</a></li>
        <li><a href="testimonials.html" class="nav-link">Testimonials</a></li>
        <li><a href="contact.html" class="nav-link">Contact</a></li>
      </ul>
    </nav>
  </header>

  <section class="page-hero">
    <div class="container">
      <h1>Our Clinic</h1>
      <p>Take a virtual tour of our state-of-the-art facility</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="gallery-grid">
        <div class="gallery-item">
          <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=450&fit=crop" alt="Modern waiting room">
        </div>
        <div class="gallery-item">
          <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=450&fit=crop" alt="Eye examination room">
        </div>
        <div class="gallery-item">
          <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=450&fit=crop" alt="Clinic lobby">
        </div>
        <div class="gallery-item">
          <img src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=450&fit=crop" alt="Surgical equipment">
        </div>
        <div class="gallery-item">
          <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=450&fit=crop" alt="Doctor consultation">
        </div>
        <div class="gallery-item">
          <img src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=450&fit=crop" alt="Optical dispensary">
        </div>
        <div class="gallery-item">
          <img src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=450&fit=crop" alt="Team meeting">
        </div>
        <div class="gallery-item">
          <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&h=450&fit=crop" alt="Diagnostic equipment">
        </div>
        <div class="gallery-item">
          <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&h=450&fit=crop" alt="Modern laser equipment">
        </div>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-logo">👁 VisionCare</div>
          <p class="footer-text">Providing exceptional eye care services with compassion and cutting-edge technology since 1998.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul class="footer-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul class="footer-links">
            <li><a href="services.html">Cataract Surgery</a></li>
            <li><a href="services.html">LASIK</a></li>
            <li><a href="services.html">Retina Care</a></li>
            <li><a href="services.html">Glaucoma</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul class="footer-links">
            <li>123 Medical Center Dr</li>
            <li>Cityville, ST 12345</li>
            <li>(555) 123-4567</li>
            <li>info@visioncare.com</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 VisionCare Eye Clinic. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Commit**

```bash
git add gallery.html
git commit -m "feat: create gallery page with clinic photos"
```

---

## Task 7: Create Testimonials Page (testimonials.html)

**Files:**
- Create: `eyecare/testimonials.html`

- [ ] **Write testimonials page with patient reviews**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Testimonials | VisionCare Eye Clinic</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Source+Sans+3:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="header">
    <nav class="nav">
      <a href="index.html" class="logo">
        <span class="logo-icon">👁</span>
        VisionCare
      </a>
      <button class="menu-toggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-menu">
        <li><a href="index.html" class="nav-link">Home</a></li>
        <li><a href="about.html" class="nav-link">About</a></li>
        <li><a href="services.html" class="nav-link">Services</a></li>
        <li><a href="gallery.html" class="nav-link">Gallery</a></li>
        <li><a href="testimonials.html" class="nav-link active">Testimonials</a></li>
        <li><a href="contact.html" class="nav-link">Contact</a></li>
      </ul>
    </nav>
  </header>

  <section class="page-hero">
    <div class="container">
      <h1>Patient Testimonials</h1>
      <p>Hear what our patients have to say about their experience</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="testimonials-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 30px;">
        
        <div class="testimonial-card">
          <div class="stars">★★★★★</div>
          <blockquote>"After years of struggling with cataracts, Dr. Chen performed my surgery and I can see clearly again. The entire staff made me feel so comfortable. I can't thank VisionCare enough!"</blockquote>
          <div class="author">
            <div class="avatar">MJ</div>
            <div>
              <strong>Margaret Johnson</strong>
              <p style="color: var(--text-light); font-size: 0.9rem;">Cataract Surgery Patient</p>
            </div>
          </div>
        </div>

        <div class="testimonial-card">
          <div class="stars">★★★★★</div>
          <blockquote>"I got LASIK at VisionCare and it's been life-changing. Waking up and being able to see the clock without reaching for my glasses is amazing. Highly recommend!"</blockquote>
          <div class="author">
            <div class="avatar">DW</div>
            <div>
              <strong>David Wilson</strong>
              <p style="color: var(--text-light); font-size: 0.9rem;">LASIK Patient</p>
            </div>
          </div>
        </div>

        <div class="testimonial-card">
          <div class="stars">★★★★★</div>
          <blockquote>"Dr. Rodriguez is wonderful with children. My daughter was nervous about her eye exam but Dr. Rodriguez made it fun and stress-free. We love this clinic!"</blockquote>
          <div class="author">
            <div class="avatar">ST</div>
            <div>
              <strong>Sarah Thompson</strong>
              <p style="color: var(--text-light); font-size: 0.9rem;">Pediatric Patient Parent</p>
            </div>
          </div>
        </div>

        <div class="testimonial-card">
          <div class="stars">★★★★★</div>
          <blockquote>"The retina care I received here saved my vision. Dr. Park caught my diabetic retinopathy early and the treatment was painless. Professional and caring staff."</blockquote>
          <div class="author">
            <div class="avatar">RB</div>
            <div>
              <strong>Robert Brown</strong>
              <p style="color: var(--text-light); font-size: 0.9rem;">Retina Care Patient</p>
            </div>
          </div>
        </div>

        <div class="testimonial-card">
          <div class="stars">★★★★★</div>
          <blockquote>"Managing my glaucoma has been much easier with the VisionCare team. They explained everything clearly and my pressure is now well-controlled. So grateful!"</blockquote>
          <div class="author">
            <div class="avatar">EH</div>
            <div>
              <strong>Elizabeth Harris</strong>
              <p style="color: var(--text-light); font-size: 0.9rem;">Glaucoma Treatment Patient</p>
            </div>
          </div>
        </div>

        <div class="testimonial-card">
          <div class="stars">★★★★★</div>
          <blockquote>"State-of-the-art facility and incredibly skilled doctors. I traveled 2 hours to come here and it was worth every mile. The best eye care in the region!"</blockquote>
          <div class="author">
            <div class="avatar">KL</div>
            <div>
              <strong>Kevin Lee</strong>
              <p style="color: var(--text-light); font-size: 0.9rem;">LASIK Patient</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <section class="section" style="background: var(--bg-light); text-align: center;">
    <div class="container">
      <h2 style="margin-bottom: 20px;">Ready to Experience VisionCare?</h2>
      <p style="color: var(--text-light); margin-bottom: 30px;">Join thousands of satisfied patients who trust us with their vision.</p>
      <a href="contact.html" class="btn btn-primary">Schedule Your Visit</a>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-logo">👁 VisionCare</div>
          <p class="footer-text">Providing exceptional eye care services with compassion and cutting-edge technology since 1998.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul class="footer-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul class="footer-links">
            <li><a href="services.html">Cataract Surgery</a></li>
            <li><a href="services.html">LASIK</a></li>
            <li><a href="services.html">Retina Care</a></li>
            <li><a href="services.html">Glaucoma</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul class="footer-links">
            <li>123 Medical Center Dr</li>
            <li>Cityville, ST 12345</li>
            <li>(555) 123-4567</li>
            <li>info@visioncare.com</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 VisionCare Eye Clinic. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Commit**

```bash
git add testimonials.html
git commit -m "feat: create testimonials page with patient reviews"
```

---

## Task 8: Create Contact Page (contact.html)

**Files:**
- Create: `eyecare/contact.html`

- [ ] **Write contact page with form and info**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Us | VisionCare Eye Clinic</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Source+Sans+3:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="header">
    <nav class="nav">
      <a href="index.html" class="logo">
        <span class="logo-icon">👁</span>
        VisionCare
      </a>
      <button class="menu-toggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-menu">
        <li><a href="index.html" class="nav-link">Home</a></li>
        <li><a href="about.html" class="nav-link">About</a></li>
        <li><a href="services.html" class="nav-link">Services</a></li>
        <li><a href="gallery.html" class="nav-link">Gallery</a></li>
        <li><a href="testimonials.html" class="nav-link">Testimonials</a></li>
        <li><a href="contact.html" class="nav-link active">Contact</a></li>
      </ul>
    </nav>
  </header>

  <section class="page-hero">
    <div class="container">
      <h1>Contact Us</h1>
      <p>Schedule an appointment or ask us anything</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 60px;">
        
        <div>
          <h2 style="margin-bottom: 30px;">Get in Touch</h2>
          <form id="contact-form" class="contact-form" style="box-shadow: none; padding: 0;">
            <div class="form-group">
              <label for="name">Full Name *</label>
              <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
              <label for="email">Email Address *</label>
              <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone">
            </div>
            <div class="form-group">
              <label for="service">Service Interested In</label>
              <select id="service" name="service">
                <option value="">Select a service...</option>
                <option value="cataract">Cataract Surgery</option>
                <option value="lasik">LASIK</option>
                <option value="retina">Retina Care</option>
                <option value="pediatric">Pediatric Eye Care</option>
                <option value="glaucoma">Glaucoma Treatment</option>
                <option value="general">General Eye Exam</option>
              </select>
            </div>
            <div class="form-group">
              <label for="message">Message *</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary" style="width: 100%; justify-content: center;">Send Message</button>
          </form>
        </div>

        <div>
          <h2 style="margin-bottom: 30px;">Contact Information</h2>
          
          <div style="margin-bottom: 40px;">
            <div style="display: flex; gap: 20px; margin-bottom: 25px;">
              <div style="width: 50px; height: 50px; background: var(--bg-light); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.3rem;">📍</div>
              <div>
                <h4 style="margin-bottom: 5px;">Address</h4>
                <p style="color: var(--text-light);">123 Medical Center Drive<br>Cityville, ST 12345</p>
              </div>
            </div>
            
            <div style="display: flex; gap: 20px; margin-bottom: 25px;">
              <div style="width: 50px; height: 50px; background: var(--bg-light); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.3rem;">📞</div>
              <div>
                <h4 style="margin-bottom: 5px;">Phone</h4>
                <p style="color: var(--text-light);">(555) 123-4567</p>
              </div>
            </div>
            
            <div style="display: flex; gap: 20px; margin-bottom: 25px;">
              <div style="width: 50px; height: 50px; background: var(--bg-light); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.3rem;">✉️</div>
              <div>
                <h4 style="margin-bottom: 5px;">Email</h4>
                <p style="color: var(--text-light);">info@visioncare.com</p>
              </div>
            </div>
            
            <div style="display: flex; gap: 20px;">
              <div style="width: 50px; height: 50px; background: var(--bg-light); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.3rem;">🕐</div>
              <div>
                <h4 style="margin-bottom: 5px;">Hours</h4>
                <p style="color: var(--text-light);">
                  Mon-Fri: 8:00 AM - 6:00 PM<br>
                  Saturday: 9:00 AM - 2:00 PM<br>
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          <div style="background: var(--bg-light); padding: 25px; border-radius: 16px;">
            <h4 style="margin-bottom: 15px;">Emergency?</h4>
            <p style="color: var(--text-light); margin-bottom: 15px;">For eye emergencies, call our 24/7 hotline:</p>
            <p style="font-size: 1.3rem; font-weight: 600; color: var(--primary);">(555) 123-4567</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-logo">👁 VisionCare</div>
          <p class="footer-text">Providing exceptional eye care services with compassion and cutting-edge technology since 1998.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul class="footer-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul class="footer-links">
            <li><a href="services.html">Cataract Surgery</a></li>
            <li><a href="services.html">LASIK</a></li>
            <li><a href="services.html">Retina Care</a></li>
            <li><a href="services.html">Glaucoma</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul class="footer-links">
            <li>123 Medical Center Dr</li>
            <li>Cityville, ST 12345</li>
            <li>(555) 123-4567</li>
            <li>info@visioncare.com</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 VisionCare Eye Clinic. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Commit**

```bash
git add contact.html
git commit -m "feat: create contact page with form and info"
```

---

## Task 9: Final Verification

**Files:**
- Modify: All files - verify links and consistency

- [ ] **Step 1: Verify all pages have correct navigation active states**
- [ ] **Step 2: Verify responsive breakpoints work**
- [ ] **Step 3: Test form validation in browser**

- [ ] **Final commit**

```bash
git add -A
git commit -m "feat: complete VisionCare eye clinic website"
```

---

## Summary

| Task | Description |
|------|-------------|
| 1 | Shared CSS (styles.css) - all components |
| 2 | JavaScript (main.js) - menu, form, scroll |
| 3 | Home page (index.html) |
| 4 | About page (about.html) |
| 5 | Services page (services.html) |
| 6 | Gallery page (gallery.html) |
| 7 | Testimonials page (testimonials.html) |
| 8 | Contact page (contact.html) |
| 9 | Final verification |
