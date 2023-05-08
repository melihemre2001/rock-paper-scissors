let playerSelect;
let aiSelect;
let playerCount = 0;
let aiCount = 0;
const rockBtn = document
  .querySelector("#rock")
  .addEventListener("click", resmiGonderPlayer);

const paperBtn = document
  .querySelector("#paper")
  .addEventListener("click", resmiGonderPlayer);

const scissorsBtn = document
  .querySelector("#scissors")
  .addEventListener("click", resmiGonderPlayer);

const playerCounter = document.querySelector(".playercount");
const aiCounter = document.querySelector(".aicount");

let tools = document.querySelector(".tools");

function toggleButtons(visible) {
  document.querySelector(".aipick").innerHTML == "Picking";
  for (tool of document.querySelector(".tools").children) {
    tool.disabled = visible;
  }
}

function resmiGonderPlayer(e) {
  if (playerCount == 3 || aiCount == 3) {
    return;
  }
  playerSelect = e.target.id;
  if (e.target.id == "rock") {
    document.querySelector(".playerpickimg").src = "images/rock.png";
  } else if (e.target.id == "paper") {
    document.querySelector(".playerpickimg").src = "images/paper.png";
  } else if (e.target.id == "scissors") {
    document.querySelector(".playerpickimg").src = "images/scissors.png";
  }
  document.querySelector(".playerpick").style.backgroundColor = "";
  document.querySelector(".aipick").style.backgroundColor = "";
  document.querySelector(".aipickimg").src = "";
  toggleButtons(true);

  setTimeout(() => {
    resmiGonderAI();
    toggleButtons(false);
    battleMech();
  }, 1500);
}

function resmiGonderAI() {
  let randomSayi = Math.floor(Math.random() * 3);
  aiSelect = document.querySelectorAll(".tool")[randomSayi].id;

  document.querySelector(".aipickimg").src = `images/${aiSelect}.png`;
}

function battleMech() {
  console.log("playerCount : ", playerCount, playerSelect);
  console.log("aiCount : ", aiCount, aiSelect);
  if (
    (playerSelect == "rock" && aiSelect == "scissors") ||
    (playerSelect == "scissors" && aiSelect == "paper") ||
    (playerSelect == "paper" && aiSelect == "rock")
  ) {
    playerCount++;
    document.querySelector(".playerpick").style.backgroundColor = "green";
    playerCounter.innerText = playerCount;
  } else if (
    (aiSelect == "rock" && playerSelect == "scissors") ||
    (aiSelect == "scissors" && playerSelect == "paper") ||
    (aiSelect == "paper" && playerSelect == "rock")
  ) {
    aiCount++;
    document.querySelector(".aipick").style.backgroundColor = "green";
    aiCounter.innerText = aiCount;
  } else {
    document.querySelector(".playerpick").style.backgroundColor = "yellow";
    document.querySelector(".aipick").style.backgroundColor = "yellow";
  }
  if (playerCount == 3 || aiCount == 3) {
    document.querySelector(".result").classList.add("active");
  }

  selectWinner();
}

function selectWinner() {
  if (playerCount == 3) {
    let playerWins = `
        <div class="win-area">
            Player Wins !
      </div>
    `;

    document.querySelector(".win-area").innerHTML = playerWins;
  } else if (aiCount == 3) {
    let aiWins = `
    <div class="win-area">
            AI Wins !
      </div>
    `;
    document.querySelector(".win-area").innerHTML = aiWins;
  }
}
