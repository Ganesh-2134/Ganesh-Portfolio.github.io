const toggle = document.querySelector('.theme-toggle');
const storedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  toggle.innerHTML = `<span aria-hidden="true">${theme === 'dark' ? '☾' : '☼'}</span>`;
  localStorage.setItem('theme', theme);
}

setTheme(storedTheme || (prefersDark ? 'dark' : 'light'));
toggle.addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));
document.querySelector('#year').textContent = new Date().getFullYear();
