//Add buttons into game
const userRock = document.getElementsByClassName("rock");
const userPaper = document.getElementsByClassName("paper");
const userScissors = document.getElementsByClassName("scissors");
const userChoice = [userRock,userPaper,userScissors];



  //Randomized computer selection
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



//Adds button function and starts the game
userChoice.forEach(choices => {
    choices[0].addEventListener("click", function() {
        console.log(decideWinner(userChoice, computerChoice));
    })
});



//Determines who wins
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

