// rock-paper-scissors
const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");

let userChoice;
let computerChoice;
const winResult = "You win!";
const loseResult = 'You lose!';

const possibleChoices = document.querySelectorAll("button");
possibleChoices.forEach(choice => choice.addEventListener("click", (event) => {
    userChoice = event.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    computerChoiceDisplay.innerHTML = computerChoice;
    getResult();
}))

const generateComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)
    switch (randomNumber) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
    }
}

const getResult = () => {
    if (computerChoice === userChoice) {
        resultDisplay.innerHTML = "Draw!!!";
        
    } else if (computerChoice === "rock") {
        if (userChoice === "paper") {
            resultDisplay.innerHTML = winResult;
        } else {
            resultDisplay.innerHTML = loseResult;
        }
    } else if (computerChoice === "paper") {
        if (userChoice === "scissors") {
            resultDisplay.innerHTML = winResult;
        } else {
            resultDisplay.innerHTML = loseResult;
        }
    } else if (computerChoice === "scissors") {
        if (userChoice === "rock") {
            resultDisplay.innerHTML = winResult;
        } else {
            resultDisplay.innerHTML = loseResult;
        }
    }
}
