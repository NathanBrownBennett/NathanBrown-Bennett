// ============================================================
// Themed Project Data (Static — no GitHub API for main cards)
// ============================================================
const MAIN_PROJECTS = [
  {
    id: 'blockbash',
    title: 'Inspector',
    tagline: 'Gamified Cybersecurity Education Platform',
    description: `Inspector is a comprehensive gamified cybersecurity education platform that combines visual programming, interactive workshops, and real terminal environments to teach hacking and core cybersecurity principles.\n\nBuilt on a modular Node.js and Express architecture, Inspector delivers practical, hands-on learning through integrated block editing, network topology design, and immersive workshop scenarios.\n\nThe platform is designed to make complex cybersecurity workflows approachable while preserving technical depth for learners who want realistic penetration testing and network security practice.`,
    theme: {
      primary: '#00FF41',
      secondary: '#00CC33',
      gradient: 'linear-gradient(135deg, #003B00 0%, #006400 50%, #00FF41 100%)',
      cardGradient: 'linear-gradient(160deg, rgba(0,255,65,0.1) 0%, rgba(0,60,0,0.15) 100%)',
      border: '#00FF41'
    },
    youtubeId: null,
    poster: 'assets/projects/blockbash/inspector-poster.png',
    dissertation: null,
    repoUrl: 'https://github.com/JakkuAzzo/BlockBash',
    logo: 'assets/projects/blockbash/inspector-logo.svg',
    tech: ['Node.js', 'Express', 'WebSockets', 'SQLite', 'Cybersecurity']
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
    poster: 'assets/projects/hackergo/poster.svg',
    dissertation: null,
    repoUrl: null,
    logo: 'assets/projects/hackergo/poster.png',
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
    poster: 'assets/projects/bpo/poster.svg',
    dissertation: null,
    repoUrl: 'https://github.com/NathanBrownBennett/AutoTimeSheet',
    logo: 'assets/projects/bpo/poster.png',
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
    poster: 'assets/projects/bluetakk/poster.svg',
    dissertation: null,
    repoUrl: null,
    logo: 'assets/projects/bluetakk/poster.png',
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
    poster: 'assets/projects/picchat/poster.svg',
    dissertation: null,
    repoUrl: null,
    logo: 'assets/projects/picchat/poster.png',
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
    poster: 'assets/projects/multivol/poster.svg',
    dissertation: null,
    repoUrl: null,
    logo: 'assets/projects/multivol/poster.svg',
    tech: ['Python', 'AES Encryption', 'CLI', 'Cross-platform']
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
    poster: 'assets/projects/complexity-calc/poster.webp',
    dissertation: null,
    repoUrl: 'https://github.com/NathanBrownBennett/CyclomaticComplexityCalc',
    logo: 'assets/projects/complexity-calc/poster-from-repo.webp',
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
    poster: 'assets/projects/device-provisioning/poster.png',
    dissertation: null,
    repoUrl: 'https://github.com/NathanBrownBennett/Dynamic-Flowchart-For-Device-Provisioning-',
    logo: 'assets/projects/device-provisioning/poster-from-repo.png',
    tech: ['JavaScript', 'Node.js', 'D3.js', 'IoT', 'Network Security']
  }
];

// ============================================================
// Recent work — verified against the active repositories and Codex project runs
// ============================================================
const RECENT_PROJECTS = [
  {
    id: 'cards-recent',
    title: 'Cards',
    category: 'Experiments',
    type: 'Local-first game platform',
    status: 'Cross-platform preview',
    role: 'Product design & cross-platform engineering',
    summary: 'A local-first iPhone and Android platform for creating and playing validated card-game templates on conventional and optional AR tables.',
    challenge: 'Make nearby multiplayer and lightweight game creation predictable across platforms without relying on a cloud store or unrestricted code generation.',
    built: 'Closed manifests, shared deterministic shuffle fixtures, host-authoritative state, encrypted Apple nearby transport, Android Nearby Connections, ARKit, and ARCore previews.',
    proof: 'Shared schema, Swift, and Java conformance checks verify deterministic state; the web preview is tested at desktop and mobile sizes.',
    boundary: 'Prompt draw is playable. Dedicated Poker and Guess Who runtimes, production cross-platform host/join, signing, and shared AR alignment remain milestones.',
    tech: ['Swift', 'Java', 'ARKit', 'ARCore', 'JSON Schema', 'Nearby APIs'],
    screenshots: [
      { src: 'assets/projects/recent/cards/web-home.png', label: 'Browser preview' },
      { src: 'assets/projects/recent/cards/ios-live-table.png', label: 'iOS live table' }
    ],
    repoUrl: 'https://github.com/JakkuAzzo/Cards_PythonQT_Demo',
    releaseUrl: 'https://jakkuazzo.github.io/Cards_PythonQT_Demo/',
    accent: '#f2b84b',
    size: 'standard'
  },
  {
    id: 'ghp-webeditor-recent',
    title: 'GhP WebEditor',
    category: 'Developer tools',
    type: 'GitHub Pages visual editor',
    status: 'Working prototype',
    role: 'Product design & full-stack engineering',
    summary: 'A visual-and-code workflow for editing GitHub Pages repositories with file navigation, GUI composition, previews, themes, plugins, and collaboration concepts.',
    challenge: 'Give non-specialists a friendlier route into static-site editing while preserving direct access to code, diffs, files, and Git history.',
    built: 'Repository cloning, recursive file navigation, CodeMirror editing, GUI/code modes, split preview, diff and history tools, plugin hooks, and an Electron shell.',
    proof: 'The demo repository includes captured browser flows for clone, file creation, GUI editing, preview, tabs, and save interactions.',
    boundary: 'The current package has no automated test suite. Authentication, collaboration, Copilot integration, and production commit/push need further hardening.',
    tech: ['CodeMirror 5', 'Express 4', 'Electron 39', 'simple-git', 'Marked', 'Font Awesome'],
    screenshots: [
      { src: 'assets/projects/recent/ghp-webeditor/app-loaded.png', label: 'Editor workspace' },
      { src: 'assets/projects/recent/ghp-webeditor/gui-preview.png', label: 'GUI editor mode' }
    ],
    repoUrl: 'https://github.com/JakkuAzzo/GhP-WebEditor',
    releaseUrl: null,
    accent: '#4d9cff',
    size: 'standard'
  },
  {
    id: 'flowcue-recent',
    title: 'FlowCue',
    category: 'Creative tools',
    type: 'Local/LAN performance controller',
    status: 'Public beta · v1.2.0',
    role: 'Product design & full-stack engineering',
    summary: 'A trusted local controller that keeps performer and audience screens in sync for churches, business presentations, and live stages.',
    challenge: 'Keep running order, lyrics, cues, and display state reliable across venue screens without depending on a hosted cloud service.',
    built: 'Three remembered modes, persistent SQLite content, synchronized controller/performer/audience screens, media backgrounds, web embeds, presence, and reconnect snapshots.',
    proof: 'Lint, unit/integration, production build, and Chromium E2E checks pass; v1.2.0 installers are published for Windows and Intel/Apple Silicon macOS.',
    boundary: 'Local/LAN public beta. Installers are unsigned; physical venue Wi-Fi, hardware, reconnect, and long-running media validation remains.',
    tech: ['React 19', 'Vite 7', 'Express 5', 'Socket.IO 4', 'SQLite', 'Electron'],
    screenshots: [
      { src: 'assets/projects/recent/flowcue/controller.png', label: 'Church controller' },
      { src: 'assets/projects/recent/flowcue/home.png', label: 'Mode selection' }
    ],
    repoUrl: 'https://github.com/JakkuAzzo/FlowCue',
    releaseUrl: 'https://github.com/JakkuAzzo/FlowCue/releases/tag/v1.2.0',
    accent: '#ff765d',
    size: 'wide'
  },
  {
    id: 'inspector-recent',
    title: 'Inspector',
    category: 'Security',
    type: 'Cybersecurity learning platform',
    status: 'Institution pilot ready',
    role: 'Product direction, security engineering & full-stack development',
    summary: 'A browser-based cyber education platform that combines story-led lessons, a block command editor, isolated learner terminals, and a beta network lab.',
    challenge: 'Make practical command-line and networking concepts approachable without letting training exercises touch real targets or uncontrolled infrastructure.',
    built: 'Four stable story lessons, a block-based command workflow, Docker-backed terminals, learner evidence, administration tools, and a Containerlab topology editor with proof-mode validation.',
    proof: 'The unstable branch contains unit and integration coverage, Playwright pilot flows, security-boundary documentation, and timestamped visual evidence for story and network-runtime paths.',
    boundary: 'Built for a controlled, desktop-first institution pilot of roughly one class. Local Docker and SMTP setup are required; the Network Editor remains beta and this is not presented as public SaaS.',
    tech: ['Express 4', 'WebSockets', 'SQLite 3', 'Dockerode', 'PASETO', 'Containerlab'],
    screenshots: [
      { src: 'assets/projects/recent/inspector/story-arc.png', label: 'Mira story arc evidence' },
      { src: 'assets/projects/recent/inspector/network-runtime.png', label: 'Containerlab runtime evidence' }
    ],
    repoUrl: 'https://github.com/JakkuAzzo/BlockBash/tree/unstable',
    releaseUrl: null,
    accent: '#f4cb4b',
    size: 'tall'
  },
  {
    id: 'device-provisioning-recent',
    title: 'Device Provisioning Toolkit',
    category: 'Security',
    type: 'Secure device decision toolkit',
    status: 'Verified prototype',
    role: 'Research, product design & full-stack engineering',
    summary: 'A procurement and hardening toolkit that compares devices, explains security posture, and turns a selection into practical setup guidance.',
    challenge: 'Bring fragmented hardware, security, purchasing, and deployment decisions into one understandable workflow for personal, business, and government use.',
    built: 'Use-case filtering, security scoring, device comparisons, Graphviz decision flows, retailer links, tailored hardening guidance, downloadable checklists, and script-generation controls.',
    proof: 'The repository includes a complete walkthrough and captured end-to-end evidence across search, device detail, security guidance, purchasing, and responsive states.',
    boundary: 'This is a research prototype, not a procurement guarantee. Live retailer data can be slow or change without notice, and generated hardening scripts must be reviewed before use.',
    tech: ['Python', 'Flask 3', 'SQLite', 'Graphviz', 'Pandas', 'Bootstrap 5'],
    screenshots: [
      { src: 'assets/projects/recent/device-provisioning/home.png', label: 'Device discovery and scoring' },
      { src: 'assets/projects/recent/device-provisioning/security-guide.png', label: 'Tailored security guide' }
    ],
    repoUrl: 'https://github.com/NathanBrownBennett/Dynamic-Flowchart-For-Device-Provisioning-',
    releaseUrl: null,
    resources: [
      { label: 'Read undergraduate dissertation', url: 'assets/documents/device-provisioning-dissertation.pdf' },
      { label: 'View updated presentation', url: 'assets/documents/device-provisioning-presentation.pdf' },
      { label: 'Download presentation source', url: 'assets/documents/device-provisioning-presentation.pptx' },
      { label: 'Read full 2026 EPQ dissertation', url: 'assets/documents/a-level-epq-dissertation.pdf' },
      { label: 'View EPQ episode deck', url: 'assets/documents/a-level-epq-presentation.pdf' },
      { label: 'Read EPQ video script', url: 'assets/documents/a-level-epq-video-transcript.pdf' },
      { label: 'View original 2020 EPQ', url: 'assets/documents/a-level-epq-original-submission.pdf' }
    ],
    accent: '#6b8cff',
    size: 'standard'
  }
];

const PUBLIC_PROJECT_ORDER = ['inspector-recent', 'flowcue-recent', 'cards-recent', 'ghp-webeditor-recent', 'device-provisioning-recent'];
const PUBLIC_PROJECTS = RECENT_PROJECTS
  .sort(function (a, b) { return PUBLIC_PROJECT_ORDER.indexOf(a.id) - PUBLIC_PROJECT_ORDER.indexOf(b.id); });

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
  return 'mailto:Nathanbrown-bennett@hotmail.com?subject=' + subject + '&body=' + body;
}

let lastOverlayTrigger = null;

function setPortfolioBackgroundInert(isInert) {
  const background = document.querySelectorAll(
    '#navbar, #mobile-nav, #hero, #about, #projects > .container, #research, #updates, #contact, body > footer'
  );
  background.forEach(function (element) {
    element.inert = isInert;
  });
}

function getOverlayFocusables(overlay) {
  return Array.from(overlay.querySelectorAll(
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )).filter(function (element) {
    return element.getClientRects().length > 0;
  });
}

function trapOverlayFocus(event, overlay) {
  if (event.key !== 'Tab') return;
  const focusables = getOverlayFocusables(overlay);
  if (focusables.length === 0) {
    event.preventDefault();
    return;
  }
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

// ============================================================
// Project Overlay — rich themed modal
// ============================================================
function openOverlay(project) {
    const headerVisualSrc = project.logo || project.poster || '';
    const headerFallback = escapeHtml((project.title || 'P').slice(0, 2).toUpperCase());

  const overlay = document.getElementById('overlay');
  const content = document.getElementById('overlay-content');
  if (!overlay || !content) return;
  if (!overlay.classList.contains('active') && document.activeElement instanceof HTMLElement) {
    lastOverlayTrigger = document.activeElement;
  }
  overlay.classList.remove('case-study-mode');
  overlay.setAttribute('aria-hidden', 'false');

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
        'Download Dissertation' +
      '</a>';
  }
  if (project.repoUrl) {
    actionsHtml +=
      '<a href="' + escapeHtml(project.repoUrl) + '" target="_blank" rel="noopener noreferrer" class="btn btn-repo">' +
        'View on GitHub' +
      '</a>';
  }
  actionsHtml +=
    '<a href="' + buildMailtoLink(project) + '" class="btn btn-contact">' +
      'Get in Touch if Interested' +
    '</a>';

  // Assemble full overlay HTML
  content.innerHTML =
    '<div class="overlay-project-header">' +
      '<div class="overlay-project-visual" aria-hidden="true">' +
        (headerVisualSrc
          ? '<img src="' + escapeHtml(headerVisualSrc) + '" alt="" class="overlay-project-logo" onerror="this.parentNode.innerHTML=\'<' + 'span class=\\\"overlay-project-fallback\\\">' + headerFallback + '</span>\'">'
          : '<span class="overlay-project-fallback">' + headerFallback + '</span>') +
      '</div>' +
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
  setPortfolioBackgroundInert(true);

  // Focus the close button for accessibility
  if (closeBtn) closeBtn.focus();
}

function closeOverlay() {
  var overlay = document.getElementById('overlay');
  if (overlay) {
    overlay.classList.remove('active', 'case-study-mode');
    overlay.setAttribute('aria-hidden', 'true');
  }
  document.body.style.overflow = '';
  setPortfolioBackgroundInert(false);
  const returnTarget = lastRecentTrigger || lastOverlayTrigger;
  if (returnTarget && returnTarget.isConnected) {
    returnTarget.focus();
  }
  lastRecentTrigger = null;
  lastOverlayTrigger = null;
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
// Recent project index + case-study experience
// ============================================================
let activeRecentFilter = 'All';
let lastRecentTrigger = null;

function createRecentProjectCard(project) {
  const card = document.createElement('button');
  card.type = 'button';
  card.className = 'recent-project-card recent-project-' + project.size;
  card.dataset.project = project.id;
  card.style.setProperty('--project-accent', project.accent);
  card.setAttribute('aria-label', 'Open ' + project.title + ' case study');

  const tagsHtml = project.tech.slice(0, 4)
    .map(function (tag) { return '<span>' + escapeHtml(tag) + '</span>'; })
    .join('');

  card.innerHTML =
    '<span class="recent-project-media">' +
      '<img src="' + escapeHtml(project.screenshots[0].src) + '" alt="' + escapeHtml(project.title + ' — ' + project.screenshots[0].label) + '" loading="lazy" decoding="async">' +
    '</span>' +
    '<span class="recent-project-copy">' +
      '<span class="recent-project-kicker">' +
        '<span>' + escapeHtml(project.type) + '</span>' +
        '<span class="recent-project-status">' + escapeHtml(project.status) + '</span>' +
      '</span>' +
      '<strong>' + escapeHtml(project.title) + '</strong>' +
      '<span class="recent-project-summary">' + escapeHtml(project.summary) + '</span>' +
      '<span class="recent-project-role">' + escapeHtml(project.role) + '</span>' +
      '<span class="recent-project-tags">' + tagsHtml + '</span>' +
      '<span class="recent-project-cta">View project</span>' +
    '</span>';

  card.addEventListener('click', function () {
    openCaseStudy(project, card);
  });
  return card;
}

function renderRecentProjects() {
  const container = document.getElementById('featured-projects');
  if (!container) return;
  const visibleProjects = activeRecentFilter === 'All'
    ? PUBLIC_PROJECTS
    : PUBLIC_PROJECTS.filter(function (project) { return project.category === activeRecentFilter; });

  container.innerHTML = '';
  visibleProjects.forEach(function (project) {
    container.appendChild(createRecentProjectCard(project));
  });
  if (visibleProjects.length === 0) {
    container.innerHTML = '<p class="recent-empty">No selected projects are in this collection yet.</p>';
  }
}

function initRecentProjectFilters() {
  const filterGroup = document.getElementById('recent-project-filters');
  if (!filterGroup) return;
  filterGroup.querySelectorAll('.recent-filter').forEach(function (button) {
    button.addEventListener('click', function () {
      activeRecentFilter = button.getAttribute('data-filter') || 'All';
      filterGroup.querySelectorAll('.recent-filter').forEach(function (candidate) {
        const isActive = candidate === button;
        candidate.classList.toggle('active', isActive);
        candidate.setAttribute('aria-pressed', String(isActive));
      });
      renderRecentProjects();
    });
  });
}

function projectIndexHtml(activeProject) {
  return PUBLIC_PROJECTS.map(function (project, index) {
    const activeClass = project.id === activeProject.id ? ' active' : '';
    return '<button type="button" class="case-study-index-item' + activeClass + '" data-project-id="' + escapeHtml(project.id) + '">' +
      '<span class="case-study-number">' + String(index + 1).padStart(2, '0') + '</span>' +
      '<span><strong>' + escapeHtml(project.title) + '</strong><small>' + escapeHtml(project.type) + '</small><em>' + escapeHtml(project.status) + '</em></span>' +
    '</button>';
  }).join('');
}

function caseStudyActionsHtml(project) {
  let html = '<a class="case-study-action primary" href="' + escapeHtml(project.repoUrl) + '" target="_blank" rel="noopener noreferrer">View repository</a>';
  if (project.releaseUrl) {
    const label = project.id === 'flowcue-recent' ? 'Download v1.2.0' : 'Open live preview';
    html += '<a class="case-study-action" href="' + escapeHtml(project.releaseUrl) + '" target="_blank" rel="noopener noreferrer">' + label + '</a>';
  }
  (project.resources || []).forEach(function (resource) {
    html += '<a class="case-study-action" href="' + escapeHtml(resource.url) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(resource.label) + '</a>';
  });
  return html;
}

function openCaseStudy(project, trigger) {
  const overlay = document.getElementById('overlay');
  const content = document.getElementById('overlay-content');
  if (!overlay || !content) return;
  if (trigger && !overlay.classList.contains('active')) {
    lastRecentTrigger = trigger;
    lastOverlayTrigger = trigger;
  }

  overlay.style.setProperty('--project-primary', project.accent);
  overlay.setAttribute('aria-hidden', 'false');
  overlay.classList.add('case-study-mode');

  const stackHtml = project.tech.map(function (tag) {
    return '<span>' + escapeHtml(tag) + '</span>';
  }).join('');
  const thumbnailsHtml = project.screenshots.map(function (shot, index) {
    return '<button type="button" class="case-study-thumb' + (index === 0 ? ' active' : '') + '" data-shot-index="' + index + '">' +
      '<img src="' + escapeHtml(shot.src) + '" alt="">' +
      '<span>' + escapeHtml(shot.label) + '</span>' +
    '</button>';
  }).join('');

  content.innerHTML =
    '<div class="case-study-shell">' +
      '<div class="case-study-topbar">' +
        '<button type="button" class="case-study-back">Back to all work</button>' +
        '<span>Portfolio / 2026</span>' +
        '<button type="button" class="case-study-close" aria-label="Close project details">Close</button>' +
      '</div>' +
      '<div class="case-study-layout">' +
        '<aside class="case-study-index" aria-label="Recent projects">' +
          '<p>Recent builds</p>' + projectIndexHtml(project) +
        '</aside>' +
        '<main class="case-study-main">' +
          '<div class="case-study-media">' +
            '<img id="case-study-main-image" src="' + escapeHtml(project.screenshots[0].src) + '" alt="' + escapeHtml(project.title + ' — ' + project.screenshots[0].label) + '">' +
          '</div>' +
          '<div class="case-study-thumbs" aria-label="Project screenshots">' + thumbnailsHtml + '</div>' +
        '</main>' +
        '<aside class="case-study-details">' +
          '<div class="case-study-heading">' +
            '<p>' + escapeHtml(project.type) + '</p>' +
            '<h3 id="overlay-title">' + escapeHtml(project.title) + '</h3>' +
            '<span class="case-study-status">' + escapeHtml(project.status) + '</span>' +
          '</div>' +
          '<p class="case-study-summary">' + escapeHtml(project.summary) + '</p>' +
          '<dl class="case-study-meta">' +
            '<div><dt>Role</dt><dd>' + escapeHtml(project.role) + '</dd></div>' +
            '<div><dt>Stack</dt><dd class="case-study-stack">' + stackHtml + '</dd></div>' +
          '</dl>' +
          '<div class="case-study-facts">' +
            '<section><h4>Challenge</h4><p>' + escapeHtml(project.challenge) + '</p></section>' +
            '<section><h4>Built</h4><p>' + escapeHtml(project.built) + '</p></section>' +
            '<section><h4>Proof</h4><p>' + escapeHtml(project.proof) + '</p></section>' +
          '</div>' +
          '<div class="case-study-boundary"><strong>Honest boundary</strong><p>' + escapeHtml(project.boundary) + '</p></div>' +
          '<div class="case-study-actions">' + caseStudyActionsHtml(project) + '</div>' +
        '</aside>' +
      '</div>' +
    '</div>';

  content.querySelector('.case-study-back').addEventListener('click', closeOverlay);
  content.querySelector('.case-study-close').addEventListener('click', closeOverlay);
  content.querySelectorAll('.case-study-index-item').forEach(function (button) {
    button.addEventListener('click', function () {
      const selected = PUBLIC_PROJECTS.find(function (candidate) {
        return candidate.id === button.getAttribute('data-project-id');
      });
      if (selected) openCaseStudy(selected, lastRecentTrigger);
    });
  });
  content.querySelectorAll('.case-study-thumb').forEach(function (button) {
    button.addEventListener('click', function () {
      const index = Number(button.getAttribute('data-shot-index'));
      const shot = project.screenshots[index];
      const image = content.querySelector('#case-study-main-image');
      if (!shot || !image) return;
      image.src = shot.src;
      image.alt = project.title + ' — ' + shot.label;
      content.querySelectorAll('.case-study-thumb').forEach(function (candidate) {
        candidate.classList.toggle('active', candidate === button);
      });
    });
  });

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  setPortfolioBackgroundInert(true);
  content.querySelector('.case-study-close').focus();
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

  const cardMedia = project.logo || project.poster || '';
  const fallbackText = escapeHtml((project.title || 'P').slice(0, 2).toUpperCase());

  card.innerHTML =
    '<div class="project-card-media">' +
      (cardMedia
        ? '<img src="' + escapeHtml(cardMedia) + '" alt="' + escapeHtml(project.title) + ' visual" class="project-card-logo" onerror="this.parentNode.innerHTML=\'<' + 'span class=\\\"project-card-fallback\\\" style=\\\"background:' + project.theme.gradient + '\\\">' + fallbackText + '</span>\'">'
        : '<span class="project-card-fallback" style="background:' + project.theme.gradient + '">' + fallbackText + '</span>') +
    '</div>' +
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
  const card = document.createElement('button');
  card.type = 'button';
  card.className = 'project-card side-project-card type-' + slugifyType(project.type || 'Other');
  card.setAttribute('aria-label', project.title + ': click to view details');
  card.style.setProperty('--side-accent', project.accent);

  card.innerHTML =
    '<div class="side-card-head">' +
      '<span class="side-type-chip">' + escapeHtml(project.type || 'Other') + '</span>' +
      '<span class="side-language">' + escapeHtml(project.language || 'Unknown') + '</span>' +
    '</div>' +
    '<h3>' + escapeHtml(project.title) + '</h3>' +
    '<p>' + escapeHtml(project.description || 'No description available.') + '</p>' +
    '<span class="side-card-cta">View details</span>';

  function openThis() { openSideOverlay(project); }
  card.addEventListener('click', openThis);
  return card;
}

// Lightweight overlay for side (GitHub) projects
function openSideOverlay(project) {
  const fakeProject = {
    title: project.title,
    tagline: project.description || '',
    description: project.description || 'No description available.',
    tech: [project.type || 'Other', project.language || 'Unknown'],
    youtubeId: null,
    poster: null,
    logo: project.image || '',
    dissertation: null,
    repoUrl: project.url || null,
    theme: {
      primary: project.accent || '#007acc',
      secondary: '#64ffda',
      gradient: 'linear-gradient(135deg, ' + (project.accent || '#007acc') + ' 0%, #64ffda 100%)',
      cardGradient: ''
    }
  };
  openOverlay(fakeProject);
}

// ============================================================
// Side Projects Pagination
// ============================================================
let sideProjects = [];
let filteredSideProjects = [];
let sideProjectsPage = 0;
let sideProjectsPerPage = 9;
let activeSideType = 'All';
const SIDE_PROJECT_TAXONOMY = [
  'Cybersecurity',
  'Websites',
  'Web App',
  'Tooling',
  'Mobile',
  'AI/Data',
  'Game',
  'Other'
];

// A deliberate public archive. Repositories not listed here remain available on
// GitHub but do not appear automatically in the recruiter-facing portfolio.
const CURATED_ARCHIVE = [
  { fullName: 'JakkuAzzo/AutoTimeSheet-GHP', description: 'A staff operations portal for timesheets and practical business workflows.' },
  { fullName: 'JakkuAzzo/codex-mac-ui' },
  { fullName: 'JakkuAzzo/Myriad' },
  { fullName: 'JakkuAzzo/MultiVol' },
  { fullName: 'JakkuAzzo/GetMeHired-LinkedIn' },
  { fullName: 'JakkuAzzo/GuyRofe' },
  { fullName: 'JakkuAzzo/SarahMaslinBosher' },
  { fullName: 'JakkuAzzo/tildesec' },
  { fullName: 'JakkuAzzo/torNmap' },
  { fullName: 'JakkuAzzo/onionCHecker' },
  { fullName: 'NathanBrownBennett/genreq' },
  { fullName: 'NathanBrownBennett/DisplayPlacerEasyMode' },
  { fullName: 'NathanBrownBennett/OutlookOrganiser' },
  { fullName: 'NathanBrownBennett/AutoTimeSheet' }
];

function getSideProjectsPerPage() {
  if (window.innerWidth <= 600) return 6;
  if (window.innerWidth <= 900) return 6;
  return 9;
}

function slugifyType(type) {
  return String(type || 'other').toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

function stringToColor(text) {
  let hash = 0;
  const value = String(text || 'project');
  for (let i = 0; i < value.length; i += 1) {
    hash = value.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash) % 360;
  return 'hsl(' + hue + ', 78%, 60%)';
}

function inferProjectType(repo) {
  const name = (repo.name || '').toLowerCase();
  const description = (repo.description || '').toLowerCase();
  const language = (repo.language || '').toLowerCase();
  const homepage = (repo.homepage || '').toLowerCase();
  const text = name + ' ' + description;

  if (/website|portfolio|landing page|wordpress|webflow|squarespace|wix|client site|marketing site/.test(text)) return 'Websites';
  if (/guy\s*rofe|guyrofe|shayonika/.test(text)) return 'Websites';
  if (/\.com|\.co\.uk|\.dev/.test(homepage)) return 'Websites';
  if (/security|cyber|crypto|forensic|hacker|pentest|auth|privacy|encrypt/.test(text)) return 'Cybersecurity';
  if (/game|play|adventure|quest|blockbash/.test(text)) return 'Game';
  if (/mobile|android|ios|react native|flutter/.test(text)) return 'Mobile';
  if (/ai|ml|machine learning|llm|vision|neural|model/.test(text)) return 'AI/Data';
  if (/tool|cli|script|calc|compiler|extension|plugin|automation/.test(text)) return 'Tooling';
  if (/web|site|frontend|backend|api|dashboard|app/.test(text)) return 'Web App';
  if (/python|typescript|javascript|go|java|c\+\+|rust/.test(language)) {
    return language === 'python' ? 'Tooling' : 'Web App';
  }
  return 'Other';
}

function refreshFilteredSideProjects() {
  filteredSideProjects = activeSideType === 'All'
    ? sideProjects.slice()
    : sideProjects.filter(function (project) { return project.type === activeSideType; });
}

function renderSideProjectFilters() {
  const filterContainer = document.getElementById('side-project-filters');
  if (!filterContainer) return;

  const uniqueTypes = sideProjects
    .map(function (project) { return project.type; })
    .filter(function (type, index, arr) { return arr.indexOf(type) === index; })
    .sort(function (a, b) {
      const orderA = SIDE_PROJECT_TAXONOMY.indexOf(a);
      const orderB = SIDE_PROJECT_TAXONOMY.indexOf(b);
      if (orderA === -1 && orderB === -1) return a.localeCompare(b);
      if (orderA === -1) return 1;
      if (orderB === -1) return -1;
      return orderA - orderB;
    });

  const countsByType = sideProjects.reduce(function (acc, project) {
    const key = project.type || 'Other';
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  const unknownTypes = uniqueTypes.filter(function (type) {
    return SIDE_PROJECT_TAXONOMY.indexOf(type) === -1;
  });
  const allTypes = ['All'].concat(SIDE_PROJECT_TAXONOMY).concat(unknownTypes);
  filterContainer.innerHTML = '';
  allTypes.forEach(function (type) {
    const count = type === 'All' ? sideProjects.length : (countsByType[type] || 0);
    const btn = document.createElement('button');
    btn.className = 'side-filter-btn' + (type === activeSideType ? ' active' : '');
    btn.type = 'button';
    btn.innerHTML =
      '<span class="side-filter-label">' + escapeHtml(type) + '</span>' +
      '<span class="side-filter-count">' + String(count) + '</span>';
    btn.setAttribute('aria-pressed', String(type === activeSideType));
    btn.setAttribute('aria-label', type + ', ' + count + ' projects');
    btn.addEventListener('click', function () {
      activeSideType = type;
      sideProjectsPage = 0;
      refreshFilteredSideProjects();
      renderSideProjectFilters();
      renderSideProjects();
    });
    filterContainer.appendChild(btn);
  });
}

function renderSideProjects() {
  const sideContainer = document.getElementById('side-projects');
  if (!sideContainer) return;

  refreshFilteredSideProjects();
  sideContainer.innerHTML = '';
  sideProjectsPerPage = getSideProjectsPerPage();
  const totalPages = Math.ceil(filteredSideProjects.length / sideProjectsPerPage) || 1;
  if (sideProjectsPage >= totalPages) sideProjectsPage = 0;

  const start = sideProjectsPage * sideProjectsPerPage;
  const end = start + sideProjectsPerPage;
  filteredSideProjects.slice(start, end).forEach(function (project) {
    sideContainer.appendChild(createSideCard(project));
  });

  if (filteredSideProjects.length === 0) {
    sideContainer.innerHTML = '<p class="side-empty-state">No side projects match this type yet.</p>';
  }

  const nextButton = document.getElementById('side-projects-next');
  if (nextButton) {
    const hasMultiplePages = filteredSideProjects.length > sideProjectsPerPage;
    nextButton.style.display = hasMultiplePages ? 'inline-flex' : 'none';
  }
}

function handleSideProjectsNext() {
  sideProjectsPerPage = getSideProjectsPerPage();
  const totalPages = Math.ceil(filteredSideProjects.length / sideProjectsPerPage);
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
    'https://api.github.com/users/' + user + '/repos?sort=updated&per_page=100',
    {
      headers: {
        Accept: 'application/vnd.github+json'
      }
    }
  );
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
}

async function displayProjects() {
  if (document.body.classList.contains('home-page')) return;
  if (
    !document.getElementById('featured-projects') &&
    !document.getElementById('side-projects')
  ) return;

  renderRecentProjects();

  try {
    const users = ['NathanBrownBennett', 'JakkuAzzo'];
    const repoResults = await Promise.allSettled(users.map(loadRepos));
    const repos = repoResults
      .filter(function (result) { return result.status === 'fulfilled'; })
      .flatMap(function (result) { return result.value; });
    if (repos.length === 0) throw new Error('No public repositories were available');
    const repoMap = new Map(repos.map(function (repo) {
      return [(repo.full_name || '').toLowerCase(), repo];
    }));

    sideProjects = CURATED_ARCHIVE.map(function (entry) {
      const repo = repoMap.get(entry.fullName.toLowerCase());
      if (!repo) return null;
      return {
        title: repo.name,
        description: entry.description || repo.description || 'Public project with source and development history available on GitHub.',
        language: repo.language || 'Mixed stack',
        url: repo.html_url || '',
        image: 'https://opengraph.githubassets.com/1/' + repo.full_name,
        type: inferProjectType(repo),
        accent: stringToColor(repo.full_name || repo.name)
      };
    }).filter(Boolean);
    sideProjectsPage = 0;
    renderSideProjectFilters();
    renderSideProjects();
  } catch (err) {
    // Side projects unavailable — hide that section gracefully
    const sideContainer = document.getElementById('side-projects');
    if (sideContainer) {
      sideContainer.innerHTML =
        '<p style="color:var(--text-muted);padding:1rem;">Side projects unavailable right now.</p>';
    }
    const filterContainer = document.getElementById('side-project-filters');
    if (filterContainer) filterContainer.innerHTML = '';
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
  const elements = document.querySelectorAll('.fade-in');
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elements.forEach(function (element) { element.classList.add('visible'); });
    return;
  }
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(function (el) {
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

  function closeMobileNav(returnFocus) {
    mobileNav.classList.remove('open');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileNav.setAttribute('aria-hidden', 'true');
    if (returnFocus) hamburger.focus();
  }

  hamburger.addEventListener('click', function () {
    const isOpen = mobileNav.classList.toggle('open');
    hamburger.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    mobileNav.setAttribute('aria-hidden', String(!isOpen));
    if (isOpen) {
      const firstLink = mobileNav.querySelector('.mobile-nav-link');
      if (firstLink) firstLink.focus();
    }
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

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
      closeMobileNav(true);
    }
  });
}

// ============================================================
// Navbar scroll effect
// ============================================================
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('back-to-top');
  if (!navbar) return;
  window.addEventListener('scroll', function () {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
    if (backToTop) backToTop.classList.toggle('visible', window.scrollY > window.innerHeight);
  }, { passive: true });
}

function initSectionNavigation() {
  if (!('IntersectionObserver' in window)) return;

  const links = Array.from(document.querySelectorAll(
    '.nav-links a[href^="#"], .mobile-nav-link[href^="#"]'
  ));
  const sections = links
    .map(function (link) { return document.querySelector(link.getAttribute('href')); })
    .filter(function (section, index, all) {
      return section && all.indexOf(section) === index;
    });

  if (!sections.length) return;

  const observer = new IntersectionObserver(function (entries) {
    const visible = entries
      .filter(function (entry) { return entry.isIntersecting; })
      .sort(function (a, b) { return b.intersectionRatio - a.intersectionRatio; })[0];

    if (!visible) return;
    const activeHref = '#' + visible.target.id;
    links.forEach(function (link) {
      if (link.getAttribute('href') === activeHref) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }, {
    rootMargin: '-25% 0px -60% 0px',
    threshold: [0, 0.1, 0.5]
  });

  sections.forEach(function (section) { observer.observe(section); });
}

function initContactFormStatus() {
  const success = document.getElementById('contact-success');
  if (!success) return;
  const params = new URLSearchParams(window.location.search);
  if (params.get('sent') === '1') {
    success.hidden = false;
  }
}

function initBackgroundFader() {
  const fader = document.getElementById('background-fader');
  if (!fader) return;

  const images = [
    'assets/Background_Images/optimized/bg-01.webp',
    'assets/Background_Images/optimized/bg-02.webp',
    'assets/Background_Images/optimized/bg-03.webp',
    'assets/Background_Images/optimized/bg-04.webp',
    'assets/Background_Images/optimized/bg-05.webp',
    'assets/Background_Images/optimized/bg-06.webp',
    'assets/Background_Images/optimized/bg-07.webp',
    'assets/Background_Images/optimized/bg-08.webp',
    'assets/Background_Images/optimized/bg-09.webp',
    'assets/Background_Images/optimized/bg-10.webp'
  ];
  let index = 0;

  function setBackground(imageIndex) {
    fader.style.backgroundImage = "url('" + images[imageIndex] + "')";
  }

  setBackground(index);
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  window.setInterval(function () {
    index = (index + 1) % images.length;
    fader.classList.add('fade-out');
    window.setTimeout(function () {
      setBackground(index);
      fader.classList.remove('fade-out');
    }, 1200);
  }, 7000);
}

function pruneHomeCollections() {
  if (!document.body.classList.contains('home-page')) return;
  document.querySelectorAll('#projects, #research, #updates').forEach(function (section) {
    section.remove();
  });
}

// ============================================================
// DOMContentLoaded — wire everything up
// ============================================================
document.addEventListener('DOMContentLoaded', function () {
  pruneHomeCollections();
  displayProjects();
  initRecentProjectFilters();
  initScrollAnimations();
  initMobileNav();
  initNavbarScroll();
  initSectionNavigation();
  initContactFormStatus();
  initBackgroundFader();

  // Overlay backdrop click & keyboard close
  const overlay = document.getElementById('overlay');
  if (overlay) {
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeOverlay();
    });
    overlay.addEventListener('keydown', function (e) {
      trapOverlayFocus(e, overlay);
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay && overlay.classList.contains('active')) closeOverlay();
  });

  // Side projects pagination button
  const sideNext = document.getElementById('side-projects-next');
  if (sideNext) {
    sideNext.addEventListener('click', handleSideProjectsNext);
  }
});
