// Barbara Liskov
/**
 *  if S is a subtype of T, then objects of type T in a program may be
 *  replaced with objects of type S without altering any of the desirable
 *  properties of that program
 */

// Basic Example
abstract class Shape {
  abstract calculateArea(): number;
}

class Rectangle extends Shape {
  constructor(
    public width: number,
    public height: number,
  ) {
    super();
  }
  public calculateArea(): number {
    return this.width * this.height;
  }
}
class Square extends Shape {
  constructor(public side: number) {
    super();
  }
  public calculateArea(): number {
    return this.side * this.side;
  }
}

// ===== Cline Code

function area(shape: Shape) {
  return shape.calculateArea();
}

let rectangle = new Rectangle(10, 12);
let square = new Square(10);

area(rectangle); // rectangle as child class use instead of Shape Class
area(square); // square as child class use instead of Shape Class

// Real World Example

// Payment Processor

//  Credit Card
//  Debit Card
//  Paypal

abstract class PaymentProcessor {
  abstract processPayment(amount: number): void;
}

class CreditCardProcessor extends PaymentProcessor {
  public processPayment(amount: number): void {
    console.log(`Processing Credit Card  Payment - Amount ${amount}`);
  }
}
class DebitCardProcessor extends PaymentProcessor {
  public processPayment(amount: number): void {
    console.log(`Processing Debit Card  Payment - Amount ${amount}`);
  }
}

class PaypalCardProcessor extends PaymentProcessor {
  public processPayment(amount: number): void {
    console.log(`Processing PayPal Payment - Amount ${amount}`);
  }
}

function executePayment(paymentProcessor: PaymentProcessor, amount: number) {
  paymentProcessor.processPayment(amount);
}

let payPalProcessor = new PaypalCardProcessor();
let debitCarProcessor = new DebitCardProcessor();
let creditCardProcessor = new CreditCardProcessor();

executePayment(payPalProcessor, 10);
executePayment(debitCarProcessor, 10);
executePayment(creditCardProcessor, 10);

/**
 * Advantages
 * Code Reusability
 * Enhance Flexibility
 * Lower Maintenance Cost
 * Improve Robustness
 * Increased Understanding and Ease of Use
 * Modularity
 */
