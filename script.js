/* ============================================
   BOND SALON - Premium Barbershop Website
   JavaScript Module
   ============================================ */

// ========== Services Data ==========
const services = [
  { name: 'استشوار ومكواة', price: 110, icon: 'fa-wind' },
  { name: 'بروتين شعر', price: 400, icon: 'fa-sparkles' },
  { name: 'بروتين علاجي بدون مكواة', price: 200, icon: 'fa-hand-sparkles' },
  { name: 'تنظيف البشرة العميق الاحترافي', price: 350, icon: 'fa-face-smile' },
  { name: 'تنظيف البشرة الفاخر بأنواع ماسكات مختلفة', price: 200, icon: 'fa-mask' },
  { name: 'حمام زيت', price: 150, icon: 'fa-droplet' },
  { name: 'حمام كريم', price: 40, icon: 'fa-pump-soap' },
  { name: 'حلاقة شعر', price: 130, icon: 'fa-scissors' },
  { name: 'حلاقة دقن', price: 70, icon: 'fa-user' },
  { name: 'حلاقة دقن بالبخار', price: 120, icon: 'fa-cloud' },
  { name: 'خيط للوجه كامل', price: 30, icon: 'fa-spider' },
  { name: 'صبغة شعر كاملة (ألوان)', price: 400, icon: 'fa-palette' },
  { name: 'صبغة شعر كاملة (أسود أو بني)', price: 150, icon: 'fa-fill-drip' },
  { name: 'صبغة شعر حنة', price: 150, icon: 'fa-leaf' },
  { name: 'صبغة دقن (أسود أو بني)', price: 50, icon: 'fa-paint-brush' },
  { name: 'غسيل واستشوار', price: 80, icon: 'fa-shower' },
  { name: 'فرد شعر أمريكي', price: 100, icon: 'fa-wand-magic-sparkles' },
  { name: 'فرد شعر عادي', price: 75, icon: 'fa-wand-magic' },
  { name: 'طفل أكبر من 12 سنة', price: 100, icon: 'fa-child' },
  { name: 'قص شعر أطفال', price: 80, icon: 'fa-baby' },
  { name: 'واكس وش كامل', price: 70, icon: 'fa-hand' },
  { name: 'مساج رقبة وكتف', price: 50, icon: 'fa-spa' },
  { name: 'مسك ترطيب فريش', price: 40, icon: 'fa-spray-can-sparkles' },
  { name: 'مسك حبيبات', price: 40, icon: 'fa-gem' },
];

// ========== DOM Elements ==========
const homePage = document.getElementById('homePage');
const pricesPage = document.getElementById('pricesPage');
const pricesBtn = document.getElementById('pricesBtn');
const backBtn = document.getElementById('backBtn');
const servicesGrid = document.getElementById('servicesGrid');
const pageTransition = document.getElementById('pageTransition');

// ========== Render Services ==========
function renderServices() {
  if (!servicesGrid) return;

  servicesGrid.innerHTML = '';

  services.forEach((service, index) => {
    const card = document.createElement('div');
    card.className = 'service-card';
    card.style.animationDelay = `${index * 0.04}s`;

    card.innerHTML = `
      <div class="service-icon">
        <i class="fas ${service.icon}"></i>
      </div>
      <div class="service-info">
        <div class="service-name">${service.name}</div>
      </div>
      <div class="service-price">
        ${service.price}
        <span class="currency">EGP</span>
      </div>
    `;

    servicesGrid.appendChild(card);
  });
}

// ========== Page Navigation ==========
function showPageTransition(callback) {
  if (!pageTransition) {
    callback();
    return;
  }

  pageTransition.classList.add('active');

  setTimeout(() => {
    callback();

    setTimeout(() => {
      pageTransition.classList.remove('active');
    }, 150);
  }, 350);
}

function goToPrices() {
  showPageTransition(() => {
    if (homePage) homePage.style.display = 'none';
    if (pricesPage) {
      pricesPage.style.display = 'flex';
      pricesPage.classList.add('active');
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
    renderServices();
  });
}

function goToHome() {
  showPageTransition(() => {
    if (pricesPage) {
      pricesPage.style.display = 'none';
      pricesPage.classList.remove('active');
    }
    if (homePage) homePage.style.display = 'flex';
    window.scrollTo({ top: 0, behavior: 'instant' });
  });
}

// ========== Event Listeners ==========
function initEventListeners() {
  if (pricesBtn) {
    pricesBtn.addEventListener('click', (e) => {
      e.preventDefault();
      goToPrices();
    });
  }

  if (backBtn) {
    backBtn.addEventListener('click', (e) => {
      e.preventDefault();
      goToHome();
    });
  }
}

// ========== Smooth Scroll Polyfill for older browsers ==========
function smoothScrollPolyfill() {
  if (!('scrollBehavior' in document.documentElement.style)) {
    document.documentElement.style.scrollBehavior = 'auto';
  }
}

// ========== Preload Logo ==========
function preloadLogo() {
  const logoImg = document.getElementById('logoImg');
  if (logoImg && !logoImg.complete) {
    logoImg.addEventListener('load', () => {
      // Logo loaded successfully
    });
    logoImg.addEventListener('error', () => {
      console.warn('Logo image failed to load');
    });
  }
}

// ========== Initialize ==========
document.addEventListener('DOMContentLoaded', () => {
  smoothScrollPolyfill();
  preloadLogo();
  initEventListeners();
});
