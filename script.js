const root = document.documentElement;
const toggle = document.getElementById('themeToggle');
const year = document.getElementById('year');
year.textContent = new Date().getFullYear();

// Theme toggle with localStorage
const current = localStorage.getItem('theme') || 'dark';
if (current === 'light') root.classList.add('light');
toggle.addEventListener('click', () => {
  root.classList.toggle('light');
  localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
});

// Projects (update repo links later)
const projects = [
  {
    title: "Ashyana CRM",
    description: "End-to-end CRM with user hierarchy, project/lead management, affiliates. Reduced manual effort by 40%.",
    stack: "Laravel · Vue.js · MySQL",
    repo: "https://github.com/farhanraza-dev/ashyana-crm",
    live: "#"
  },
  {
    title: "Landlink Marketing CRM",
    description: "Real estate lead & property management with transfer and affiliate modules.",
    stack: "Laravel · Vue.js · MySQL",
    repo: "https://github.com/farhanraza-dev/landlink-crm",
    live: "#"
  },
  {
    title: "Mobile Case Designer",
    description: "Snap.svg powered design tool with real-time previews and admin CMS.",
    stack: "Laravel · Vue.js · Snap.svg",
    repo: "https://github.com/farhanraza-dev/mobile-case-designer",
    live: "#"
  },
  {
    title: "Airport Shuttle Reservation",
    description: "Real-time reservation and payments for US shuttle services.",
    stack: "Laravel · Vue.js · Stripe",
    repo: "https://github.com/farhanraza-dev/shuttle-reservation",
    live: "#"
  },
  {
    title: "Bitrix24 Integrations",
    description: "ETL pipelines and dashboards for Bitrix24 CRM data.",
    stack: "Laravel · Inertia.js · Vue.js",
    repo: "https://github.com/farhanraza-dev/bitrix24-integrations",
    live: "#"
  }
];

const grid = document.getElementById('projectsGrid');
projects.forEach(p => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <h3>${p.title}</h3>
    <p>${p.description}</p>
    <small>${p.stack}</small>
    <div style="display:flex;gap:10px;flex-wrap:wrap">
      <a href="${p.repo}" target="_blank">Repository ↗</a>
      <a href="${p.live}" target="_blank">Live Demo ↗</a>
    </div>`;
  grid.appendChild(card);
});