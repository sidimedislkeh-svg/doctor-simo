/**
 * ============================================================
 *  main.js — Doctor Profile Template
 *  All DOM rendering & interaction logic.
 *  Data lives exclusively in data.js.
 * ============================================================
 */

/* ── State ──────────────────────────────────────────────── */
let currentLang = 'ar';   // default language
let leafletMap  = null;   // Leaflet map instance

/* ── Helpers ─────────────────────────────────────────────── */
const $ = (id) => document.getElementById(id);
const D = DOCTOR_DATA;

/** Build WhatsApp deep-link */
function waLink(number, message) {
  const clean = number.replace(/\D/g, '');
  return `https://wa.me/${clean}?text=${encodeURIComponent(message)}`;
}

/** Get translation object for current language */
function t() { return D.i18n[currentLang]; }

/** Find clinic object by id */
function clinicById(id) { return D.clinics.find(c => c.id === id); }

/* ── Language toggle ─────────────────────────────────────── */
function setLanguage(lang) {
  currentLang = lang;
  const tr = t();

  // Update html attributes
  document.documentElement.setAttribute('lang', tr.lang);
  document.documentElement.setAttribute('dir',  tr.dir);
  document.body.style.fontFamily = tr.font;

  renderAll();
  initMap();          // re-render map popups in new language
}

const langBtn = $('lang-toggle');
const langMenu = $('language-menu');

langBtn.addEventListener('click', () => {
  langMenu.classList.toggle('show');
});

document.querySelectorAll('[data-lang]').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    setLanguage(lang);
    langMenu.classList.remove('show');
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.language-selector')) {
    langMenu.classList.remove('show');
  }
});

/* ── Navbar ──────────────────────────────────────────────── */
function renderNavbar() {
  const tr = t();
  $('nav-brand').textContent    = D.name;
  $('nav-about').textContent    = tr.nav_about;
  $('nav-services').textContent = tr.nav_services;
  $('nav-clinics').textContent  = tr.nav_clinics;
  $('mnav-about').textContent    = tr.nav_about;
  $('mnav-services').textContent = tr.nav_services;
  $('mnav-clinics').textContent  = tr.nav_clinics;
  if ($('current-lang-label')) {
  $('current-lang-label').textContent = currentLang.toUpperCase();
}
}

// Navbar scroll shadow
window.addEventListener('scroll', () => {
  $('navbar').classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

// Hamburger
$('hamburger').addEventListener('click', function () {
  const open = !this.classList.contains('open');
  this.classList.toggle('open', open);
  this.setAttribute('aria-expanded', open);
  $('mobile-nav').classList.toggle('open', open);
  $('mobile-nav').setAttribute('aria-hidden', !open);
});

function closeMobileNav() {
  $('hamburger').classList.remove('open');
  $('hamburger').setAttribute('aria-expanded', false);
  $('mobile-nav').classList.remove('open');
  $('mobile-nav').setAttribute('aria-hidden', true);
}

/* ── Hero ────────────────────────────────────────────────── */
function renderHero() {
  const tr = t();
  const photo = $('hero-photo');
  photo.src = D.photo;
  photo.alt = D.name;

  $('hero-specialty').textContent        = tr.specialty;
  $('hero-name').textContent             = D.name;
  $('hero-tagline').textContent          = tr.tagline;
  $('hero-btn-call-label').textContent   = tr.btn_call;
  $('hero-btn-wa-label').textContent     = tr.btn_whatsapp;

  $('hero-btn-call').href = `tel:${D.phone}`;
  $('hero-btn-wa').href   = waLink(D.whatsapp, tr.whatsapp_msg);
}

/* ── About ───────────────────────────────────────────────── */
function renderAbout() {
  const tr = t();
  $('about-title').textContent = tr.section_about_title;
  $('about-text').textContent  = tr.about_text;
}

/* ── Services ─────────────────────────────────────────────── */
function renderServices() {
  const tr  = t();
  const grid = $('services-grid');
  $('services-title').textContent = tr.section_services_title;

  grid.innerHTML = tr.services.map(s => `
    <div class="service-card fade-up">
      <div class="service-card__icon" aria-hidden="true">${s.icon}</div>
      <h3 class="service-card__title">${s.title}</h3>
    </div>
  `).join('');
}

/* ── Qualifications ──────────────────────────────────────── */
function renderQualifications() {
  const tr   = t();
  const grid = $('quals-grid');
  $('quals-title').textContent = tr.section_quals_title;

  grid.innerHTML = tr.qualifications.map(q => `
    <div class="qual-card fade-up">
      <div class="qual-card__icon" aria-hidden="true">${q.icon}</div>
      <p class="qual-card__title">${q.title}</p>
    </div>
  `).join('');
}

/* ── Today's Location ────────────────────────────────────── */
function renderToday() {
  const tr     = t();
  const card   = $('today-card');
  const textEl = $('today-text');
  $('today-title').textContent = tr.section_today_title;

  const dayIndex = new Date().getDay();   // 0=Sun, 1=Mon, …
  const entry    = D.schedule[dayIndex];

  card.classList.remove('today-card--rest');

  if (!entry) {
    card.classList.add('today-card--rest');
    textEl.innerHTML = tr.today_rest;
    return;
  }

  const clinic = clinicById(entry.clinicId);
  if (!clinic) {
    textEl.textContent = tr.today_absent;
    return;
  }

  const clinicName = clinic.name[currentLang];
  textEl.innerHTML  = `${tr.today_present} <strong>${clinicName}</strong>.`;
}

/* ── Clinics ─────────────────────────────────────────────── */
function renderClinics() {
  const tr   = t();
  const grid = $('clinics-grid');
  $('clinics-title').textContent = tr.section_clinics_title;

  grid.innerHTML = D.clinics.map(clinic => {
    const name      = clinic.name[currentLang];
    const hasCoords = clinic.lat !== null && clinic.lng !== null;
    const mapsUrl   = hasCoords
      ? `https://www.google.com/maps/dir/?api=1&destination=${clinic.lat},${clinic.lng}`
      : '#';

    return `
      <div class="clinic-card fade-up">
        <div class="clinic-card__img-wrap">
          <img
            class="clinic-card__img"
            src="${clinic.image}"
            alt="${name}"
            loading="lazy"
          />
        </div>
        <div class="clinic-card__body">
          <h3 class="clinic-card__name">${name}</h3>
          <div class="clinic-card__meta">
            <div class="clinic-card__row">
              <span class="clinic-card__row-label">${tr.days_label}:</span>
              <span>${clinic.workDays[currentLang]}</span>
            </div>
            <div class="clinic-card__row">
              <span class="clinic-card__row-label">${tr.hours_label}:</span>
              <span>${clinic.workHours}</span>
            </div>
          </div>
          <div class="clinic-card__actions">
            <a class="btn btn--primary btn--sm" href="tel:${clinic.clinicPhone}">
              📞 ${tr.btn_call_label}
            </a>
            <a class="btn btn--whatsapp btn--sm" href="${waLink(clinic.clinicWhatsapp, tr.whatsapp_msg)}">
              💬 ${tr.btn_whatsapp_label}
            </a>
            ${hasCoords
              ? `<a class="btn btn--outline btn--sm" href="${mapsUrl}" target="_blank" rel="noopener">
                   📍 ${tr.btn_map_label}
                 </a>`
              : `<span class="btn btn--outline btn--sm" style="opacity:.45;cursor:default;" aria-disabled="true">
                   📍 ${tr.no_location}
                 </span>`
            }
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/* ── Map ─────────────────────────────────────────────────── */
function initMap() {
  const tr = t();

  // Destroy existing map instance if any
  if (leafletMap) {
    leafletMap.remove();
    leafletMap = null;
  }

  // Filter only clinics with valid coordinates
  const mappable = D.clinics.filter(c => c.lat !== null && c.lng !== null);
  if (!mappable.length) return;

  // Center on the average of mapped clinics
  const avgLat = mappable.reduce((s, c) => s + c.lat, 0) / mappable.length;
  const avgLng = mappable.reduce((s, c) => s + c.lng, 0) / mappable.length;

  leafletMap = L.map('map', {
    center: [avgLat, avgLng],
    zoom: 13,
    scrollWheelZoom: false,
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 19,
  }).addTo(leafletMap);

  // Custom blue marker
  const markerIcon = L.divIcon({
    className: '',
    html: `<div style="
      width:36px;height:36px;border-radius:50% 50% 50% 0;
      background:#1E5AA8;border:3px solid #fff;
      box-shadow:0 2px 8px rgba(0,0,0,.35);
      transform:rotate(-45deg);
    "></div>`,
    iconSize:   [36, 36],
    iconAnchor: [18, 36],
    popupAnchor:[0, -36],
  });

  mappable.forEach(clinic => {
    const clinicName = clinic.name[currentLang];
    const mapsUrl    = `https://www.google.com/maps/dir/?api=1&destination=${clinic.lat},${clinic.lng}`;

    const popup = `
      <div class="popup-name">${clinicName}</div>
      <a class="popup-link" href="${mapsUrl}" target="_blank" rel="noopener">
        🗺️ ${tr.map_directions}
      </a>
    `;

    L.marker([clinic.lat, clinic.lng], { icon: markerIcon })
      .addTo(leafletMap)
      .bindPopup(popup);
  });

  $('map-title').textContent = tr.section_map_title;
}

/* ── Booking ─────────────────────────────────────────────── */
function renderBooking() {
  const tr = t();
  $('book-title').textContent    = tr.section_book_title;
  $('book-subtitle').textContent = tr.book_subtitle;
  $('book-wa-label').textContent = tr.btn_book_whatsapp;
  $('book-wa-btn').href          = waLink(D.whatsapp, tr.whatsapp_msg);
}

/* ── Footer ──────────────────────────────────────────────── */
function renderFooter() {
  const tr = t();

  $('footer-name').textContent      = D.name;
  $('footer-specialty').textContent = tr.specialty;
  $('footer-phone-text').textContent = `${tr.footer_phone}: ${D.phone}`;
  $('footer-phone-link').href        = `tel:${D.phone}`;
  $('footer-wa-text').textContent    = `${tr.footer_whatsapp}: ${D.whatsapp}`;
  $('footer-wa-link').href           = waLink(D.whatsapp, tr.whatsapp_msg);
  $('footer-address').textContent    = tr.footer_address;
  $('footer-year').textContent       = new Date().getFullYear();
  $('footer-copy-name').textContent  = D.name;
  $('footer-rights').textContent     = tr.footer_rights;
}

/* ── Scroll reveal ───────────────────────────────────────── */
function observeFadeUp() {
  if (!('IntersectionObserver' in window)) {
    // Fallback: show all
    document.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(el => io.observe(el));
}

/* ── Master render ───────────────────────────────────────── */
function renderAll() {
  renderNavbar();
  renderHero();
  renderAbout();
  renderServices();
  renderQualifications();
  renderToday();
  renderClinics();
  if ($('book-title')) renderBooking();
  renderFooter();

  // Re-attach scroll animations after DOM update
  requestAnimationFrame(observeFadeUp);
}

/* ── Boot ────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  setLanguage('ar');   // initial language
});
