const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

// star class
class Star {
  constructor(x, y, radius, color, twinkleSpeed) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.opacity = Math.random();
    this.twinkleSpeed = twinkleSpeed;
    this.fade = true;
  }

  update() {
    if (this.fade) {
      this.opacity += this.twinkleSpeed;
      if (this.opacity >= 1) this.fade = false;
    } else {
      this.opacity -= this.twinkleSpeed;
      if (this.opacity <= 0.2) this.fade = true;
    }
  }

  draw() {
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

// create stars
function initStars(count) {
  stars = [];
  for (let i = 0; i < count; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let radius = Math.random() * 2 + 1; // star size
    let color = Math.random() > 0.5 ? "#2e7d32" : "#37474f"; // primary/secondary green
    let twinkleSpeed = Math.random() * 0.02 + 0.005;
    stars.push(new Star(x, y, radius, color, twinkleSpeed));
  }
}

// animate stars
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let star of stars) {
    star.update();
    star.draw();
  }
  requestAnimationFrame(animate);
}

// start
initStars(300); // number of stars
animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initStars(150);
});
