// ============================================================
// GitHub Project Repositories
// ============================================================
const MAIN_PROJECT_ORDER = [
  'HackerGO',
  'blockbash',
  'MyMark',
  'BPO',
  'bluetakk',
  'PicChat',
  'MultiVol',
  'CYHA-MVP',
  'CyclomaticComplexityCalc',
  'Dynamic-Flowchart-For-Device-Provisioning-'
];

async function loadRepos(user) {
  const response = await fetch(
    `https://api.github.com/users/${user}/repos?sort=updated&per_page=100`
  );
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
}

// ============================================================
// Project Overlay
// ============================================================
function openOverlay(project) {
  const overlay = document.getElementById('overlay');
  document.getElementById('overlay-title').textContent = project.title;
  document.getElementById('overlay-description').textContent =
    project.description || 'No description available.';

  const link = document.getElementById('overlay-link');
  if (project.link) {
    link.href = project.link;
    link.style.display = 'inline-flex';
  } else {
    link.style.display = 'none';
  }

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeOverlay() {
  const overlay = document.getElementById('overlay');
  if (overlay) {
    overlay.classList.remove('active');
  }
  document.body.style.overflow = '';
}

// ============================================================
// Project Cards
// ============================================================
function createCard(project, isCarousel) {
  const card = document.createElement('div');
  card.className = isCarousel ? 'project-card carousel-item' : 'project-card';
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', project.title + ': click to view details');

  const name = document.createElement('h3');
  name.textContent = project.title;

  const desc = document.createElement('p');
  desc.textContent = project.description || 'No description available.';

  card.appendChild(name);
  card.appendChild(desc);

  card.addEventListener('click', function () { openOverlay(project); });
  card.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openOverlay(project);
    }
  });

  return card;
}

// ============================================================
// Side Projects Pagination
// ============================================================
let sideProjects = [];
let sideProjectsPage = 0;
let sideProjectsPerPage = 9;

function getSideProjectsPerPage() {
  if (window.innerWidth <= 600) return 6;
  if (window.innerWidth <= 900) return 6;
  return 9;
}

function renderSideProjects() {
  const sideContainer = document.getElementById('side-projects');
  if (!sideContainer) return;
  sideContainer.innerHTML = '';
  sideProjectsPerPage = getSideProjectsPerPage();
  const start = sideProjectsPage * sideProjectsPerPage;
  const end = start + sideProjectsPerPage;
  const projectsToShow = sideProjects.slice(start, end);
  projectsToShow.forEach(function (project) {
  const card = createCard(project, false);
    sideContainer.appendChild(card);
  });
}

function handleSideProjectsNext() {
  sideProjectsPerPage = getSideProjectsPerPage();
  const totalPages = Math.ceil(sideProjects.length / sideProjectsPerPage);
  if (totalPages === 0) return;
  sideProjectsPage = (sideProjectsPage + 1) % totalPages;
  renderSideProjects();
  const el = document.getElementById('side-projects');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

window.addEventListener('resize', function () {
  sideProjectsPage = 0;
  renderSideProjects();
});

// ============================================================
// Display GitHub Repos
// ============================================================
async function displayRepos() {
  const mainContainer = document.getElementById('main-projects');
  if (!mainContainer) return;
  const carouselTrack = mainContainer.querySelector('.carousel-track');
  if (carouselTrack) carouselTrack.innerHTML = '';

  try {
  const users = ['NathanBrownBennett', 'JakkuAzzo'];
  const reposArrays = await Promise.all(users.map(loadRepos));
  const repos = reposArrays.flat();
    repos.sort(function (a, b) {
      return new Date(b.updated_at) - new Date(a.updated_at);
    });

  const mainNames = MAIN_PROJECT_ORDER;
  const repoMap = {};
    repos.forEach(function (r) { repoMap[r.name.toLowerCase()] = r; });

    mainNames.forEach(function (slug) {
  const repo = repoMap[slug.toLowerCase()];
      if (!repo) return;
  const project = {
        title: repo.name,
        description: repo.description || '',
        link: repo.html_url
      };
  const card = createCard(project, true);
      carouselTrack.appendChild(card);
    });

    sideProjects = [];
  const mainNamesLower = mainNames.map(function (n) { return n.toLowerCase(); });
    repos.forEach(function (repo) {
      if (!mainNamesLower.includes(repo.name.toLowerCase())) {
        sideProjects.push({
          title: repo.name,
          description: repo.description,
          link: repo.html_url
        });
      }
    });
    sideProjectsPage = 0;
    renderSideProjects();
    initCarousel();
  } catch (err) {
    if (mainContainer) {
      mainContainer.innerHTML =
        '<p style="color:var(--text-muted);padding:1rem;">Unable to load repositories at this time.</p>';
    }
  }
}

// ============================================================
// Projects Carousel (main projects)
// ============================================================
function initCarousel() {
  const track = document.querySelector('#main-projects .carousel-track');
  if (!track) return;
  const items = track.querySelectorAll('.carousel-item');
  let index = 0;

  function update() {
    if (items.length === 0) return;
  const itemWidth = items[0].offsetWidth;
  const gap = parseFloat(window.getComputedStyle(track).gap) || 22;
    track.style.transform = 'translateX(' + (-(index * (itemWidth + gap))) + 'px)';
  }

  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  if (prevBtn) {
    prevBtn.addEventListener('click', function () {
      index = (index - 1 + items.length) % items.length;
      update();
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', function () {
      index = (index + 1) % items.length;
      update();
    });
  }

  update();
  window.addEventListener('resize', update);

  // Touch / swipe support
  let startX = 0;
  const wrap = document.getElementById('main-projects');
  if (wrap) {
    wrap.addEventListener('touchstart', function (e) {
      startX = e.touches[0].clientX;
    }, { passive: true });
    wrap.addEventListener('touchend', function (e) {
  const delta = e.changedTouches[0].clientX - startX;
      if (Math.abs(delta) > 50) {
        if (delta > 0) {
          index = (index - 1 + items.length) % items.length;
        } else {
          index = (index + 1) % items.length;
        }
        update();
      }
    }, { passive: true });
  }
}

// ============================================================
// Scroll Animations (Intersection Observer)
// ============================================================
function initScrollAnimations() {
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(function (el) {
    observer.observe(el);
  });
}

// ============================================================
// Mobile Navigation
// ============================================================
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  if (!hamburger || !mobileNav) return;

  function closeMobileNav() {
    mobileNav.classList.remove('open');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileNav.setAttribute('aria-hidden', 'true');
  }

  hamburger.addEventListener('click', function () {
  const isOpen = mobileNav.classList.toggle('open');
    hamburger.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    mobileNav.setAttribute('aria-hidden', String(!isOpen));
  });

  mobileNav.querySelectorAll('.mobile-nav-link').forEach(function (link) {
    link.addEventListener('click', closeMobileNav);
  });

  // Close when clicking outside
  document.addEventListener('click', function (e) {
    if (
      mobileNav.classList.contains('open') &&
      !mobileNav.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      closeMobileNav();
    }
  });
}

// ============================================================
// Navbar scroll effect
// ============================================================
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', function () {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
}

// ============================================================
// DOMContentLoaded — wire everything up
// ============================================================
document.addEventListener('DOMContentLoaded', function () {
  // Start loading repos
  displayRepos();

  // Scroll animations
  initScrollAnimations();

  // Mobile nav
  initMobileNav();

  // Navbar scroll shadow
  initNavbarScroll();

  // Overlay close handlers
  const overlayClose = document.getElementById('overlay-close');
  if (overlayClose) {
    overlayClose.addEventListener('click', closeOverlay);
  }

  const overlay = document.getElementById('overlay');
  if (overlay) {
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeOverlay();
    });
  }

  // Keyboard: Escape closes overlay
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeOverlay();
  });

  // Side projects pagination button
  const sideNext = document.getElementById('side-projects-next');
  if (sideNext) {
    sideNext.addEventListener('click', handleSideProjectsNext);
  }
});
