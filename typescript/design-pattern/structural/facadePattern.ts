/**
 * Facade Pattern is a structural design pattern that provides a simplified
 * interface to a complex system. It involves creating a wrapper interface over a
 * complex system to hide its complexities . This pattern involves a single class
 * that provides simplified methods required by the client and delegates call to
 * method of existing system classes
 */

class Grinder {
  public grindBeans(): void {
    console.log("Grinding Beans");
  }
}

class Boiler {
  public boilWater(): void {
    console.log("Boiling Water");
  }
}

class Brewer {
  public brewCoffee(): void {
    console.log("Brewing Coffee");
  }
}

class CoffeeMakerFacade {
  constructor(
    private grinder: Grinder,
    private boiler: Boiler,
    private brewer: Brewer,
  ) {}

  public makeCoffee(): void {
    this.grinder.grindBeans();
    this.boiler.boilWater();
    this.brewer.brewCoffee();
    console.log("Coffee readay");
  }
}

// Client Code
let grinder = new Grinder();
let boiler = new Boiler();
let brewer = new Brewer();

let makeCoffee = new CoffeeMakerFacade(grinder, boiler, brewer);
makeCoffee.makeCoffee();

/**  When to use
 * Rampant Dependencies
 * Overwhelmed Complexity
 * Overexposure of Inner Working
 * Need for layed Architecture
 * Need for simplify API
 */

//Read World example

class Amplifier {
  public turnOn(): void {
    console.log("Amplifier is on");
  }
  public setVolume(volume: number): void {
    console.log(`Setting volume to ${volume}`);
  }
}

class DvdPlayer {
  turnOn(): void {
    console.log("DvdPlayer is on");
  }
  public play(movie: string): void {
    console.log(`Playing ${movie}`);
  }
}

class Projector {
  public turnOn(): void {
    console.log("Projector is on");
  }
  public setInput(dvd: DvdPlayer): void {
    console.log(`Setting dvd to ${dvd}`);
  }
}

class Lights {
  public dim(level: number): void {
    console.log(`Dimming to ${level}`);
  }
}

class HomeTheaterFacade {
  constructor(
    private amplifier: Amplifier,
    private dvdPlayer: DvdPlayer,
    private projector: Projector,
    private lights: Lights,
  ) {}

  public watchMovie(movie: string, volume: number, level: number): void {
    console.log(`Get ready to watch a ${movie}`);
    this.lights.dim(level);
    this.amplifier.turnOn();
    this.amplifier.setVolume(volume);
    this.dvdPlayer.turnOn();
    this.dvdPlayer.play(movie);
    this.projector.turnOn();
    this.projector.setInput(this.dvdPlayer);
  }
}

// Client Code

let amplifier = new Amplifier();
let dvdPlayer = new DvdPlayer();
let projector = new Projector();
let lights = new Lights();

let homeTheater = new HomeTheaterFacade(
  amplifier,
  dvdPlayer,
  projector,
  lights,
);

homeTheater.watchMovie("The Matrix", 10, 10);

/** Advantages
 *  Simplified Interface
 *  Reduced Complexity
 *  Decoupling of Subsystems and Client
 *  Easier to Use
 *  Promotes Layering
 *
 */

/** Disadvantages
 *  Over-abstraction of subsystem
 *  Limitation of Flexibility
 *  Hiding Useful Information
 */

// Application of Facade Pattern
/**
 *
 */
