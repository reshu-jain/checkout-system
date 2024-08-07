// src/services/PricingRulesService.ts
import { PricingRule } from '../models/PricingRule';
import { Product } from '../models/Product';

export class AppleTVDiscount implements PricingRule {
  apply(items: Product[]): number {
    const atvs = items.filter(item => item.sku === 'atv');
    if(atvs.length>0){

      const discount = Math.floor(atvs.length / 3) * atvs[0].price;
      return discount;

    }
    return 0;
   
  }
}
export class SuperiPadBulkDiscount implements PricingRule {
  apply(items: Product[]): number {
    const ipads = items.filter(item => item.sku === 'ipd');
    if (ipads.length > 4) {
      return ipads.length * (ipads[0].price - 499.99);
    }
    return 0;
  }
}

