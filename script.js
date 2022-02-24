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

// remove a classe selected do botao que contiver ela
function removeSelected() {
  const selected = document.querySelector('.selected');
  if (selected) {
    selected.classList.remove('selected');
  }
}

// seleciona a cor a ser usada
function selectColor(id) {
  removeSelected();
  const color = document.getElementById(id);
  color.classList.add('selected');
}

// recebe o clique para selecionar a cor e traça o id do item clicado
const colorClick = document.getElementById('color-palette');
colorClick.addEventListener('click', (e) => {
  selectColor(e.target.id);
});

// recebe o click e pinta o pixel alvo
const pixelClick = document.getElementById('pixel-board');
pixelClick.addEventListener('click', (e) => {
  const color = document.querySelector('.selected').style.backgroundColor;
  e.target.style.backgroundColor = color;
});

// limpa o board de pixels por completo
function clearBoard() {
  const pixelList = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixelList.length; i += 1) {
    pixelList[i].style.backgroundColor = 'white';
  }
}

const clearClick = document.getElementById('clear-board');
clearClick.addEventListener('click', () => {
  clearBoard();
});

window.onload = () => {
  GenerateRandomColors();
  GeneratePixelBoard(25);
};
