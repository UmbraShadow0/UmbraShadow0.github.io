let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random()*9+1);
}


function getAbsoluteDistance(valueEvaluate, valueObtain){
    return Math.abs(valueEvaluate - valueObtain);
}

function compareGuesses(userGuess, computerGuess, secretGuess) {
    if ((userGuess>9) || (userGuess<0)) {
        return alert("Not valid!");
    }
    let userClosest = getAbsoluteDistance(secretGuess, userGuess);
    let computerClosest = getAbsoluteDistance(secretGuess, computerGuess);
    
    if (userClosest <= computerClosest) {
        return true;
    } else {
        return false;
    }
}

function updateScore(winner) {
    if (winner === 'human'){
        humanScore++;
    }
    else if (winner === 'computer') {
        computerScore++;
    }
    else {
        console.log('Invalid Winner!')
    }
}

function advanceRound() {
    currentRoundNumber++;
}