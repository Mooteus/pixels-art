function GenerateRandomColors() {
  document.getElementById('color-0').style.backgroundColor = 'black';
  for (let i = 1; i <= 3; i += 1) {
    const red = Math.round(Math.random() * 256);
    const green = Math.round(Math.random() * 256);
    const blue = Math.round(Math.random() * 256);
    document.getElementById(`color-${i}`).style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }
}

function GeneratePixelBoard() {
  let pixel;
  const pixelBoard = document.getElementById('pixel-board');
  for (let i = 0; i < 25; i += 1) {
    pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixelBoard.appendChild(pixel);
  }
}

GenerateRandomColors();
GeneratePixelBoard();
