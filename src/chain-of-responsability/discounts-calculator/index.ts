import Budged from "./Budget";
import Calculator from "./Calculator";

const budget = new Budged();

budget
  .add({ code: "A1", name: "Celular Samsung", price: 1200.0 })
  .add({ code: "B335", name: "Monitor LG Ultrawide 29", price: 1500.0 })
  .add({ code: "V887", name: "Suporte Monitor Top", price: 300.0 });

const calculator = new Calculator(budget);

console.log(calculator.calculate())