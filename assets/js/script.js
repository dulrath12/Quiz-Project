var questionEl = document.getElementById('question');
const optionsEl = Array.from(document.querySelectorAll('.options-text'))
var time = document.getElementById('timer')
var instructions = document.getElementById('quiz-instructions')
var intro = document.getElementById('intro')

var startbtnEl = document.querySelector(".start-btn")

var currentQuestion = {}
var acceptingAnswers = true
var questionCounter = 0
var availableQuestions = []

var questions = [
    {question: "Commonly used data types DO NOT include:",
    option1: "strings",
    option2: "booleans",
    option3: "alerts",
    option4: "numbers",
    answer: 3
},

    {question: "The condition in an if/else statement is enclosed within _____.",
    option1: "quotes",
    option2: "curly brackets",
    option3: "parentheses",
    option4: "square brackets",
    answer: 2
},

    {question: "Arrays in JavaScript can be use to store _____.",
    option1: "numbers & strings",
    option2: "other arrays",
    option3: "booleans",
    option4: "All of the above",
    answer: 4
},

    {question: "String values must be enclosed within ____ when being assigned to variables.",
    option1: "comma",
    option2: "curly brackets",
    option3: "quotes",
    option4: "parentheses",
    answer: 3
},

    {question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    option1: "JavaScript",
    option2: "terminal/bash",
    option3: "for loops",
    option4: "console.log",
    answer: 4
}
];

var WRONG_ANSWER = -10
var remainingTime = 75

console.log(optionsEl)

function startQuiz(){
    questionCounter = 0
    availableQuestions = [...questions]
    instructions.remove();
    startbtnEl.remove();
    intro.remove();
    startTimer();

    




    getNewQuestion()
}

function getNewQuestion() {
    if(availableQuestions.length === 0) {
        clearInterval(timer)
        localStorage.setItem('mostRecentTime', remainingTime)
        return window.location.assign("highscores.html")
    }


    var questionsIndex = Math.floor(Math.random() * availableQuestions.length)
        

    currentQuestion = availableQuestions[questionsIndex]
    questionEl.innerText = currentQuestion.question
    
    optionsEl.forEach(option => {
        var number = option.dataset['number']
        option.innerText = currentQuestion['option' + number]

    })

    availableQuestions.splice(questionsIndex, 1)
    
    acceptingAnswers = true

    console.log(availableQuestions)
}

optionsEl.forEach(option => {
    option.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        var selectedOption = e.target
        var selectedAnswer = selectedOption.dataset['number']

        var classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if (classToApply === 'incorrect'){
           // newTimer()
           remainingTime = remainingTime - 10;
        }


        selectedOption.classList.add(classToApply)

        setTimeout(() => {
            selectedOption.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})


var renderTime = function(){
    remainingTime -= 1;
    time.innerText = "Time Remaining: " + remainingTime;
    if(remainingTime <= 0){
        clearInterval(timer)
        localStorage.setItem('mostRecentTime', remainingTime)
        return window.location.assign("highscores.html");
    }
};

var startTimer = function(){
    time.innerText = "Time Remaining: " + remainingTime;
    timer = setInterval(renderTime, 1000)
}

var newTimer = function(){
    newtime = remainingTime - 10;
    time.innerText = "Time Remaining: " + newtime;

}

    

startbtnEl.addEventListener("click", startQuiz);


