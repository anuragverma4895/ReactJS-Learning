class Person{
    constructor(){
        this.name="Anurag";
        this.age=20;
    }
    show(){
        return(this.name+" "+this.age);
    }
}
let person1=new Person();
console.log(person1);
console.log(person1.name);
console.log(person1.age);
console.log(person1.show());

let person2=new Person();
console.log(person2);
console.log(person2.name);
console.log(person2.age);
console.log(person2.show());