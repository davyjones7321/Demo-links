# Dental Clinic Website Implementation Plan

> **For agentic workers:** Execute this plan directly in this session.

**Goal:** Create a 6-page professional static dental clinic website with responsive CSS.

**Architecture:** Single HTML files per page with shared CSS file. Google Fonts for typography. Placeholder images via placeholder.com.

**Tech Stack:** HTML5, CSS3 (no frameworks), Vanilla JS for mobile menu.

---

## File Structure

```
dental/
├── css/
│   └── style.css        (shared styles)
├── js/
│   └── main.js          (mobile menu toggle)
├── index.html           (Home)
├── about.html           (About)
├── services.html        (Services)
├── gallery.html         (Gallery)
├── testimonials.html    (Testimonials)
└── contact.html         (Contact)
```

---

### Task 1: Create directory structure and shared CSS

**Files:**
- Create: `dental/css/style.css`
- Create: `dental/js/main.js`

- [ ] **Step 1: Create directories**

Run: `mkdir -p dental/css dental/js`

- [ ] **Step 2: Write shared CSS variables and base styles**

```css
:root {
    --primary: #0d6efd;
    --primary-dark: #0a58ca;
    --accent: #17a2b8;
    --light-bg: #e3f2fd;
    --text-dark: #212529;
    --text-light: #6c757d;
    --white: #ffffff;
    --shadow: 0 4px 6px rgba(0,0,0,0.1);
    --transition: all 0.3s ease;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Open Sans', sans-serif;
    line-height: 1.6;
    color: var(--text-dark);
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
    margin-bottom: 1rem;
}

img {
    max-width: 100%;
    height: auto;
}

a {
    text-decoration: none;
    color: inherit;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.btn {
    display: inline-block;
    padding: 12px 30px;
    background: var(--primary);
    color: var(--white);
    border-radius: 5px;
    transition: var(--transition);
    border: none;
    cursor: pointer;
}

.btn:hover {
    background: var(--primary-dark);
}

/* Navbar */
.navbar {
    position: sticky;
    top: 0;
    background: var(--white);
    box-shadow: var(--shadow);
    z-index: 1000;
    padding: 1rem 0;
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primary);
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-links a {
    font-weight: 500;
    transition: var(--transition);
}

.nav-links a:hover,
.nav-links a.active {
    color: var(--primary);
}

.hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
}

.hamburger span {
    width: 25px;
    height: 3px;
    background: var(--text-dark);
    transition: var(--transition);
}

/* Hero Section */
.hero {
    position: relative;
    height: 100vh;
    min-height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: var(--white);
    background-size: cover;
    background-position: center;
}

.hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(13, 110, 253, 0.7);
}

.hero-content {
    position: relative;
    z-index: 1;
    padding: 20px;
}

.hero h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
}

.hero p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

/* Sections */
.section {
    padding: 80px 0;
}

.section-title {
    text-align: center;
    margin-bottom: 3rem;
}

.section-title h2 {
    font-size: 2.5rem;
    color: var(--primary);
}

.section-title p {
    color: var(--text-light);
    max-width: 600px;
    margin: 0 auto;
}

.bg-light {
    background: var(--light-bg);
}

/* Cards Grid */
.cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.card {
    background: var(--white);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: var(--transition);
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0,0,0,0.15);
}

.card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.card-content {
    padding: 1.5rem;
}

.card-content h3 {
    color: var(--primary);
    margin-bottom: 0.5rem;
}

/* Footer */
.footer {
    background: var(--text-dark);
    color: var(--white);
    padding: 60px 0 20px;
}

.footer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

.footer h4 {
    margin-bottom: 1.5rem;
}

.footer p, .footer a {
    color: rgba(255,255,255,0.7);
    margin-bottom: 0.5rem;
    display: block;
}

.footer a:hover {
    color: var(--white);
}

.footer-bottom {
    text-align: center;
    padding-top: 20px;
    border-top: 1px solid rgba(255,255,255,0.1);
    color: rgba(255,255,255,0.5);
}

/* Responsive */
@media (max-width: 768px) {
    .nav-links {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--white);
        padding: 1rem;
        box-shadow: var(--shadow);
    }

    .nav-links.active {
        display: flex;
    }

    .hamburger {
        display: flex;
    }

    .hero h1 {
        font-size: 2.5rem;
    }

    .section {
        padding: 50px 0;
    }
}
```

- [ ] **Step 3: Write JavaScript for mobile menu**

```javascript
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});
```

---

### Task 2: Create index.html (Home page)

**Files:**
- Create: `dental/index.html`

- [ ] **Step 1: Write Home page HTML**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bright Smile Dental Clinic</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <nav class="navbar">
        <div class="container">
            <a href="index.html" class="logo">Bright Smile</a>
            <ul class="nav-links">
                <li><a href="index.html" class="active">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="testimonials.html">Testimonials</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <header class="hero" style="background-image: url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80');">
        <div class="hero-content">
            <h1>Your Smile, Our Passion</h1>
            <p>Providing exceptional dental care with a gentle touch. Experience comfort and confidence with every visit.</p>
            <a href="contact.html" class="btn">Book Appointment</a>
        </div>
    </header>

    <section class="section">
        <div class="container">
            <div class="section-title">
                <h2>Our Services</h2>
                <p>Comprehensive dental care for your entire family</p>
            </div>
            <div class="cards-grid">
                <div class="card">
                    <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80" alt="Teeth Cleaning">
                    <div class="card-content">
                        <h3>Teeth Cleaning</h3>
                        <p>Professional cleaning to remove plaque and tartar, leaving your teeth sparkling clean and healthy.</p>
                    </div>
                </div>
                <div class="card">
                    <img src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80" alt="Braces">
                    <div class="card-content">
                        <h3>Braces</h3>
                        <p>Traditional and modern orthodontic treatments to straighten your teeth and improve your bite.</p>
                    </div>
                </div>
                <div class="card">
                    <img src="https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=800&q=80" alt="Whitening">
                    <div class="card-content">
                        <h3>Whitening</h3>
                        <p>Safe and effective teeth whitening treatments to brighten your smile by several shades.</p>
                    </div>
                </div>
            </div>
            <div style="text-align: center; margin-top: 2rem;">
                <a href="services.html" class="btn">View All Services</a>
            </div>
        </div>
    </section>

    <section class="section bg-light">
        <div class="container">
            <div class="section-title">
                <h2>About Our Clinic</h2>
                <p>Dedicated to excellence in dental care since 2005</p>
            </div>
            <div class="cards-grid">
                <div class="card">
                    <div class="card-content">
                        <h3>Experienced Team</h3>
                        <p>Our team of 5 certified dentists brings over 50 years of combined experience to serve your dental needs.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <h3>Modern Equipment</h3>
                        <p>We use the latest dental technology and techniques to ensure comfortable and effective treatments.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <h3>Patient First</h3>
                        <p>Your comfort and satisfaction are our top priorities. We take time to understand your needs.</p>
                    </div>
                </div>
            </div>
            <div style="text-align: center; margin-top: 2rem;">
                <a href="about.html" class="btn">Learn More About Us</a>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <div class="section-title">
                <h2>Book Your Appointment</h2>
                <p>Ready to take the first step toward a healthier smile?</p>
            </div>
            <div style="text-align: center;">
                <p style="margin-bottom: 1.5rem; font-size: 1.1rem;">Call us at <strong>(555) 123-4567</strong> or book online today.</p>
                <a href="contact.html" class="btn">Contact Us</a>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div>
                    <h4>Bright Smile Dental</h4>
                    <p>Providing quality dental care with a gentle touch. Your trusted partner for a healthy, beautiful smile.</p>
                </div>
                <div>
                    <h4>Quick Links</h4>
                    <a href="index.html">Home</a>
                    <a href="about.html">About Us</a>
                    <a href="services.html">Services</a>
                    <a href="gallery.html">Gallery</a>
                    <a href="testimonials.html">Testimonials</a>
                    <a href="contact.html">Contact</a>
                </div>
                <div>
                    <h4>Contact Info</h4>
                    <p>123 Dental Avenue</p>
                    <p>New York, NY 10001</p>
                    <p>Phone: (555) 123-4567</p>
                    <p>Email: info@brightsmile.com</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 Bright Smile Dental Clinic. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script src="js/main.js"></script>
</body>
</html>
```

---

### Task 3: Create about.html (About page)

**Files:**
- Create: `dental/about.html`

- [ ] **Step 1: Write About page HTML**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Us - Bright Smile Dental Clinic</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <nav class="navbar">
        <div class="container">
            <a href="index.html" class="logo">Bright Smile</a>
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html" class="active">About</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="testimonials.html">Testimonials</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <header class="hero" style="height: 50vh; min-height: 400px; background-image: url('https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1920&q=80');">
        <div class="hero-content">
            <h1>About Us</h1>
            <p>Meet our team and learn about our clinic</p>
        </div>
    </header>

    <section class="section">
        <div class="container">
            <div class="section-title">
                <h2>Our Story</h2>
                <p>Dedicated to excellence since 2005</p>
            </div>
            <div style="max-width: 800px; margin: 0 auto; text-align: center;">
                <p style="font-size: 1.1rem; margin-bottom: 1.5rem;">
                    Founded in 2005, Bright Smile Dental Clinic has been providing exceptional dental care to families in New York for nearly two decades. Our mission is simple: create a comfortable environment where patients feel confident about their dental health.
                </p>
                <p style="font-size: 1.1rem; margin-bottom: 1.5rem;">
                    We believe in preventive care and patient education. Our team takes the time to explain every procedure and answer all your questions, so you can make informed decisions about your dental care.
                </p>
                <p style="font-size: 1.1rem;">
                    Over the years, we've invested in the latest dental technology to ensure our patients receive the best possible care. From digital X-rays to laser dentistry, we stay at the forefront of dental innovations.
                </p>
            </div>
        </div>
    </section>

    <section class="section bg-light">
        <div class="container">
            <div class="section-title">
                <h2>Meet Our Team</h2>
                <p>Experienced professionals committed to your smile</p>
            </div>
            <div class="cards-grid">
                <div class="card" style="text-align: center;">
                    <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80" alt="Dr. Sarah Johnson">
                    <div class="card-content">
                        <h3>Dr. Sarah Johnson</h3>
                        <p style="color: var(--primary); font-weight: 600;">Lead Dentist</p>
                        <p>DDS, Columbia University. 15 years of experience in general and cosmetic dentistry.</p>
                    </div>
                </div>
                <div class="card" style="text-align: center;">
                    <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80" alt="Dr. Michael Chen">
                    <div class="card-content">
                        <h3>Dr. Michael Chen</h3>
                        <p style="color: var(--primary); font-weight: 600;">Orthodontist</p>
                        <p>DMD, NYU. Specialist in braces and aligners with 12 years of experience.</p>
                    </div>
                </div>
                <div class="card" style="text-align: center;">
                    <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&q=80" alt="Dr. Emily Davis">
                    <div class="card-content">
                        <h3>Dr. Emily Davis</h3>
                        <p style="color: var(--primary); font-weight: 600;">Pediatric Dentist</p>
                        <p>DDS, Harvard University. Gentle care for children of all ages.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <div class="section-title">
                <h2>Our Mission</h2>
            </div>
            <div style="max-width: 800px; margin: 0 auto; text-align: center;">
                <p style="font-size: 1.3rem; font-style: italic; color: var(--primary);">
                    "We are committed to providing exceptional dental care in a warm, welcoming environment. Our goal is to help every patient achieve and maintain a healthy, beautiful smile for life."
                </p>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div>
                    <h4>Bright Smile Dental</h4>
                    <p>Providing quality dental care with a gentle touch.</p>
                </div>
                <div>
                    <h4>Quick Links</h4>
                    <a href="index.html">Home</a>
                    <a href="about.html">About Us</a>
                    <a href="services.html">Services</a>
                    <a href="gallery.html">Gallery</a>
                    <a href="testimonials.html">Testimonials</a>
                    <a href="contact.html">Contact</a>
                </div>
                <div>
                    <h4>Contact Info</h4>
                    <p>123 Dental Avenue</p>
                    <p>New York, NY 10001</p>
                    <p>Phone: (555) 123-4567</p>
                    <p>Email: info@brightsmile.com</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 Bright Smile Dental Clinic. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script src="js/main.js"></script>
</body>
</html>
```

---

### Task 4: Create services.html (Services page)

**Files:**
- Create: `dental/services.html`

- [ ] **Step 1: Write Services page HTML**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Services - Bright Smile Dental Clinic</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <nav class="navbar">
        <div class="container">
            <a href="index.html" class="logo">Bright Smile</a>
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="services.html" class="active">Services</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="testimonials.html">Testimonials</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <header class="hero" style="height: 50vh; min-height: 400px; background-image: url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80');">
        <div class="hero-content">
            <h1>Our Services</h1>
            <p>Comprehensive dental care for all your needs</p>
        </div>
    </header>

    <section class="section">
        <div class="container">
            <div class="section-title">
                <h2>What We Offer</h2>
                <p>Full range of dental services to keep your smile healthy</p>
            </div>
            <div class="cards-grid">
                <div class="card">
                    <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80" alt="Teeth Cleaning">
                    <div class="card-content">
                        <h3>Teeth Cleaning</h3>
                        <p>Professional cleaning to remove plaque and tartar buildup. Includes examination, polishing, and fluoride treatment.</p>
                        <p style="margin-top: 1rem; color: var(--primary); font-weight: 600;">$75 - $150</p>
                    </div>
                </div>
                <div class="card">
                    <img src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80" alt="Braces">
                    <div class="card-content">
                        <h3>Braces</h3>
                        <p>Traditional metal braces, ceramic braces, and clear aligners. Custom treatment plans for teens and adults.</p>
                        <p style="margin-top: 1rem; color: var(--primary); font-weight: 600;">$3,000 - $8,000</p>
                    </div>
                </div>
                <div class="card">
                    <img src="https://images.unsplash.com/photo-1631209121750-a9f656d28bb9?w=800&q=80" alt="Root Canal">
                    <div class="card-content">
                        <h3>Root Canal</h3>
                        <p>Painless root canal treatment to save infected teeth. Using modern techniques for comfortable experience.</p>
                        <p style="margin-top: 1rem; color: var(--primary); font-weight: 600;">$700 - $1,400</p>
                    </div>
                </div>
                <div class="card">
                    <img src="https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=800&q=80" alt="Whitening">
                    <div class="card-content">
                        <h3>Teeth Whitening</h3>
                        <p>Professional in-office and at-home whitening options. Brighten your smile up to 8 shades lighter.</p>
                        <p style="margin-top: 1rem; color: var(--primary); font-weight: 600;">$200 - $600</p>
                    </div>
                </div>
                <div class="card">
                    <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80" alt="Implants">
                    <div class="card-content">
                        <h3>Dental Implants</h3>
                        <p>Permanent tooth replacement that looks and functions like natural teeth. Full implant services from consultation to restoration.</p>
                        <p style="margin-top: 1rem; color: var(--primary); font-weight: 600;">$1,500 - $6,000 per implant</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section bg-light">
        <div class="container">
            <div class="section-title">
                <h2>Why Choose Us?</h2>
            </div>
            <div class="cards-grid">
                <div class="card">
                    <div class="card-content" style="text-align: center;">
                        <h3>Experienced Team</h3>
                        <p>15+ years of combined experience across our dental team.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content" style="text-align: center;">
                        <h3>Modern Technology</h3>
                        <p>Latest dental equipment and techniques for optimal results.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content" style="text-align: center;">
                        <h3>Comfortable Environment</h3>
                        <p>Relaxed atmosphere designed to ease dental anxiety.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <div class="section-title">
                <h2>Book Your Appointment</h2>
                <p>Ready to get started? Contact us today!</p>
            </div>
            <div style="text-align: center;">
                <a href="contact.html" class="btn">Schedule Now</a>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div>
                    <h4>Bright Smile Dental</h4>
                    <p>Providing quality dental care with a gentle touch.</p>
                </div>
                <div>
                    <h4>Quick Links</h4>
                    <a href="index.html">Home</a>
                    <a href="about.html">About Us</a>
                    <a href="services.html">Services</a>
                    <a href="gallery.html">Gallery</a>
                    <a href="testimonials.html">Testimonials</a>
                    <a href="contact.html">Contact</a>
                </div>
                <div>
                    <h4>Contact Info</h4>
                    <p>123 Dental Avenue</p>
                    <p>New York, NY 10001</p>
                    <p>Phone: (555) 123-4567</p>
                    <p>Email: info@brightsmile.com</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 Bright Smile Dental Clinic. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script src="js/main.js"></script>
</body>
</html>
```

---

### Task 5: Create gallery.html (Gallery page)

**Files:**
- Create: `dental/gallery.html`

- [ ] **Step 1: Write Gallery page HTML**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gallery - Bright Smile Dental Clinic</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <style>
        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
        }
        .gallery-item {
            position: relative;
            overflow: hidden;
            border-radius: 10px;
            height: 250px;
        }
        .gallery-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
        }
        .gallery-item:hover img {
            transform: scale(1.1);
        }
        .gallery-item::after {
            content: '';
            position: absolute;
            inset: 0;
            background: rgba(13, 110, 253, 0);
            transition: background 0.3s ease;
        }
        .gallery-item:hover::after {
            background: rgba(13, 110, 253, 0.3);
        }
    </style>
</head>
<body>
    <nav class="navbar">
        <div class="container">
            <a href="index.html" class="logo">Bright Smile</a>
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="gallery.html" class="active">Gallery</a></li>
                <li><a href="testimonials.html">Testimonials</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <header class="hero" style="height: 50vh; min-height: 400px; background-image: url('https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1920&q=80');">
        <div class="hero-content">
            <h1>Gallery</h1>
            <p>Take a look inside our clinic</p>
        </div>
    </header>

    <section class="section">
        <div class="container">
            <div class="section-title">
                <h2>Our Clinic</h2>
                <p>Modern facilities designed for your comfort</p>
            </div>
            <div class="gallery-grid">
                <div class="gallery-item">
                    <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80" alt="Clinic Reception">
                </div>
                <div class="gallery-item">
                    <img src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&q=80" alt="Treatment Room">
                </div>
                <div class="gallery-item">
                    <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80" alt="Dental Equipment">
                </div>
                <div class="gallery-item">
                    <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80" alt="Modern Technology">
                </div>
                <div class="gallery-item">
                    <img src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80" alt="Orthodontic Treatment">
                </div>
                <div class="gallery-item">
                    <img src="https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=800&q=80" alt="Smile Makeover">
                </div>
                <div class="gallery-item">
                    <img src="https://images.unsplash.com/photo-1631209121750-a9f656d28bb9?w=800&q=80" alt="Patient Care">
                </div>
                <div class="gallery-item">
                    <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80" alt="Our Team">
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div>
                    <h4>Bright Smile Dental</h4>
                    <p>Providing quality dental care with a gentle touch.</p>
                </div>
                <div>
                    <h4>Quick Links</h4>
                    <a href="index.html">Home</a>
                    <a href="about.html">About Us</a>
                    <a href="services.html">Services</a>
                    <a href="gallery.html">Gallery</a>
                    <a href="testimonials.html">Testimonials</a>
                    <a href="contact.html">Contact</a>
                </div>
                <div>
                    <h4>Contact Info</h4>
                    <p>123 Dental Avenue</p>
                    <p>New York, NY 10001</p>
                    <p>Phone: (555) 123-4567</p>
                    <p>Email: info@brightsmile.com</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 Bright Smile Dental Clinic. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script src="js/main.js"></script>
</body>
</html>
```

---

### Task 6: Create testimonials.html (Testimonials page)

**Files:**
- Create: `dental/testimonials.html`

- [ ] **Step 1: Write Testimonials page HTML**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Testimonials - Bright Smile Dental Clinic</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <style>
        .testimonial-card {
            background: var(--white);
            padding: 2rem;
            border-radius: 10px;
            box-shadow: var(--shadow);
            text-align: center;
        }
        .stars {
            color: #ffc107;
            font-size: 1.25rem;
            margin-bottom: 1rem;
        }
        .testimonial-text {
            font-style: italic;
            color: var(--text-light);
            margin-bottom: 1.5rem;
            font-size: 1.05rem;
        }
        .testimonial-author {
            font-weight: 600;
            color: var(--primary);
        }
        .testimonial-date {
            font-size: 0.875rem;
            color: var(--text-light);
        }
    </style>
</head>
<body>
    <nav class="navbar">
        <div class="container">
            <a href="index.html" class="logo">Bright Smile</a>
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="testimonials.html" class="active">Testimonials</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <header class="hero" style="height: 50vh; min-height: 400px; background-image: url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80');">
        <div class="hero-content">
            <h1>Testimonials</h1>
            <p>What our patients say about us</p>
        </div>
    </header>

    <section class="section">
        <div class="container">
            <div class="section-title">
                <h2>Patient Reviews</h2>
                <p>Real stories from our satisfied patients</p>
            </div>
            <div class="cards-grid">
                <div class="testimonial-card">
                    <div class="stars">★★★★★</div>
                    <p class="testimonial-text">"Dr. Johnson is absolutely amazing! I used to be terrified of the dentist, but she made me feel so comfortable. My smile has never looked better!"</p>
                    <p class="testimonial-author">Jennifer M.</p>
                    <p class="testimonial-date">March 2026</p>
                </div>
                <div class="testimonial-card">
                    <div class="stars">★★★★★</div>
                    <p class="testimonial-text">"The entire staff is friendly and professional. They worked with my insurance company to maximize my benefits. Highly recommend for braces!"</p>
                    <p class="testimonial-author">Michael R.</p>
                    <p class="testimonial-date">February 2026</p>
                </div>
                <div class="testimonial-card">
                    <div class="stars">★★★★★</div>
                    <p class="testimonial-text">"My kids actually look forward to their dental visits now! Dr. Davis is patient and gentle with children. Best pediatric dentist ever."</p>
                    <p class="testimonial-author">Amanda S.</p>
                    <p class="testimonial-date">January 2026</p>
                </div>
                <div class="testimonial-card">
                    <div class="stars">★★★★★</div>
                    <p class="testimonial-text">"Had my root canal done here and it was completely painless! The technology they use is top-notch. Very impressed with the results."</p>
                    <p class="testimonial-author">David L.</p>
                    <p class="testimonial-date">December 2025</p>
                </div>
                <div class="testimonial-card">
                    <div class="stars">★★★★★</div>
                    <p class="testimonial-text">"The teeth whitening results exceeded my expectations. My teeth are now 6 shades lighter and I can't stop smiling!"</p>
                    <p class="testimonial-author">Rachel K.</p>
                    <p class="testimonial-date">November 2025</p>
                </div>
                <div class="testimonial-card">
                    <div class="stars">★★★★★</div>
                    <p class="testimonial-text">"Dr. Chen did an excellent job with my dental implants. The procedure was smooth and the results look completely natural. Worth every penny!"</p>
                    <p class="testimonial-author">Robert T.</p>
                    <p class="testimonial-date">October 2025</p>
                </div>
            </div>
        </div>
    </section>

    <section class="section bg-light">
        <div class="container">
            <div class="section-title">
                <h2>Ready to Join Our Family?</h2>
                <p>Schedule your first appointment today</p>
            </div>
            <div style="text-align: center;">
                <a href="contact.html" class="btn">Book Appointment</a>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div>
                    <h4>Bright Smile Dental</h4>
                    <p>Providing quality dental care with a gentle touch.</p>
                </div>
                <div>
                    <h4>Quick Links</h4>
                    <a href="index.html">Home</a>
                    <a href="about.html">About Us</a>
                    <a href="services.html">Services</a>
                    <a href="gallery.html">Gallery</a>
                    <a href="testimonials.html">Testimonials</a>
                    <a href="contact.html">Contact</a>
                </div>
                <div>
                    <h4>Contact Info</h4>
                    <p>123 Dental Avenue</p>
                    <p>New York, NY 10001</p>
                    <p>Phone: (555) 123-4567</p>
                    <p>Email: info@brightsmile.com</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 Bright Smile Dental Clinic. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script src="js/main.js"></script>
</body>
</html>
```

---

### Task 7: Create contact.html (Contact page)

**Files:**
- Create: `dental/contact.html`

- [ ] **Step 1: Write Contact page HTML**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact - Bright Smile Dental Clinic</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <style>
        .contact-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
        }
        @media (max-width: 768px) {
            .contact-grid {
                grid-template-columns: 1fr;
            }
        }
        .contact-info-item {
            display: flex;
            align-items: flex-start;
            gap: 1rem;
            margin-bottom: 1.5rem;
        }
        .contact-info-item h4 {
            margin-bottom: 0.25rem;
        }
        .contact-info-item p {
            color: var(--text-light);
        }
        .form-group {
            margin-bottom: 1.5rem;
        }
        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 600;
        }
        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 12px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-family: inherit;
            font-size: 1rem;
        }
        .form-group textarea {
            resize: vertical;
            min-height: 120px;
        }
        .form-group input:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: var(--primary);
        }
        .map-container {
            margin-top: 2rem;
            border-radius: 10px;
            overflow: hidden;
            height: 300px;
        }
        .map-container iframe {
            width: 100%;
            height: 100%;
            border: 0;
        }
    </style>
</head>
<body>
    <nav class="navbar">
        <div class="container">
            <a href="index.html" class="logo">Bright Smile</a>
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="testimonials.html">Testimonials</a></li>
                <li><a href="contact.html" class="active">Contact</a></li>
            </ul>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <header class="hero" style="height: 50vh; min-height: 400px; background-image: url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80');">
        <div class="hero-content">
            <h1>Contact Us</h1>
            <p>We'd love to hear from you</p>
        </div>
    </header>

    <section class="section">
        <div class="container">
            <div class="section-title">
                <h2>Get In Touch</h2>
                <p>Have questions? We're here to help</p>
            </div>
            <div class="contact-grid">
                <div>
                    <h3 style="margin-bottom: 1.5rem;">Send us a message</h3>
                    <form id="contactForm">
                        <div class="form-group">
                            <label for="name">Full Name</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email Address</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone Number</label>
                            <input type="tel" id="phone" name="phone">
                        </div>
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea id="message" name="message" required></textarea>
                        </div>
                        <button type="submit" class="btn">Send Message</button>
                    </form>
                </div>
                <div>
                    <h3 style="margin-bottom: 1.5rem;">Contact Information</h3>
                    <div class="contact-info-item">
                        <div>
                            <h4>Address</h4>
                            <p>123 Dental Avenue<br>New York, NY 10001</p>
                        </div>
                    </div>
                    <div class="contact-info-item">
                        <div>
                            <h4>Phone</h4>
                            <p>(555) 123-4567</p>
                        </div>
                    </div>
                    <div class="contact-info-item">
                        <div>
                            <h4>Email</h4>
                            <p>info@brightsmile.com</p>
                        </div>
                    </div>
                    <div class="contact-info-item">
                        <div>
                            <h4>Hours</h4>
                            <p>Monday - Friday: 8:00 AM - 6:00 PM<br>Saturday: 9:00 AM - 2:00 PM<br>Sunday: Closed</p>
                        </div>
                    </div>
                    <div class="map-container">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095919355!2d-74.00425878459418!3d40.74076794379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1614268783520!5m2!1sen!2sus" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div>
                    <h4>Bright Smile Dental</h4>
                    <p>Providing quality dental care with a gentle touch.</p>
                </div>
                <div>
                    <h4>Quick Links</h4>
                    <a href="index.html">Home</a>
                    <a href="about.html">About Us</a>
                    <a href="services.html">Services</a>
                    <a href="gallery.html">Gallery</a>
                    <a href="testimonials.html">Testimonials</a>
                    <a href="contact.html">Contact</a>
                </div>
                <div>
                    <h4>Contact Info</h4>
                    <p>123 Dental Avenue</p>
                    <p>New York, NY 10001</p>
                    <p>Phone: (555) 123-4567</p>
                    <p>Email: info@brightsmile.com</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 Bright Smile Dental Clinic. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script src="js/main.js"></script>
    <script>
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    </script>
</body>
</html>
```

---

### Task 8: Verify implementation

- [ ] **Step 1: List all created files**

Run: `ls -la dental/ dental/css/ dental/js/`

Expected output should show:
- `dental/index.html`
- `dental/about.html`
- `dental/services.html`
- `dental/gallery.html`
- `dental/testimonials.html`
- `dental/contact.html`
- `dental/css/style.css`
- `dental/js/main.js`

- [ ] **Step 2: Open index.html in browser**

Open: `dental/index.html`

Verify:
- Hero section with full-screen background image
- Services preview with 3 cards
- Navigation links work
- Mobile hamburger menu appears on small screens
- Footer with 3 columns
