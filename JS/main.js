let gameBoard = document.querySelector('.game-board');

for(let i = 0; i < 25; i++) {
    let btn = document.createElement('button');
    btn.classList.add('square');
    gameBoard.appendChild(btn);
}