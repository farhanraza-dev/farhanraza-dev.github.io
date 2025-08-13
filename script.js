const root = document.documentElement;
const toggle = document.getElementById('themeToggle');
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const current = localStorage.getItem('theme') || 'dark';
if (current === 'light') root.classList.add('light');
toggle.addEventListener('click', () => {
  root.classList.toggle('light');
  localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
});