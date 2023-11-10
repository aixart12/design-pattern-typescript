// BankAccount
// Depositing
// Withdrawing
//Ballance --hidden --encapsulated

class BankAccount {
  private _balance: number;

  constructor(initialBalance: number) {
    this._balance = initialBalance;
  }

  //Getter to get the balance of account
  public get balance(): number {
    return this._balance;
  }

  // Method to deposit Money
  public deposit(amount: number): void {
    if (amount < 0) {
      console.log("Invalid Amount");
      return;
    }
    this._balance += amount;
  }

  // Method to Withdraw money
  public withdraw(amount: number): void {
    if (amount < 0) {
      console.log("Invalid Withdraw Amount");
      return;
    }

    if (this._balance - amount < 0) {
      console.log("Insufficient balance");
      return;
    }

    this._balance -= amount;
  }
}

const myAccount = new BankAccount(1000);
myAccount.deposit(500);
myAccount.withdraw(700);

console.log("Current Balance", myAccount.balance);
