function renderColorPalette() {
  const divPalette = document.getElementById('color-palette');
  for (let i = 0; i < 4; i += 1) {
    const color = document.createElement('div');
    color.classList.add('color');
    divPalette.appendChild(color);
  }
}

renderColorPalette();
