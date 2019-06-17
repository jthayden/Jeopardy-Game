var score = 0
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



$(document).ready(function () {
    var rowOne = $('.rowOne')
    var rowTwo = $('.rowTwo')
    var rowThree = $('.rowThree')
    var rowFour = $('.rowFour')
    var rowFive = $('.rowFive')
let scoreElem = $('#score')
// let score=0
    rowOne.on('click', function (clicked) {
        var gamePiece = clicked.target.id
        console.log(clicked.target)
        const { value: choice } = Swal.fire({
            background: 'white',
            type: 'question',
            title: rowOneQuestions[gamePiece].question,
            input: 'radio',
            inputOptions: rowOneQuestions[gamePiece].options,
            inputValidator: function (value) {
                if (!value) {
                    return "Please select an answer"
                } else if (value === 'correct') {
                    alert('Correct!')
                    score += 100

                } else {
                    alert('Wrong!')
                    score -= 100
                }
                scoreElem.html("  $"+score)
            }

        })
    })
        rowTwo.on('click', function (clicked) {
            var gamePiece = clicked.target.id
            console.log(clicked.target)
            const { value: choice } = Swal.fire({
                background: 'white',
                type: 'question',
                title: rowOneQuestions[gamePiece].question,
                input: 'radio',
                inputOptions: rowTwoQuestions[gamePiece].options,
                inputValidator: function (value) {
                    if (!value) {
                        return "Please select an answer"
                    } else if (value === 'correct') {
                        alert('Correct!')
                        score += 200
    
                    } else {
                        alert('Wrong!')
                        score -= 200
                    }
                    scoreElem.html("  $"+score)
                }
    
            })
    })


// $100 questions
let rowOneQuestions = [
    columnOne = {
        question: "Who plays the role of Frank Reynolds in the comedy series 'It's Always Sunny in Philadelphia'?",
        options: {
            correct: 'Danny Devito',
            incorrect2: 'sam jackson',
            incorrect: 'bruce willis'
        }


    },
    columnTwo = {
        prompt: "Question2 blahblah",
        answer: "a"
    },
    columnThree = {

    },
    columnFour = {

    },
    columnFive = {

    }
]

// $200 questions
let rowTwoQuestions = [
    columnOne = {
        question: "Who plays the role of Frank Reynolds in the comedy series 'It's Always Sunny in Philadelphia'?",
        options: {
            correct: 'Danny Devito',
            incorrect2: 'sam jackson',
            incorrect: 'bruce willis'
        }


    },
    columnTwo = {
        prompt: "Question2 blahblah",
        answer: "a"
    },
    columnThree = {

    },
    columnFour = {

    },
    columnFive = {

    }
]

// $300 questions
let rowThreeQuestions = [
    columnOne = {
        question: "Who plays the role of Frank Reynolds in the comedy series 'It's Always Sunny in Philadelphia'?",
        options: {
            correct: 'Danny Devito',
            incorrect2: 'sam jackson',
            incorrect: 'bruce willis'
        }


    },
    columnTwo = {
        prompt: "Question2 blahblah",
        answer: "a"
    },
    columnThree = {

    },
    columnFour = {

    },
    columnFive = {

    }
]

// $400 questions
let rowFourQuestions = [
    columnOne = {
        question: "Who plays the role of Frank Reynolds in the comedy series 'It's Always Sunny in Philadelphia'?",
        options: {
            correct: 'Danny Devito',
            incorrect2: 'sam jackson',
            incorrect: 'bruce willis'
        }


    },
    columnTwo = {
        prompt: "Question2 blahblah",
        answer: "a"
    },
    columnThree = {

    },
    columnFour = {

    },
    columnFive = {

    }
]

// $500 questions
let rowFiveQuestions = [
    columnOne = {
        question: "Who plays the role of Frank Reynolds in the comedy series 'It's Always Sunny in Philadelphia'?",
        options: {
            correct: 'Danny Devito',
            incorrect2: 'sam jackson',
            incorrect: 'bruce willis'
        }


    },
    columnTwo = {
        prompt: "Question2 blahblah",
        answer: "a"
    },
    columnThree = {

    },
    columnFour = {

    },
    columnFive = {

    }
]

})
