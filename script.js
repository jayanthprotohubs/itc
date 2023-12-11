document.addEventListener('DOMContentLoaded', () => {
    const boardSize = 5;
    const gameBoard = document.getElementById('gameBoard');

    // Initialize game board
    for (let i = 0; i < boardSize * boardSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('click', () => toggleLight(i));
        gameBoard.appendChild(square);
    }

    // Generate solvable board
    generateSolvableBoard(boardSize);
});

function toggleLight(index) {
    const boardSize = 5;
    const squares = document.querySelectorAll('.square');
    const x = index % boardSize;
    const y = Math.floor(index / boardSize);

    // Toggle the clicked square and adjacent squares
    toggleAtIndex(x, y);
    toggleAtIndex(x, y - 1); // above
    toggleAtIndex(x, y + 1); // below
    toggleAtIndex(x - 1, y); // left
    toggleAtIndex(x + 1, y); // right

    // Check win condition
    if (Array.from(squares).every(square => square.classList.contains('is-off'))) {
        window.alert('You win!');
    }
}

function toggleAtIndex(x, y) {
    const boardSize = 5;
    if (x >= 0 && x < boardSize && y >= 0 && y < boardSize) {
        const index = y * boardSize + x;
        const square = document.querySelectorAll('.square')[index];
        square.classList.toggle('is-off');
    }
}

function generateSolvableBoard(boardSize) {
    for (let i = 0; i < boardSize * boardSize; i++) {
        if (Math.random() < 0.5) {
            toggleLight(i);
        }
    }
}
