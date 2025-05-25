const player = document.getElementById("player");
const item = document.getElementById("item");
const scoreDisplay = document.getElementById("score");

let score = 0;
let itemX = Math.random() * (window.innerWidth - 30);
let itemY = 0;

let playerX = window.innerWidth / 2;

document.addEventListener("mousemove", (e) => {
  playerX = e.clientX - 40;
  player.style.left = `${playerX}px`;
});

function dropItem() {
  itemY += 5;
  item.style.top = `${itemY}px`;
  item.style.left = `${itemX}px`;

  if (itemY > 470) {
    const playerLeft = playerX;
    const playerRight = playerX + 80;
    if (itemX > playerLeft && itemX < playerRight) {
      score++;
      scoreDisplay.textContent = `Score: ${score}`;
    }

    itemY = 0;
    itemX = Math.random() * (window.innerWidth - 30);
  }

  requestAnimationFrame(dropItem);
}

dropItem();
