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

cardArray.sort(() => 0.5 - Math.random());
// console.log(cardArray);

const gridDisplay = document.querySelector("#grid");
// console.log(gridDisplay);
let chosenCards = [];
let chosenIds = [];
const cardsWon = [];

cardArray.sort(() => 0.5 - Math.random());
// console.log(cardArray);


function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("img");
        card.setAttribute("src", "./images/blank.png");
        card.setAttribute("data-id", i);
        card.addEventListener("click", flipCard);
        gridDisplay.appendChild(card);
    }

    // cardArray.forEach(cardImage => {
    //     const card = document.createElement("img");
    //     card.setAttribute("src", cardImage.img);
    //     card.setAttribute("data-id", cardArray.indexOf(cardImage));
    //     gridDisplay.appendChild(card);
    //     // console.log(card);
    // })
}

function flipCard() {
    const cardId = this.getAttribute("data-id");
    chosenCards.push(cardArray[cardId].name);
    chosenIds.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (chosenCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
    // console.log(cardArray[cardId].name);
    // console.log(cardId);
    // console.log(chosenCards);
}

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
    chosenCards = [];
    chosenIds = [];

    if (cardsWon.length === cardArray.length / 2) {
        alert("You win!!!");
    }
}


createBoard();