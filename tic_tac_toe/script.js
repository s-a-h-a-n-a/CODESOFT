const cells = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const turnDisplay = document.getElementById('turnDisplay');
const winningMessageElement = document.getElementById('winningMessage');
const winningMessageTextElement = document.getElementById('winningMessageText');
const restartButton = document.getElementById('restartButton');

const X_CLASS = 'X';
const O_CLASS = 'O';
let currentPlayer = X_CLASS;

const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Start the game
startGame();

restartButton.addEventListener('click', startGame);

function startGame() {
    currentPlayer = X_CLASS;
    cells.forEach(cell => {
        cell.textContent = ''; // Clear the cell text
        cell.removeEventListener('click', handleClick);
        cell.addEventListener('click', handleClick, { once: true });
    });
    turnDisplay.textContent = `Player ${currentPlayer}'s Turn`;
    winningMessageElement.classList.remove('active');
}

function handleClick(e) {
    const cell = e.target;
    placeMark(cell, currentPlayer);
    if (checkWin(currentPlayer)) {
        endGame(false);
    } else if (isDraw()) {
        endGame(true);
    } else {
        swapTurns();
    }
}

function endGame(draw) {
    if (draw) {
        winningMessageTextElement.innerText = "It's a Draw!";
    } else {
        winningMessageTextElement.innerText = `Player ${currentPlayer} Wins!`;
    }
    winningMessageElement.classList.add('active');
}

function isDraw() {
    return [...cells].every(cell => {
        return cell.textContent === X_CLASS || cell.textContent === O_CLASS;
    });
}

function placeMark(cell, currentPlayer) {
    cell.textContent = currentPlayer;  // Set the cell's text content to X or O
}

function swapTurns() {
    currentPlayer = currentPlayer === X_CLASS ? O_CLASS : X_CLASS;
    turnDisplay.textContent = `Player ${currentPlayer}'s Turn`;
}

function checkWin(currentPlayer) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cells[index].textContent === currentPlayer;
        });
    });
}
