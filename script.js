function renderColors() {
  const divColors = document.getElementsByClassName('color');
  const listColor = [
    'red', 'green', 'blue', 'yellow',
    'pink', 'purple', 'gray', 'cyan',
    'orange', 'aqua'];
  divColors[0].style.backgroundColor = 'black';
  divColors[0].classList.add('selected');
  for (let i = 1; i < 4; i += 1) {
    const colorNum = Math.floor(Math.random() * 10);
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

function removeSelected(colorSelector, divIndex) {
  for (let i = 0; i < 4; i += 1) {
    colorSelector[i].classList.remove('selected');
  }
  colorSelector[divIndex].classList.add('selected');
}

function verifyClickPalette() {
  const colorSelector = document.getElementsByClassName('color');

  colorSelector[0].addEventListener('click', () => {
    removeSelected(colorSelector, 0);
  });

  colorSelector[1].addEventListener('click', () => {
    removeSelected(colorSelector, 1);
  });

  colorSelector[2].addEventListener('click', () => {
    removeSelected(colorSelector, 2);
  });

  colorSelector[3].addEventListener('click', () => {
    removeSelected(colorSelector, 3);
  });
}

renderColorPalette();
renderPixels();
verifyClickPalette();
