const light = document.getElementById('light');

// Показываем фонарик по центру при загрузке
window.addEventListener('DOMContentLoaded', () => {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  light.style.background = `radial-gradient(
	circle at ${centerX}px ${centerY}px,
	rgba(0, 255, 100, 0.1) 0px,
	rgba(0, 255, 100, 0.04) 300px,
	transparent 700px
  )`;
});

// Фонарик следует за мышкой
document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  light.style.background = `radial-gradient(
	circle at ${x}px ${y}px,
	rgba(0, 255, 100, 0.1) 0px,
	rgba(0, 255, 100, 0.04) 300px,
	transparent 700px
  )`;
});
