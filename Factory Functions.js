

function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.sayName= function(){
    console.log(this.name)
}

Person.prototype.sayAge= function(){
    console.log(this.age)
}

const jeff = new Person('jeff',33);

jeff.sayName();
jeff.sayAge();