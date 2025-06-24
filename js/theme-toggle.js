document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

  // Cargar tema guardado o detectar preferencia del sistema
  const currentTheme = localStorage.getItem('theme') || 
                      (prefersDarkScheme.matches ? 'dark' : 'light');

  // Aplicar tema al cargar
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    updateButtonIcon(true);
  }

  // Alternar tema al hacer clic
  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
    updateButtonIcon(!isDark);
  });

  // Actualizar ícono y texto del botón
  function updateButtonIcon(isDark) {
    themeToggle.innerHTML = isDark ? 
      '<i class="fas fa-sun"></i> Modo Día' : 
      '<i class="fas fa-moon"></i> Modo Noche';
  }
});