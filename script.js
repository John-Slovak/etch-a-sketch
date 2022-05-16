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
        square.classList.add('square');
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
        document.querySelector('.value1').textContent = input;
        document.querySelector('.value2').textContent = input;
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

let pickedColor = document.querySelector('.picked-color')

function changeColor(choice) {
    color = choice;
    if (color == 'rainbow') {
        pickedColor.style.cssText = 'background-image: url(./rainbow.jpg)';
    } else {
        pickedColor.style.cssText = 'background-image: none;'
        pickedColor.style.backgroundColor = color;
    }
}

function resetBoard() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}

document.querySelector('body').addEventListener('mousedown', () => {
    click = true;
    clearSelection();
});
document.querySelector('body').addEventListener('mouseup', () => click = false);

document.querySelector('body').addEventListener('touchend', () => click = true);

function clearSelection() {
    if (window.getSelection) {window.getSelection().removeAllRanges();}
    else if (document.selection) {document.selection.empty();}
 }

document.querySelector('.board').addEventListener('touchmove', function(e) {
    e.preventDefault();
    let cellLocation = e.changedTouches[0];
    let cellTarget = document.elementFromPoint(cellLocation.clientX, cellLocation.clientY);
    if (cellTarget.classList.contains('square')) {
        if (color === 'rainbow') {
            cellTarget.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            cellTarget.style.backgroundColor = color;
        }
    } 
});