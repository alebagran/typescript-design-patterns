import Discount from "./Discount";
import Budget from "../Budget";

export default class NoDiscount implements Discount {
  calculate(budget: Budget): number {
    console.log("Disconto aplicado foi NoDiscount");
    return 0;
  }
  setNext(next: Discount): void {
    throw new Error("No DIscount should be the last one implemented" + next);
  }
}
