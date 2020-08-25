import Product from "./Product";

export default class Budget {
  private items: Array<Product>;

  constructor() {
    this.items = [];
  }

  add(product: Product): Budget {
    this.items.push(product);
    return this;
  }

  getItems(): Array<Product> {
    const nItems: Array<Product> = [...this.items];

    return nItems;
  }
}
