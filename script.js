const ageGate = document.getElementById('ageGate');
const enterSite = document.getElementById('enterSite');
const leaveSite = document.getElementById('leaveSite');
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

if (localStorage.getItem('ageVerified') === 'yes') {
  ageGate.classList.add('hidden');
}

enterSite.addEventListener('click', () => {
  localStorage.setItem('ageVerified', 'yes');
  ageGate.classList.add('hidden');
});

leaveSite.addEventListener('click', () => {
  window.location.href = 'https://www.google.com';
});

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
