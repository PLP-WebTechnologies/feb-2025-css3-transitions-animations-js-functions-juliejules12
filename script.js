const button = document.getElementById('toggleButton');
const body = document.body;

// Load stored theme on page load
function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
  }
}

// Toggle theme and store preference
function toggleTheme() {
  body.classList.toggle('dark-theme');
  const isDark = body.classList.contains('dark-theme');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');

  // Animate button
  button.classList.add('rotate');
  setTimeout(() => button.classList.remove('rotate'), 500);
}

button.addEventListener('click', toggleTheme);
loadTheme();
