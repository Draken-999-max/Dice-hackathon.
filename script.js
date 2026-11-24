"use script";

const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const diceel = document.querySelector(".dice");
const rollBtn = document.querySelector(".btn--roll");
const current0El = document.querySelector(".current-score-0");
const current1El = document.querySelector(".current-score-1");
const player0cl = document.querySelector(".player-0");
const player1cl = document.querySelector(".player-1");
const holdBtn = document.querySelector(".btn--hold");

diceel.classList.add("hidden");
score0.textContent = 0;
score1.textContent = 0;
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current-score-${activePlayer}`).textContent =
    currentScore;
  player0cl.classList.toggle("player-active");
  player1cl.classList.toggle("player-active");
  activePlayer = activePlayer === 0 ? 1 : 0;
};

rollBtn.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceel.classList.remove("hidden");
  diceel.src = `dice-${dice}.png`;
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current-score-${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});
