const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        break;
        case 1:
            return 'paper';
        break;
        case 2:
            return 'scissors';
        break;
    }
}

const computerChoice = getComputerChoice;

let userChoice = 'rock';

console.log(`You chose ${userChoice}.`);

console.log(`The computer chose ${getComputerChoice(computerChoice)}.`);

const playGame = (computerChoice, userChoice) => {
    if (userChoice === computerChoice) {
        return 'It\'s a draw!';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 1) {
            return 'You lose!';
        }
        else if (computerChoice === 0) {
            return 'It\'s a draw!';
        }
        else {
            computerChoice === 2;
            return 'You win!';
        }
    }
    else if (userChoice === 'paper') {
        if (computerChoice === 2) {
            return 'You lose!';
        }
        else if (computerChoice === 1) {
            return 'It\'s a draw!';
        }
        else {
            computerChoice === 0;
            return 'You win!';
        }
    }
    else if (userChoice === 'scissors') {
        if (computerChoice === 0) {
            return 'You lose!';
        }
        else if (computerChoice === 2) {
            return 'It\'s a draw!';
        }
        else {
            computerChoice === 1;
            return 'You win!';
        }
    }
}

console.log(playGame(computerChoice, userChoice));