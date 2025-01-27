import { LoginPageSelectors } from "./login-page.selectors";
import { BrowserContext, Page } from "@playwright/test";
import { LoginUser } from "./login-page.types";

export class LoginPage {
  private readonly page: Page;
  private readonly selectors: LoginPageSelectors;

  constructor(page: Page) {
    this.page = page;
    this.selectors = new LoginPageSelectors(page);
  }

  public async navigateTo(): Promise<void> {
    await this.page.goto('/');
  }

  public async fillLoginForm(args: { username: LoginUser, password: string }): Promise<void> {
    await this.selectors.inputUsername.fill(args.username);
    await this.selectors.inputPassword.fill(args.password);
  }

  public async clickLoginButton(): Promise<void> {
    await this.selectors.buttonLogin.click();
  }

  public async loginAs(user: LoginUser, browserContext: BrowserContext): Promise<void> {
    await browserContext.addCookies([
      {
        name: "session-username",
        value: user,
        domain: "www.saucedemo.com",
        path: "/"
      }
    ])

    await this.page.goto('/inventory.html');
  }
}