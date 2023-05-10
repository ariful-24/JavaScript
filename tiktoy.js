

const playerOneName = "arif"
const playerTwoName = "owasib"
const playerOneMarker = "X"
const playerTwoMarker = "O"

const playerOne={
    name: "arif",
    marker: "X",
    score: 15
}

const playerTwo={
    name: "owasib",
    marker: "O",
    score: 5
}


function keepScore(){
    if(playerOne.score >= 10){
        gameOver(playerOne)
    }
    else if(playerTwo.score>=10){
        gameOver(playerTwo)
    }
}

keepScore()

function gameOver(winningPlayer) {
    console.log("Congratulations!")
    console.log(winningPlayer.name + " is the winner!")
}
