const squares = document.querySelectorAll('.square');
const mole = document.querySelector(".mole");
const timer = document.getElementById("timer");
const score = document.getElementById("score");
let timerId = null;
let result = 0;
let count = 60;
let hitPosition;
let currentTime;
let gameIsOn = true;

// assign mole to a random grid square
const assignMole = () => {
    squares.forEach(square => {
        square.classList.remove("mole"); // initially remove the mole if present
    });
    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add("mole");

    hitPosition = randomSquare.id;
}

// move mole after a time
const moveMole = () => {
    timerId = setInterval(assignMole, 1000);
}

// countdown clock
const countDown = () => {
    count--;
    timer.innerHTML = count;
    if (count === 0) {
        clearInterval(count);
        clearInterval(timerId);
        gameIsOn = false;
        alert(`TIME's UP!!! Your score is ${result}`);
    }
}

//run program
moveMole();
squares.forEach(square => {
    square.addEventListener("mousedown", () => {
        if (square.id === hitPosition) {
            result++;
            score.innerHTML = result;
            hitPosition = null;
        }
    })
});
currentTime = setInterval(countDown, 1000);
