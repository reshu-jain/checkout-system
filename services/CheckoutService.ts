import { Product } from '../models/Product';
import { PricingRule } from '../models/PricingRule';

export class CheckoutService {
  private pricingRules: PricingRule[];
  private items: Product[];

  constructor(pricingRules: PricingRule[]) {
    this.pricingRules = pricingRules;
    this.items = [];
  }

  scan(item: Product) {
    this.items.push(item);
  }

  total(): number {
    let total = this.items.reduce((sum, item) => sum + item.price, 0);
    for (const rule of this.pricingRules) {
      total -= rule.apply(this.items);
    }
    return total;
  }
}
