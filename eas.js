let button;
function createGrid(rows, columns) {
    const gridContainer = document.createElement('div');
    gridContainer.id = 'grid';

    const containerSize = 964; 
    const squareSize = containerSize / rows;

    for (let i = 0; i < rows; i++) {
        const gridRow = document.createElement('div');
        gridRow.className = 'gridRow';
        
        for (let j = 0; j < columns; j++) {
            // Create a grid item element
            const square = document.createElement('div');
            square.setAttribute('class', 'box');
            square.style.width = squareSize + 'px'; 
            square.style.height = squareSize + 'px';

            // Append the grid item to the grid container
            gridRow.appendChild(square);

            square.addEventListener('mouseover', function() {
                var r = Math.floor(Math.random() * 256); // Random number between 0 and 255
                var g = Math.floor(Math.random() * 256);
                var b = Math.floor(Math.random() * 256);
                square.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
            });

            square.addEventListener('mouseout', function() {
                square.style.backgroundColor = '';
            });
        }
        gridContainer.appendChild(gridRow);
    }

    var container = document.createElement('div');
    container.className = 'container';
    
    var buttonContainer = document.createElement('div');
    buttonContainer.className = 'buttonContainer';
    
    var button = document.createElement('button');
    button.textContent = 'Click to change number of squares'; // Button text
    button.className = 'btn'; 
    
    buttonContainer.appendChild(button);
    container.appendChild(buttonContainer);
    container.appendChild(gridContainer);
    document.body.appendChild(container);

    button.addEventListener("click", function() {
        // Define the limit
        const limit = 100;
        var userInput = window.prompt("How many squares per side would you like?");
        // Check if the variable exceeds the limit
        if (userInput > limit) {
            alert("The number must be less than or equal to 100");
            userInput = window.prompt("How many squares per side would you like?");
        }
        gridContainer.remove();
        button.remove();
        createGrid(userInput, userInput);
    });
}
createGrid(16, 16);






