const playerInput = prompt("Choose your hand: Rock, Paper, or Scissors.", "What to choose ...?");
const computerNum = computerPlay();


let computerHand = numberToHand(computerNum);
let playerNum = handToNumber(playerInput);
let playerHand = numberToHand(playerNum);
var winner;
let playerScore = 0;
let computerScore = 0;

playRound(playerNum, computerNum);
findWinner();


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

function computerPlay() {
    return Math.floor(Math.random() * 3 + 1);
}

function numberToHand(number) {
    switch (number) {
        case 1:
            return "Rock"
            break;
        case 2:
            return "Paper"
            break;
        default:
            return "Scissors"
            break;
    }
}

function playRound(playerNum, computerNum) {
    if (playerNum === computerNum) {winner = null}
    else if (playerNum === 1) {computerNum === 2 ? winner = "computer" : winner = "player"}
    else if (playerNum === 2) {computerNum === 1 ? winner = "player" : winner = "computer"}
    else computerNum === 1 ? winner = "computer" : winner = "player"
}

function findWinner() {
    switch (winner) {
        case "player":
            playerScore += 1;
            tabScore();
            break;
        case "computer":
            computerScore +=1;
            tabScore();
            break;
        default:
            console.log("Tie!")
            break;
    }
}    


function tabScore() {
    console.log(`You chose ${playerHand}. The computer chose ${computerHand}.`);
    console.log(`Winner: ${winner}.`);
    console.log(`Player wins: ${playerScore}.`);
    console.log(`Computer wins: ${computerScore}.`);
}


// console.log(computerNum);
// console.log(computerHand);