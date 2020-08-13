import FlyBehavior from "./Flybehavior";

export default class FlyNoWay implements FlyBehavior {
  fly(): void {
    console.log("Eu não posso voar!");
  }
}
