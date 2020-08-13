import QuackBehavior from "./QuackBehavior";

export default class Quack implements QuackBehavior {
  quack(): void {
    console.log("Quack... Quack.... Quack....");
  }
}
