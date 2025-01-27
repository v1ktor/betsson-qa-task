import { Locator, Page } from "@playwright/test";

export class LoginPageSelectors {
  private readonly page: Page;

  public readonly inputUsername: Locator;
  public readonly inputPassword: Locator;

  public readonly buttonLogin: Locator;

  public readonly messageError: Locator;

  constructor(page: Page) {
    this.page = page;

    this.inputUsername = this.page.locator('input#user-name');
    this.inputPassword = this.page.locator('input#password');

    this.buttonLogin = this.page.locator('#login-button');

    this.messageError = this.page.locator('[data-test=error]');
  }
}