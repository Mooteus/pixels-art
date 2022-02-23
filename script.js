function GenerateRandomColors() {
  document.getElementById('color-0').style.backgroundColor = 'black';
  for (let i = 1; i <= 3; i += 1) {
    const red = Math.round(Math.random() * 256);
    const green = Math.round(Math.random() * 256);
    const blue = Math.round(Math.random() * 256);
    document.getElementById(`color-${i}`).style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }
}

GenerateRandomColors();
