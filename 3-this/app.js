function hello(){
    console.log(this);
    console.log(this === global);
}

hello();

class Car{
    constructor(name){
        this.name = name;
    }
    memberFunction(){
        console.log('----class-----');
        console.log(this);
        console.log(this === global);
    }
}

const a = new Car('sonata');
a.memberFunction();

console.log('-----out of class(global scope)-----');
console.log(this);
console.log(this === module.exports);