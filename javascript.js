const userRock = document.getElementById("rock");
const userPaper = document.getElementById("paper");
const userScissors = document.getElementById("scissors");

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

const computerChoice = getComputerChoice();

if(userRock){
    userRock.addEventListener('click', () => {
        let userchoice = 'rock';
        decideWinner(userChoice, computerChoice);
    });
  };

  if(userPaper){
    userPaper.addEventListener('click', () => {
        let userchoice = 'paper';
        decideWinner(userChoice, computerChoice);
    });
  };

  if(userScissors){
    userRock.addEventListener('click', () => {
        let userchoice = 'scissors';
        decideWinner(userChoice, computerChoice);
    });
  };

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