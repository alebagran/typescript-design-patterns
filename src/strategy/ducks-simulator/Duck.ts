import FlyBehavior from "./behaviors/fly-behaviors/Flybehavior";
import QuackBehavior from "./behaviors/quack-behaviors/QuackBehavior";

export default abstract class Duck {
  protected flyBehavior: FlyBehavior;
  protected quackBehavior: QuackBehavior;

  public abstract display(): void;
  protected abstract defineFlyBehavior(): FlyBehavior;
  protected abstract defineQuackBehavior(): QuackBehavior;

  constructor() {
    this.flyBehavior = this.defineFlyBehavior();
    this.quackBehavior = this.defineQuackBehavior();
  }

  public performFly(): void {
    this.flyBehavior.fly();
  }

  public performQuack(): void {
    this.quackBehavior.quack();
  }

  public setFlyBehavior(flyBehavior: FlyBehavior): void {
    this.flyBehavior = flyBehavior;
  }

  public setQuackBehavior(quackBehavior: QuackBehavior): void {
    this.quackBehavior = quackBehavior;
  }
}
