import Bevarage from "../Bevarage";

export default class CondimentDecorador extends Bevarage {

  constructor (readonly bevarage: Bevarage) { super(); }

  public cost(): number {
    return this.bevarage.cost();
  }
}
