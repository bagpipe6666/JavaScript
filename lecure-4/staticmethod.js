class dog {
    constructor(name) {
        this.name = name;
    }
    introduce() {
        console.log("This is " + this.name + " !");
    }

    // A static method 
    static bark() {
        console.log("Woof!");
    }
}
const myDog = new dog("Buster");
myDog.introduce();

dog.bark();