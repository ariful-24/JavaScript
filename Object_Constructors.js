

// function Player(name, marker){
//     this.name = name
//     this.marker = marker
//     this.sayName = function(){
//         console.log(name)
//     }
    
// }

// const playerOne = new Player('arif','X')
// const playerTwo = new Player('owasib','O')

// playerOne.sayName()
// playerTwo.sayName()

function Student(name, grade) {
    this.name = name
    this.grade = grade
  }

  Student.prototype.sayName = function(){
    console.log(this.name)
  }

  Student.prototype.goToProm = function() {
    console.log("Eh.. go to prom?")
  }

  const studenOne = new Student('arif',56);
  studenOne.sayName()
  const studenTwo = new Student('arif',56);
  studenOne.goToProm()
