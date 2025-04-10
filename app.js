let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game stareted");
    started = true;

    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 250);
}
function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(() => {
    btn.classList.remove("userFlash");
  }, 250);
}

let h3 = document.querySelector("h3");
function levelUp() {
  userSeq = [];
  level++;
  h3.innerText = `Level ${level}`;

  let randInx = Math.floor(Math.random() * 4);
  let btnColor = btns[randInx];
  let randBtn = document.querySelector(`.${btnColor}`);
  //   console.log(randInx);
  //   console.log(btnColor);
  //   console.log(randBtn);
  gameSeq.push(btnColor);
  console.log(gameSeq);
  gameFlash(randBtn);
}

let h2 = document.querySelector("h2");

function checkAns(idx) {1
  // console.log(`Current level :${level}`);
  if (userSeq[idx] === gameSeq[idx]) {
    // console.log("Same value!");
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h3.innerHTML = `Game over ! Your score was <b>${level}</b><br>Press any key to restart.`;
    h2.innerText = `Highest Score : ${level}`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}

function btnPress() {
  //   console.log(this);
  let btn = this;
  userFlash(btn);
  let btnColor = btn.getAttribute("id");
  //   console.log(btnColor);
  userSeq.push(btnColor);
  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
