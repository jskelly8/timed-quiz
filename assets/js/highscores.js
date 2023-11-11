// DOM Elements
var scoreIndex = document.querySelector("#scores");

// Local Storage Variables
var highScores = JSON.parse(localStorage.getItem("highScores"));

// Function to display high scores
function displayHighScores() {

    // Sorts the scores in decending order/Highest to lowest
    highScores.sort(function(a, b) {
        return b.score - a.score;
    });

    // Creates a list item into the HTML in order to display each initial and score pair 
    highScores.forEach(function(score) {
        var listItem = document.createElement('li');
        listItem.textContent = `${score.name} - ${score.score}`;
        scoreIndex.appendChild(listItem);
    });
}

// Calling the display funtion to show 
displayHighScores();
