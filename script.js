// ============================================================
// Themed Project Data (Static — no GitHub API for main cards)
// ============================================================
const MAIN_PROJECTS = [
  {
    id: 'mymark',
    title: 'MyMark',
    tagline: 'Media Fingerprinting & Blockchain Watermarking',
    description: `MyMark is my MSc dissertation project that tackles the critical challenge of digital media ownership in an era of AI-generated content and rampant copying. The platform creates tamper-proof cryptographic fingerprints of digital media — images, videos, and documents — and records them immutably on a blockchain ledger.\n\nContent creators register their work through an intuitive web dashboard, generating a unique fingerprint that serves as undeniable proof of authorship. Third parties can verify any piece of content against the blockchain, instantly detecting unauthorised copies or alterations. The system operates without any central authority, ensuring ownership records cannot be manipulated or deleted.\n\nMyMark bridges cutting-edge blockchain technology with practical intellectual property protection, delivering a solution that is both technically robust and accessible to everyday users.`,
    theme: {
      primary: '#6C63FF',
      secondary: '#48CAE4',
      gradient: 'linear-gradient(135deg, #6C63FF 0%, #48CAE4 100%)',
      cardGradient: 'linear-gradient(160deg, rgba(108,99,255,0.18) 0%, rgba(72,202,228,0.07) 100%)',
      border: '#6C63FF'
    },
    youtubeId: null,
    poster: 'assets/projects/mymark/poster.jpg',
    dissertation: 'assets/projects/mymark/MyMark-MSc-Dissertation.pdf',
    emoji: '🔏',
    tech: ['Blockchain', 'Python', 'React', 'Web3', 'Cryptography']
  },
  {
    id: 'blockbash',
    title: 'BlockBash',
    tagline: 'Visual Cybersecurity Education Platform',
    description: `BlockBash is an interactive, gamified cybersecurity education platform designed to make learning about network security, cryptography, and ethical hacking accessible and genuinely engaging.\n\nThe platform features real-time visual simulations of cyber-attacks and defences, allowing learners to understand how threats like SQL injection, XSS, and man-in-the-middle attacks operate in a safe, controlled environment. By turning complex security concepts into interactive visual experiences, BlockBash bridges the gap between theoretical knowledge and practical understanding.\n\nDesigned for students, enthusiasts, and professionals alike, BlockBash offers structured learning paths, live challenge scenarios, and visual feedback that makes the invisible world of cybersecurity tangible.`,
    theme: {
      primary: '#00FF41',
      secondary: '#00CC33',
      gradient: 'linear-gradient(135deg, #003B00 0%, #006400 50%, #00FF41 100%)',
      cardGradient: 'linear-gradient(160deg, rgba(0,255,65,0.1) 0%, rgba(0,60,0,0.15) 100%)',
      border: '#00FF41'
    },
    youtubeId: null,
    poster: 'assets/projects/blockbash/poster.jpg',
    dissertation: null,
    emoji: '🛡️',
    tech: ['JavaScript', 'Node.js', 'D3.js', 'Canvas API', 'Security']
  },
  {
    id: 'hackergo',
    title: 'HackerGo',
    tagline: 'Gamified Cybersecurity Adventure App',
    description: `HackerGo is a location-based mobile cybersecurity adventure game inspired by the augmented-reality genre. Players explore the real world to discover hidden cybersecurity challenges tied to physical locations — from cracking encrypted clues at local landmarks to patching virtual vulnerabilities in digital "safe houses".\n\nEach mission is carefully crafted to teach real security concepts: network scanning, password hygiene, social engineering awareness, and more — all wrapped in an engaging narrative. As players progress, they unlock skills, tools, and story chapters that deepen both the gameplay and their security knowledge.\n\nHackerGo makes cybersecurity education an active, social, real-world experience that motivates learners beyond the classroom.`,
    theme: {
      primary: '#FFD700',
      secondary: '#FF6B35',
      gradient: 'linear-gradient(135deg, #FF6B35 0%, #FFD700 100%)',
      cardGradient: 'linear-gradient(160deg, rgba(255,215,0,0.12) 0%, rgba(255,107,53,0.08) 100%)',
      border: '#FFD700'
    },
    youtubeId: null,
    poster: 'assets/projects/hackergo/poster.jpg',
    dissertation: null,
    emoji: '🎮',
    tech: ['React Native', 'Node.js', 'GPS API', 'Gamification']
  },
  {
    id: 'bpo',
    title: 'BPO',
    tagline: 'Business Process Optimisation Tool',
    description: `BPO (Business Process Optimiser) is a developer utility that analyses, maps, and optimises software business processes by identifying inefficiencies, redundant steps, and bottlenecks in workflows.\n\nThe tool ingests process definitions — either from configuration files or live system metrics — and produces a visual flow-map with annotated hotspots. Automated recommendations guide teams toward leaner processes, reducing overhead and improving system throughput.\n\nBPO is designed for engineering teams who need clear, actionable insight into how their software workflows actually run, not just how they were originally designed.`,
    theme: {
      primary: '#FF8C42',
      secondary: '#FFB347',
      gradient: 'linear-gradient(135deg, #FF6B1A 0%, #FFB347 100%)',
      cardGradient: 'linear-gradient(160deg, rgba(255,140,66,0.12) 0%, rgba(255,179,71,0.07) 100%)',
      border: '#FF8C42'
    },
    youtubeId: null,
    poster: 'assets/projects/bpo/poster.jpg',
    dissertation: null,
    emoji: '⚙️',
    tech: ['Python', 'React', 'Graph Analysis', 'REST API']
  },
  {
    id: 'bluetakk',
    title: 'bluetakk',
    tagline: 'Bluetooth Low Energy Asset Tracking System',
    description: `bluetakk is a Bluetooth Low Energy (BLE) asset tracking solution that allows organisations to monitor and locate physical assets in real time — without GPS infrastructure or costly RFID hardware.\n\nUsing a network of BLE beacon listeners, bluetakk triangulates asset positions within a building or campus and displays live locations on an interactive floor-plan dashboard. Administrators receive instant alerts for unauthorised movement, missing items, or boundary breaches.\n\nDesigned with privacy and low power consumption in mind, bluetakk is ideal for hospitals, schools, warehouses, and any environment where efficient, lightweight asset management matters.`,
    theme: {
      primary: '#0082FC',
      secondary: '#00D4FF',
      gradient: 'linear-gradient(135deg, #0057E7 0%, #00D4FF 100%)',
      cardGradient: 'linear-gradient(160deg, rgba(0,130,252,0.14) 0%, rgba(0,212,255,0.07) 100%)',
      border: '#0082FC'
    },
    youtubeId: null,
    poster: 'assets/projects/bluetakk/poster.jpg',
    dissertation: null,
    emoji: '📡',
    tech: ['BLE', 'Python', 'React', 'IoT', 'Real-time']
  },
  {
    id: 'picchat',
    title: 'PicChat',
    tagline: 'Secure & Anonymous Social Media Platform',
    description: `PicChat is a privacy-first social media platform that lets users share moments and connect with others without sacrificing anonymity or control. No real names, no data harvesting, no algorithmic manipulation — just authentic connection.\n\nUsers communicate through ephemeral picture-based posts that disappear after a set time, with end-to-end encrypted messaging that ensures only the intended recipient can read conversations. Optional anonymous personas let users engage authentically without the pressure of permanent public identity.\n\nPicChat was built in response to growing concerns about surveillance capitalism and the mental health impact of traditional social media, offering a cleaner, safer digital space for genuine human interaction.`,
    theme: {
      primary: '#9B5DE5',
      secondary: '#F15BB5',
      gradient: 'linear-gradient(135deg, #9B5DE5 0%, #F15BB5 100%)',
      cardGradient: 'linear-gradient(160deg, rgba(155,93,229,0.14) 0%, rgba(241,91,181,0.08) 100%)',
      border: '#9B5DE5'
    },
    youtubeId: null,
    poster: 'assets/projects/picchat/poster.jpg',
    dissertation: null,
    emoji: '💬',
    tech: ['React Native', 'Node.js', 'E2E Encryption', 'Privacy']
  },
  {
    id: 'multivol',
    title: 'MultiVol',
    tagline: 'Multi-Volume Secure Storage Manager',
    description: `MultiVol is a cross-platform storage management utility that enables secure splitting, compression, and encryption of large files and datasets across multiple volumes — removable drives, cloud buckets, or network shares.\n\nFiles are sliced into encrypted chunks distributed across chosen destinations, with a lightweight manifest file keeping track of the assembly map. Reconstruction requires all volumes and the correct decryption key, making MultiVol ideal for sensitive data archiving, air-gapped backups, and secure multi-party data transfer.\n\nIts simple drag-and-drop interface makes enterprise-grade redundancy and encryption accessible to non-technical users, while the scriptable CLI keeps power users in full control.`,
    theme: {
      primary: '#8338EC',
      secondary: '#3A86FF',
      gradient: 'linear-gradient(135deg, #8338EC 0%, #3A86FF 100%)',
      cardGradient: 'linear-gradient(160deg, rgba(131,56,236,0.14) 0%, rgba(58,134,255,0.08) 100%)',
      border: '#8338EC'
    },
    youtubeId: null,
    poster: 'assets/projects/multivol/poster.jpg',
    dissertation: null,
    emoji: '💾',
    tech: ['Python', 'AES Encryption', 'CLI', 'Cross-platform']
  },
  {
    id: 'cyha-mvp',
    title: 'CYHA-MVP',
    tagline: 'Cyber Housing Application — Minimum Viable Product',
    description: `CYHA-MVP is the foundational MVP for a cyber-secure housing management application designed to bring modern digital security practices to the social and affordable housing sector.\n\nThe platform allows housing officers to manage tenancy records, maintenance requests, and communications through a secure, GDPR-compliant interface — replacing the insecure, ad-hoc email and spreadsheet workflows common in smaller housing associations. Role-based access control, audit trails, and encrypted data storage ensure that sensitive resident information is protected at every step.\n\nCYHA-MVP demonstrates how thoughtful security engineering can be embedded into public-sector software from day one, rather than bolted on as an afterthought.`,
    theme: {
      primary: '#3D5A80',
      secondary: '#98C1D9',
      gradient: 'linear-gradient(135deg, #3D5A80 0%, #98C1D9 100%)',
      cardGradient: 'linear-gradient(160deg, rgba(61,90,128,0.18) 0%, rgba(152,193,217,0.08) 100%)',
      border: '#3D5A80'
    },
    youtubeId: null,
    poster: 'assets/projects/cyha-mvp/poster.jpg',
    dissertation: null,
    emoji: '🏠',
    tech: ['React', 'Node.js', 'RBAC', 'GDPR', 'PostgreSQL']
  },
  {
    id: 'complexity-calc',
    title: 'CyclomaticComplexityCalc',
    tagline: 'Code Quality & Complexity Analysis Tool',
    description: `CyclomaticComplexityCalc is a developer utility that computes McCabe cyclomatic complexity scores for source code, helping teams identify functions and modules that are too complex to maintain, test, or safely modify.\n\nBy analysing control-flow graphs, the tool pinpoints exact hotspots — loops, conditionals, and exception branches — that inflate complexity scores. Interactive reports highlight the riskiest code paths and suggest targeted refactoring strategies, making it actionable rather than just informational.\n\nIntegrating seamlessly with CI/CD pipelines, the calculator enforces complexity thresholds as quality gates, preventing technical debt from accumulating silently. Available as a CLI tool, VS Code extension, and web interface.`,
    theme: {
      primary: '#3ECF8E',
      secondary: '#007ACC',
      gradient: 'linear-gradient(135deg, #007ACC 0%, #3ECF8E 100%)',
      cardGradient: 'linear-gradient(160deg, rgba(62,207,142,0.12) 0%, rgba(0,122,204,0.1) 100%)',
      border: '#3ECF8E'
    },
    youtubeId: null,
    poster: 'assets/projects/complexity-calc/poster.jpg',
    dissertation: null,
    emoji: '📊',
    tech: ['Python', 'AST Parsing', 'VS Code API', 'CI/CD']
  },
  {
    id: 'device-provisioning',
    title: 'Device Provisioning',
    tagline: 'Smart Secure Device Provisioning Web-App',
    description: `The Device Provisioning web-app replaces error-prone manual device setup with a dynamic, intelligent provisioning flow that adapts to each device type, network environment, and security policy.\n\nOperators are guided through an interactive flowchart that branches based on device capabilities, chosen protocols, and compliance requirements — removing guesswork and reducing misconfiguration. Every provisioning session is logged with a full audit trail, and configuration templates can be versioned and shared across teams.\n\nBuilt for IoT deployments, enterprise network teams, and managed service providers, the app makes complex multi-device rollouts repeatable, auditable, and secure by default.`,
    theme: {
      primary: '#0096C7',
      secondary: '#48CAE4',
      gradient: 'linear-gradient(135deg, #0077B6 0%, #48CAE4 100%)',
      cardGradient: 'linear-gradient(160deg, rgba(0,150,199,0.14) 0%, rgba(72,202,228,0.07) 100%)',
      border: '#0096C7'
    },
    youtubeId: '2_rwCbVFsDY',
    poster: 'assets/projects/device-provisioning/poster.jpg',
    dissertation: null,
    emoji: '🔧',
    tech: ['JavaScript', 'Node.js', 'D3.js', 'IoT', 'Network Security']
  }
];

// ============================================================
// Email — "Get in Touch if Interested" template
// ============================================================
function buildMailtoLink(project) {
  const subject = encodeURIComponent('Interested in ' + project.title);
  const body = encodeURIComponent(
    'Hi Nathan,\n\n' +
    'I came across your ' + project.title + ' project on your portfolio and I\'d love to learn more.\n\n' +
    '[Tell me a bit about yourself and why you\'re interested]\n\n' +
    'Looking forward to hearing from you!\n\nBest regards,\n[Your Name]'
  );
  return 'mailto:nathanbrownbennett@gmail.com?subject=' + subject + '&body=' + body;
}

// ============================================================
// Project Overlay — rich themed modal
// ============================================================
function openOverlay(project) {
  const overlay = document.getElementById('overlay');
  const content = document.getElementById('overlay-content');
  if (!overlay || !content) return;

  // Set per-project CSS vars on the overlay element
  overlay.style.setProperty('--project-primary', project.theme.primary);
  overlay.style.setProperty('--project-secondary', project.theme.secondary);
  overlay.style.setProperty('--project-gradient', project.theme.gradient);

  // Build tech tag HTML
  const tagsHtml = (project.tech || [])
    .map(function (t) { return '<span class="tech-tag">' + escapeHtml(t) + '</span>'; })
    .join('');

  // Build video section HTML
  let mediaHtml = '';
  if (project.youtubeId) {
    mediaHtml =
      '<div class="overlay-video-wrap">' +
        '<iframe ' +
          'src="https://www.youtube.com/embed/' + escapeHtml(project.youtubeId) + '?rel=0" ' +
          'title="' + escapeHtml(project.title) + ' demo video" ' +
          'frameborder="0" ' +
          'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ' +
          'allowfullscreen>' +
        '</iframe>' +
      '</div>';
  } else if (project.poster) {
    mediaHtml =
      '<div class="overlay-poster-wrap">' +
        '<img ' +
          'src="' + escapeHtml(project.poster) + '" ' +
          'alt="' + escapeHtml(project.title) + ' poster" ' +
          'class="overlay-poster-img" ' +
          'onerror="this.closest(\'.overlay-poster-wrap\').style.display=\'none\'">' +
      '</div>';
  }

  // Build action buttons HTML
  let actionsHtml = '';
  if (project.dissertation) {
    actionsHtml +=
      '<a href="' + escapeHtml(project.dissertation) + '" download class="btn btn-download">' +
        '<span aria-hidden="true">📄</span> Download Dissertation' +
      '</a>';
  }
  actionsHtml +=
    '<a href="' + buildMailtoLink(project) + '" class="btn btn-contact">' +
      '<span aria-hidden="true">✉️</span> Get in Touch if Interested' +
    '</a>';

  // Assemble full overlay HTML
  content.innerHTML =
    '<div class="overlay-project-header">' +
      '<span class="overlay-project-emoji" aria-hidden="true">' + project.emoji + '</span>' +
      '<div class="overlay-project-title-wrap">' +
        '<h3 id="overlay-title">' + escapeHtml(project.title) + '</h3>' +
        '<p class="overlay-project-tagline">' + escapeHtml(project.tagline) + '</p>' +
      '</div>' +
      '<button id="overlay-close" class="overlay-close" aria-label="Close project details">&times;</button>' +
    '</div>' +
    (tagsHtml ? '<div class="overlay-tech-tags">' + tagsHtml + '</div>' : '') +
    '<div class="overlay-body">' +
      '<p class="overlay-description">' + formatDescription(project.description) + '</p>' +
      mediaHtml +
      '<div class="overlay-actions">' + actionsHtml + '</div>' +
    '</div>';

  // Wire up close button
  var closeBtn = content.querySelector('#overlay-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeOverlay);
  }

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Focus the close button for accessibility
  if (closeBtn) closeBtn.focus();
}

function closeOverlay() {
  var overlay = document.getElementById('overlay');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// Converts newlines in description to paragraph breaks
function formatDescription(text) {
  return text
    .split('\n\n')
    .map(function (para) {
      return '<span class="overlay-para">' + escapeHtml(para.trim()) + '</span>';
    })
    .join('');
}

// escapeHtml converts raw plain-text strings into safe HTML character references.
// It is only called with plain-text inputs (static data and GitHub API descriptions),
// so there is no risk of double-encoding pre-existing entities.
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// ============================================================
// Project Cards — themed carousel items
// ============================================================
function createMainCard(project) {
  const card = document.createElement('div');
  card.className = 'project-card carousel-item themed-card';
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', project.title + ': click to explore this project');
  card.style.setProperty('--card-accent', project.theme.primary);
  card.style.setProperty('--card-accent2', project.theme.secondary);
  card.style.background = project.theme.cardGradient;
  card.style.borderTopColor = project.theme.primary;

  const tagsHtml = (project.tech || []).slice(0, 3)
    .map(function (t) { return '<span class="tech-tag-sm">' + escapeHtml(t) + '</span>'; })
    .join('');

  card.innerHTML =
    '<div class="project-card-emoji" style="color:' + project.theme.primary + '">' + project.emoji + '</div>' +
    '<h3 class="project-card-title">' + escapeHtml(project.title) + '</h3>' +
    '<p class="project-card-tagline">' + escapeHtml(project.tagline) + '</p>' +
    (tagsHtml ? '<div class="project-card-tags">' + tagsHtml + '</div>' : '') +
    '<span class="project-card-explore" style="color:' + project.theme.primary + '">Explore &rarr;</span>';

  function openThis() { openOverlay(project); }
  card.addEventListener('click', openThis);
  card.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openThis(); }
  });

  return card;
}

// Side project card (from GitHub API)
function createSideCard(project) {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', project.title + ': click to view details');

  card.innerHTML =
    '<h3>' + escapeHtml(project.title) + '</h3>' +
    '<p>' + escapeHtml(project.description || 'No description available.') + '</p>';

  function openThis() { openSideOverlay(project); }
  card.addEventListener('click', openThis);
  card.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openThis(); }
  });
  return card;
}

// Lightweight overlay for side (GitHub) projects
function openSideOverlay(project) {
  const fakeProject = {
    title: project.title,
    tagline: project.description || '',
    description: project.description || 'No description available.',
    tech: [],
    emoji: '💻',
    youtubeId: null,
    poster: null,
    dissertation: null,
    theme: {
      primary: '#007acc',
      secondary: '#64ffda',
      gradient: 'linear-gradient(135deg, #007acc 0%, #64ffda 100%)',
      cardGradient: ''
    }
  };
  openOverlay(fakeProject);
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
  sideProjects.slice(start, end).forEach(function (project) {
    sideContainer.appendChild(createSideCard(project));
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
// Load GitHub repos for side projects only
// ============================================================
async function loadRepos(user) {
  const response = await fetch(
    'https://api.github.com/users/' + user + '/repos?sort=updated&per_page=100'
  );
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
}

async function displayProjects() {
  // --- Main Projects: static themed cards ---
  const mainContainer = document.getElementById('main-projects');
  if (mainContainer) {
    const carouselTrack = mainContainer.querySelector('.carousel-track');
    if (carouselTrack) {
      carouselTrack.innerHTML = '';
      MAIN_PROJECTS.forEach(function (project) {
        carouselTrack.appendChild(createMainCard(project));
      });
    }
  }
  initCarousel();

  // --- Side Projects: from GitHub API (filter out main project names) ---
  // Build the exclusion list solely from MAIN_PROJECTS ids plus the portfolio repo itself.
  // Also exclude known alternate repo-name spellings that differ from the id.
  const mainNamesLower = MAIN_PROJECTS.map(function (p) { return p.id; }).concat([
    'cyclomaticcomplexitycalc',
    'dynamic-flowchart-for-device-provisioning-',
    'nathanbrown-bennett'
  ]);

  try {
    const users = ['NathanBrownBennett', 'JakkuAzzo'];
    const reposArrays = await Promise.all(users.map(loadRepos));
    const repos = reposArrays.flat();
    repos.sort(function (a, b) {
      return new Date(b.updated_at) - new Date(a.updated_at);
    });

    sideProjects = [];
    repos.forEach(function (repo) {
      if (!mainNamesLower.includes(repo.name.toLowerCase())) {
        sideProjects.push({
          title: repo.name,
          description: repo.description || ''
        });
      }
    });
    sideProjectsPage = 0;
    renderSideProjects();
  } catch (err) {
    // Side projects unavailable — hide that section gracefully
    const sideContainer = document.getElementById('side-projects');
    if (sideContainer) {
      sideContainer.innerHTML =
        '<p style="color:var(--text-muted);padding:1rem;">Side projects unavailable right now.</p>';
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
  if (items.length === 0) return;
  let index = 0;

  function update() {
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
        index = delta > 0
          ? (index - 1 + items.length) % items.length
          : (index + 1) % items.length;
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
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

// ============================================================
// DOMContentLoaded — wire everything up
// ============================================================
document.addEventListener('DOMContentLoaded', function () {
  displayProjects();
  initScrollAnimations();
  initMobileNav();
  initNavbarScroll();

  // Overlay backdrop click & keyboard close
  const overlay = document.getElementById('overlay');
  if (overlay) {
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeOverlay();
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeOverlay();
  });

  // Side projects pagination button
  const sideNext = document.getElementById('side-projects-next');
  if (sideNext) {
    sideNext.addEventListener('click', handleSideProjectsNext);
  }
});
