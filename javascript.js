//Refrences buttons for choices variable
const choices = document.querySelectorAll('button');
const userP = document.getElementById("userSelection");
const computerP = document.getElementById("computerSelection");
const gameMessage = document.getElementById("gameMessage");
const winText = 'You win!'
const loseText = 'You lose!'
const drawText = 'It\'s a draw!'
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
        userP.textContent = `You selected ${userChoice}.`;
        computerP.textContent = `Computer selected ${computerChoice}.`;
        gameMessage.textContent = decideWinner(userChoice, computerChoice);
    })
});



//Determines who wins
const decideWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        gameMessage.style.color = 'black';
        return drawText;
    };
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            gameMessage.style.color = 'red';
            return loseText;
        }
        else {
            gameMessage.style.color = 'green';
            return winText;
        }
    };
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            gameMessage.style.color = 'red';
            return loseText;
        }
        else {
            gameMessage.style.color = 'green';
            return winText;
        }
    };
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            gameMessage.style.color = 'red';
            return loseText;
        }
        else {
            gameMessage.style.color = 'green';
            return winText;
        }
    };
};

