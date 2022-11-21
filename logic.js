let playerScore = 0;
let computerScore = 0;

let resultMessage = '';
let playerHand = '';
let computerHand = '';


// Selecting DOM elements
const handButtons = document.querySelectorAll('.hand');
const results = document.querySelector('#results');
const playerScoreText = document.querySelector('#playerScore');
const computerScoreText = document.querySelector('#computerScore');
const resetBtn = document.querySelector('#reset');

// Assigning event listeners

addEvents();
resetBtn.addEventListener('click', reset);

function addEvents() {
    handButtons.forEach(button => button.addEventListener('click', startRound));
}
f
function removeEvents() {
    handButtons.forEach(button => button.removeEventListener('click', startRound));
}

// Game functions

function reset() {
    playerScore = 0;
    computerScore = 0;
    resultMessage = '';

    addEvents();

    updateResults();
}

function startRound(e) {
    const playerNum = handToNumber(e.target.id);playerHand = e.target.id;

    const computerNum = computerPlay();
    computerHand = numberToHand(computerNum);

    playRound(playerNum, computerNum);

    // Checks scores and ends game if one equals five
    endGame();
}

function computerPlay() {
    return Math.floor(Math.random() * 3 + 1);
}

function handToNumber(hand) {
    let handLower = hand.toLowerCase()

    switch (handLower) {
        case "rock":
            return 1
            break;
        case "paper":
            return 2
            break;
        default:
            return 3
            break;
    }
}

function numberToHand(number) {
    switch (number) {
        case 1:
            return "rock"
            break;
        case 2:
            return "paper"
            break;
        default:
            return "scissors"
            break;
    }
}

function playRound(playerNum, computerNum) {
    if (playerNum === computerNum) {
        resultMessage = 'Tie!'
    }
    else if (playerNum === 1) {
        computerNum === 2 ? computerWins() : playerWins();
    }
    else if (playerNum === 2) {
        computerNum === 1 ? playerWins() : computerWins();
    }
    else computerNum === 1 ? computerWins() : playerWins();

    updateResults();
}

function updateResults() {
    results.textContent = resultMessage;
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
}

function playerWins() {
    playerScore += 1;
    resultMessage = `You chose ${playerHand}. The computer chose ${computerHand}. You won!`;
}

function computerWins() {
    computerScore += 1;
    resultMessage = `You chose ${playerHand}. The computer chose ${computerHand}. You lost!`;
}

function endGame () {
    if (playerScore === 5 || computerScore === 5) {
        const winner = playerScore > computerScore ? "You" : "The computer";
        alert(`${winner} won!`); 

        removeEvents();
    }
}