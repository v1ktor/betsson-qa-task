import { InventoryPageSelectors } from "./inventory-page.selectors";
import { expect, Locator, Page } from "@playwright/test";
import { ProductKey } from "../../data/product";

export class InventoryPage {
  private readonly selectors: InventoryPageSelectors;

  constructor(page: Page) {
    this.selectors = new InventoryPageSelectors(page);
  }

  public async addProductsToCart(products: ProductKey[]): Promise<void> {
    const buttonProduct: Record<ProductKey, Locator> = {
      BOLT_T_SHIRT: this.selectors.buttonAddToCartBoltTShirt,
      FLEECE_JACKET: this.selectors.buttonAddToCartFleeceJacket,
      ONESIE: this.selectors.buttonAddToCartOnesie,
      BACKPACK: this.selectors.buttonAddToCartBackpack,
      BIKE_LIGHT: this.selectors.buttonAddToCartBikeLight,
      T_SHIRT_RED: this.selectors.buttonAddToCartTShirtRed
    }

    for (const product of products) {
      await buttonProduct[product].click();
    }

    await expect(this.selectors.badgeShoppingCart).toHaveText(`${products.length}`);
  }

  public async goToCart(): Promise<void> {
    await this.selectors.linkShoppingCart.click();
  }
}