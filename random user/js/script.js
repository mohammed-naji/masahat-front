const users = ["Yousef", "Dana", "Nour", "Saja", "Rania", "Mahdi", "Shahd"];

const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");

const center = canvas.width / 2;
const radius = center;
const sliceAngle = (2 * Math.PI) / users.length;

let currentAngle = 0;

function drawWheel() {
  users.forEach((user, index) => {
    const start = currentAngle + index * sliceAngle;
    const end = start + sliceAngle;

    ctx.beginPath();
    ctx.moveTo(center, center);
    ctx.arc(center, center, radius, start, end);
    ctx.fillStyle = index % 2 === 0 ? "#f4a261" : "#2a9d8f";
    ctx.fill();
    ctx.stroke();

    // Text
    ctx.save();
    ctx.translate(center, center);
    ctx.rotate(start + sliceAngle / 2);
    ctx.textAlign = "right";
    ctx.fillStyle = "#fff";
    ctx.font = "16px Arial";
    ctx.fillText(user, radius - 50, 5);
    ctx.restore();
  });
}

drawWheel();

// Spin logic
function spin() {
  const spinAngle = Math.random() * 2000 + 2000;
  const duration = 6000;
  const start = performance.now();

  function animate(time) {
    const elapsed = time - start;
    const progress = Math.min(elapsed / duration, 1);
    const easeOut = 1 - Math.pow(1 - progress, 4);

    currentAngle = (spinAngle * easeOut * Math.PI) / 180;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawWheel();

    if (progress < 1) {
      requestAnimationFrame(animate);
      document.querySelector(".winner").style.display = "none";
    } else {
      selectWinner();
      document.querySelector(".winner").style.display = "block";
    }
  }

  requestAnimationFrame(animate);
}

// Pick user
function selectWinner() {
  const angle = 2 * Math.PI - (currentAngle % (2 * Math.PI));
  const index = Math.floor(angle / sliceAngle) % users.length;
  // alert("🎉 Winner: " + users[index]);
}
