let playerSelection;
let computerSelection;
const buttons = document.querySelectorAll('button');
let scorePlayer = parseInt(document.getElementById('scorePlayer').value, 10)
let scoreComputer = parseInt(document.getElementById('scoreComputer').value, 10)

game()

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
        return "It's a tie!";
    } else if((playerSelection == 'rock' && computerSelection == 'scissors') ||
       (playerSelection == 'scissors' && computerSelection == 'paper') ||
       (playerSelection == 'paper' && computerSelection == 'rock')){
            return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
            return `You lose! ${computerSelection} beats ${playerSelection}`;

    }
}

const div = document.querySelector('#result');
div.textContent = 'Risultati: '
let result = document.createElement('p')


function game(){
    buttons.forEach((button)=> {
        button.addEventListener('click', function(e){

            resultString = playRound(e.target.id, getComputerChoice()) ;
            result.innerHTML = resultString ;
        
            if(resultString.search('win') > 0){
                scorePlayer++
                document.getElementById('scorePlayer').value = scorePlayer;
            
            }else if (resultString.search('lose') > 0){
                scoreComputer++
                document.getElementById('scoreComputer').value = scoreComputer;
            } 
            div.appendChild(result)
        if (scorePlayer === 5){
            alert("Congratulations, you are the winner");
            disabledButtons();

        } else if (scoreComputer === 5){
            alert("I am sorry! You lost");
            disabledButtons();
        }
        });

        
    })


}

function disabledButtons() {
    buttons.forEach(button => {
        button.disabled = true
    })
}
