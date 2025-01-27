import { Locator, Page } from "@playwright/test";

export class LoginPageSelectors {
  public readonly inputUsername: Locator;
  public readonly inputPassword: Locator;

  public readonly buttonLogin: Locator;

  public readonly messageError: Locator;

  constructor(page: Page) {
    this.inputUsername = page.locator('input#user-name');
    this.inputPassword = page.locator('input#password');

    this.buttonLogin = page.locator('#login-button');

    this.messageError = page.locator('[data-test=error]');
  }
}