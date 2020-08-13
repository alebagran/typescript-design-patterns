import Duck from "./Duck";
import FlyBehavior from "./behaviors/fly-behaviors/Flybehavior";
import QuackBehavior from "./behaviors/quack-behaviors/QuackBehavior";
import FlyNoWay from "./behaviors/fly-behaviors/FlyNoWay";
import Squeak from "./behaviors/quack-behaviors/Squeak";

export default class RubberDuck extends Duck {
  public display(): void {
    console.log('Eu sou um patinho de Borracha!')
  }

  protected defineFlyBehavior(): FlyBehavior {
    return new FlyNoWay();
  }

  protected defineQuackBehavior(): QuackBehavior {
    return new Squeak();
  }
}
