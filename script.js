let color = 'black';
let click = false;

function populateBoard(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    let amount = size * size;
    for(let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = 'white';
        board.insertAdjacentElement('beforeend', square);
    }
}

populateBoard(16);

function changeSize(input) {
    if ((input >= 1) && (input <= 64)) {
        populateBoard(input);
    }
}

function changeOutput(input) {
    if ((input >= 1) && (input <= 64)) {
        document.querySelector('.value').textContent = `${input} x ${input}`;
    }
}

function colorSquare() {
    if (click) {
        if (color === 'rainbow') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = color;
        }
    }
}

function changeColor(choice) {
    color = choice;
}

function resetBoard() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}

document.querySelector('body').addEventListener('mousedown', () => click = true);
document.querySelector('body').addEventListener('mouseup', () => click = false);

//document.querySelector('.mode').textContent = 'Mode: Not Coloring'