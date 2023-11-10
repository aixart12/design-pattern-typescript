class Animal {
  constructor(public name: string) {}

  moved(distance: number): void {
    console.log(`${this.name} moved ${distance} meters`);
  }
}

class Dog extends Animal {
  constructor(public name: string = "Dog") {
    super(name);
  }
}

let myDog = new Dog();
myDog.moved(5);
