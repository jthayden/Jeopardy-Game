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

    //Row 1 click function
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
                scoreElem.html("  $" + score)
            }

        })
        $(this).attr('disabled', 'disabled')
    })

    //Row 2 click function
    rowTwo.on('click', function (clicked) {
        var gamePiece = clicked.target.id
        console.log(clicked.target)
        const { value: choice } = Swal.fire({
            background: 'white',
            type: 'question',
            title: rowTwoQuestions[gamePiece].question,
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
                scoreElem.html("  $" + score)
            }

        })
        $(this).attr('disabled', 'disabled')
    })

    //Row 3 click function
    rowThree.on('click', function (clicked) {
        var gamePiece = clicked.target.id
        console.log(clicked.target)
        const { value: choice } = Swal.fire({
            background: 'white',
            type: 'question',
            title: rowThreeQuestions[gamePiece].question,
            input: 'radio',
            inputOptions: rowThreeQuestions[gamePiece].options,
            inputValidator: function (value) {
                if (!value) {
                    return "Please select an answer"
                } else if (value === 'correct') {
                    alert('Correct!')
                    score += 300

                } else {
                    alert('Wrong!')
                    score -= 300
                }
                scoreElem.html("  $" + score)
            }

        })
        $(this).attr('disabled', 'disabled')
    })

    //Row 4 click function
    rowFour.on('click', function (clicked) {
        var gamePiece = clicked.target.id
        console.log(clicked.target)
        const { value: choice } = Swal.fire({
            background: 'white',
            type: 'question',
            title: rowFourQuestions[gamePiece].question,
            input: 'radio',
            inputOptions: rowFourQuestions[gamePiece].options,
            inputValidator: function (value) {
                if (!value) {
                    return "Please select an answer"
                } else if (value === 'correct') {
                    alert('Correct!')
                    score += 400

                } else {
                    alert('Wrong!')
                    score -= 400
                }
                scoreElem.html("  $" + score)
            }

        })
        $(this).attr('disabled', 'disabled')
    })

    //Row 5 click function
    rowFive.on('click', function (clicked) {
        var gamePiece = clicked.target.id
        console.log(clicked.target)
        const { value: choice } = Swal.fire({
            background: 'white',
            type: 'question',
            title: rowFiveQuestions[gamePiece].question,
            input: 'radio',
            inputOptions: rowFiveQuestions[gamePiece].options,
            inputValidator: function (value) {
                if (!value) {
                    return "Please select an answer"
                } else if (value === 'correct') {
                    alert('Correct!')
                    score += 500

                } else {
                    alert('Wrong!')
                    score -= 500
                }
                scoreElem.html("  $" + score)
            }

        })
        $(this).attr('disabled', 'disabled')
    })

    // $100 questions
    let rowOneQuestions = [
        columnOne = {
            question: "Who plays the role of Frank Reynolds in the comedy series 'It's Always Sunny in Philadelphia'?",
            options: {
                correct: 'Who is Danny Devito',
                incorrect: 'Who is ...',
                incorrect1: 'Who is ...',
                incorrect2: 'Who is ...'
            }
        },
        columnTwo = {
            question: "Who was the first golfer to win the Masters Tournament two years in a row?",
            options: {
                correct: 'Who is Jack Nicklaus',
                incorrect: 'Who is ...',
                incorrect1: 'Who is ...',
                incorrect2: 'Who is ...'
            }
        },
        columnThree = {
            question: "What automobile manufacurer was first to implement the assembly line for the mass production of an entire engine?",
            options: {
                correct: 'Who is Ford Motor Company',
                incorrect: 'Who is ...',
                incorrect1: 'Who is ...',
                incorrect2: 'Who is ...'
            }
        },
        columnFour = {
            question: "What was the first publicly traded U.S. company to reach a $1 trillion market cap?",
            options: {
                correct: 'Who is Apple',
                incorrect: 'Who is Microsoft',
                incorrect1: 'Who is ...',
                incorrect2: 'Who is ...'
            }
        },
        columnFive = {
            question: "A Moscow Mule is a type of cocktail popularly served in this.",
            options: {
                correct: 'What is a copper mug',
                incorrect: 'What is ...',
                incorrect1: 'What is ...',
                incorrect2: 'What is ...'
            }
        }
    ]

    // $200 questions
    let rowTwoQuestions = [
        columnOne = {
            question: "",
            options: {
                correct: '',
                incorrect: 'What is ...',
                incorrect1: 'What is ...',
                incorrect2: 'What is ...'
            }


        },
        columnTwo = {
            question: "Tiger Woods became a professional golfer in what year?",
            options: {
                correct: 'What is 1996',
                incorrect: 'What is ...',
                incorrect1: 'What is ...',
                incorrect2: 'What is ...'
            }
        },
        columnThree = {
            question: "",
            options: {
                correct: '',
                incorrect: '',
                incorrect1: '',
                incorrect2: ''
            }
        },
        columnFour = {
            question: "",
            options: {
                correct: '',
                incorrect: '',
                incorrect1: '',
                incorrect2: ''
            }
        },
        columnFive = {
            question: "When found on a beer bottle, what does the acronym IPA stand for?",
            options: {
                correct: 'What is India Pale Ale',
                incorrect: 'What is ...',
                incorrect1: 'What is ...',
                incorrect2: 'What is ...'
            }
        }
    ]

    // $300 questions
    let rowThreeQuestions = [
        columnOne = {
            question: "When this tv chef hosted Everday Italian, angry viewers wrote to Food Network that they hired a model who was pretending to cook.",
            options: {
                correct: 'Who is Giada De Laurentiis',
                incorrect: 'Who is ...',
                incorrect1: 'Who is ...',
                incorrect2: 'Who is ...'

            }


        },
        columnTwo = {
            question: 'What "King" of golf lent his name to a mixture of iced tea and lemonade?',
            options: {
                correct: 'Who is Arnold Palmer',
                incorrect: 'Who is ...',
                incorrect1: 'Who is ...',
                incorrect2: 'Who is ...'
            }
        },
        columnThree = {
            question: "",
            options: {
                correct: '',
                incorrect: '',
                incorrect1: '',
                incorrect2: ''
            }
        },
        columnFour = {
            question: "",
            options: {
                correct: '',
                incorrect: '',
                incorrect1: '',
                incorrect2: ''
            }
        },
        columnFive = {
            question: "Highly regarded awards are given annually in the name of this man who is considered the dean of American chefs. Among others he was an author, a columnist, a pioneering television cook and is linked with commercializing several food brands.",
            options: {
                correct: 'Who is James Beard.',
                incorrect: 'Who is ...',
                incorrect1: 'Who is ...',
                incorrect2: 'Who is ...'
            }
        }
    ]

    // $400 questions
    let rowFourQuestions = [
        columnOne = {
            question: "",
            options: {
                correct: '',
                incorrect: '',
                incorrect1: '',
                incorrect2: ''
            }


        },
        columnTwo = {
            question: "",
            options: {
                correct: '',
                incorrect: '',
                incorrect1: '',
                incorrect2: ''
            }
        },
        columnThree = {
            question: "",
            options: {
                correct: '',
                incorrect: '',
                incorrect1: '',
                incorrect2: ''
            }
        },
        columnFour = {
            question: "",
            options: {
                correct: '',
                incorrect: '',
                incorrect1: '',
                incorrect2: ''
            }
        },
        columnFive = {
            question: "This famously foul-mouthed British chef is familiar to millions through his appearances in numerous television shows like Hell's Kitchen, Kitchen Nightmares, and MasterChef.",
            options: {
                correct: 'Who is Gordon Ramsey',
                incorrect: 'Who is ...',
                incorrect1: 'Who is ...',
                incorrect2: 'Who is...'
            }
        }
    ]

    // $500 questions
    let rowFiveQuestions = [
        columnOne = {
            question: "",
            options: {
                correct: '',
                incorrect: '',
                incorrect1: '',
                incorrect2: ''
            }


        },
        columnTwo = {
            question: "",
            options: {
                correct: '',
                incorrect: '',
                incorrect1: '',
                incorrect2: ''
            }
        },
        columnThree = {
            question: "",
            options: {
                correct: '',
                incorrect: '',
                incorrect1: '',
                incorrect2: ''
            }
        },
        columnFour = {
            question: "",
            options: {
                correct: '',
                incorrect: '',
                incorrect1: '',
                incorrect2: ''
            }
        },
        columnFive = {
            question: "When this TV chef hosted Everyday Italian, angry viewers wrote to Food Network that they hired a model who was pretending to cook.",
            options: {
                correct: 'Who is Giada De Laurentiis',
                incorrect: 'Who is ...',
                incorrect1: 'Who is ...',
                incorrect2: 'Who is ...'
            }
        }
    ]

})
