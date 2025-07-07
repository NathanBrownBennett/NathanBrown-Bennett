// Pull carousel items dynamically from these GitHub repo slugs, in this order:
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
  const response = await fetch(`https://api.github.com/users/${user}/repos?sort=updated`);
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
}

// Overlay/Popup: blur background when active
function setBodyBlur(active) {
  if (active) {
    document.body.classList.add('blurred');
  } else {
    document.body.classList.remove('blurred');
  }
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
  // no body-blur here—let the overlay background handle itself
}

function closeOverlay() {
  document.getElementById('overlay').classList.remove('active');
  // don't touch the About-popup blur
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

const MOBILE_MAX_WIDTH = 900;

document.addEventListener('DOMContentLoaded', () => {
  displayRepos();
  initScrollAnimations();
  initMainCarousel(); // Initialize the main content carousel

  // Fade in About section and hero profile
  setTimeout(() => {
    document.querySelector('#about-section').classList.add('visible');
    const heroProfile = document.querySelector('.hero-profile-pic');
    if (heroProfile) heroProfile.classList.add('visible');
  }, 200);

  // About Me Read More button logic
  const aboutSection = document.querySelector('#about-section');
  const aboutElement = document.querySelector('.about');
  const readMoreBtn = document.getElementById('about-read-more');
  if (aboutSection && aboutElement && readMoreBtn) {
    readMoreBtn.addEventListener('click', function(e) {
      if (window.innerWidth <= MOBILE_MAX_WIDTH) {
        e.preventDefault();
        showAboutPopup();
      } else {
        aboutElement.classList.toggle('expanded');
        if (aboutElement.classList.contains('expanded')) {
          readMoreBtn.textContent = 'Show Less';
        } else {
          readMoreBtn.textContent = 'Read More';
          aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  }

  // About Me Read More popup logic
  function showAboutPopup() {
    const popup = document.getElementById('about-popup');
    if (!popup) return;
    document.body.classList.add('blurred');
    aboutSection.classList.add('position-relative');
    popup.classList.add('active');
  }
  function hideAboutPopup() {
    const popup = document.getElementById('about-popup');
    if (!popup) return;
    document.body.classList.remove('blurred');
    aboutSection.classList.remove('position-relative');
    popup.classList.remove('active');
  }
  function setAboutPopupParagraphs(paragraphs) {
    let idx = 0;
    const paraDiv = document.getElementById('about-popup-paragraph');
    const prevBtn = document.getElementById('about-popup-prev');
    const nextBtn = document.getElementById('about-popup-next');
    function render() {
      paraDiv.classList.remove('visible');
      setTimeout(() => {
        paraDiv.innerHTML = paragraphs[idx];
        paraDiv.classList.add('visible');
      }, 100);
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
    const overlay = document.getElementById('about-popup');
    if (overlay) overlay.addEventListener('click', (e) => {
      if (e.target === overlay) hideAboutPopup();
    });
    // Set paragraphs from About section
    const aboutSection = document.querySelector('#about-section');
    if (!aboutSection) return;
    const summary = aboutSection.querySelector('.about-summary');
    const projects = aboutSection.querySelector('.about-projects');
    const extra = aboutSection.querySelector('.about-extra');
    let paragraphs = [];
    if (summary) summary.querySelectorAll('p').forEach(p => paragraphs.push(p.outerHTML));
    // --- MOBILE/TABLET: Each project as a separate slide ---
    if (window.innerWidth <= MOBILE_MAX_WIDTH && projects) {
      const lis = Array.from(projects.querySelectorAll('li'));
      for (let i = 0; i < lis.length; i += 2) {
        // li: project title, li: description
        const titleLi = lis[i];
        const descLi = lis[i+1];
        if (titleLi && descLi) {
          paragraphs.push(`<div style='margin-bottom:0.5em;'>${titleLi.outerHTML}</div><div style='font-size:1em;'>${descLi.textContent}</div>`);
        } else if (titleLi) {
          paragraphs.push(titleLi.outerHTML);
        }
      }
    } else if (projects) {
      // Desktop: show all projects as a list
      paragraphs.push(projects.innerHTML);
    }
    if (extra) extra.querySelectorAll('p').forEach(p => paragraphs.push(p.outerHTML));
    setAboutPopupParagraphs(paragraphs);
  }

  setupAboutPopup();

  // Copy to clipboard logic for About Me popup
  function setupCopyIcons() {
    const email = document.getElementById('about-popup-email');
    const phone = document.getElementById('about-popup-phone');
    const copyEmail = document.getElementById('copy-email');
    const copyPhone = document.getElementById('copy-phone');
    if (copyEmail && email) {
      copyEmail.onclick = function() {
        navigator.clipboard.writeText(email.textContent.trim());
        copyEmail.classList.add('copied');
        setTimeout(() => copyEmail.classList.remove('copied'), 600);
      };
    }
    if (copyPhone && phone) {
      copyPhone.onclick = function() {
        navigator.clipboard.writeText(phone.textContent.trim());
        copyPhone.classList.add('copied');
        setTimeout(() => copyPhone.classList.remove('copied'), 600);
      };
    }
  }

  function flashCopied(el) {
    el.classList.add('copied');
    setTimeout(() => el.classList.remove('copied'), 1200);
  }

  function setupContactOverlay() {
    const nameEl = document.getElementById('contact-name');
    const phoneEl = document.getElementById('contact-phone');
    const emailEl = document.getElementById('contact-email');

    if (nameEl) {
      nameEl.addEventListener('click', () => {
        navigator.clipboard.writeText(nameEl.dataset.copy || nameEl.textContent)
          .then(() => flashCopied(nameEl));
      });
    }
    if (phoneEl) {
      phoneEl.addEventListener('click', () => {
        navigator.clipboard.writeText(phoneEl.dataset.copy || phoneEl.textContent)
          .then(() => flashCopied(phoneEl));
      });
    }
    if (emailEl) {
      emailEl.addEventListener('click', () => {
        navigator.clipboard.writeText(emailEl.textContent)
          .then(() => flashCopied(emailEl));
      });
    }
  }

  setupContactOverlay();

  // Scroll-triggered transitions
  let triggered = false;
  function handleScroll() {
    const aboutSection = document.querySelector('#about-section');
    const heroProfile = document.querySelector('.hero-profile-pic');
    const hero = document.querySelector('.hero-text');
    const mainSections = document.querySelectorAll('.projects-section');
    const scrollForMore = document.querySelector('.scroll-for-more');
    
    if (!aboutSection) return;
    
    const aboutBottom = aboutSection.getBoundingClientRect().bottom;
    const threshold = window.innerHeight * 0.2;
    if (aboutBottom <= threshold && !triggered) {
      aboutSection.classList.add('fade-out');
      if (heroProfile) heroProfile.classList.add('sticky');
      if (hero) hero.classList.add('shrink-move');
      mainSections.forEach(s => s.classList.add('visible'));
      if (scrollForMore) scrollForMore.classList.add('hide');
      triggered = true;
    } else if (aboutBottom > threshold && triggered) {
      aboutSection.classList.remove('fade-out');
      if (heroProfile) heroProfile.classList.remove('sticky');
      if (hero) hero.classList.remove('shrink-move');
      mainSections.forEach(s => s.classList.remove('visible'));
      if (scrollForMore) scrollForMore.classList.remove('hide');
      triggered = false;
    }
  }
  window.addEventListener('scroll', handleScroll);
  handleScroll();

  // Hide main/side projects initially
  document.querySelectorAll('.projects-section').forEach(s => s.classList.remove('visible'));
  // Show scroll-for-more initially
  const scrollForMore = document.querySelector('.scroll-for-more');
  if (scrollForMore) scrollForMore.classList.remove('hide');

  document.getElementById('side-projects-next').addEventListener('click', handleSideProjectsNext);

  setupCopyIcons();
});

// Social Media Content Functionality
function loadSocialMediaContent() {
  // Since we can't access social media APIs directly from the client-side without authentication,
  // we'll use placeholder content that simulates dynamic updates
  const socialContent = {
    instagram: [
      "Latest: Exploring automated security testing frameworks",
      "New post: Cybersecurity trends for 2025",
      "Behind the scenes: Working on my MSc research"
    ],
    linkedin: [
      "Published: Network Security Best Practices",
      "Shared: Insights from Kingston University research",
      "Connected: Growing professional network in cybersecurity"
    ],
    youtube: [
      "Latest video: Device Provisioning Explained",
      "Tutorial: Building Security Tools with Python",
      "Walkthrough: Cyclomatic Complexity Analysis"
    ]
  };
  
  // Simulate loading delay
  setTimeout(() => {
    const instagramEl = document.getElementById('instagram-posts');
    const linkedinEl = document.getElementById('linkedin-posts');
    const youtubeEl = document.getElementById('youtube-posts');
    
    if (instagramEl) {
      instagramEl.textContent = socialContent.instagram[Math.floor(Math.random() * socialContent.instagram.length)];
    }
    
    if (linkedinEl) {
      linkedinEl.textContent = socialContent.linkedin[Math.floor(Math.random() * socialContent.linkedin.length)];
    }
    
    if (youtubeEl) {
      youtubeEl.textContent = socialContent.youtube[Math.floor(Math.random() * socialContent.youtube.length)];
    }
  }, 1000);
}

// Initialize social media content when page loads
document.addEventListener('DOMContentLoaded', loadSocialMediaContent);

async function displayRepos() {
  const mainContainer = document.getElementById('main-projects');
  if (!mainContainer) return;
  const carouselTrack = mainContainer.querySelector('.carousel-track');
  if (carouselTrack) carouselTrack.innerHTML = '';

  try {
    const users = ['NathanBrownBennett', 'JakkuAzzo'];
    const reposArrays = await Promise.all(users.map(loadRepos));
    const repos = reposArrays.flat();
    repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

    // use our ordered slugs
    const mainNames = MAIN_PROJECT_ORDER;

    // build case-insensitive lookup
    const repoMap = {};
    repos.forEach(r => { repoMap[r.name.toLowerCase()] = r; });

    mainNames.forEach(slug => {
      const repo = repoMap[slug.toLowerCase()];
      if (!repo) return;  // skip if not found
      const project = {
        // you can title-case or replace dashes, e.g. repo.name.replace(/-/g,' ')
        title: repo.name,
        description: repo.description || '',
        link: repo.html_url
      };

      const card = createCard(project, true);
      carouselTrack.appendChild(card);
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
  }
}

function initCarousel() {
  const track = document.querySelector('.carousel-track');
  const items = track.querySelectorAll('.carousel-item');
  let index = 0;
  
  function update() {
    if (items.length === 0) return;
    
    // Calculate the width of one item plus gap
    const firstItem = items[0];
    const itemWidth = firstItem.offsetWidth;
    const trackStyle = window.getComputedStyle(track);
    const gap = parseFloat(trackStyle.gap) || 40; // fallback to 2.5rem = 40px
    
    const moveDistance = itemWidth + gap;
    const translateX = -(index * moveDistance);
    
    track.style.transform = `translateX(${translateX}px)`;
  }
  
  document.getElementById('prev-btn').addEventListener('click', () => {
    index = (index - 1 + items.length) % items.length;
    update();
  });
  document.getElementById('next-btn').addEventListener('click', () => {
    index = (index + 1) % items.length;
    update();
  });
  
  // Initial update and handle window resize
  update();
  window.addEventListener('resize', update);
}

// Main Content Carousel functionality
let currentSlide = 0;
const totalSlides = 3;

function updateCarousel() {
  const track = document.querySelector('.carousel-track');
  const indicators = document.querySelectorAll('.indicator');
  
  if (track) {
    track.style.transform = `translateX(-${currentSlide * 33.333333}%)`;
  }
  
  indicators.forEach((indicator, index) => {
    const isActive = index === currentSlide;
    indicator.classList.toggle('active', isActive);
    indicator.setAttribute('aria-selected', isActive);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

function goToSlide(slideIndex) {
  currentSlide = slideIndex;
  updateCarousel();
}

function initMainCarousel() {
  const indicators = document.querySelectorAll('.indicator');
  
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => goToSlide(index));
  });
  
  // Handle contact form submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // Create mailto link
      const subject = `Message from ${name}`;
      const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
      const mailtoLink = `mailto:nathanbrownbennett@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Reset form
      contactForm.reset();
    });
  }
  
  // Initialize carousel
  updateCarousel();
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

  document.querySelectorAll('.fade-in').forEach(el => {
    if (!el.classList.contains('manual-control')) {
      observer.observe(el);
    }
  });
}

// Update event listeners for About Me popup
const aboutReadMoreBtn = document.getElementById('about-read-more');
if (aboutReadMoreBtn) {
  aboutReadMoreBtn.addEventListener('click', showAboutPopup);
}
const aboutPopupCloseBtn = document.getElementById('about-popup-close');
if (aboutPopupCloseBtn) {
  aboutPopupCloseBtn.addEventListener('click', hideAboutPopup);
}

// Close About popup when clicking outside the content
const aboutPopup = document.getElementById('about-popup');
if (aboutPopup) {
  aboutPopup.addEventListener('click', function(e) {
    if (e.target === aboutPopup) hideAboutPopup();
  });
}

// Add touch support for mobile carousel navigation
let startX = 0;
let currentX = 0;
let isDragging = false;

function initTouchCarousel() {
  const carousel = document.querySelector('.main-carousel');
  if (!carousel) return;

  carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
  });

  carousel.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    currentX = e.touches[0].clientX;
  });

  carousel.addEventListener('touchend', () => {
    if (!isDragging) return;
    isDragging = false;
    
    const deltaX = currentX - startX;
    const threshold = 50; // Minimum swipe distance
    
    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
  });
}

// Initialize touch carousel after DOM is loaded
document.addEventListener('DOMContentLoaded', initTouchCarousel);

// Add keyboard navigation for carousel
function initKeyboardNavigation() {
  document.addEventListener('keydown', (e) => {
    // Only handle keyboard navigation when carousel is in focus
    const carousel = document.querySelector('.main-carousel');
    if (!carousel || !carousel.contains(document.activeElement)) return;
    
    switch(e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        prevSlide();
        break;
      case 'ArrowRight':
        e.preventDefault();
        nextSlide();
        break;
      case 'Home':
        e.preventDefault();
        goToSlide(0);
        break;
      case 'End':
        e.preventDefault();
        goToSlide(totalSlides - 1);
        break;
      case 'Tab':
        // Let tab work normally for navigation
        break;
    }
  });
}

// Initialize keyboard navigation
document.addEventListener('DOMContentLoaded', initKeyboardNavigation);
