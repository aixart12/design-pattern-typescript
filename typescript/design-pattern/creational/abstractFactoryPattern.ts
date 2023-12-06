/**
 * Abstract Factory Pattern is creational design pattern that provides
 * an interface for creating families of related dependent objects without
 * specifying their realization.
 */

interface IProductA {
  operationA(): string;
}

interface IProductB {
  operationB(): string;
  combinedOperation(collaborator: IProductA): string;
}

interface IFactory {
  createProductA(): IProductA;
  createProductB(): IProductB;
}

class ProductA implements IProductA {
  public operationA(): string {
    return "Product A";
  }
}

class ProductB implements IProductB {
  public operationB(): string {
    return "Product B";
  }
  public combinedOperation(collaborator: IProductA): string {
    return `${collaborator.operationA()} + ${this.operationB()}`;
  }
}

class Factory implements IFactory {
  public createProductA(): IProductA {
    return new ProductA();
  }
  public createProductB(): IProductB {
    return new ProductB();
  }
}

// Client Code
const factory = new Factory();
const productA = factory.createProductA();
productA.operationA();
const productB = factory.createProductB();
productB.combinedOperation(productA);
productB.operationB();

// Real world example

interface ICheckbox {
  render(): void;
  toggle(): void;
}
interface IButton {
  render(): void;
  onClick(f: Function): void;
}

interface GUIFactory {
  createCheckbox(button: IButton): ICheckbox;
  createButton(): IButton;
}

class WindowsButton implements IButton {
  public render(): void {
    console.log("Button rendered in Windows");
  }
  public onClick(f: Function): void {
    console.log("Button clicked");
    f();
  }
}

class WindowsCheckbox implements ICheckbox {
  constructor(private button: IButton) {}
  public render(): void {
    console.log("Checkbox rendered in windows");
  }
  public toggle(): void {
    this.button.onClick(() => {
      console.log("Checkbox toggled in windows");
    });
  }
}

class MacOSButton implements IButton {
  public render(): void {
    console.log("Button rendered in macos");
  }
  public onClick(f: Function): void {
    console.log("Button clicked in macos");
    f();
  }
}

class MacOSCheckbox implements ICheckbox {
  constructor(private button: IButton) {}
  public render(): void {
    console.log("Checkbox rendered in macos");
  }
  public toggle(): void {
    this.button.onClick(() => {
      console.log("Checkbox toggled mac os");
    });
  }
}

class WindowsFactory implements GUIFactory {
  public createCheckbox(button: IButton): ICheckbox {
    return new WindowsCheckbox(button);
  }
  public createButton(): IButton {
    return new WindowsButton();
  }
}

class MacOSFactory implements GUIFactory {
  public createCheckbox(button: IButton): ICheckbox {
    return new MacOSCheckbox(button);
  }
  public createButton(): IButton {
    return new MacOSButton();
  }
}

function render(factory: GUIFactory) {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox(button);
  checkbox.render();
  button.render();

  button.onClick(() => {
    console.log("Button Clicked");
  });
}

render(new WindowsFactory());
render(new MacOSFactory());

/**
 * Advantage
 * 1. Consistency among products
 * 2. Avoid concrete product classes
 * 3. Code reusability
 * 4. Single Responsibility Principle
 * 5.
 */

/**
 *
 * Increase Complexity
 * Modifying Product Families
 * C0de Maintenance
 * Dependency
 * Difficulty of Unit Test
 */
