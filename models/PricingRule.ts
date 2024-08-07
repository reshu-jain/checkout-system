// src/models/PricingRule.ts
import { Product } from './Product';

export interface PricingRule {
  apply: (items: Product[]) => number;
}
