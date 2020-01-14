var highScoresFormEl = document.querySelector("#highScoresForm");
var highScoresListEl = document.querySelector("#highScoresList");
var initialsEl = document.querySelector("#initials");
var highScoresCount = 0;
var scoreboardEl = document.querySelector("#scoreboard");
var highScoresEl = document.querySelector("#highScores");
var highScores = [];
var goBackBtn = document.querySelector("#goBackBtn");
var startPageEl = document.querySelector("#startPage");
var startBtn = document.querySelector("#startBtn");
var score = document.querySelector("#score")
var secondsLeft;

init();

highScoresEl.addEventListener("click", function() {hideSwap(scoreboardEl);});
goBackBtn.addEventListener("click", function() {hideSwap(startPageEl)});
startBtn.addEventListener("click", function() {
  hideSwap(q1);
  timer();
  
});
// NEED TO MAKE A CORRECT ANSWER VALIDATOR HERE SOMEHOW
// THINKING SOMETHING INVOLVING event.target (li) not equal to correct -15 secondsLeft
// MOVE TO NEXT Q - UNHIDE "WRONG" FOR ONE SECOND

// document.addEventListener("click", function() {

// })



function timer() {
  // WHEN I GO BACK AND RESTART THE INTERVAL DOUBLES UP.  NEED TO FIX
  secondsLeft = 75;
  score.textContent = secondsLeft;
  var countdown = setInterval(function() {
    secondsLeft--;
    score.textContent = secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(countdown);
      // ADD "YOU ARE SO DUMB" GIF HERE IF TIME ALLOWS
    }

  }, 1000)
};

// var secondsLeft = 10;

// function setTime() {
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

//     if(secondsLeft === 0) {
//       clearInterval(timerInterval);
//       sendMessage();
//     }

//   }, 1000);
// }

function hideSwap(clickedDestination) {
var activeEl = document.querySelector(".active");

activeEl.classList.remove("active");
activeEl.classList.add("hide");

clickedDestination.classList.remove("hide");
clickedDestination.classList.add("active");

  // var value = event.target.value;
  // if(value === "keydown") {
  //   mouseEventsEl.classList.add("hide");
  //   keyEventsEl.classList.remove("hide");
}

function renderHighScores() {
  // Clear highScoresList element and update highScoresCount
  highScoresListEl.innerHTML = "";
  // highScoresCount = highScores.length;


  // Render a new li for each high score
  for (var i = 0; i < highScores.length; i++) {
    var highScore = highScores[i];

    var li = document.createElement("li");
    li.textContent = initials + " " + highScore;
    li.setAttribute("data-index", i);

    //This should organize my highscores highest to lowest
    if (i > 0) {
      var prevHighScore = highScores[--i];
      if (highScore > prevHighScore) {
        var scoreSwap = function(arr, indexA, indexB) {
          var temp = arr[indexA];
          arr[indexA] = arr[indexB];
          arr[indexB] = temp;
        };
        scoreSwap(highScores, i, --i);
        renderHighScores();
      //   li.data-index = li.data-index[++i];
      //   highScores[]
      }
    }

    // THIS MAY NOT CORRECTLY ALLOW THE LAST SCORE TO REMAIN -- CHECK BACK
    if (i < 11) {
    highScoresListEl.appendChild(li);
    } else {
      return
    }
  }
}
function init() {
    // Get stored scores from localStorage
    // Parsing the JSON string to an object
    var storedHighScores = JSON.parse(localStorage.getItem("highScores"));
  
    // If scores were retrieved from localStorage, update the highScores array to it
    if (storedHighScores !== null) {
      highScores = storedHighScores;
    }
  
    // Render highScores to the DOM
    renderHighScores();
  }
  
  function storeHighScores() {
    // Stringify and set "highScores" key in localStorage to highScores array
    localStorage.setItem("highScores", JSON.stringify(highScores));
  }
  
  // When form is submitted...
  highScoresFormEl.addEventListener("submit", function(event) {
    hideSwap(scoreboard);
    event.preventDefault();
  
    var initials = initialsEl.value.trim();
  
    // Return from function early if submitted initialsEl is blank or too long
    // MAY NEED TO RETURN HERE IF IT DOESN'T ALLOW FOR INITIAL REENTRY
    if (initials === "") {
      return;
    } else if (initials.length > 3) {
      alert("3 letter initials maximum, please.");
      return;      
    }
  
    // Add new initialsEl to highScores array, clear the input
    highScores.push(initials);
    initialsEl.value = "";
  
    // Store updated highScores in localStorage, re-render the list
    storeHighScores();
    renderHighScores();
  });
  
  // When the clear highscores button is clicked...
  document.querySelector("#clearScores").addEventListener("click", function(event) {
    highScores = [];

    //   // Store empty highScores in localStorage, re-render the empty list
      storeHighScores();
      renderHighScores();
    })
  ;
  