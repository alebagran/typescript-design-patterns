import CondimentDecorator from "./CondimentDecorador";

export default class MilkDecorator extends CondimentDecorator {
  cost(): number {
    return this.bevarage.cost() + 1.2;
  }
}
