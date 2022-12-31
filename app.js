const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock = document.getElementById("r");
const scissors = document.getElementById("s");
const paper = document.getElementById("p");

let userScore = 0;
let compScore = 0;

function getComputerChoice() {
  const choice = ["r", "p", "s"];
  const random = Math.floor(Math.random() * choice.length);
  return choice[random];
}

function convertLetter(l) {
  if (l === "r") return "Rock";
  if (l === "p") return "Paper";
  if (l === "s") return "Scissors";
}

function win(userChoice, ComputerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  result_div.innerHTML = `${convertLetter(userChoice)} beats ${convertLetter(
    ComputerChoice
  )}. You win!`;
  userChoice_div.classList.add("green-glow");
  setTimeout(() => userChoice_div.classList.remove("green-glow"), 500);
}
function lose(userChoice, ComputerChoice) {
  const userChoice_div = document.getElementById(userChoice);

  compScore++;
  compScore_span.innerHTML = compScore;
  result_div.innerHTML = `${convertLetter(userChoice)} loses to ${convertLetter(
    ComputerChoice
  )}. You lose!`;
  userChoice_div.classList.add("red-glow");
  setTimeout(() => userChoice_div.classList.remove("red-glow"), 500);
}

function draw(userChoice) {
  const userChoice_div = document.getElementById(userChoice);
  result_div.innerHTML = `Draw! ${convertLetter(userChoice)} `;
  userChoice_div.classList.add("gray-glow");
  setTimeout(() => userChoice_div.classList.remove("gray-glow"), 500);
}

function game(userChoice) {
  const ComputerChoice = getComputerChoice();

  switch (userChoice + ComputerChoice) {
    case "sp":
    case "pr":
    case "rs":
      win(userChoice, ComputerChoice);
      break;
    case "sr":
    case "rp":
    case "ps":
      lose(userChoice, ComputerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice);
      break;
  }
}

function main() {
  rock.addEventListener("click", () => {
    game("r");
  });
  scissors.addEventListener("click", () => {
    game("s");
  });
  paper.addEventListener("click", () => {
    game("p");
  });
}
main();
