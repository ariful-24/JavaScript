

function Player(name, marker){
    this.name = name
    this.marker = marker
    this.sayName = function(){
        console.log(name)
    }
    
}

const playerOne = new Player('arif','X')
const playerTwo = new Player('owasib','O')

playerOne.sayName()
playerTwo.sayName()