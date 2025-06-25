const MAIN_PROJECTS = {
  'Dynamic-Flowchart-For-Device-Provisioning-': {
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

function createCard(project) {
  const card = document.createElement('div');
  card.className = 'project-card carousel-item';

  const name = document.createElement('h3');
  name.textContent = project.title;

  const desc = document.createElement('p');
  desc.textContent = project.description || 'No description';

  card.appendChild(name);
  card.appendChild(desc);

  card.addEventListener('click', () => openOverlay(project));

  return card;
}

async function displayRepos() {
  const mainContainer = document.getElementById('main-projects');
  const sideContainer = document.getElementById('side-projects');
  // Get the carousel track inside main projects
  const carouselTrack = mainContainer.querySelector('.carousel-track');
  // Clear previous cards if any
  if (carouselTrack) carouselTrack.innerHTML = '';
  try {
    const users = ['NathanBrownBennett', 'JakkuAzzo'];
    const reposArrays = await Promise.all(users.map(loadRepos));
    const repos = reposArrays.flat();
    repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

    const mainNames = Object.keys(MAIN_PROJECTS).filter(
      name => MAIN_PROJECTS[name].visible
    );

    // Only show cards for visible main projects in the carousel track
    mainNames.forEach(name => {
      const repo = repos.find(r => r.name === name);
      if (repo) {
        const info = MAIN_PROJECTS[name];
        const project = {
          title: info.title,
          description: info.description,
          link: repo.html_url
        };
        const card = createCard(project);
        if (carouselTrack) {
          carouselTrack.appendChild(card);
        } else {
          mainContainer.appendChild(card); // fallback
        }
      }
    });

    // Show side projects (not in MAIN_PROJECTS or not visible)
    sideContainer.innerHTML = '';
    repos.forEach(repo => {
      if (!mainNames.includes(repo.name)) {
        const project = {
          title: repo.name,
          description: repo.description,
          link: repo.html_url
        };
        const card = createCard(project);
        sideContainer.appendChild(card);
      }
    });

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

document.addEventListener('DOMContentLoaded', () => {
  displayRepos();
  initScrollAnimations();
});
