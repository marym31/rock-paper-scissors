let playerSelection;
let computerSelection;

game();

function getComputerChoice(){

    //Tramite la funziona random, scelgo un numero da 1 a 3
    let choice = Math.floor(Math.random()*3) +1;

    //Assegno ad ognuno di questi numeri un valore(sasso, carta, forbici)
    switch(choice){
        case 1: return "rock"; 
        break;
        case 2: return "paper";
        break;
        case 3: return "scissors";
        break;
    }
}

// creo una funzione che fa partire il round
function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "it's a draw!!";
    } else if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors"){
        playerSelection = prompt("Inserire una scelta valida");
    }
    switch(playerSelection==="rock"){
        case computerSelection ==="paper":
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
            break;
        case computerSelection ==="scissors":
            return `You win! ${playerSelection} beats ${computerSelection}`;
            break;
        default:
        break;
    } 
    switch(playerSelection==="paper"){
        case computerSelection ==="scissors":
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
            break;
        case computerSelection ==="rock":
            return `You win! ${playerSelection} beats ${computerSelection}`;
            break;
        default:
        break;
    } 
    switch(playerSelection==="scissors"){
        case computerSelection ==="paper":
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
            break;
        case computerSelection ==="rock":
            return `You win! ${playerSelection} beats ${computerSelection}`;
            break;
        default:
        break;
    }
} 
function game(){
    for (i=1; i <= 5; i++){
        playerSelection = (prompt("Inserisci la tua scelta")).toLowerCase();
        computerSelection = getComputerChoice();
        alert(playRound(playerSelection, computerSelection));
        
    }
}
