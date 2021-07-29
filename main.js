let numberOfDecks = 4;
let numberOfCols = numberOfDecks + 2;
let numberOfRows = numberOfDecks + 1;

function Deck(name, bgColor){
    this.name = name;
    this.bgColor = bgColor;
}
/*
let deckOne = "Deck One";
let deckTwo = "Deck Two";
let deckThree = "Deck Three";
let deckFour = "Deck Four";
*/

let deckOne = new Deck("Deck One", "white");
let deckTwo = new Deck("Deck Two", "rgb(18, 63, 18)");
let deckThree = new Deck("Deck Three", "red");
let deckFour = new Deck("Deck Four", "blue");

const decks = [deckOne, deckTwo, deckThree, deckFour];

const tabulka = document.getElementById("tabulka");

createGrid(numberOfRows, numberOfCols);
cellDescriptionTopRow();
cellDescriptionLeftColumn();

function createGrid(rows, cols){
    numberOfGridBoxes = rows * cols;
    tabulka.style.setProperty("--grid-rows", numberOfRows);
    tabulka.style.setProperty("--grid-cols", numberOfCols);

    for (let c = 0; c < numberOfGridBoxes; c++){
        let cell = document.createElement("div");
        cell.id = c;
        cell.textContent = c;
        tabulka.appendChild(cell).className = "grid-item";
    }
}

function cellDescriptionTopRow(){

    let nullCell = document.getElementById(0);
    nullCell.textContent = "Deck";

    for (let i = 1; i <= numberOfDecks; i++){
        let deckCells = document.getElementById(i);
        deckCells.textContent = decks[i-1].name;
        deckCells.style.backgroundColor = decks[i-1].bgColor;
    }

    let lastCell = document.getElementById(numberOfDecks + 1);
    lastCell.textContent = "Score";
}

function cellDescriptionLeftColumn(){

    for (let i = 1; i <= numberOfDecks; i++){
        let deckCells = document.getElementById(i * numberOfCols);
        deckCells.textContent = decks[i-1].name;
        deckCells.style.backgroundColor = decks[i-1].bgColor;
    }
}