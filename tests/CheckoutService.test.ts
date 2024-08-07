// tests/CheckoutService.test.ts
import { CheckoutService } from '../services/CheckoutService';
import { ProductService } from '../services/ProductService';
import { AppleTVDiscount, SuperiPadBulkDiscount } from '../services/PricingRuleService';

describe('CheckoutService', () => {
  let checkoutService: CheckoutService;
  let productService: ProductService;

  beforeEach(() => {
    const pricingRules = [new AppleTVDiscount(), new SuperiPadBulkDiscount()];
    checkoutService = new CheckoutService(pricingRules);
    productService = new ProductService();
  });

  test('Scenario 1', () => {
    checkoutService.scan(productService.getProductBySku('atv')!);
    checkoutService.scan(productService.getProductBySku('atv')!);
    checkoutService.scan(productService.getProductBySku('atv')!);
    checkoutService.scan(productService.getProductBySku('vga')!);

    const total = checkoutService.total();
    expect(total).toBe(249.00);
  });

  test('Scenario 2', () => {
    checkoutService.scan(productService.getProductBySku('atv')!);
    checkoutService.scan(productService.getProductBySku('ipd')!);
    checkoutService.scan(productService.getProductBySku('ipd')!);
    checkoutService.scan(productService.getProductBySku('atv')!);
    checkoutService.scan(productService.getProductBySku('ipd')!);
    checkoutService.scan(productService.getProductBySku('ipd')!);
    checkoutService.scan(productService.getProductBySku('ipd')!);

    const total = checkoutService.total();
    expect(total).toBe(2718.95);
  });

  test('3 for 2 deal on Apple TVs', () => {
    checkoutService.scan(productService.getProductBySku('atv')!);
    checkoutService.scan(productService.getProductBySku('atv')!);
    checkoutService.scan(productService.getProductBySku('atv')!);

    const total = checkoutService.total();
    expect(total).toBe(2 * 109.50);
  });

});
