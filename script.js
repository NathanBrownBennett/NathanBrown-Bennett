async function loadRepos(user) {
  const response = await fetch(`https://api.github.com/users/${user}/repos?sort=updated`);
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
}

function createCard(repo) {
  const card = document.createElement('div');
  card.className = 'project-card';
  const name = document.createElement('h3');
  name.textContent = repo.name;
  const desc = document.createElement('p');
  desc.textContent = repo.description || 'No description';
  const link = document.createElement('a');
  link.href = repo.html_url;
  link.textContent = 'View on GitHub';
  link.target = '_blank';
  card.appendChild(name);
  card.appendChild(desc);
  card.appendChild(link);
  return card;
}

async function displayRepos() {
  const container = document.getElementById('projects');
  try {
    const users = ['NathanBrownBennett', 'JakkuAzzo'];
    const reposArrays = await Promise.all(users.map(loadRepos));
    const repos = reposArrays.flat();
    repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
    repos.forEach(repo => {
      container.appendChild(createCard(repo));
    });
  } catch (err) {
    container.textContent = 'Failed to load repositories.';
  }
}

document.addEventListener('DOMContentLoaded', displayRepos);
