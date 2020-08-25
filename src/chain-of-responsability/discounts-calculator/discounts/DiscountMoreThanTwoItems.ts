import Discount from "./Discount";
import Budget from "../Budget";

export default class DiscountMoreThanTwoItems implements Discount {
  private next!: Discount;
  calculate(budget: Budget): number {
    if (budget.getItems().length > 2) {
      console.log("Disconto aplicado foi DiscountMoreThanTwoItems");
      return budget.getTotal() * 0.1;
    } else {
      return this.next.calculate(budget);
    }
  }
  setNext(next: Discount): void {
    this.next = next;
  }
}
