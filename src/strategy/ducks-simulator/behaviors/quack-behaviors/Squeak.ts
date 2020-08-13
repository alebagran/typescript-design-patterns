import QuackBehavior from "./QuackBehavior";

export default class Squeak implements QuackBehavior {
  quack(): void {
    console.log("Squeak, Squeack Squeack...");
  }
}
