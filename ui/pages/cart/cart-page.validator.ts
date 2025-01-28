import { CartPageSelectors } from "./cart-page.selectors";
import { expect, Page } from "@playwright/test";
import { ProductKey, products } from "../../data/product";

export class CartPageValidator {
  private readonly selectors: CartPageSelectors;

  constructor(page: Page) {
    this.selectors = new CartPageSelectors(page);
  }

  public async validateProductsInCart(
    productsToValidate: ProductKey[],
  ): Promise<void> {
    await expect(this.selectors.itemInTheCart).toHaveCount(
      productsToValidate.length,
    );

    for (const productToValidate of productsToValidate) {
      const product = products[productToValidate];

      await expect(
        this.selectors.itemTitle.filter({ hasText: product.title }),
      ).toBeVisible();
      await expect(
        this.selectors.itemDescription.filter({ hasText: product.description }),
      ).toBeVisible();
    }
  }
}
