/**
 * Builder Pattern is createional design pattern that lets you construct complex objects
 *  step by step.
 */

interface Builder {
  setPartA(): void;
  setPartB(): void;
  setPartC(): void;
}

class Product {
  private parts: string[] = [];

  public add(part: string): void {
    this.parts.push(part);
  }

  public listParts(): void {
    console.log(`Product parts: ${this.parts.join(", ")}`);
  }
}

class ConcreteBuilder implements Builder {
  private product!: Product;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.product = new Product();
  }

  public setPartA(): void {
    this.product.add("Part A");
  }

  public setPartB(): void {
    this.product.add("Part B");
  }

  public setPartC(): void {
    this.product.add("Part C");
  }

  public getProduct(): Product {
    const result = this.product;
    this.reset();
    return result;
  }
}

class Director {
  private builder!: Builder;

  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public buildMinimalViableProduct(): void {
    this.builder.setPartA();
  }

  public buildFullFeaturedProduct(): void {
    this.builder.setPartA();
    this.builder.setPartB();
    this.builder.setPartC();
  }
}

const builder = new ConcreteBuilder();

const director = new Director();

director.setBuilder(builder);

director.buildFullFeaturedProduct();
let minProduct = builder.getProduct();
console.log(minProduct.listParts());

director.buildFullFeaturedProduct();
let fullProduct = builder.getProduct();
console.log(fullProduct.listParts());

// When to use Builder Pattern
/**
 * Complex objects Creation
 * Set-by-step Object Creation
 * Combination Explosion
 *
 */

// Real world example

interface ICustomer {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

class Customer implements ICustomer {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public phoneNumber: string,
  ) {}
}

interface ICustomerBuilder {
  // reset(): void;
  setFirstName(firstName: string): ICustomerBuilder;
  setLastName(lastName: string): ICustomerBuilder;
  setEmail(email: string): ICustomerBuilder;
  setPhoneNumber(phoneNumber: string): ICustomerBuilder;
  build(): ICustomer;
}

class CustomerBuilder implements ICustomerBuilder {
  private firstName: string = "";
  private lastName: string = "";
  private email: string = "";
  private phoneNumber: string = "";

  setFirstName(firstName: string): ICustomerBuilder {
    this.firstName = firstName;
    return this;
  }
  setLastName(lastName: string): ICustomerBuilder {
    this.lastName = lastName;
    return this;
  }

  setEmail(email: string): ICustomerBuilder {
    this.email = email;
    return this;
  }
  setPhoneNumber(phoneNumber: string): ICustomerBuilder {
    this.phoneNumber = phoneNumber;
    return this;
  }

  build(): ICustomer {
    return new Customer(
      this.firstName,
      this.lastName,
      this.email,
      this.phoneNumber,
    );
  }
}

class CustomerDirector {
  constructor(private builder: ICustomerBuilder) {}
  setBuilder(builder: ICustomerBuilder): void {
    this.builder = builder;
  }

  public buildMinimalCustomer(
    firstName: string,
    lastName: string,
    email: string,
  ) {
    return this.builder
      .setFirstName(firstName)
      .setLastName(lastName)
      .setEmail(email)
      .build();
  }
}

const newBuilder: ICustomerBuilder = new CustomerBuilder();
const newDirector: CustomerDirector = new CustomerDirector(newBuilder);

const customer: ICustomer = newDirector.buildMinimalCustomer(
  "John",
  "Doe",
  "jdoe@me.com",
);

console.log(customer);

/**
 * Advantages
 * Fluent Interface
 * Separation of Business Logic
 * Multiple Respesentation
 * Object Integrity
 * Reduce Parameter Complexity
 * Immutability
 * Easier to Extend
 */

/**
 * Disadvantages
 * Increased Complexity : Involves additional abstraction layer and classes
 * Additional Code
 * Runtime Errors
 * Mutability Concerns
 *
 */
