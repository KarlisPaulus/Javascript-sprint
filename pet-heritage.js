class Pet {
    // methods
    makeSound () {
        console.log(`I am a ${this.species}`);
    }

    // constructor
    constructor (name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
}
/*
const pet = new Pet('Teri', 10, 'Bird')
pet.makeSound()
*/

class Dog extends Pet {

    fetch () {
        console.log(`${this.name} is fetching its ${this.favoriteToy}`)
    }

    constructor (name, age, breed, favoriteToy) {
        super(name, age);
        this.species = "Dog";
        this.breed = breed;
        this.favoriteToy = favoriteToy;
    }
}
/*
const dog = new Dog('Bruno', 7, 'Spaniel', 'tennis ball')
dog.makeSound()
dog.fetch()
*/

class Cat extends Pet {

    purr () {
        console.log(`${this.name} purrs on the ${this.favoriteNapSpot}`);
    }

    constructor (name, age, color, favoriteNapSpot) {
        super(name, age);
        this.species = "Cat";
        this.color = color;
        this.favoriteNapSpot = favoriteNapSpot;
    }
}
/*
const cat = new Cat('Paws', 2, 'black and white', 'mat')
cat.makeSound()
cat.purr()
*/