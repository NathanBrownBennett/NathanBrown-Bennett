// Matrix rain background effect for cyber portfolio

(function() {
  const canvas = document.getElementById('matrix-bg');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = window.innerWidth;
  let height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;

  const fontSize = 18;
  const columns = Math.floor(width / fontSize);
  const drops = Array(columns).fill(1);

  function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
    ctx.fillRect(0, 0, width, height);

    ctx.font = fontSize + "px monospace";
    ctx.fillStyle = "#007acc"; // blue numbers
    for (let i = 0; i < drops.length; i++) {
      const text = Math.random() > 0.5 ? '0' : '1';
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  });

  draw();
})();
