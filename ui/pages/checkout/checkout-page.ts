import { CheckoutPageSelectors } from "./checkout-page.selectors";
import { Page } from "@playwright/test";
import { CheckoutPageValidator } from "./checkout-page.validator";

export class CheckoutPage {
  private readonly page: Page;
  private readonly selectors: CheckoutPageSelectors;

  public readonly validator: CheckoutPageValidator;

  constructor(page: Page) {
    this.page = page;
    this.selectors = new CheckoutPageSelectors(page);
    this.validator = new CheckoutPageValidator(page);
  }

  public async fillCheckoutForm(args: { firstName: string, lastName: string, postalCode: string }): Promise<void> {
    await this.selectors.inputFirstName.fill(args.firstName);
    await this.selectors.inputLastName.fill(args.lastName);
    await this.selectors.inputZipCode.fill(args.postalCode);
  }

  public async clickContinue(): Promise<void> {
    await this.selectors.buttonContinue.click();
  }

  public async clickFinish(): Promise<void> {
    await this.selectors.buttonFinish.click();
  }

  public async navigateToCheckoutOverview(): Promise<void> {
    await this.page.goto("/checkout-step-one.html");
    await this.fillCheckoutForm({firstName: "John", lastName: "Doe", postalCode: "12345"});
    await this.clickContinue();
  }
}