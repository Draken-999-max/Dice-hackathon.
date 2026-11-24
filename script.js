"use script";

const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const diceel = document.querySelector(".dice");
const rollBtn = document.querySelector(".btn--roll");
const current0El = document.querySelector(".current-score-0");
const current1El = document.querySelector(".current-score-1");
const player0cl = document.querySelector();

diceel.classList.add("hidden");
score0.textContent = 0;
score1.textContent = 0;
let currentScore = 0;

const switchPlayer = function () {};

rollBtn.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceel.classList.remove("hidden");
  diceel.src = `dice-${dice}.png`;
  currentScore += dice;
  document.getElementById("current-score-0").textContent = currentScore;
});
