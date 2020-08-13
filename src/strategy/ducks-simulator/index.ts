import MallardDuck from "./MallardDuck";
import RedHeadDuck from "./RedHeadDuck";
import RubberDuck from "./RubberDuck";

console.clear();
const mallard = new MallardDuck();
mallard.display();
mallard.performFly();
mallard.performQuack();
console.log("---------------------------------");

const readheadDuck = new RedHeadDuck();
readheadDuck.display();
readheadDuck.performFly();
readheadDuck.performQuack();
console.log("---------------------------------");

const rubberDuck = new RubberDuck();
rubberDuck.display();
rubberDuck.performFly();
rubberDuck.performQuack();
