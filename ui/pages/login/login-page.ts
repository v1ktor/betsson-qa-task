import { LoginPageSelectors } from "./login-page.selectors";
import { BrowserContext, Page } from "@playwright/test";
import { LoginUser } from "./login-page.types";
import { LoginPageValidator } from "./login-page.validator";

export class LoginPage {
  private readonly page: Page;
  private readonly browserContext: BrowserContext;
  private readonly selectors: LoginPageSelectors;

  public readonly validator: LoginPageValidator;

  constructor(page: Page, browserContext: BrowserContext) {
    this.page = page;
    this.browserContext = browserContext;
    this.selectors = new LoginPageSelectors(page);
    this.validator = new LoginPageValidator(page);
  }

  public async navigateTo(): Promise<void> {
    await this.page.goto("/");
  }

  public async fillLoginForm(args: {
    username: LoginUser | string;
    password: string;
  }): Promise<void> {
    await this.selectors.inputUsername.fill(args.username);
    await this.selectors.inputPassword.fill(args.password);
  }

  public async clickLoginButton(): Promise<void> {
    await this.selectors.buttonLogin.click();
  }

  public async loginAs(user: LoginUser): Promise<void> {
    await this.browserContext.addCookies([
      {
        name: "session-username",
        value: user,
        domain: "www.saucedemo.com",
        path: "/",
      },
    ]);

    await this.page.goto("/inventory.html");
  }
}
