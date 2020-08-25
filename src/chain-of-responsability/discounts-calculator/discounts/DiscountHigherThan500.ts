import Discount from "./Discount";
import Budget from "../Budget";

export default class DiscountHigherThan500 implements Discount {
  private next!: Discount;
  calculate(budget: Budget): number {
    if (budget.getTotal() > 500) {
      console.log("Disconto aplicado foi DiscountHigherThan500");
      return budget.getTotal() * 0.15;
    } else {
      return this.next.calculate(budget);
    }
  }
  setNext(next: Discount): void {
    this.next = next;
  }
}
