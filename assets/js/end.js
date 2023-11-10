// DOM Elements
var saveButton = document.getElementById("save");
var savedScore = document.querySelector(".timer");
var usernameForm = document.querySelector("#username");

// Local Storage Variables
var score = localStorage.getItem('score');
var highScores = JSON.parse(localStorage.getItem("highScores"));

// Funtion to pull the saved time score from the quiz.js and save it along with the users initials to be seen on the Highscores page
savedScore.textContent = score;

function saveScore(event) {
    
    var userScore = {
        score: score,
        name: usernameForm.value
    };
    
    highScores.push(userScore);

    localStorage.setItem('highScores', JSON.stringify(highScores));

};

// Event Listener to "listen" for the Save button to be clicked so the score can be kept with their initials
saveButton.addEventListener("click", saveScore);