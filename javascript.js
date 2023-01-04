const userRock = document.getElementById("rock");
const userPaper = document.getElementById("paper");
const userScissors = document.getElementById("scissors");
+
const getComputerChoice = () => {
    const randomChoice = Math.floor(Math.random() * 3);
    switch (randomChoice) {
        case 0:
            return 'rock';
        break;
        case 1:
            return 'paper';
        break;
        case 2:
            return 'scissors';
        break;
    };
};

userRock.addEventListener('click', function() {
    let userchoice = 'rock';
    playGame(userChoice, computerChoice);
});

userPaper.addEventListener('click', function() {
    let userchoice = 'paper';
    playGame(userChoice, computerChoice);
});

userScissors.addEventListener('click', function() {
    let userchoice = 'scissors';
    playGame(userChoice, computerChoice);
});

const computerChoice = getComputerChoice();

const decideWinner = (userChoice, computerChoice) => {
    console.log(`You selected ${userChoice}.`);
    console.log(`The computer selected ${computerChoice}`);
    if (userChoice === computerChoice) {
        return 'It\'s a draw!';
    };
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'You lose!';
        }
        else {
            return 'You win!';
        }
    };
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'You lose!';
        }
        else {
            return 'You win!';
        }
    };
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'You lose!';
        }
        else {
            return 'You win!';
        }
    };
};

const playGame = decideWinner('rock', computerChoice);