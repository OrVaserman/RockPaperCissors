function getComputerChoice() {

    let cH = Math.floor((Math.random() * 3) + 1);

    if(cH === 1) {
        return "rock";
    }

    else if(cH === 2) {
        return "paper";
    }

    else {
        return "scissors";
    }
}


// getComputerChoice function works!

function getHumanChoice() {
    
    let answer = prompt("Please enter your answer! Rock/Paper or Scissors!").toLowerCase();
    return answer;
}

let HumanScore = 0;
let ComputerScore = 0;

function playRound(humanChoice, computerChoice) {
    
    if (humanChoice === computerChoice) {
        alert("It's a tie! Both chose " + humanChoice);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        HumanScore++;
        alert("You win! " + humanChoice + " beats " + computerChoice + ".");
    } else {
        ComputerScore++;
        alert("You lose! " + computerChoice + " beats " + humanChoice + ".");
    }
}

function playGame() {
    for(let i = 0; i < 5; i++){
        
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        if (humanChoice === null){
            alert("User cancelled game!")
            return;
        }

        playRound(humanChoice, computerChoice);
        alert("Human score = " + HumanScore + " Computre score = " + ComputerScore);

       
    }

    if (HumanScore > ComputerScore){
        alert("You won the game!")
    }
    
    else if (HumanScore < ComputerScore){
        alert("You lost the game!")
    }
    else{
        alert("It's a tie!")
    }
}

playGame();
    


