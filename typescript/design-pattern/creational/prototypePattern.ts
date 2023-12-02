/**
 * The prototype pattern is a creational design pattern that allows
 * cloning objects without depending on their concrete classes.All the
 * prototype classes have a common interface that makes it possible to copy
 * objects even if their concrete classes are unknown . Prototype objects
 * can produce full copies since objects of the same class can access
 * reach other's private fields.
 *
 */

interface UserDetails {
  name: string;
  age: number;
  email: string;
}

interface Prototype {
  clone(): Prototype;
  getUserDetails(): UserDetails;
}

class ConcretePrototype implements Prototype {
  constructor(private user: UserDetails) {}

  public clone(): Prototype {
    const clone = Object.create(this);
    clone.user = { ...this.user };
    return clone;
  }

  public getUserDetails(): UserDetails {
    return this.user;
  }
}
let user1 = new ConcretePrototype({
  name: "John",
  age: 30,
  email: "p8XQK@example.com",
});

let user2 = user1.clone();

if (user1 === user2) {
  console.log("Both instance are the same");
} else {
  console.log("Cloned object are septate from original");
} // Cloned object are septate from original

/**
 * When to use Prototype pattern
 * 1 . Complex Object Creation
 * 2 . High Cost of Object Creation
 * 3 . Similar Object Instance
 * 4 . Dynamic Typing or Run-time Configuration
 * 5 . Preserving Historical States
 * 6 . Large Object Graphs
 */

// Real World Example

interface ShapeProperties {
  color: string;
  x: number;
  y: number;
}

abstract class Shape {
  constructor(public properties: ShapeProperties) {}
  abstract clone(): Shape;
}

class Rectangle extends Shape {
  constructor(
    properties: ShapeProperties,
    public width: number,
    public height: number,
  ) {
    super(properties);
  }

  public clone(): Shape {
    let clonedProperties = {
      color: this.properties.color,
      x: this.properties.x,
      y: this.properties.y,
    };
    return new Rectangle(clonedProperties, this.width, this.height);
  }
}

class Circle extends Shape {
  constructor(
    properties: ShapeProperties,
    public radius: number,
  ) {
    super(properties);
  }

  public clone(): Shape {
    let clonedProperties = {
      color: this.properties.color,
      x: this.properties.x,
      y: this.properties.y,
    };
    return new Circle(clonedProperties, this.radius);
  }
}

let redRectangle = new Rectangle(
  {
    color: "red",
    x: 20,
    y: 10,
  },
  10,
  20,
);

let anotherRectangle: Shape = redRectangle.clone();
anotherRectangle.properties.color = "blue";

// Criticism of Prototype Pattern

let original = {
  name: "John",
  address: {
    street: "123 Main St`",
    city: "New York",
  },
};

let shallowCopy = { ...original };
shallowCopy.address.city = "Los Angeles";
console.log(shallowCopy.address.city); // Los Angeles
console.log(original.address.city); // Los Angeles

let deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.address.city = "San Francisco";
console.log(deepCopy.address.city); // San Francisco
console.log(original.address.city); // New York

// Where to use
/**
 * Graphics Editor
 * Game Development
 * Distributed Systems and Database
 * Data Processing Pipeline
 * UI Development
 * 

*/
