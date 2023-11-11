// Variables for later use
var currentQuestion = 0;
var time = 100;
var timer;
var questionIndex = [
    {
        question: "What is NOT a 'primitive' data type in JavaScript?",
        choices: [
            "String",
            "Function",
            "Boolean",
            "Null",
        ],
        answer: "Function",
    },
    {
        question: "How do you write a single-line comment in JavaScript?",
        choices: [
            "/* comment */",
            "!-- comment --",
            "// comment",
            "# comment",
        ],
        answer: "// comment",
    },
    {
        question: "What is the purpose of the 'for' loop in JavaScript?",
        choices: [
            "To declare a variable",
            "To create a function",
            "To iterate over a sequence of values",
            "To define a class",
        ],
        answer: "To iterate over a sequence of values",
    },
    {
        question: "What does the 'DOM' stand for in JavaScript?",
        choices: [
            "Document Object Model",
            "Data Object Model",
            "Dom Toretto",
            "Dynamic Object Mechanism",
        ],
        answer: "Document Object Model",
    },
    {
        question: "What is the purpose of the 'if' statement in JavaScript?",
        choices: [
            "To declare a variable",
            "To loop through an array",
            "To execute code conditionally",
            "To define a function",
        ],
        answer: "To execute code conditionally",
    }
];

// DOM Elements
var questionTitle = document.getElementById("question");
var quizChoices = document.querySelector(".quizChoices");
var clock = document.querySelector(".timer");

// Timer start, decreasing by one naturally per second
timer = setInterval(startClock, 1000); 

function startClock() {
    time --;
    if (time <=0) {
        time=0;
    };
    clock.textContent = time;
}

// Funtion to insert the question and available choices from the previously delcared array into the html to display
function showQuestion() {
    questionTitle.textContent = questionIndex[currentQuestion].question;

    quizChoices.textContent = "";

    var html = `<li><button value="${questionIndex[currentQuestion].choices[0]}" class="button">${questionIndex[currentQuestion].choices[0]}</button></li>
    <li><button value="${questionIndex[currentQuestion].choices[1]}" class="button">${questionIndex[currentQuestion].choices[1]}</button></li>
    <li><button value="${questionIndex[currentQuestion].choices[2]}" class="button">${questionIndex[currentQuestion].choices[2]}</button></li>
    <li><button value="${questionIndex[currentQuestion].choices[3]}" class="button">${questionIndex[currentQuestion].choices[3]}</button></li>`;

    quizChoices.insertAdjacentHTML("beforeend", html);
};

// Funtion that checks if the answer chosen was correct, if it was it will load the next question, if it was not, timer will lose 15 seconds
function checkAnswer(event) {
    console.log(event.target.value);
    if (event.target.value === questionIndex[currentQuestion].answer) {
        currentQuestion++;
    } else {
        time=time-15;
    };

    if (currentQuestion===questionIndex.length || time <= 0) {
        endGame();
    } else {
        showQuestion();
    };
};

// Funtion that will end the quiz game and bring the user to the "end" screen, ready to enter initials to save highscore
function endGame() {
    localStorage.setItem("score", time);
    clearInterval(timer);
    return window.location.assign('./end.html');
};

// Event Listener to "listen" for user to click a choice button
quizChoices.addEventListener("click", checkAnswer);

// Calling the funtion to begin showing the questions at the start of the quiz game
showQuestion();