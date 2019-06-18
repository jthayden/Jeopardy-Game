$(document).ready(function () {
    let score = 0
    let gameBoard = document.querySelector('.game-board');
    const categoriesArray = ['TV/Movies', 'Golf', 'South Carolina', 'Tennis', 'Food']

  
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

  //Win/Lose function
  function checkScore() {
    if (score >= 2500) {
        Swal.fire({
            type: 'success',
            html: 'You Win!'
        })
        $('.rowOne, .rowTwo, .rowThree, .rowFour, .rowFive').attr('disabled', 'disabled');
    } else if (score <= -1500) {
        Swal.fire({
            type: 'error',
            html: 'You Lose! Try again.'
        })
        $('.rowOne, .rowTwo, .rowThree, .rowFour, .rowFive').attr('disabled', 'disabled');
    }
}


    var rowOne = $('.rowOne')
    var rowTwo = $('.rowTwo')
    var rowThree = $('.rowThree')
    var rowFour = $('.rowFour')
    var rowFive = $('.rowFive')
    let scoreElem = $('#score')

    //Row 1 click function
    rowOne.on('click', function (clicked) {
        var gamePiece = clicked.target.id
        const { value: choice } = Swal.fire({
           confirmButtonColor: 'black',
            allowOutsideClick: false,
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
            },
            onAfterClose: checkScore

        })
        $(this).attr('disabled', 'disabled')
    })

    //Row 2 click function
    rowTwo.on('click', function (clicked) {
        var gamePiece = clicked.target.id
        const { value: choice } = Swal.fire({
            allowOutsideClick: false,
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
            },
            onAfterClose: checkScore
        })
        $(this).attr('disabled', 'disabled')
    })

    //Row 3 click function
    rowThree.on('click', function (clicked) {
        var gamePiece = clicked.target.id
        const { value: choice } = Swal.fire({
            allowOutsideClick: false,
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
            },
            onAfterClose: checkScore
        })
        $(this).attr('disabled', 'disabled')
    })

    //Row 4 click function
    rowFour.on('click', function (clicked) {
        var gamePiece = clicked.target.id
        const { value: choice } = Swal.fire({
            allowOutsideClick: false,
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
            },
            onAfterClose: checkScore
        })
        $(this).attr('disabled', 'disabled')
    })

    //Row 5 click function
    rowFive.on('click', function (clicked) {
        var gamePiece = clicked.target.id
        const { value: choice } = Swal.fire({
            allowOutsideClick: false,
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
            },
            onAfterClose: checkScore
        })
        $(this).attr('disabled', 'disabled')
    })

    
    
/////QUESTIONS/////

    // $100 questions
    let rowOneQuestions = [
        columnOne = {
            question: "Who plays the role of Frank Reynolds in the comedy series 'It's Always Sunny in Philadelphia'?",
            options: {
                incorrect: 'Who is Al Pacino',
                incorrect1: 'Who is Robert DeNiro',
                correct: 'Who is Danny Devito',
                incorrect2: 'Who is Jack Nicholson'
            }
        },
        columnTwo = {
            question: "How many holes are in a full round of golf?",
            options: {
                incorrect: 'What is nine',
                correct: 'What is eighteen',
                incorrect1: 'Who is twelve',
                incorrect2: 'Who is twenty-four'
            }
        },
        columnThree = {
            question: "This resort island off the coast of South Carolina was named for a British sea captain.",
            options: {
                incorrect: 'What is Kiawah Island',
                incorrect1: 'What is Edisto Island',
                incorrect2: 'What is Sullivans Island',
                correct: 'What is Hilton Head Island'
            }
        },
        columnFour = {
            question: "What is the term for a zero score in tennis?",
            options: {
                correct: 'What is love',
                incorrect: 'What is let ',
                incorrect1: 'What is skunk',
                incorrect2: 'What is ace'
            }
        },
        columnFive = {
            question: "A Moscow Mule is a type of cocktail popularly served in this.",
            options: {
                incorrect: 'What is a pint',
                correct: 'What is a copper mug',
                incorrect1: 'What is a highball',
                incorrect2: 'What is a lowball'
            }
        }
    ]

    // $200 questions
    let rowTwoQuestions = [
        columnOne = {
            question: "Which character becomes a wanted fugitive during the final season of The Office?",
            options: {
                correct: 'Who is Creed',
                incorrect: 'Who is Michael',
                incorrect1: 'Who is Dwight',
                incorrect2: 'Who is Andy'
            }


        },
        columnTwo = {
            question: "Tiger Woods became a professional golfer in what year?",
            options: {
                incorrect: 'What is 1999',
                incorrect1: 'What is 2001',
                incorrect2: 'What is 2003',
                correct: 'What is 1996'
            }
        },
        columnThree = {
            question: "The German multinational company, BMW, produces their entire SUV lineup in this South Carolina city.",
            options: {
                incorrect: 'What is Greenville',
                correct: 'What is Spartanburg',
                incorrect1: 'What is Sumter',
                incorrect2: 'What is Orangeburg'
            }
        },
        columnFour = {
            question: 'For a tennis player, winning the "Grand Slam" involves winning what four tournaments in the same calendar year?',
            options: {
                incorrect: 'What are the Italian Open, French Open, US Open, and Wimbledon',
                incorrect1: 'What are the French Open, US Open, Davis Cup, and Wimbledon',
                correct: 'What are the Australian Open, French Open, US Open, and Wimbledon',
                incorrect2: 'What are the German Open, French Open, US Open, and Japanese Open'
            }
        },
        columnFive = {
            question: "A buffalo burger is made of which type of meat?",
            options: {
                incorrect: 'What is buffalo',
                incorrect1: 'What is beef',
                incorrect2: 'What is venison',
                correct: 'What is bison'
            }
        }
    ]

    // $300 questions
    let rowThreeQuestions = [
        columnOne = {
            question: "In 2004, who won 2.5 million dollars in the popular game show, Jeopardy?",
            options: {
                incorrect: 'Who is Stacy Nelson',
                incorrect1: 'Who is Grace Young',
                incorrect2: 'Who is Kyle Smith',
                correct: 'Who is Ken Jennings'
            }
        },
        columnTwo = {
            question: 'What golfer replaced Tiger Woods at the top of the Official World Golf Rankings in 2004?',
            options: {
                incorrect: 'Who is Tom Watson',
                correct: 'Who is Vijay Singh',
                incorrect1: 'Who is Phil Mickelson',
                incorrect2: 'Who is Todd Hamilton'
            }
        },
        columnThree = {
            question: "Home to the University of South Carolina, this city is also the state capital.",
            options: {
                incorrect: 'What is Charleston',
                incorrect1: 'What is Greenville',
                correct: 'What is Columbia',
                incorrect2: 'What is Beaufort'
            }
        },
        columnFour = {
            question: "What company has provided every tennis ball for the Wimbledon Championship since 1902?",
            options: {
                correct: 'What is Slazenger',
                incorrect: 'What is Wilson',
                incorrect1: 'What is Penn',
                incorrect2: 'What is Prince'
            }
        },
        columnFive = {
            question: "Highly regarded awards are given annually in the name of this man who is considered the dean of American chefs. Among others he was an author, a columnist, a pioneering television cook and is linked with commercializing several food brands.",
            options: {
                incorrect: 'Who is Alton Brown',
                correct: 'Who is James Beard.',
                incorrect1: 'Who is James Peterson',
                incorrect2: 'Who is Jeffrey Alford'
            }
        }
    ]

    // $400 questions
    let rowFourQuestions = [
        columnOne = {
            question: "What family owned a banana stand and drove a stair car?",
            options: {
                incorrect: 'Who is the Griffin family',
                correct: 'Who is the Bluth family',
                incorrect1: 'Who is the Smith family',
                incorrect2: 'Who is the Hanson family'
            }


        },
        columnTwo = {
            question: "Who was the first golfer to win the Masters Tournament two years in a row?",
            options: {
                correct: 'Who is Jack Nicklaus',
                incorrect: 'Who is Arnold Palmer',
                incorrect1: 'Who is Fuzzy Zoeller',
                incorrect2: 'Who is Ben Hogan'
            }
        },
        columnThree = {
            question:  `Nicknamed "The Holy City", this city has been voted the top tourist destination for nearly a decade.` ,
            options: {
                incorrect: 'What is Columbia',
                incorrect1: 'What is Florence',
                incorrect2: 'What is Greenville',
                correct: 'What is Charleston'
            }
        },
        columnFour = {
            question: "What is the nickname of the No. 2 Court at Wimbledon?",
            options: {
                incorrect: `What is Winner's Court`,
                incorrect1: 'What is Court of the Irish',
                correct: 'What is Graveyard of Champions',
                incorrect2: `What is No Man's Land`
            }
        },
        columnFive = {
            question: "This famously foul-mouthed British chef is familiar to millions through his appearances in numerous television shows like Hell's Kitchen, Kitchen Nightmares, and MasterChef.",
            options: {
                incorrect: 'Who is Bobby Flay',
                incorrect1: 'Who is Wolfgang Puck',
                correct: 'Who is Gordon Ramsey',
                incorrect2: 'Who is Anthony Bourdain'
            }
        }
    ]

    // $500 questions
    let rowFiveQuestions = [
        columnOne = {
            question: "Action movie legend Chuck Norris formerly starred in which television series?",
            options: {
                correct: 'What is Walker, Texas Ranger',
                incorrect: 'What is Matlock',
                incorrect1: 'What is Baywatch',
                incorrect2: 'What is Nash Bridges'
            }


        },
        columnTwo = {
            question: "Who was the first golfer to reach one million dollars in career earnings on the PGA Tour?",
            options: {
                incorrect: 'Who is Bobby Jones',
                incorrect1: 'Who is Jack Nicklaus',
                incorrect2: 'Who is Tiger Woods',
                correct: 'Who is Arnold Palmer'
            }
        },
        columnThree = {
            question: "South Carolina is the nation's leading producer of this fruit.",
            options: {
                incorrect: 'What is strawberry',
                incorrect1: 'What is blueberry',
                correct: 'What is peach',
                incorrect2: 'What is mango'
            }
        },
        columnFour = {
            question: "What year was tennis originally intoduced as an Olympic sport?",
            options: {
                incorrect: 'What is 1924',
                correct: 'What is 1896',
                incorrect1: 'What is 1968',
                incorrect2: 'What is 1988'
            }
        },
        columnFive = {
            question: "When this TV chef hosted Everyday Italian, angry viewers wrote to Food Network that they hired a model who was pretending to cook.",
            options: {
                incorrect: 'Who is Rachel Ray',
                incorrect1: 'Who is Paula Deen',
                correct: 'Who is Giada De Laurentiis',
                incorrect2: 'Who is Ina Garten'
            }
        }
    ]

})
