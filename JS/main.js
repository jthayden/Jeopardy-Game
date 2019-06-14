let gameBoard = document.querySelector('.game-board');
const categoriesArray = ['cat1', 'cat2', 'cat3', 'cat4', 'cat5']
for (let i = 0; i < 5; i++) {
    let categories = document.createElement('h2');
    categories.classList.add('category');
    gameBoard.appendChild(categories);
    categories.appendChild(document.createTextNode(categoriesArray[i]));
}

for (let i = 0; i < 5; i++) {
    let btn = document.createElement('button');
    btn.classList.add('rowOne');
    btn.dataset.column = i
    btn.dataset.row = 'one'
    gameBoard.appendChild(btn);
    btn.appendChild(document.createTextNode('$100'));
}
for (let i = 0; i < 5; i++) {
    let btn = document.createElement('button');
    btn.classList.add('rowTwo');
    btn.dataset.column = i
    btn.dataset.row = 'two'
    gameBoard.appendChild(btn);
    btn.appendChild(document.createTextNode('$200'));
}
for (let i = 0; i < 5; i++) {
    let btn = document.createElement('button');
    btn.classList.add('rowThree');
    btn.dataset.column = i
    btn.dataset.row = 'three'
    gameBoard.appendChild(btn);
    btn.appendChild(document.createTextNode('$300'));
}
for (let i = 0; i < 5; i++) {
    let btn = document.createElement('button');
    btn.classList.add('rowFour');
    btn.dataset.column = i
    btn.dataset.row = 'four'
    gameBoard.appendChild(btn);
    btn.appendChild(document.createTextNode('$400'));
}
for (let i = 0; i < 5; i++) {
    let btn = document.createElement('button');
    btn.classList.add('rowFive');
    btn.dataset.column = i
    btn.dataset.row = 'five'
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


// $(document).ready(function () {
//     $('.rowOne').on('click', function (evt) {
//         // console.log(evt.target)
//         console.log(questions[this.dataset.row][this.dataset.column])
//         // alert(questions[this.dataset.row][this.dataset.column])
//     })


// })



const questions = {
    one: [
        {
            question: 'Does this work',
            options: [
                { text: 'Yes it does', isCorrectAnswer: true }
            ]
        },
        {
            question: 'Hey there',
            options: [
                { text: 'Hi', isCorrectAnswer: false }
            ]
        }
    ],
    two: [
        {
            question: 'Does this work',
            options: [
                { text: 'Yes it does', isCorrectAnswer: true }
            ]
        },
        {
            question: 'Hey there',
            options: [
                { text: 'Hi', isCorrectAnswer: false }
            ]
        }
    ],
    three: [
        {
            question: 'Does this work',
            options: [
                { text: 'Yes it does', isCorrectAnswer: true }
            ]
        },
        {
            question: 'Hey there',
            options: [
                { text: 'Hi', isCorrectAnswer: false }
            ]
        }
    ],
    four: [
        {
            question: 'Does this work',
            options: [
                { text: 'Yes it does', isCorrectAnswer: true }
            ]
        },
        {
            question: 'Hey there',
            options: [
                { text: 'Hi', isCorrectAnswer: false }
            ]
        }
    ],
    five: [
        {
            question: 'Does this work',
            options: [
                { text: 'Yes it does', isCorrectAnswer: true }
            ]
        },
        {
            question: 'Hey there',
            options: [
                { text: 'Hi', isCorrectAnswer: false }
            ]
        }
    ]
}
