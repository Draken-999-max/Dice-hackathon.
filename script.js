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
const newBtn = document.querySelector(".btn--new");
const btnHelp = document.querySelector(".btn--help");

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current-score-${activePlayer}`).textContent =
    currentScore;
  player0cl.classList.toggle("player-active");
  player1cl.classList.toggle("player-active");
  activePlayer = activePlayer === 0 ? 1 : 0;
};
const addHidden = function () {
  document.querySelector(".modal").classList.add("hidden");
  document.querySelector(".block").classList.add("hidden");
};
const removeHidden2 = function () {
  document.querySelector(".modal").classList.remove("hidden");
  document.querySelector(".block").classList.remove("hidden");
};
let currentScore,
  activePlayer,
  scores,
  playing = "";

const init = function () {
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  playing = true;
  diceel.classList.add("hidden");
  score0.textContent = 0;
  score1.textContent = 0;
  diceel.classList.add("hidden");
  player0cl.classList.remove("player--winner");
  player1cl.classList.remove("player--winner");
  player0cl.classList.add("player-active");
  player1cl.classList.remove("player-active");
};
init();
rollBtn.addEventListener("click", function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceel.classList.remove("hidden");
    diceel.src = `dice-${dice}.png`;
    if (dice !== 1 && dice !== 3) {
      currentScore += dice;
      document.getElementById(`current-score-${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});
holdBtn.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 50) {
      playing = false;
      diceel.classList.add("hidden");
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.remove("player-active");
    } else {
      switchPlayer();
    }
  }
});
newBtn.addEventListener("click", init);

btnHelp.addEventListener("click", function () {
  removeHidden2();
});
document
  .querySelector(".block-header-times")
  .addEventListener("click", function () {
    addHidden();
  });
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    addHidden();
  }
});
document.querySelector(".modal").addEventListener("click", function () {
  addHidden();
});
