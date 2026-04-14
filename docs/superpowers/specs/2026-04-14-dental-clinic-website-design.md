# Dental Clinic Website Design Spec

**Date:** 2026-04-14

## Overview
Professional static dental clinic website with 6 pages: Home, About, Services, Gallery, Testimonials, Contact. Clean corporate style with blue/teal color scheme.

## Color Palette
- Primary: `#0d6efd` (blue)
- Primary Dark: `#0a58ca`
- Light Background: `#e3f2fd`
- Text Dark: `#212529`
- Text Light: `#6c757d`
- White: `#ffffff`
- Accent: `#17a2b8` (teal)

## Typography
- Headings: `Playfair Display`, serif
- Body: `Open Sans`, sans-serif

## Pages

### 1. index.html (Home)
- Navbar (shared)
- Hero section: full-screen background image with overlay, clinic name, tagline, CTA button
- Services preview: 3 cards (Cleaning, Braces, Whitening)
- About snippet: brief intro + image
- Footer (shared)

### 2. about.html
- Navbar (shared)
- About section with clinic history
- Team section: 3 dentist cards with photo, name, specialty
- Mission statement
- Footer (shared)

### 3. services.html
- Navbar (shared)
- Services grid: 5 service cards
  - Teeth Cleaning
  - Braces
  - Root Canal
  - Whitening
  - Implants
- Each card: icon, title, description, price range
- Footer (shared)

### 4. gallery.html
- Navbar (shared)
- Photo grid (6-8 images): clinic exterior, interior, equipment, team
- Hover effects with overlay
- Footer (shared)

### 5. testimonials.html
- Navbar (shared)
- 6 patient testimonial cards
- Each: quote, patient name, star rating, date
- Footer (shared)

### 6. contact.html
- Navbar (shared)
- Contact form: name, email, phone, message, submit
- Google Maps embed placeholder
- Contact info: address, phone, email, hours
- Footer (shared)

## Shared Components

### Navbar
- Logo/Clinic name (left)
- Navigation links: Home, About, Services, Gallery, Testimonials, Contact (right)
- Sticky on scroll
- Mobile: hamburger menu with slide-down nav

### Footer
- 3 columns:
  - About: clinic description
  - Quick Links: navigation
  - Contact: address, phone, email
- Copyright line at bottom

## Responsive Breakpoints
- Mobile: < 768px (stacked layout, hamburger nav)
- Tablet: 768px - 1023px (2-column grids)
- Desktop: 1024px+ (full layout)

## Interactions
- Smooth scroll behavior
- Hover effects on buttons and cards
- Form validation (required fields)
- Mobile menu toggle

## Assets
- Placeholder images: `https://via.placeholder.com/1920x1080` for hero, `800x600` for gallery
- Icons: Font Awesome or CSS-based icons
- Fonts: Google Fonts (Playfair Display, Open Sans)
