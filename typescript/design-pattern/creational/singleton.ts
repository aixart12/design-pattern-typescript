/**
 * The singleton pattern is a creational design pattern that lest you
 * ensure that a class has only once instance , while proving a global
 * access point to this instance
 */

/**
 * The static keyword in a class, like in your TypeScript Singleton example, serves a few important purposes:

    Single Instance Management: In the Singleton pattern, static is 
    used to ensure that there is only one instance of the class. 
    The static property instance belongs to the class itself rather
    than to any individual instance. This means that no matter how 
    many times you access Singleton.getInstance(), you're always 
    referring to the same instance.

    Global Accessibility: A static property or method can be accessed 
    without creating an instance of the class. This is essential for 
    the Singleton pattern, where the goal is to control instance 
    creation and provide a global point of access.

    Shared Data: In your example, the _value property is static, 
    meaning it's shared by all instances of the class. However, 
    since it's a Singleton, this shared nature is somewhat moot
    because there will only ever be one instance. Still, this 
    illustrates how static properties can be used to hold data 
    that is common to all instances of a class.

    Utility Methods: Sometimes, static methods are used in classes 
    to provide utility functions that are related to the class but 
    don't require an instance of the class to work. In the Singleton 
    pattern, the getInstance() method is a perfect example of this.

    Encapsulation: By using static for the instance and _value 
    properties and making the constructor private, the class 
    encapsulates its instantiation logic. This ensures control 
    over how and when the class is instantiated.
 */

class Singleton {
  private static instance: Singleton;
  private static _value: number;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  set value(value: number) {
    Singleton._value = value;
  }

  get value(): number {
    return Singleton._value;
  }
}

let instance1 = Singleton.getInstance();
let instance2 = Singleton.getInstance();
instance1.value = 10;

console.log(instance1.value); //10
console.log(instance2.value); // 10 without assigning the class

// REAL WORLD IMPLEMENTATION

// Singleton Logger Class
// log method
// Can have multiple methods

class LoggerSingleton {
  private static instance: LoggerSingleton;

  private constructor() {}

  public static getInstance(): LoggerSingleton {
    if (!LoggerSingleton.instance) {
      LoggerSingleton.instance = new LoggerSingleton();
    }
    return LoggerSingleton.instance;
  }

  public log(message: string): void {
    const timestamp = new Date();
    console.log(`[${timestamp.toLocaleString}] -${message}`);
  }
}

let logger1 = LoggerSingleton.getInstance();
logger1.log("This is the first message"); // This is the first message

let logger2 = LoggerSingleton.getInstance();
logger2.log("This is the second massage "); // This is the second massage

/**
 * Advantages
 * File Access Issues
 * Performance
 * Consistency
 * Configuration
 * Thread-Safety
 */
