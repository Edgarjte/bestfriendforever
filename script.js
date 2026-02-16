const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");

noButton.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noButton.style.transform = `translate(${x}px, ${y}px)`;
});

let particles = [];

function firework(x, y) {
  for (let i = 0; i < 80; i++) {
    particles.push({
      x,
      y,
      vx: Math.cos(i) * Math.random() * 4,
      vy: Math.sin(i) * Math.random() * 4,
      alpha: 1
    });
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, index) => {
    p.x += p.vx;
    p.y += p.vy;
    p.alpha -= 0.015;

    ctx.fillStyle = `rgba(201,162,77,${p.alpha})`;
    ctx.beginPath();
    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
    ctx.fill();

    if (p.alpha <= 0) particles.splice(index, 1);
  });

  requestAnimationFrame(animate);
}

animate();

yesButton.addEventListener("click", () => {
  firework(window.innerWidth / 2, window.innerHeight / 2);

  document.querySelector(".card").innerHTML = `
    <h1 style="color:#7b1e3a">
      ✨ OUIII ✨<br><br>
      Coeur sur toi ma Léo ♥
    </h1>

    <img 
      src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWhyNW0xNmMwbWN4Z2k5dTlxcnE2OXMzcnZnNWJ4OHN2OWlwMDk4biZlcD12MV9naWZzX3NlYXJjaCZjdD1n/MenglW7Bcu89JWTjeD/giphy.gif"
      alt="gif de fin"
      class="final-gif"
    >
  `;
});
