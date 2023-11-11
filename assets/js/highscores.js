// DOM Elements
var scoreIndex = document.querySelector("#scores");

// Local Storage Variables
var highScores = JSON.parse(localStorage.getItem("highScores"));

// Function to display high scores
function displayHighScores() {

    highScores.forEach(function(score) {
        var listItem = document.createElement('li');
        listItem.textContent = `${score.name} - ${score.score}`;
        scoreIndex.appendChild(listItem);
    });
}

// Calling the display funtion to show 
displayHighScores();
