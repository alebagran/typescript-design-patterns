import FlyBehavior from "./behaviors/fly-behaviors/Flybehavior";
import QuackBehavior from "./behaviors/quack-behaviors/QuackBehavior";

export default abstract class Duck {
  private flyBehavior: FlyBehavior;
  private quackBehavior: QuackBehavior;

  abstract display(): void;

  performFly(): void {
    this.flyBehavior.fly();
  }

  performQuack(): void {
    this.quackBehavior.quack();
  }
}
