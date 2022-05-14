/*const grid = document.querySelector('.grid');

function gridMakeHorizon() {
    for (i = 1; i <= 16; i++) {
        let div = document.createElement('div');
        div.style.cssText = 'background-color: blue; width: 50px; height: 50px;';
        div.classList.add('h' + i);
        i.appendChild(div);
    }
}
let numh = 0;
function gridMakeVert() {
    for (let i = 1; i <= 16; i++) {
        let divh = document.createElement('div');
        numh++;
        divh.classList.add('b-' + numh + '-' + 1);
        grid.appendChild(divh);
        let numv = 1;
        divh.style.cssText = 'background-color: black; width: 50px; height: 50px;';
        for (let b = 1; b <= 15; b++) {
            let divv = document.createElement('div');
            numv++;
            divv.classList.add('b-' + numh + '-' + numv);
            divh.appendChild(divv);
            divv.style.cssText = 'background-color: black; width: 50px; height: 50px;';
        }
    }
}

gridMakeVert();
*/

changeSize(16);

let color = 'black';

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

function changeSize(input) {
    if ((input >= 1) && (input <= 128)) {
        populateBoard(input);
    } else {
        console.log('that is too high');
    }
}

function colorSquare() {
    this.style.backgroundColor = color;
}

function changeColor(choice) {
    color = choice;
}