import FlyBehavior from "./Flybehavior";

export default class FlyWithWings implements FlyBehavior {
  fly(): void {
    console.log("Olha! estou voando com minhas asas!");
  }
}
