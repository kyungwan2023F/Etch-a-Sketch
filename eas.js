const rows = 16;
const columns = 16;
const gridContainer = document.getElementById('grid');
for (let i = 0; i < rows; i++) {
    const gridRow = document.createElement('div');
    gridRow.className = 'gridRow';
    for (let j = 0; j < columns; j++) {
      // Create a grid item element
      const square = document.createElement('div');
      square.setAttribute('class', 'box');
      square.style.width = '50px';
      square.style.height = '50px';

      // Append the grid item to the grid container
      gridRow.appendChild(square);
    }
    gridContainer.appendChild(gridRow);
}