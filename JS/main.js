let gameBoard = document.querySelector('.game-board');
const categoriesArray = ['cat1', 'cat2', 'cat3', 'cat4', 'cat5']
//create category header on gameboard
for (let i = 0; i < 5; i++) {
    let categories = document.createElement('h2');
    categories.classList.add('category');
    gameBoard.appendChild(categories);
    categories.appendChild(document.createTextNode(categoriesArray[i]));
}
//create row one of game tiles
for (let i = 0; i < 5; i++) {
    let btn = document.createElement('button');
    btn.classList.add('rowOne');
    btn.setAttribute('id', i)
    gameBoard.appendChild(btn);
    btn.appendChild(document.createTextNode('$100'));
}
//create row two of game tiles
for (let i = 0; i < 5; i++) {
    let btn = document.createElement('button');
    btn.classList.add('rowTwo');
    btn.setAttribute('id', i)
    gameBoard.appendChild(btn);
    btn.appendChild(document.createTextNode('$200'));
}
//create row three of game tiles
for (let i = 0; i < 5; i++) {
    let btn = document.createElement('button');
    btn.classList.add('rowThree');
    btn.setAttribute('id', i)
    gameBoard.appendChild(btn);
    btn.appendChild(document.createTextNode('$300'));
}
//create row four of game tiles
for (let i = 0; i < 5; i++) {
    let btn = document.createElement('button');
    btn.classList.add('rowFour');
    btn.setAttribute('id', i)
    gameBoard.appendChild(btn);
    btn.appendChild(document.createTextNode('$400'));
}
//create row five of game tiles
for (let i = 0; i < 5; i++) {
    let btn = document.createElement('button');
    btn.classList.add('rowFive');
    btn.setAttribute('id', i)   
    gameBoard.appendChild(btn);
    btn.appendChild(document.createTextNode('$500'));
}

// let rowOne = $('.rowOne');
// rowOne.on('click', function(evt){
// let tile = evt.target.id;
// console.log(evt.target)
// let prompt = questions[tile].prompt
// alert(prompt)
// let response =
// window.prompt(questions[tile].prompt)
// if (response === questions[tile].answer){
//     alert('correct')
// } else {
//     alert('wrong')
// } return;
// })


$(document).ready(function () {
    var rowOne = $('.rowOne')

    rowOne.on('click', function(clicked){
        var gamePiece = clicked.target.id
        console.log(clicked.target)
        Swal.fire('Any fool can use this')

    })
    
    
    
    // $('.rowOne').on('click', function (evt) {
    //     // console.log(evt.target)
    //     console.log([this.dataset.row][this.dataset.column])
    //     console.log(rowOneQuestions[this.dataset.row][this.dataset.column])
    //     // alert(questions[this.dataset.row][this.dataset.column])
    // })
})
// $100 questions
let rowOneQuestions = [
    columnOne = {
        question: "Question blahblah",
        answer: "a"

    },
    columnTwo = {
        promt: "Question2 blahblah",
        answer:"a"
    },
    columnThree = {

    },
    columnFour = {

    },
    columnFive = {

    }
]

// const questions = {
//     one: [
//         {
//             question: 'Does this work',
//             options: [
//                 { text: 'Yes it does', isCorrectAnswer: true }
//             ]
//         },
//         {
//             question: 'Hey there',
//             options: [
//                 { text: 'Hi', isCorrectAnswer: false }
//             ]
//         }
//     ],
//     two: [
//         {
//             question: 'Does this work',
//             options: [
//                 { text: 'Yes it does', isCorrectAnswer: true }
//             ]
//         },
//         {
//             question: 'Hey there',
//             options: [
//                 { text: 'Hi', isCorrectAnswer: false }
//             ]
//         }
//     ],
//     three: [
//         {
//             question: 'Does this work',
//             options: [
//                 { text: 'Yes it does', isCorrectAnswer: true }
//             ]
//         },
//         {
//             question: 'Hey there',
//             options: [
//                 { text: 'Hi', isCorrectAnswer: false }
//             ]
//         }
//     ],
//     four: [
//         {
//             question: 'Does this work',
//             options: [
//                 { text: 'Yes it does', isCorrectAnswer: true }
//             ]
//         },
//         {
//             question: 'Hey there',
//             options: [
//                 { text: 'Hi', isCorrectAnswer: false }
//             ]
//         }
//     ],
//     five: [
//         {
//             question: 'Does this work',
//             options: [
//                 { text: 'Yes it does', isCorrectAnswer: true }
//             ]
//         },
//         {
//             question: 'Hey there',
//             options: [
//                 { text: 'Hi', isCorrectAnswer: false }
//             ]
//         }
//     ]
// }
