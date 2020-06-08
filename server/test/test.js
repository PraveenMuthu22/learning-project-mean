export class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

}

import { Product } from '.product';

const bat = new Product(12, "Baseball bat", 12.99);