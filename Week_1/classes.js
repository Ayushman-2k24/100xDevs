class Animal {
    constructor(name,legs,speaks) {
        this.name=name;
        this.legs=legs;
        this.speaks=speaks
    }
    speak(){
        console.log("this animal speaks "+ this.speaks);  
    }
    static Mytype(){
        console.log("animal");
    }
}

console.log(Animal.Mytype()); // static method are directly belong to the class we dosent have to make its instance to use it 

let dog = new Animal("dog",4,"bhow bhow")
let cat = new Animal("cat",4,"meow meow")

cat.speak();