// open for extension close for modification

//Example Using Bank Discount

interface Customer {
  getDiscount(): number;

  addLoyaltyPoints(amountSpent: number): number;
}

class RegularCustomer implements Customer {
  getDiscount(): number {
    return 10;
  }

  addLoyaltyPoints(amountSpent: number): number {
    return amountSpent;
  }
}
class PremiumCustomer implements Customer {
  getDiscount(): number {
    return 20;
  }
  addLoyaltyPoints(amountSpent: number): number {
    return amountSpent * 2;
  }
}

class GoldCustomer implements Customer {
  getDiscount(): number {
    return 30;
  }
  addLoyaltyPoints(amountSpent: number): number {
    return amountSpent * 3;
  }
}

class Discount {
  giveDiscount(customer: Customer): number {
    return customer.getDiscount();
  }
}

/**
 * Advantages 
 * 1 .Reduce Risk of Bugs
 * 2 . Increase Code Reusability
 * Simplified Versioning and Patching
 * Improve Maintainability
 *  

 *  */
