var highScoresForm = document.querySelector("#highScoresForm");
var highScoresList = document.querySelector("#highScoresList");
var initialsEntered = document.querySelector("#initials");
var highScoresCount = 0;

var highScores = [];

init();

// function sortHighScores () {
//   for () {

//   }
// }

function hideSwap(clickedButton) {
var hiddenEls = document.getElementsByClassName("hide");
var activeEl = document.getElementsByClassName("active");
var temp = activeEl;

activeEl.classList.remove("active");
activeEl.classList.add("hide");

clickedButton.

  // var value = event.target.value;
  // if(value === "keydown") {
  //   mouseEventsEl.classList.add("hide");
  //   keyEventsEl.classList.remove("hide");
}

function renderHighScores() {
  // Clear highScoresList element and update highScoresCount
  highScoresList.innerHTML = "";
  highScoresCount = highScores.length;


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
    if (i < 11) {
    highScoresList.appendChild(li);
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
    if (storedScores !== null) {
      highScores = storedScores;
    }
  
    // Render highScores to the DOM
    renderScores();
  }
  
  function storeHighScores() {
    // Stringify and set "highScores" key in localStorage to highScores array
    localStorage.setItem("highScores", JSON.stringify(highScores));
  }
  
  // When form is submitted...
  HighScoresForm.addEventListener("submit", function(event) {
    hideSwap(event.target);
    event.preventDefault();
  
    var initials = initialsEntered.value.trim();
  
    // Return from function early if submitted initialsEntered is blank or too long
    // MAY NEED TO RETURN HERE IF IT DOESN'T ALLOW FOR INITIAL REENTRY
    if (initials === "") {
      return;
    } else if (initials.length > 3) {
      alert("3 letter initials maximum, please.");
      return;      
    }
  
    // Add new initialsEntered to highScores array, clear the input
    highScores.push(initials);
    initialsEntered.value = "";
  
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
    }
  });
  