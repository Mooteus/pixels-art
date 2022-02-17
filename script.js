function renderColors() {
  const divColors = document.getElementsByClassName('color');
  const listColor = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'gray', 'cyan', 'orange'];
  divColors[0].style.backgroundColor = 'black';
  divColors[0].classList.add('selected');
  for (let i = 0; i < 4; i += 1) {
    const colorNum = Math.floor(Math.random() * 10) - 2;
    divColors[i].style.backgroundColor = listColor[colorNum];
  }
}

function renderColorPalette() {
  const divPalette = document.getElementById('color-palette');

  for (let i = 0; i < 4; i += 1) {
    const color = document.createElement('div');
    color.classList.add('color');
    divPalette.appendChild(color);
  }
  renderColors();
}

function renderPixels() {
  const PixelBoard = document.getElementById('pixel-board');

  for (let i = 0; i < 25; i += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    PixelBoard.appendChild(pixel);
  }
}

renderColorPalette();
renderPixels();

const colorSelector = document.getElementsByClassName('color');

colorSelector[0].addEventListener('click', function() {
  alert('tesste');
});
