// gera cores aleatorias para a paleta de cores
function GenerateRandomColors() {
  let red;
  let green;
  let blue;

  const firstColor = document.getElementById('color-0');

  firstColor.style.backgroundColor = 'black';
  firstColor.classList.add('selected');

  for (let i = 1; i <= 3; i += 1) {
    red = Math.round(Math.random() * 256);
    green = Math.round(Math.random() * 256);
    blue = Math.round(Math.random() * 256);
    document.getElementById(`color-${i}`).style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }
}

// gera os pixel do pixel-board
function GeneratePixelBoard(range) {
  let pixel;
  const pixelBoard = document.getElementById('pixel-board');

  for (let i = 0; i < range; i += 1) {
    pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixelBoard.appendChild(pixel);
  }
}

function removeSelected() {
  const selected = document.querySelector('.selected');
  if (selected) {
    selected.classList.remove('selected');
  }
}

function selectColor(id) {
  removeSelected();
  const color = document.getElementById(id);
  color.classList.add('selected');
}

const colorClick = document.getElementById('color-palette');
colorClick.addEventListener('click', (e) => {
  selectColor(e.target.id);
});

window.onload = () => {
  GenerateRandomColors();
  GeneratePixelBoard(25);
};
