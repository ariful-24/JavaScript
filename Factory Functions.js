

// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.sayName= function(){
//     console.log(this.name)
// }

// Person.prototype.sayAge= function(){
//     console.log(this.age)
// }

// const jeff = new Person('jeff',33);

// jeff.sayName();
// jeff.sayAge();


//Factory function 

const personFactory = (name, age) => {
    const sayHello = () => console.log('hello!');
    return { name, age, sayHello };
  };
  
  const arif = personFactory('arif', 27);
  
  console.log(arif.name); // 'arif'
  
  arif.sayHello(); // calls the function and logs 'hello!'