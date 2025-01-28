import { Page } from "@playwright/test";
import { CartPageSelectors } from "./cart-page.selectors";
import { CartPageValidator } from "./cart-page.validator";

export class CartPage {
  private readonly selectors: CartPageSelectors;

  public readonly validator: CartPageValidator;

  constructor(page: Page) {
    this.selectors = new CartPageSelectors(page);
    this.validator = new CartPageValidator(page);
  }

  public async goToCheckout(): Promise<void> {
    await this.selectors.buttonCheckout.click();
  }
}
