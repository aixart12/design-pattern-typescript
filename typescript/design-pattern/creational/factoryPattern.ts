abstract class Car {
  constructor(
    public model: string,
    public productionYear: number,
  ) {}

  abstract displayCarInfo(): void;
}

class Hatchback extends Car {
  public displayCarInfo(): void {
    console.log(`Hatchback ${this.model} ${this.productionYear}`);
  }
}

class Sedan extends Car {
  public displayCarInfo(): void {
    console.log(`Sedan ${this.model} ${this.productionYear}`);
  }
}

class SUV extends Car {
  public displayCarInfo(): void {
    console.log(`SUV ${this.model} ${this.productionYear}`);
  }
}
class CarFactory {
  public createCar(
    type: "sedan" | "hatchback" | "suv",
    model: string,
    productionYear: number,
  ): Car {
    switch (type) {
      case "sedan":
        return new Sedan(model, productionYear);
      case "suv":
        return new SUV(model, productionYear);
      case "hatchback":
        return new Hatchback(model, productionYear);
      default:
        throw new Error("Invalid car type");
    }
  }
}

const carFactory = new CarFactory();
const sedan = carFactory.createCar("sedan", "Honda", 2020);
const suv = carFactory.createCar("suv", "Toyota", 2021);
const hatchback = carFactory.createCar("hatchback", "BMW", 2022);

suv.displayCarInfo();
hatchback.displayCarInfo();
sedan.displayCarInfo();

// Real World Implementation

abstract class PaymentProcessor {
  constructor(protected amount: number) {}

  abstract processPayment(): void;
}

class BankTransferProcessor extends PaymentProcessor {
  processPayment(): void {
    console.log(`Processing Bank Transfer Processor - Amount ${this.amount}`);
  }
}

class StripeProcessor extends PaymentProcessor {
  processPayment(): void {
    console.log(`Processing Stripe Processor - Amount ${this.amount}`);
  }
}

class PayPalProcessor extends PaymentProcessor {
  processPayment(): void {
    console.log(`Processing PayPal Processor - Amount ${this.amount}`);
  }
}

class PaymentProcessorFactory {
  createPaymentProcessor(
    type: "bankTransfer" | "stripe" | "paypal",
    amount: number,
  ): PaymentProcessor {
    switch (type) {
      case "bankTransfer":
        return new BankTransferProcessor(amount);
      case "stripe":
        return new StripeProcessor(amount);
      case "paypal":
        return new PayPalProcessor(amount);
      default:
        throw new Error("Invalid payment processor type");
    }
  }
}

const paymentProcessorFactory = new PaymentProcessorFactory();

const bankTransferProcessor = paymentProcessorFactory.createPaymentProcessor(
  "bankTransfer",
  200,
);

const payPalProcess = paymentProcessorFactory.createPaymentProcessor(
  "paypal",
  500,
);

/**
 * Advantages of Factory Pattern
 * Decoupling of code form implementation and uses
 * Flexibility
 * Encapsulation
 *
 *
 */

/**
 * Increase the complexity
 * Refactor Challenges
 * Hidden Types
 * In
 */
