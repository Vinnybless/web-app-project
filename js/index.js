// VARIABLES //
let textOne = document.getElementById("textOne");
let redName = document.getElementById("questionTwo");
let redScore = document.getElementById("redScore");
let textTwo = document.getElementById("textTwo");
let blueName = document.getElementById("questionOne");
let blueScore = document.getElementById("blueScore");
let headingOne = document.querySelector(".headingOne");
let imgOne = document.getElementById("imgOne");
// DATA STRUCTURES //
const totalQuestions = [
  {
    question: "Attempt a backflip off a jungle gym?",
    imagesBruh: "img/backflip.gif"
  },
  {
    question: "Go down a bumpy slide?",
    imagesBruh: "img/badslide.gif"
  },
  {
    question: "Box against Bobby Hill?",
    imagesBruh: "img/bobbyhillboxing.gif"
  },
  {
    question: "Be a cat?",
    imagesBruh: "img/cathittingitself.gif"
  },
  {
    question: "Be in a skyscraper during an earthquake?",
    imagesBruh: "img/earthquake.gif"
  },
  {
    question: "Faceplant on TV?",
    imagesBruh: "img/faceplanttv.gif"
  },
  {
    question: "Slapped by a fish?",
    imagesBruh: "img/fishslap.gif"
  },
  {
    question: "Get attacked by a giant bird?",
    imagesBruh: "img/giantbird.gif"
  },
  {
    question: "Attempt to spin a gun?",
    imagesBruh: "img/gunfail.gif"
  },
  {
    question: "Slide a horse?",
    imagesBruh: "img/horseslide.gif"
  },
  {
    question: "Jump in a frozen lake?",
    imagesBruh: "img/ice.gif"
  },
  {
    question: "Fight a powered up Kermit the frog?",
    imagesBruh: "img/kermit.gif"
  },
  {
    question: "Get slapped by a penguin?",
    imagesBruh: "img/pengu.gif"
  },
  {
    question: "Get hit in the ankle by a scooter?",
    imagesBruh: "img/scooter.gif"
  },
  {
    question: "Drift a tiny pink car?",
    imagesBruh: "img/smallcar.gif"
  },
  {
    question: "Get bit by a snake?",
    imagesBruh: "img/snake.gif"
  },
  {
    question: "Get hit in the face by a soccer ball?",
    imagesBruh: "img/soccerball.gif"
  },
  {
    question: "Cook a steak with too much fire?",
    imagesBruh: "img/steakfire.gif"
  },
  {
    question: "Get hit by a random tire?",
    imagesBruh: "img/tire.gif"
  },
  {
    question: "Dance on a treadmill?",
    imagesBruh: "img/treadmilldance.gif"
  }
];
// PRE-GAME //
const preVar = (function () {
  alert("Play rock paper scissors, whoever wins goes first.");
  textOne.style.cssText = "visibility:hidden;";
  textTwo.style.cssText = "visibility:hidden;";
})();
// RANDOMIZE ARRAY FUNCTION //
function shuffleArray(totalQuestions) {
    for (let i = totalQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [totalQuestions[i], totalQuestions[j]] = [totalQuestions[j], totalQuestions[i]];
    }
}
shuffleArray(totalQuestions);
// START-GAME //
const startGame = function () {
  // SHOW OPTIONS //
  textOne.style.cssText = "visibility:visible;";
  textTwo.style.cssText = "visibility:visible;";
  // HIDE START BUTTON //
  document.getElementById("startBtn").style.cssText = "visibility:hidden;";
  // SHOW RESTART BUTTON //
  document.getElementById("restartBtn").style.cssText = "visibility:visible";
  // SHOW NAMES //
  blueName.style.visibility = "visible";
  redName.style.visibility = "visible";
  // SHOW HEADER //
  headingOne.style.cssText = "animation: flicker 1.8s infinite;";
  // SHOW NUMBERS //
  redScore.style.opacity = "1";
  redScore.style.cssText = "animation: flicker 5s infinite;";
  blueScore.style.opacity = "2";
  blueScore.style.cssText = "animation: flicker 5s infinite;";
  // DISPLAY OPTIONS //
  textOne.textContent = totalQuestions[0].question;
  textTwo.textContent = totalQuestions[1].question;
}
// DISPLAY GIF ONE //
function gifOne() {
  imgOne.setAttribute("src", totalQuestions[0].imagesBruh);
  imgOne.style.cssText = "visibility:visible";
  totalQuestions.shift();
  totalQuestions.shift();
  startGame();
}
// DISPLAY GIF TWO //
function gifTwo() {
  imgOne.setAttribute("src", totalQuestions[1].imagesBruh);
  imgOne.style.cssText = "visibility:visible";
  totalQuestions.shift();
  totalQuestions.shift();
  startGame();
}
let modelNumBlue = 0;
let modelNumRed = 0;
function incBlue() {
  blueScore.textContent = ++modelNumBlue;
}
function incRed() {
  redScore.textContent = ++modelNumRed;
}
// RESTART GAME FUNCTION //
function restartGameBruhseph() {
  location.reload();
}
// START GAME LISTENER //
document.getElementById("startBtn").addEventListener("click", startGame);
// IMG ONE EVENT LISTENER //
document.getElementById("textOne").addEventListener("click", gifOne);
// IMG TWO EVENT LISTENER //
document.getElementById("textTwo").addEventListener("click", gifTwo);
// RESTART LISTENER //
document.getElementById("restartBtn").addEventListener("click", restartGameBruhseph);
// BLUE INCREMENT LISTENER //
document.getElementById("textOne").addEventListener("click", incBlue);
// RED INCREMENT LISTENER //
document.getElementById("textTwo").addEventListener("click", incRed);