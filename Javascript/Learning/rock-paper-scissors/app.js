const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = function() {
    const selection = prompt(`${ROCK}, ${PAPER}, or ${SCISSORS}?`, '').toUpperCase();
    if (
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ) {
        alert(`Invalid choice! we chose ${ROCK} for you!`);
        return ROCK;
    }
    return selection;
};

const getComputerChoice = function() {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    }
    else if (randomValue < 0.67) {
        return PAPER;
    }
    else {
        return SCISSORS;
    }
};

const getWinner = (cChoice, pChoice = ROCK) => {
    if(cChoice === pChoice) {
        return RESULT_DRAW;
    }
    else if (
        (cChoice === ROCK && pChoice === PAPER) || 
        (cChoice === PAPER && pChoice === SCISSORS) ||
        (cChoice === SCISSORS && pChoice === ROCK)) {
            return RESULT_PLAYER_WINS;
        }
    else {
        return RESULT_COMPUTER_WINS;
    }
};

startGameBtn.addEventListener('click', () => {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerSelection = getPlayerChoice();
    const computerChoice = getComputerChoice();
    let winner;
    if (playerSelection) {
        winner = getWinner(computerChoice, playerSelection);
    }
    else {
        winner = getWinner(computerChoice);
    }
    let message = `You picked ${playerSelection || ROCK}, computer picked ${computerChoice}, therefore you `;
    if (winner === RESULT_DRAW) {
        message = message +  `had a draw.`;
    }
    else if (winner === RESULT_PLAYER_WINS) {
        message = message + `won!`;
    }
    else {
        message = message + `lost.`;
    }
    alert(message);
    gameIsRunning = false;
});

// rest operator which allows you to pass any number of arguments and forms them into an array.
// also the rest operator needs to be the last argument in the function parameter list.
// const sumUp = (...numbers) => {
//    let sum = 0;
//    for (const num of numbers) {
//        sum += num;
//    }
//    return sum;
//}

// If you don't want to use the arrow function then you can use the function
// key word which allows you to use the arguments keyword which is the same as
// using the rest operator
//const subtractUp = function() {
//    let sum = 0;
//    for (const num of arguments) {
//        sum -= num;
//    }
//    return sum;
//}

// .bind() will allow the use of the this keyword in the function the bind is attached to.