import QuackBehavior from "./QuackBehavior";

export default class MuteQuack implements QuackBehavior {
  quack(): void {
    console.log("Mute quack");
  }
}
