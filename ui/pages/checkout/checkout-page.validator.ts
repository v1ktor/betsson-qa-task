import { CheckoutPageSelectors } from "./checkout-page.selectors";
import { expect, Page } from "@playwright/test";
import { ProductKey, products } from "../../data/product";
import { Big } from "big.js";
import { calculateTax } from "../../utils/tax";

export class CheckoutPageValidator {
  private readonly selectors: CheckoutPageSelectors;

  constructor(page: Page) {
    this.selectors = new CheckoutPageSelectors(page);
  }

  public async validateProductsInCheckout(productsToValidate: ProductKey[]): Promise<void> {
    await expect(this.selectors.itemInTheCart).toHaveCount(productsToValidate.length);

    for (const productToValidate of productsToValidate) {
      const product = products[productToValidate];

      await expect(this.selectors.itemTitle.filter({ hasText: product.title })).toBeVisible();
      await expect(this.selectors.itemDescription.filter({ hasText: product.description })).toBeVisible();
    }
  }

  public async validatePaymentAndShippingInfo(productsToValidate: ProductKey[]): Promise<void> {
    const totalPrice = productsToValidate.reduce((acc, productKey) => {
      const product = products[productKey];
      const price = new Big(product.price);

      return acc.plus(price);
    }, new Big(0));

    const totalTax = productsToValidate.reduce((acc, productKey) => {
      const product = products[productKey];

      return acc.plus(calculateTax(product.price));
    }, new Big(0));

    const total = totalPrice.plus(totalTax);

    await expect(this.selectors.labelPaymentInformationValue).toHaveText("SauceCard #31337");
    await expect(this.selectors.labelShippingInformationValue).toHaveText("Free Pony Express Delivery!");
    await expect(this.selectors.labelPriceTotalValue).toHaveText(`Item total: $${totalPrice.toFixed(2)}`);
    await expect(this.selectors.labelPriceTotalTaxValue).toHaveText(`Tax: $${totalTax.toFixed(2)}`);
    await expect(this.selectors.labelTotal).toHaveText(`Total: $${total.toFixed(2)}`);
  }

  public async validateCheckoutIsCompleted(): Promise<void> {
    await expect(this.selectors.textTitle).toHaveText("Checkout: Complete!")
    await expect(this.selectors.textThankYou).toHaveText("Thank you for your order!")
    await expect(this.selectors.textComplete).toHaveText("Your order has been dispatched, and will arrive just as fast as the pony can get there!")
    await expect(this.selectors.buttonBackHome).toBeVisible();
  }

}