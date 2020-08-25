import Budget from "./Budget";
import DiscountMoreThanTwoItems from "./discounts/DiscountMoreThanTwoItems";
import DiscountHigherThan500 from "./discounts/DiscountHigherThan500";
import NoDiscount from "./discounts/NoDiscount";

export default class Calculator {
  constructor(private budged: Budget) {}

  calculate(): number {
    const moreThantwo = new DiscountMoreThanTwoItems();
    const higherThan500 = new DiscountHigherThan500();
    const nodiscount = new NoDiscount();

    moreThantwo.setNext(higherThan500);
    higherThan500.setNext(nodiscount);

    return this.budged.getTotal() - moreThantwo.calculate(this.budged);
  }
}
