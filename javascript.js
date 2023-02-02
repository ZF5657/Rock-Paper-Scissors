//Refrences buttons for choices variable
const choices = document.querySelectorAll('button');
let userChoice;



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

//const computerChoice = getComputerChoice() needs to be inside event listener
//When inside, getComputerChoice is triggered each click

//Adds button function and starts the game
choices.forEach(choices => {
    choices.addEventListener("click", (i) => {
        userChoice = i.target.id
        const computerChoice = getComputerChoice();
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

