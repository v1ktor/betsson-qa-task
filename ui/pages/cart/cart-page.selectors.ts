import { Locator, Page } from "@playwright/test";

export class CartPageSelectors {
  public readonly buttonCheckout: Locator;

  public readonly itemInTheCart: Locator;
  public readonly itemTitle: Locator;
  public readonly itemDescription: Locator;

  constructor(page: Page) {
    this.buttonCheckout = page.locator("button[data-test='checkout']");

    this.itemInTheCart = page.locator("div[class='cart_item']");
    this.itemTitle = page.locator("div[class='cart_item_label'] a");
    this.itemDescription = page.locator("div[class='cart_item_label'] div[class='inventory_item_desc']");
  }
}