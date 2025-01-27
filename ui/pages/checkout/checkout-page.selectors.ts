import { Locator, Page } from "@playwright/test";

export class CheckoutPageSelectors {
  public readonly inputFirstName: Locator;
  public readonly inputLastName: Locator;
  public readonly inputZipCode: Locator;

  public readonly buttonContinue: Locator;
  public readonly buttonFinish: Locator;
  public readonly buttonBackHome: Locator;

  public readonly itemInTheCart: Locator;
  public readonly itemTitle: Locator;
  public readonly itemDescription: Locator;

  public readonly labelPaymentInformationValue: Locator;
  public readonly labelShippingInformationValue: Locator;
  public readonly labelPriceTotalValue: Locator;
  public readonly labelPriceTotalTaxValue: Locator;
  public readonly labelTotal: Locator;

  public readonly textThankYou: Locator;
  public readonly textComplete: Locator;
  public readonly textTitle: Locator;

  constructor(page: Page) {
    this.inputFirstName = page.locator("input[data-test='firstName']");
    this.inputLastName = page.locator("input[data-test='lastName']");
    this.inputZipCode = page.locator("input[data-test='postalCode']");

    this.buttonContinue = page.locator("input[data-test='continue']");
    this.buttonFinish = page.locator("button[data-test='finish']");
    this.buttonBackHome = page.locator("button[data-test='back-to-products']");

    this.itemInTheCart = page.locator("div[class='cart_item']");
    this.itemTitle = page.locator("div[class='cart_item_label'] a");
    this.itemDescription = page.locator("div[class='cart_item_label'] div[class='inventory_item_desc']");

    this.labelPaymentInformationValue = page.locator("div.summary_value_label:nth-child(2)");
    this.labelShippingInformationValue = page.locator("div.summary_value_label:nth-child(4)");
    this.labelPriceTotalValue = page.locator("div[class='summary_subtotal_label']");
    this.labelPriceTotalTaxValue = page.locator("div[class='summary_tax_label']");
    this.labelTotal = page.locator("div[data-test='total-label']");

    this.textThankYou = page.locator("h2[class='complete-header']");
    this.textComplete = page.locator("div[class='complete-text']");
    this.textTitle = page.locator("span[class='title']");
  }
}