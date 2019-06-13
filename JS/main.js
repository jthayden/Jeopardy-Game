let gameBoard = document.querySelector('.game-board');

for(let i = 0; i < 5; i++) {
    let btn = document.createElement('button');
    btn.classList.add('square');
    gameBoard.appendChild(btn);
    btn.appendChild(document.createTextNode('$100'));
}
for(let i = 0; i < 5; i++) {
    let btn = document.createElement('button');
    btn.classList.add('square');
    gameBoard.appendChild(btn);
    btn.appendChild(document.createTextNode('$200'));
}
for(let i = 0; i < 5; i++) {
    let btn = document.createElement('button');
    btn.classList.add('square');
    gameBoard.appendChild(btn);
    btn.appendChild(document.createTextNode('$300'));
}
for(let i = 0; i < 5; i++) {
    let btn = document.createElement('button');
    btn.classList.add('square');
    gameBoard.appendChild(btn);
    btn.appendChild(document.createTextNode('$400'));
}
for(let i = 0; i < 5; i++) {
    let btn = document.createElement('button');
    btn.classList.add('square');
    gameBoard.appendChild(btn);
    btn.appendChild(document.createTextNode('$500'));
}
$(document).ready(function(){
$('.square').on('click', function(evt){
   console.log(evt.target)
})
})