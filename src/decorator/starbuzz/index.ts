import Coffee from "./Coffee";

const c = new Coffee();

console.log(`Um café custa: R$ ${c.cost().toFixed(2)}`);