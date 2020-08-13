import MallardDuck from "./MallardDuck";
import RedHeadDuck from "./RedHeadDuck";

console.clear();
const mallard = new MallardDuck();
mallard.display();
mallard.performFly();
mallard.performQuack();

console.log('---------------------------------');

const readheadDuck = new RedHeadDuck();
readheadDuck.display();
readheadDuck.performFly();
readheadDuck.performQuack();