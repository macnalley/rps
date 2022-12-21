let playerScore = 0;
let computerScore = 0;

let resultMessage = '';
let playerHand = '';
let computerHand = '';
let playerHandDisplay = '';
let computerHandDisplay = '';


// Selecting DOM elements
const handButtons = document.querySelectorAll('.hand');
const results = document.querySelector('#results');
const playerScoreText = document.querySelector('#playerScore');
const computerScoreText = document.querySelector('#computerScore');
const resetBtn = document.querySelector('#reset');
const playerImg = document.querySelector('#player-choice');
const computerImg = document.querySelector('#computer-choice');
const buttons = document.querySelectorAll('button');
const rockTriangle = document.querySelector('#rock-triangle');
const paperTriangle = document.querySelector('#paper-triangle');
const scissorsTriangle = document.querySelector('#scissors-triangle');
const resetTriangle = document.querySelector('#reset-triangle');

// Assigning event listeners
addEvents();

resetBtn.addEventListener('click', reset);

buttons.forEach(button => button.addEventListener('mouseenter', selectButton));
buttons.forEach(button => button.addEventListener('mouseleave', deselectButton));

function addEvents() {
    handButtons.forEach(button => button.addEventListener('click', startRound));
}

function removeEvents() {
    handButtons.forEach(button => button.removeEventListener('click', startRound));
}

// UI Functions
function selectButton (e) { 
    let id = e.target.id;

    switch (id) {
        case 'rock':
            rockTriangle.style.visibility = 'visible';
            break;
        case 'paper':
            paperTriangle.style.visibility = 'visible';
            break;
        case 'scissors':
            scissorsTriangle.style.visibility = 'visible';
            break;
        case 'reset':
            resetTriangle.style.visibility = 'visible';
                break;
        default:
            break;
    }
}

function deselectButton(e) {
    let id = e.target.id;

    switch (id) {
        case 'rock':
            rockTriangle.style.visibility = 'hidden';
            break;
        case 'paper':
            paperTriangle.style.visibility = 'hidden';
            break;
        case 'scissors':
            scissorsTriangle.style.visibility = 'hidden';
            break;
        case 'reset':
            resetTriangle.style.visibility = 'hidden';
                break;
        default:
            break;
    }
}

function handToDisplayHand(hand) {
    switch (hand) {
        case 'rock':
            return 'rockit'
            break;
        case 'paper':
            return 'paporio'
            break;
        case 'scissors':
            return 'snissors'
            break;
        default:
            break;
    }
}


// Game functions

function reset() {
    playerScore = 0;
    computerScore = 0;
    resultMessage = 'Your RIVAL wants to fight! Choose your hand!';

    playerImg.src = 'imgs\\you.png';
    computerImg.src = 'imgs\\rival.png';

    addEvents();

    updateResults();
}

function startRound(e) {
    const playerNum = handToNumber(e.target.id);
    playerHand = e.target.id;
    playerImg.src = `imgs\\${playerHand}.png`;

    const computerNum = computerPlay();
    computerHand = numberToHand(computerNum);
    computerImg.src = `imgs\\${computerHand}.png`;

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
    
    playerHandDisplay = handToDisplayHand(playerHand);
    computerHandDisplay = handToDisplayHand(computerHand);
    
    if (playerNum === computerNum) {
        resultMessage = `You both chose ${playerHandDisplay.toUpperCase()}. Your fighters were evenly matched. Try again.`
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
    resultMessage = `You chose ${playerHandDisplay.toUpperCase()}. Your RIVAL chose ${computerHandDisplay.toUpperCase()}. You won this round!`;
}

function computerWins() {
    computerScore += 1;
    resultMessage = `You chose ${playerHandDisplay.toUpperCase()}. Your RIVAL chose ${computerHandDisplay.toUpperCase()}. You lost this round!`;
}

function endGame () {
    if (playerScore === 5 || computerScore === 5) {
        const winner = playerScore > computerScore ? "You" : "Your RIVAL";
        resultMessage = `Your hands are exhausted. ${winner} won!`; 
        
        updateResults();

        removeEvents();
    }
}