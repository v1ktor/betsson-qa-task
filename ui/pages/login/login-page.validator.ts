import { LoginPageSelectors } from "./login-page.selectors";
import { expect, Page } from "@playwright/test";

export class LoginPageValidator {
  private readonly selectors: LoginPageSelectors;

  constructor(page: Page) {
    this.selectors = new LoginPageSelectors(page);
  }

  public async validateErrorMessage(expectedMessage: string): Promise<void> {
    await expect(this.selectors.messageError).toHaveText(expectedMessage);
  }
}