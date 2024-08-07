// src/services/ProductService.ts
import { Product } from '../models/Product';

export class ProductService {
  private products: Product[];

  constructor() {
    this.products = [
      { sku: 'ipd', name: 'Super iPad', price: 549.99 },
      { sku: 'mbp', name: 'MacBook Pro', price: 1399.99 },
      { sku: 'atv', name: 'Apple TV', price: 109.50 },
      { sku: 'vga', name: 'VGA adapter', price: 30.00 },
    ];
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductBySku(sku: string): Product | undefined {
    return this.products.find(product => product.sku === sku);
  }
}
