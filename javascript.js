const losingStatement = 'You lose!'
const winningStatement = 'You win!'
const drawStatement = 'It\'s a draw!'

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

const playGame = (computerChoice, userChoice) => {
    if userChoice === 'rock' {
        if computerChoice === 'paper' {
            return losingStatement;
        }
        else if computerChoice === 'rock' {
            return drawStatement;
        }
        else {
            return winningStatement;
        }
    }

    if userChoice === 'paper' {
        if computerChoice === 'scissors' {
            return losingStatement;
        }
        else if computerChoice === 'paper' {
            return drawStatement;
        }
        else {
            return winningStatement;
        }
    }

    if userChoice === 'scissors' {
        if computerChoice === 'rock' {
            return losingStatement;
        }
        else if computerChoice === 'scissors' {
            return drawStatement;
        }
        else {
            return winningStatement;
        }
    }
}
