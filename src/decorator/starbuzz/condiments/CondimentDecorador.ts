import Bevarage from "../Bevarage";

export default class CondimentDecorador extends Bevarage {
  private bevarage: Bevarage;

  public cost(): number {
    return 0;
  }
}
