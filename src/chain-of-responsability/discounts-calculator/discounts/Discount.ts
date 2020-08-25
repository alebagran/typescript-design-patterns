import Budget from "../Budget";

export default interface Discount {
  calculate(budget: Budget): number;
  setNext(discount: Discount): void;
}
