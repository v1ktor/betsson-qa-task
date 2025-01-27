import { Locator, Page } from "@playwright/test";

export class InventoryPageSelectors {
  public readonly buttonAddToCartBackpack: Locator;
  public readonly buttonAddToCartBikeLight: Locator;
  public readonly buttonAddToCartBoltTShirt: Locator;
  public readonly buttonAddToCartFleeceJacket: Locator;
  public readonly buttonAddToCartOnesie: Locator;
  public readonly buttonAddToCartTShirtRed: Locator;

  public readonly linkShoppingCart: Locator;

  public readonly badgeShoppingCart: Locator;

  constructor(page: Page) {
    this.buttonAddToCartBackpack = page.locator("button[data-test='add-to-cart-sauce-labs-backpack']")
    this.buttonAddToCartBikeLight = page.locator("button[data-test='add-to-cart-sauce-labs-bike-light']")
    this.buttonAddToCartBoltTShirt = page.locator("button[data-test='add-to-cart-sauce-labs-bolt-t-shirt']")
    this.buttonAddToCartFleeceJacket = page.locator("button[data-test='add-to-cart-sauce-labs-fleece-jacket']")
    this.buttonAddToCartOnesie = page.locator("button[data-test='add-to-cart-sauce-labs-onesie']")
    this.buttonAddToCartTShirtRed = page.locator("button[data-test='add-to-cart-test.allthethings()-t-shirt-(red)']")

    this.linkShoppingCart = page.locator("a[class='shopping_cart_link']");

    this.badgeShoppingCart = page.locator("span[class='shopping_cart_badge']");
  }
}