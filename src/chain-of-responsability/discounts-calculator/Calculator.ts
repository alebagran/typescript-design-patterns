import Budget from "./Budget";

export default class Calculator {
  constructor(private budged: Budget) {}

  calculate(): number {
    const total: number = this.budged.getTotal();
    let discount = 0;
    // discount more than 2 items
    if (this.budged.getItems().length > 2) {
      discount += total * 0.1;
    }

    if (total > 500) {
      discount += total * 0.07;
    }

    return total - discount;
  }
}
