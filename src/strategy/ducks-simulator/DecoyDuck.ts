import FlyBehavior from "./behaviors/fly-behaviors/Flybehavior";
import QuackBehavior from "./behaviors/quack-behaviors/QuackBehavior";
import Duck from "./Duck";
import FlyNoWay from "./behaviors/fly-behaviors/FlyNoWay";
import MuteQuack from "./behaviors/quack-behaviors/MuteQuack";

export default class DecoyDuck extends Duck {
  display(): void {
    console.log("Pato de Madeira...");
  }

  protected defineFlyBehavior(): FlyBehavior {
    return new FlyNoWay();
  }

  protected defineQuackBehavior(): QuackBehavior {
    return new MuteQuack();
  }
}
