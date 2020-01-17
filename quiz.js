var highScoresFormEl = document.querySelector("#highScoresForm");
var highScoresListEl = document.querySelector("#highScoresList");
var initialsEl = document.querySelector("#initials");
var highScoresCount = 0;
var scoreboardEl = document.querySelector("#scoreboard");
var highScores = [];
var goBackBtn = document.querySelector("#goBackBtn");
var startPageEl = document.querySelector("#startPage");
var startBtn = document.querySelector("#startBtn");
var score = document.querySelector("#score");
var secondsLeft;
var countdown;
// var answer1 = document.querySelector("#ans1");
// var answer2 = document.querySelector("#ans2");
// var answer3 = document.querySelector("#ans3");
// var answer4 = document.querySelector("#ans4");
// var answer5 = document.querySelector("#ans5");

document.addEventListener("click", check4Wrong);

init();

var highScoresEl = document.querySelector("#highScores");
highScoresEl.addEventListener("click", function() {
  hideSwap(scoreboardEl);
  clearInterval(countdown);});
goBackBtn.addEventListener("click", function() {
  hideSwap(startPageEl);
  clearInterval(countdown);
  score.textContent = "";});
startBtn.addEventListener("click", function() {
  hideSwap(q1);
  timer();
});
// q1.addEventListener("click", function() {
let buttons = document.querySelectorAll("button#ans1, button.wrong1")
for (const button of buttons) {
  button.addEventListener('click', function(event) {
    //...
    button.addEventListener("click", check4Wrong);
    hideSwap(q2);
  })
}
buttons = document.querySelectorAll("button#ans2, button.wrong2")
for (const button of buttons) {
  button.addEventListener('click', function(event) {
    //...
    button.addEventListener("click", check4Wrong);
    hideSwap(q3);
  })
}
buttons = document.querySelectorAll("button#ans3, button.wrong3")
for (const button of buttons) {
  button.addEventListener('click', function(event) {
    //...
    button.addEventListener("click", check4Wrong);
    hideSwap(q4);
  })
}
buttons = document.querySelectorAll("button#ans4, button.wrong4")
for (const button of buttons) {
  button.addEventListener('click', function(event) {
    //...
    button.addEventListener("click", check4Wrong);
    hideSwap(q5);
  })
}
buttons = document.querySelectorAll("button#ans5, button.wrong5")
for (const button of buttons) {
  button.addEventListener('click', function(event) {
    //...
    button.addEventListener("click", check4Wrong);

  hideSwap(allDone);
  clearInterval(countdown);
  })
}
  // var matches = myBox.querySelectorAll("div.note, div.alert");
  // hideSwap(q2);
// });
// q2.addEventListener("click", function() {
//   // document.addEventListener("click", check4Wrong);
//   hideSwap(q3);
// });
// q3.addEventListener("click", function() {
//   // document.addEventListener("click", check4Wrong);
//   hideSwap(q4);
// });
// q4.addEventListener("click", function() {
//   // document.addEventListener("click", check4Wrong);
//   hideSwap(q5);
// });
// q5.addEventListener("click", function() {
//   // document.addEventListener("click", check4Wrong);
//   hideSwap(allDone);
//   clearInterval(countdown);
// });

// document. 

// NEED TO MAKE A CORRECT ANSWER VALIDATOR HERE SOMEHOW
// THINKING SOMETHING INVOLVING event.target (li) not equal to correct -15 secondsLeft
// MOVE TO NEXT Q - UNHIDE "WRONG" FOR ONE SECOND

// document.addEventListener("click", function() {

// })

function timer() {
  secondsLeft = 75;
  score.textContent = secondsLeft;
  countdown = setInterval(function() {
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

// if (clickedAns.classList.contains("correct")) {
//   document.querySelector("#correctConf").classList.remove("hide");
//   document.querySelector("#correctConf").classList.add("active");
//   setTimeout(function() {
//     document.querySelector("#correctConf").classList.remove("active");
//     document.querySelector("#correctConf").classList.add("hide");
//   }, 75)
  // var value = event.target.value;
  // if(value === "keydown") {
  //   mouseEventsEl.classList.add("hide");
  //   keyEventsEl.classList.remove("hide");
// }








function check4Wrong(e) {
  if (e.target.classList.contains("wrong1")) {
    secondsLeft = secondsLeft - 15;
    if (secondsLeft < 0) {
      secondsLeft = 0;
        alert("Sorry, a score of 0 will not be recorded to the scoreboard...");
        hideSwap(scoreboard);
        clearInterval(countdown)
    };
    score.textContent = secondsLeft;
  };
  if (e.target.classList.contains("wrong2")) {
    secondsLeft = secondsLeft - 15;
    if (secondsLeft < 0) {
      secondsLeft = 0;
        alert("Sorry, a score of 0 will not be recorded to the scoreboard...");
        hideSwap(scoreboard);
        clearInterval(countdown)
    };
    score.textContent = secondsLeft;
  };
  if (e.target.classList.contains("wrong3")) {
    secondsLeft = secondsLeft - 15;
    if (secondsLeft < 0) {
      secondsLeft = 0;
        alert("Sorry, a score of 0 will not be recorded to the scoreboard...");
        hideSwap(scoreboard);
        clearInterval(countdown)
    };
    score.textContent = secondsLeft;
  };
  if (e.target.classList.contains("wrong4")) {
    secondsLeft = secondsLeft - 15;
    if (secondsLeft < 0) {
      secondsLeft = 0;
        alert("Sorry, a score of 0 will not be recorded to the scoreboard...");
        hideSwap(scoreboard);
        clearInterval(countdown)
    };
    score.textContent = secondsLeft;
  };
  if (e.target.classList.contains("wrong5")) {
    secondsLeft = secondsLeft - 15;
    if (secondsLeft < 0) {
      secondsLeft = 0;
        alert("Sorry, a score of 0 will not be recorded to the scoreboard...");
        hideSwap(scoreboard);
        clearInterval(countdown)
    };
    score.textContent = secondsLeft;
  };
};

function showAnsResult(e) {
  if (e.target.classList.contains("correct")) {
    document.querySelector("#correctConf").classList.remove("hide");
    document.querySelector("#correctConf").classList.add("active");
    setTimeout(function() {
      document.querySelector("#correctConf").classList.remove("active");
      document.querySelector("#correctConf").classList.add("hide");
    }, 750)
  } else if (e.target.classList.contains("wrong1", "wrong2", "wrong3", "wrong4", "wrong5")) {
    document.querySelector("#wrongConf").classList.remove("hide");
    document.querySelector("#wrongConf").classList.add("active");
    setTimeout(function() {
      document.querySelector("#wrongConf").classList.remove("active");
      document.querySelector("#wrongConf").classList.add("hide");
    }, 750)
  } else if (e.target.classList.contains("wrong2")) {
    document.querySelector("#wrongConf").classList.remove("hide");
    document.querySelector("#wrongConf").classList.add("active");
    setTimeout(function() {
      document.querySelector("#wrongConf").classList.remove("active");
      document.querySelector("#wrongConf").classList.add("hide");
    }, 750)
  } else if (e.target.classList.contains("wrong3")) {
    document.querySelector("#wrongConf").classList.remove("hide");
    document.querySelector("#wrongConf").classList.add("active");
    setTimeout(function() {
      document.querySelector("#wrongConf").classList.remove("active");
      document.querySelector("#wrongConf").classList.add("hide");
    }, 750)
  } else if (e.target.classList.contains("wrong4")) {
    document.querySelector("#wrongConf").classList.remove("hide");
    document.querySelector("#wrongConf").classList.add("active");
    setTimeout(function() {
      document.querySelector("#wrongConf").classList.remove("active");
      document.querySelector("#wrongConf").classList.add("hide");
    }, 750)
  } else if (e.target.classList.contains("wrong5")) {
    document.querySelector("#wrongConf").classList.remove("hide");
    document.querySelector("#wrongConf").classList.add("active");
    setTimeout(function() {
      document.querySelector("#wrongConf").classList.remove("active");
      document.querySelector("#wrongConf").classList.add("hide");
    }, 750)
  } 
}
// This is what shows the "Correct!" or "Wrong!" after clicking an answer
document.addEventListener('click', showAnsResult);


function hideSwap(clickedTarg) {
  var activeEl = document.querySelector(".active");

  activeEl.classList.remove("active");
  activeEl.classList.add("hide");

  clickedTarg.classList.remove("hide");
  clickedTarg.classList.add("active");
  
}
// function correctAns() {
//   var activeElement = document.querySelector(".active");
//   var activeLi = activeElement.getElementsByTagName("li");

//   activeLi.addEventListener("click", function() {
//     if (activeLi.classList.contains("correct")) {
//       document.querySelector("#correctConf").classList.remove("hide");
//       document.querySelector("#correctConf").classList.add("active");
//       setTimeout(function() {
//         document.querySelector("#correctConf").classList.remove("active");
//         document.querySelector("#correctConf").classList.add("hide");
//       }, 75)
//     }
//   });
  
//  ALSO NEED TO DO THE REVERSE OF THIS AS SOON AS I GET IT WORKING
  // if (document.querySelector(".active").find("li").classList.contains("correct")) {
  //   document.addEventListener("click", function () {
  //     document.querySelector("#correctConf").classList.remove("hide");
  //     document.querySelector("#correctConf").classList.add("active");
  //     setTimeout(function() {
  //       document.querySelector("#correctConf").classList.remove("active");
  //       document.querySelector("#correctConf").classList.add("hide");
  //     }, 75)
  //   })
  // }

  

function init() {
  // Get stored scores from localStorage
  // Parsing the JSON string to an object
  var storedHighScores = JSON.parse(localStorage.getItem("highScores"));

  // If scores were retrieved from localStorage, update the highScores array to it
  if (storedHighScores !== null) {
    highScores = storedHighScores;
  }
  // console.log(highScores)

  // Render highScores to the DOM
  renderHighScores();
}

function storeHighScores() {
  // Stringify and set "highScores" key in localStorage to highScores array
  localStorage.setItem("highScores", JSON.stringify(highScores));
}


function renderHighScores() {
  // Clear highScoresList element and update highScoresCount
  highScoresListEl.innerHTML = "";
  var sorter = function(a, b) {
  if (((a[a.length - 2]) + (a[a.length - 1])) > ((b[b.length - 2]) + (b[b.length - 1]))) {
      return -1;
  } else if (((a[a.length - 2]) + (a[a.length - 1])) < ((b[b.length - 2]) + (b[b.length - 1])))
{ return 1;
  } else {
  return 0;
  }
}
var sorted = highScores.sort(sorter);
  // Render a new li for each high score
  for (var i = 0; i < sorted.length; i++) {
    if (i > 10) {
      break
    }
    var highScore = sorted[i];
    var li = document.createElement("li");
    li.textContent = highScore;
    li.setAttribute("data-index", i);
    highScoresListEl.appendChild(li);
  }
}

    // THIS MAY NOT CORRECTLY ALLOW THE LAST SCORE TO REMAIN -- CHECK BACK  
    // if (i < 11) {
    // highScoresListEl.appendChild(li);
    // } else {
    //   return
//     }
  // }
// }
  
  // When form is submitted...
  highScoresFormEl.addEventListener("submit", function(event) {
    var initialVerify = function () {
      if (initials === "") {
        return;
      } else if (initials.length > 3) {
        alert("3 letter initials maximum, please.");
        initialVerify();
      }
    };

    initialVerify();

    hideSwap(scoreboard);
    event.preventDefault();
  
    var initials = initialsEl.value.trim();
  

    // Return from function early if submitted initialsEl is blank or too long
    // MAY NEED TO RETURN HERE IF IT DOESN'T ALLOW FOR INITIAL REENTRY
    // if (initials === "") {
    //   return;
    // } 
    // else if (initials.length > 3) {
    //   alert("3 letter initials maximum, please.");
    //   return;      
    // }
  
    // Add new initialsEl to highScores array, clear the input
    highScores.push(initials + " " + secondsLeft);
    // console.log("highscores.push - " + highScores);
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

  