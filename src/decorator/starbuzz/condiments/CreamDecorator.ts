import CondimentDecorator from "./CondimentDecorador";

export default class CreamDecorator extends CondimentDecorator {
  cost(): number {
    return this.bevarage.cost() + .80;
  }
}
