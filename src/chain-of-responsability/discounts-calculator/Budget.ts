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

  getTotal(): number {
    return this.items
      .map((product: Product) => {
        return product.price;
      })
      .reduce((prev: number, current: number) => {
        return prev + current;
      }, 0);
  }
}
