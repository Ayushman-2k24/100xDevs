



class Animal {
    constructor(name,legcount,speaks) {
        this.name=name
        this.legcount=legcount
        this.speaks=speaks
    }
    static mytype(){
        console.log("hey i am a animal");
    }
    speaksSound(){
        console.log("hi there "+this.speaks);
    }
    leg(){
        console.log("no of legs are "+this.legcount);
    }
}

let dog = new Animal("dog",4,"bow bow");
dog.speaksSound();
dog.leg();
Animal.mytype()