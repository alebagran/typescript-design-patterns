import FlyBehavior from "./behaviors/fly-behaviors/Flybehavior";
import FlyWithWings from "./behaviors/fly-behaviors/FlyWithWings";
import Quack from "./behaviors/quack-behaviors/Quack";
import QuackBehavior from "./behaviors/quack-behaviors/QuackBehavior";
import Duck from "./Duck";

export default class RedHeadDuck extends Duck {
  display(): void {
    console.log("Pato Ruivo na área");
  }

  protected defineFlyBehavior(): FlyBehavior {
    return new FlyWithWings();
  }

  protected defineQuackBehavior(): QuackBehavior {
    return new Quack();
  }
}
