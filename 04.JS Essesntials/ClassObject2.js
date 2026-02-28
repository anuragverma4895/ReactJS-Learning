class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    show(){
        return(this.name+" "+this.age);
    }
}
let person1=new Person("Anurga",20);
console.log(person1);
console.log(person1.name);
console.log(person1.age);
console.log(person1.show());

let person2=new Person("Mohan",30);
console.log(person2);
console.log(person2.name);
console.log(person2.age);
console.log(person2.show());