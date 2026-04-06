/* ══════════════════════════════════════════════════════
   💕 SITE ROMÂNTICO — script.js
   ══════════════════════════════════════════════════════ */

'use strict';

// ─────────────────────────────────────────────────────
// 📸 FOTOS
// ─────────────────────────────────────────────────────
const PHOTOS = [
  "./carmem/foto_01.jpg",
  "./carmem/foto_02.jpg",
  "./carmem/foto_03.jpg",
  "./carmem/foto_04.jpg",
  "./carmem/foto_05.jpg",
  "./carmem/foto_06.jpg",
  "./carmem/foto_07.jpg",
  "./carmem/foto_08.jpg",
  "./carmem/foto_09.jpg",
  "./carmem/foto_10.jpg",
  "./carmem/foto_11.jpg",
  "./carmem/foto_12.jpg",
  "./carmem/foto_13.jpg",
  "./carmem/foto_14.jpg",
  "./carmem/foto_15.jpg",
  "./carmem/foto_16.jpg",
  "./carmem/foto_17.jpg",
  "./carmem/foto_18.jpg",
  "./carmem/foto_19.jpg",
  "./carmem/foto_20.jpg",
  "./carmem/foto_21.jpg",
  "./carmem/foto_22.jpg",
  "./carmem/foto_23.jpg",
  "./carmem/foto_24.jpg",
  "./carmem/foto_25.jpg",
  "./carmem/foto_26.jpg",
  "./carmem/foto_27.jpg",
  "./carmem/foto_28.jpg",
  "./carmem/foto_29.jpg",
  "./carmem/foto_30.jpg",
  "./carmem/foto_31.jpg",
  "./carmem/foto_32.jpg",
  "./carmem/foto_33.jpg",
  "./carmem/foto_34.jpg",
  "./carmem/foto_35.jpg",
  "./carmem/foto_36.jpg",
  "./carmem/foto_37.jpg",
  "./carmem/foto_38.jpg",
  "./carmem/foto_39.jpg",
  "./carmem/foto_40.jpg",
  "./carmem/foto_41.jpg",
  "./carmem/foto_42.jpg",
  "./carmem/foto_43.jpg",
  "./carmem/foto_44.jpg",
  "./carmem/foto_45.jpg",
  "./carmem/foto_46.jpg",
  "./carmem/foto_47.jpg",
  "./carmem/foto_48.jpg",
  "./carmem/foto_49.jpg",
  "./carmem/foto_50.jpg",
  "./carmem/foto_51.jpg",
  "./carmem/foto_52.jpg",
  "./carmem/foto_53.jpg",
  "./carmem/foto_54.jpg",
  "./carmem/foto_55.jpg",
  "./carmem/foto_56.jpg",
  "./carmem/foto_57.jpg",
  "./carmem/foto_58.jpg",
  "./carmem/foto_59.jpg",
  "./carmem/foto_60.jpg",
  "./carmem/foto_61.jpg",
  "./carmem/foto_62.jpg",
  "./carmem/foto_63.jpg",
  "./carmem/foto_64.jpg",
  "./carmem/foto_65.jpg",
  "./carmem/foto_66.jpg",
  "./carmem/foto_67.jpg",
  "./carmem/foto_68.jpg",
  "./carmem/foto_69.jpg",
  "./carmem/foto_70.jpg",
  "./carmem/foto_71.jpg",
  "./carmem/foto_72.jpg",
  "./carmem/foto_73.jpg",
  "./carmem/foto_74.jpg",
  "./carmem/foto_75.jpg",
  "./carmem/foto_76.jpg",
  "./carmem/foto_77.jpg",
  "./carmem/foto_78.jpg",
  "./carmem/foto_79.jpg",
  "./carmem/foto_80.jpg",
  "./carmem/foto_81.jpg",
  "./carmem/foto_82.jpg",
  "./carmem/foto_83.jpg",
  "./carmem/foto_84.jpg",
  "./carmem/foto_85.jpg",
];

// ─────────────────────────────────────────────────────
// 🔐 CREDENCIAIS
// ─────────────────────────────────────────────────────
const VALID_USER = 'amor';
const VALID_PASS = '16042009';

// ─────────────────────────────────────────────────────
// 📅 DATA DE INÍCIO DO RELACIONAMENTO
// ─────────────────────────────────────────────────────
const START_DATE = new Date('2025-11-18T00:00:00');

// ══════════════════════════════════════════════════════
// 1. DICAS DE SENHA
// ══════════════════════════════════════════════════════
const HINTS = [
  "💭 Dica: é uma data muito especial para mim...",
  "🌸 Dica: tem a ver com o dia em que você nasceu...",
  "🎂 Dica: é o seu aniversário! Dia, mês e ano...",
  "📅 Dica: pense no formato DDMMAAAA...",
  "✨ Dica: 16 de abril de 2009... lembra?",
  "💕 Dica: tente 16042009 — o dia mais especial da minha vida!",
  "🔓 A senha é: 16042009 — o dia em que você nasceu, meu amor ❤️",
];

// ══════════════════════════════════════════════════════
// 2. DOM REFERENCES
// ══════════════════════════════════════════════════════
const $ = id => document.getElementById(id);

const secLogin       = $('section-login');
const secMessage     = $('section-message');
const secGallery     = $('section-gallery');
const secDeclaration = $('section-declaration');
const secCounter     = $('section-counter');

// ══════════════════════════════════════════════════════
// 3. FLOATING HEARTS & PETALS
// ══════════════════════════════════════════════════════
const HEART_SYMBOLS = ['♥', '❤', '💕', '💗', '💖', '💝', '🌸'];

function spawnHeart() {
  const container = $('hearts-container');
  if (!container) return;
  const el = document.createElement('div');
  el.className = 'floating-heart';
  el.textContent = HEART_SYMBOLS[Math.floor(Math.random() * HEART_SYMBOLS.length)];
  el.style.left = Math.random() * 100 + 'vw';
  const dur = 6 + Math.random() * 8;
  el.style.animationDuration = dur + 's';
  el.style.animationDelay = Math.random() * 3 + 's';
  el.style.fontSize = (0.8 + Math.random() * 1.4) + 'rem';
  el.style.opacity = '0';
  container.appendChild(el);
  setTimeout(() => el.remove(), (dur + 4) * 1000);
}

function spawnPetal() {
  const container = $('petals-container');
  if (!container) return;
  const el = document.createElement('div');
  el.className = 'petal';
  el.style.left = Math.random() * 100 + 'vw';
  const dur = 8 + Math.random() * 10;
  el.style.animationDuration = dur + 's';
  el.style.animationDelay = Math.random() * 4 + 's';
  const hue = 330 + Math.random() * 40;
  el.style.background = `radial-gradient(ellipse, hsl(${hue},80%,80%), hsl(${hue},60%,60%))`;
  container.appendChild(el);
  setTimeout(() => el.remove(), (dur + 5) * 1000);
}

setInterval(spawnHeart, 800);
setInterval(spawnPetal, 1200);
for (let i = 0; i < 5; i++) setTimeout(spawnHeart, i * 200);
for (let i = 0; i < 4; i++) setTimeout(spawnPetal, i * 300);

// ══════════════════════════════════════════════════════
// 4. SECTION TRANSITIONS
// ══════════════════════════════════════════════════════
function goTo(fromSection, toSection) {
  fromSection.classList.add('fade-out');
  setTimeout(() => {
    fromSection.classList.remove('active', 'fade-out');
    toSection.classList.add('active');
    window.scrollTo(0, 0);
  }, 1200);
}

// ══════════════════════════════════════════════════════
// 5. LOGIN
// ══════════════════════════════════════════════════════
let loginAttempts = 0;

$('btn-login').addEventListener('click', handleLogin);
$('password').addEventListener('keydown', e => { if (e.key === 'Enter') handleLogin(); });
$('username').addEventListener('keydown', e => { if (e.key === 'Enter') $('password').focus(); });

function handleLogin() {
  const user = $('username').value.trim().toLowerCase();
  const pass = $('password').value.trim();

  if (user === VALID_USER && pass === VALID_PASS) {
    const card = document.querySelector('.login-card');
    card.style.transform = 'scale(1.05)';
    card.style.opacity = '0.8';
    setTimeout(() => goTo(secLogin, secMessage), 400);
  } else {
    loginAttempts++;
    const errorEl = $('error-msg');
    const hintBox = $('hint-box');
    const hintText = $('hint-text');

    errorEl.classList.remove('hidden');
    $('password').value = '';
    $('password').style.borderColor = 'rgba(232,87,122,0.8)';
    setTimeout(() => { $('password').style.borderColor = ''; }, 1000);

    const hintIdx = Math.min(loginAttempts - 1, HINTS.length - 1);
    if (loginAttempts >= 1) {
      hintText.textContent = HINTS[hintIdx];
      hintBox.classList.remove('hidden');
    }
  }
}

// ══════════════════════════════════════════════════════
// 6. MENSAGEM → GALERIA
// ══════════════════════════════════════════════════════
$('btn-enter-gallery').addEventListener('click', () => {
  goTo(secMessage, secGallery);
  setTimeout(() => {
    initSlideshow();
    initAudio();
  }, 1300);
});

// ══════════════════════════════════════════════════════
// 7. AUDIO PLAYER (MP3 local — sem propaganda)
// ══════════════════════════════════════════════════════
const audio = new Audio('./musica.mp3');
audio.loop = true;
audio.volume = 0.5;

function initAudio() {
  audio.play().catch(() => {
    document.addEventListener('click', () => audio.play(), { once: true });
  });
  $('play-icon').textContent = '⏸';
}

$('btn-play-pause').addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    $('play-icon').textContent = '⏸';
  } else {
    audio.pause();
    $('play-icon').textContent = '▶';
  }
});

$('volume-slider').addEventListener('input', e => {
  audio.volume = parseFloat(e.target.value);
});

// ══════════════════════════════════════════════════════
// 8. SLIDESHOW
// ══════════════════════════════════════════════════════
let currentSlide  = 0;
let autoplayTimer = null;
let isAutoplay    = true;
const AUTOPLAY_INTERVAL = 5000;

function initSlideshow() {
  const container = $('slideshow');
  if (container.children.length > 0) return;

  const photos = PHOTOS.length > 0 ? PHOTOS : [];
  $('total-photos').textContent = photos.length;

  photos.forEach((src, i) => {
    const slide = document.createElement('div');
    slide.className = 'slide' + (i === 0 ? ' active' : '');
    slide.innerHTML = `
      <div class="slide-bg" style="background-image:url('${src}')"></div>
      <div class="slide-img-wrapper">
        <img class="slide-img" src="${src}" alt="Foto ${i+1}" loading="${i < 3 ? 'eager' : 'lazy'}" />
      </div>
    `;
    container.appendChild(slide);
  });

  updateSlide(0);
  if (isAutoplay) startAutoplay();
}

function updateSlide(idx) {
  const slides = document.querySelectorAll('.slide');
  if (slides.length === 0) return;

  slides[currentSlide]?.classList.remove('active');
  currentSlide = (idx + slides.length) % slides.length;
  slides[currentSlide]?.classList.add('active');

  $('current-photo').textContent = currentSlide + 1;

  const pct = ((currentSlide + 1) / slides.length) * 100;
  $('progress-bar').style.width = pct + '%';
}

function startAutoplay() {
  stopAutoplay();
  autoplayTimer = setInterval(() => {
    const slides = document.querySelectorAll('.slide');
    if (currentSlide === slides.length - 1) {
      stopAutoplay();
      setTimeout(() => goTo(secGallery, secDeclaration), 1500);
    } else {
      updateSlide(currentSlide + 1);
    }
  }, AUTOPLAY_INTERVAL);
}

function stopAutoplay() {
  if (autoplayTimer) { clearInterval(autoplayTimer); autoplayTimer = null; }
}

$('prev-btn').addEventListener('click', () => {
  updateSlide(currentSlide - 1);
  if (isAutoplay) startAutoplay();
});

$('next-btn').addEventListener('click', () => {
  updateSlide(currentSlide + 1);
  if (isAutoplay) startAutoplay();
});

$('btn-autoplay').addEventListener('click', () => {
  isAutoplay = !isAutoplay;
  const btn = $('btn-autoplay');
  if (isAutoplay) {
    startAutoplay();
    $('autoplay-icon').textContent = '⏸';
    btn.classList.add('active');
  } else {
    stopAutoplay();
    $('autoplay-icon').textContent = '▶';
    btn.classList.remove('active');
  }
});

document.addEventListener('keydown', e => {
  if (!secGallery.classList.contains('active')) return;
  if (e.key === 'ArrowRight' || e.key === ' ') {
    e.preventDefault();
    updateSlide(currentSlide + 1);
    if (isAutoplay) startAutoplay();
  }
  if (e.key === 'ArrowLeft') {
    updateSlide(currentSlide - 1);
    if (isAutoplay) startAutoplay();
  }
});

let touchStartX = 0;
document.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].clientX; }, { passive: true });
document.addEventListener('touchend', e => {
  if (!secGallery.classList.contains('active')) return;
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 50) {
    if (dx < 0) updateSlide(currentSlide + 1);
    else        updateSlide(currentSlide - 1);
    if (isAutoplay) startAutoplay();
  }
}, { passive: true });

// ══════════════════════════════════════════════════════
// 9. GALERIA → DECLARAÇÃO → CONTADOR
// ══════════════════════════════════════════════════════
$('btn-to-declaration').addEventListener('click', () => {
  goTo(secGallery, secDeclaration);
  stopAutoplay();
});

$('btn-to-counter').addEventListener('click', () => {
  goTo(secDeclaration, secCounter);
});

$('btn-to-gallery').addEventListener('click', () => {
  goTo(secCounter, secGallery);
  setTimeout(() => {
    if (isAutoplay) startAutoplay();
  }, 1300);
});

// ══════════════════════════════════════════════════════
// 10. CONTADOR DE RELACIONAMENTO
// ══════════════════════════════════════════════════════
function pad(n, size) {
  return String(n).padStart(size, '0');
}

function updateCounter() {
  const now  = new Date();
  const diff = now - START_DATE;

  if (diff < 0) {
    $('cnt-days').textContent    = '000';
    $('cnt-hours').textContent   = '00';
    $('cnt-minutes').textContent = '00';
    $('cnt-seconds').textContent = '00';
    return;
  }

  const totalSec  = Math.floor(diff / 1000);
  const secs      = totalSec % 60;
  const totalMin  = Math.floor(totalSec / 60);
  const mins      = totalMin % 60;
  const totalHrs  = Math.floor(totalMin / 60);
  const hrs       = totalHrs % 24;
  const days      = Math.floor(totalHrs / 24);

  $('cnt-days').textContent    = pad(days, 3);
  $('cnt-hours').textContent   = pad(hrs, 2);
  $('cnt-minutes').textContent = pad(mins, 2);
  $('cnt-seconds').textContent = pad(secs, 2);
}

// ══════════════════════════════════════════════════════
// 11. RELÓGIO
// ══════════════════════════════════════════════════════
function updateClock() {
  const now = new Date();
  const hh = pad(now.getHours(), 2);
  const mm = pad(now.getMinutes(), 2);
  const ss = pad(now.getSeconds(), 2);
  $('clock-time').textContent = `${hh}:${mm}:${ss}`;

  const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  $('clock-date').textContent = now.toLocaleDateString('pt-BR', opts);
}

setInterval(() => {
  updateCounter();
  updateClock();
}, 1000);

updateCounter();
updateClock();

// ══════════════════════════════════════════════════════
// 12. ANIMAÇÃO DO CONTADOR
// ══════════════════════════════════════════════════════
const counterObserver = new MutationObserver(() => {
  if (secCounter.classList.contains('active')) {
    animateCounterCards();
  }
});
counterObserver.observe(secCounter, { attributes: true, attributeFilter: ['class'] });

function animateCounterCards() {
  const cards = document.querySelectorAll('.counter-card');
  cards.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, i * 150);
  });
}

// ══════════════════════════════════════════════════════
// 13. PRELOAD DE IMAGENS
// ══════════════════════════════════════════════════════
function preloadPhotos(startIdx, count) {
  const end = Math.min(startIdx + count, PHOTOS.length);
  for (let i = startIdx; i < end; i++) {
    const img = new Image();
    img.src = PHOTOS[i];
  }
}
preloadPhotos(0, 5);
