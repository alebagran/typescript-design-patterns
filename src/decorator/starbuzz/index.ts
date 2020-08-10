import Coffee from "./Coffee";
import MilkDecorator from "./condiments/MilkDecorator";
import Bevarage from "./Bevarage";
import CreamDecorator from "./condiments/CreamDecorator";

const c: Bevarage = new Coffee();

console.log(`Um café custa: R$ ${c.cost().toFixed(2)}`);

const coffeWithMilk: Bevarage = new MilkDecorator(c);

console.log(`Um café com leite custa: R$ ${coffeWithMilk.cost().toFixed(2)}`);

const coffeWithMilkCream: Bevarage = new CreamDecorator(coffeWithMilk);

console.log(
  `Um café com leite e creme custa: R$ ${coffeWithMilkCream.cost().toFixed(2)}`,
);
