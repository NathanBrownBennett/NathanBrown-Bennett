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
  try {
    const users = ['NathanBrownBennett', 'JakkuAzzo'];
    const reposArrays = await Promise.all(users.map(loadRepos));
    const repos = reposArrays.flat();
    repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

    const mainNames = Object.keys(MAIN_PROJECTS);

    repos.forEach(repo => {
      if (mainNames.includes(repo.name)) {
        const info = MAIN_PROJECTS[repo.name];
        if (info.visible) {
          const project = {
            title: info.title,
            description: info.description,
            link: repo.html_url
          };
          const card = createCard(project);
          mainContainer.appendChild(card);
        }
      } else {
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

document.addEventListener('DOMContentLoaded', displayRepos);
