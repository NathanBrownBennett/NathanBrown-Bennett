const MAIN_PROJECTS = {
  'Dynamic-Flowchart-For-Device-Provisioning': {
    title: 'Dynamic Flowchart for Device Provisioning',
    description: 'Interactive device provisioning flowchart.',
    visible: true
  },
  'CyclomaticComplexityCalc': {
    title: 'Cyclomatic Complexity Calculator',
    description: 'Tool for measuring code complexity.',
    visible: true
  },
  'MyMark': {
    title: 'MyMark',
    description: 'Media fingerprinting & blockchain watermarking tool.',
    visible: true
  },
  'BlockBash': {
    title: 'BlockBash',
    description: 'Visual cybersecurity education platform.',
    visible: true
  },
  'HackerGo': {
    title: 'HackerGo',
    description: 'Gamified cybersecurity adventure app.',
    visible: true
  }
};

async function loadRepos(user) {
  const response = await fetch(`https://api.github.com/users/${user}/repos?sort=updated`);
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
}

function openOverlay(project) {
  const overlay = document.getElementById('overlay');
  document.getElementById('overlay-title').textContent = project.title;
  document.getElementById('overlay-description').textContent = project.description || 'No description';
  const link = document.getElementById('overlay-link');
  if (project.link) {
    link.href = project.link;
    link.style.display = 'inline-block';
  } else {
    link.style.display = 'none';
  }
  overlay.classList.add('active');
}

function closeOverlay() {
  document.getElementById('overlay').classList.remove('active');
}

document.getElementById('overlay-close').addEventListener('click', closeOverlay);

// Allow clicking outside the popup content to close overlay
document.getElementById('overlay').addEventListener('click', function (e) {
  if (e.target === this) {
    closeOverlay();
  }
});

// Copy email to clipboard when clicking the name, show feedback
const profileName = document.getElementById('profile-name');
if (profileName) {
  profileName.addEventListener('click', function() {
    navigator.clipboard.writeText('nathanbrown-bennett@hotmail.com').then(() => {
      profileName.classList.add('copied');
      setTimeout(() => {
        profileName.classList.remove('copied');
      }, 1200);
    });
  });
}

function createCard(project, isCarousel = false) {
  const card = document.createElement('div');
  card.className = isCarousel ? 'project-card carousel-item' : 'project-card';

  const name = document.createElement('h3');
  name.textContent = project.title;

  const desc = document.createElement('p');
  desc.textContent = project.description || 'No description';

  card.appendChild(name);
  card.appendChild(desc);

  card.addEventListener('click', () => openOverlay(project));

  return card;
}

let sideProjects = [];
let sideProjectsPage = 0;
let sideProjectsPerPage = 9;

function getSideProjectsPerPage() {
  if (window.innerWidth <= 600) return 1;
  if (window.innerWidth <= 900) return 6;
  return 9;
}

function renderSideProjects() {
  const sideContainer = document.getElementById('side-projects');
  sideContainer.innerHTML = '';
  sideProjectsPerPage = getSideProjectsPerPage();
  const start = sideProjectsPage * sideProjectsPerPage;
  const end = start + sideProjectsPerPage;
  const projectsToShow = sideProjects.slice(start, end);
  projectsToShow.forEach(project => {
    const card = createCard(project);
    sideContainer.appendChild(card);
  });
}

function handleSideProjectsNext() {
  sideProjectsPerPage = getSideProjectsPerPage();
  const totalPages = Math.ceil(sideProjects.length / sideProjectsPerPage);
  sideProjectsPage = (sideProjectsPage + 1) % totalPages;
  renderSideProjects();
}

window.addEventListener('resize', () => {
  // Reset to first page and re-render on resize for correct layout
  sideProjectsPage = 0;
  renderSideProjects();
});

document.addEventListener('DOMContentLoaded', () => {
  displayRepos();
  initScrollAnimations();

  // Fade in About and profile-pic
  setTimeout(() => {
    document.querySelector('.about-container').classList.add('visible');
    document.querySelector('.profile-pic').classList.add('visible');
  }, 200);

  // About Me Read More button logic
  const aboutSection = document.querySelector('.about-container');
  const readMoreBtn = document.getElementById('about-read-more');
  if (aboutSection && readMoreBtn) {
    readMoreBtn.addEventListener('click', function() {
      aboutSection.classList.toggle('expanded');
      if (aboutSection.classList.contains('expanded')) {
        readMoreBtn.textContent = 'Show Less';
      } else {
        readMoreBtn.textContent = 'Read More';
        // Scroll back to top of about section if collapsed
        aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  // About Me Read More popup logic
  function showAboutPopup() {
    const popup = document.getElementById('about-popup');
    if (!popup) return;
    popup.classList.add('active');
  }
  function hideAboutPopup() {
    const popup = document.getElementById('about-popup');
    if (!popup) return;
    popup.classList.remove('active');
  }
  function setAboutPopupParagraphs(paragraphs) {
    let idx = 0;
    const paraDiv = document.getElementById('about-popup-paragraph');
    const prevBtn = document.getElementById('about-popup-prev');
    const nextBtn = document.getElementById('about-popup-next');
    function render() {
      paraDiv.textContent = paragraphs[idx];
      prevBtn.disabled = idx === 0;
      nextBtn.disabled = idx === paragraphs.length - 1;
    }
    prevBtn.onclick = () => { if (idx > 0) { idx--; render(); } };
    nextBtn.onclick = () => { if (idx < paragraphs.length - 1) { idx++; render(); } };
    render();
  }
  function setupAboutPopup() {
    const closeBtn = document.getElementById('about-popup-close');
    if (closeBtn) closeBtn.onclick = hideAboutPopup;
    // Set paragraphs from About section
    const aboutSection = document.querySelector('.about-container');
    if (!aboutSection) return;
    const summary = aboutSection.querySelector('.about-summary');
    const projects = aboutSection.querySelector('.about-projects');
    const extra = aboutSection.querySelector('.about-extra');
    let paragraphs = [];
    if (summary) summary.querySelectorAll('p').forEach(p => paragraphs.push(p.textContent));
    if (projects) paragraphs.push(projects.innerText);
    if (extra) extra.querySelectorAll('p').forEach(p => paragraphs.push(p.textContent));
    setAboutPopupParagraphs(paragraphs);
  }
  // Show popup on Read More for mobile/tablet
  function setupReadMorePopup() {
    const readMoreBtn = document.getElementById('about-read-more');
    if (!readMoreBtn) return;
    readMoreBtn.addEventListener('click', function(e) {
      if (window.innerWidth <= 900) {
        e.preventDefault();
        setupAboutPopup();
        showAboutPopup();
      }
    });
  }

  // Scroll-triggered transitions
  let triggered = false;
  window.addEventListener('scroll', function() {
    const about = document.querySelector('.about-container');
    const profile = document.querySelector('.profile-pic');
    const hero = document.querySelector('.hero-text');
    const mainSections = document.querySelectorAll('.projects-section');
    const scrollForMore = document.querySelector('.scroll-for-more');
    const triggerPoint = window.innerHeight * 0.35;
    if (window.scrollY > triggerPoint && !triggered) {
      about.classList.add('fade-out');
      profile.classList.add('sticky');
      hero.classList.add('shrink-move');
      mainSections.forEach(s => s.classList.add('visible'));
      if (scrollForMore) scrollForMore.classList.add('hide');
      triggered = true;
    } else if (window.scrollY <= triggerPoint && triggered) {
      about.classList.remove('fade-out');
      profile.classList.remove('sticky');
      hero.classList.remove('shrink-move');
      mainSections.forEach(s => s.classList.remove('visible'));
      if (scrollForMore) scrollForMore.classList.remove('hide');
      triggered = false;
    }
  });

  // Hide main/side projects initially
  document.querySelectorAll('.projects-section').forEach(s => s.classList.remove('visible'));
  // Show scroll-for-more initially
  const scrollForMore = document.querySelector('.scroll-for-more');
  if (scrollForMore) scrollForMore.classList.remove('hide');

  document.getElementById('side-projects-next').addEventListener('click', handleSideProjectsNext);
  setupReadMorePopup();
});

async function displayRepos() {
  const mainContainer = document.getElementById('main-projects');
  const sideContainer = document.getElementById('side-projects');
  const carouselTrack = mainContainer.querySelector('.carousel-track');
  if (carouselTrack) carouselTrack.innerHTML = '';
  try {
    const users = ['NathanBrownBennett', 'JakkuAzzo'];
    const reposArrays = await Promise.all(users.map(loadRepos));
    const repos = reposArrays.flat();
    repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

    const mainNames = Object.keys(MAIN_PROJECTS).filter(
      name => MAIN_PROJECTS[name].visible
    );

    mainNames.forEach(name => {
      const repo = repos.find(r => r.name === name);
      if (repo) {
        const info = MAIN_PROJECTS[name];
        const project = {
          title: info.title,
          description: info.description,
          link: repo.html_url
        };
        const card = createCard(project, true); // Pass true for carousel
        if (carouselTrack) {
          carouselTrack.appendChild(card);
        } else {
          mainContainer.appendChild(card);
        }
      }
    });

    // Collect side projects for paging
    sideProjects = [];
    repos.forEach(repo => {
      if (!mainNames.includes(repo.name)) {
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
    mainContainer.textContent = 'Failed to load repositories.';
    sideContainer.textContent = '';
  }
}

function initCarousel() {
  const track = document.querySelector('.carousel-track');
  const items = track.querySelectorAll('.carousel-item');
  let index = 0;
  function update() {
    track.style.transform = `translateX(-${index * 100}% )`;
  }
  document.getElementById('prev-btn').addEventListener('click', () => {
    index = (index - 1 + items.length) % items.length;
    update();
  });
  document.getElementById('next-btn').addEventListener('click', () => {
    index = (index + 1) % items.length;
    update();
  });
  update();
}

function initScrollAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}
