

const playerOneName = "arif"
const playerTwoName = "owasib"
const playerOneMarker = "X"
const playerTwoMarker = "O"

const playerOne={
    name: "arif",
    marker: "X"
}

const playerTwo={
    name: "owasib",
    marker: "O"
}


function gameOver(winningPlayer) {
    console.log("Congratulations!")
    console.log(winningPlayer.name + " is the winner!")
}
