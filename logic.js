const computerNum = computerPlay();
const computerHand = numberToHand(computerNum);

function computerPlay() {
    return Math.floor(Math.random() * 3 + 1);
}

function numberToHand(number) {
    switch (number) {
        case 1:
            return 'Rock'
            break;
        case 2:
            return "Paper"
            break;
        default:
            return "Scissors"
            break;
    }
}

console.log(computerNum);
console.log(computerHand);
