let gameSeq = [];
let userSeq = [];
let btns = ["red", "yellow", "green", "purple"];
let highestScore = 0;

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        started = true;
        console.log("Game Started");

        levelUp();
    }
});

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

// ---------------------------------- All functions -----------------------------------------

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randColor = btns[randomNumber()];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function randomNumber() {
    return Math.floor(Math.random() * 4);
}

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function btnPress() {
    let btn = this;
    btnFlash(btn);
    userSeq.push(btn.id);
    checkAns(userSeq.length - 1);
}

function checkAns(idx) {
    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        if (level > highestScore) {
            highestScore = level;
        }
        h2.innerHTML = `GAME OVER! Your score was <u>${level}</u>. <br> Press any key to continue.<br> Highest Score is <u>${highestScore}</u>`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
