// Variables
const cardArray = [
    {
        name: "fries",
        img: "./images/fries.png"
    },
    {
        name: "cheesburger",
        img: "./images/cheeseburger.png"
    },
    {
        name: "hotdog",
        img: "./images/hotdog.png"
    },
    {
        name: "ice-cream",
        img: "./images/ice-cream.png"
    },
    {
        name: "milkshake",
        img: "./images/milkshake.png"
    },
    {
        name: "pizza",
        img: "./images/pizza.png"
    },
    {
        name: "fries",
        img: "./images/fries.png"
    },
    {
        name: "cheesburger",
        img: "./images/cheeseburger.png"
    },
    {
        name: "hotdog",
        img: "./images/hotdog.png"
    },
    {
        name: "ice-cream",
        img: "./images/ice-cream.png"
    },
    {
        name: "milkshake",
        img: "./images/milkshake.png"
    },
    {
        name: "pizza",
        img: "./images/pizza.png"
    }
]

const gridDisplay = document.querySelector("#grid");
let resultsDisplay = document.getElementById("result");
let chosenCards = [];
let chosenIds = [];
const cardsWon = [];

// randomise card order
cardArray.sort(() => 0.5 - Math.random());

// Creation of randomised board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("img");
        card.setAttribute("src", "./images/blank.png");
        card.setAttribute("data-id", i);
        card.addEventListener("click", flipCard);
        gridDisplay.appendChild(card);
    }
}

// select 2 cards and check for equivalence
function flipCard() {
    const cardId = this.getAttribute("data-id");
    chosenCards.push(cardArray[cardId].name);
    chosenIds.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (chosenCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

// major game function/sequence -> check match until won
function checkMatch() {
    const cards = document.querySelectorAll("#grid img");
    if (chosenIds[0] === chosenIds[1]) {
        alert("You have selected the same card!");
        cards[chosenIds[0]].setAttribute("src", "./images/blank.png");
        cards[chosenIds[1]].setAttribute("src", "./images/blank.png");
    } else if (chosenCards[0] === chosenCards[1]) {
        alert("A Match!");
        cards[chosenIds[0]].setAttribute("src", "./images/white.png");
        cards[chosenIds[1]].setAttribute("src", "./images/white.png");
        cards[chosenIds[0]].removeEventListener("click", flipCard);
        cards[chosenIds[1]].removeEventListener("click", flipCard);
        cardsWon.push(chosenCards)
    } else {
        cards[chosenIds[0]].setAttribute("src", "./images/blank.png");
        cards[chosenIds[1]].setAttribute("src", "./images/blank.png");
    }
    
    //record score
    resultsDisplay.innerHTML = cardsWon.length;    

    // reset cards for next selection of pairs
    chosenCards = [];
    chosenIds = [];

    if (cardsWon.length === cardArray.length / 2) {
        alert("You win!!!");
    }
}


createBoard();