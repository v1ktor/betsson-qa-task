import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/login/login-page";

type Fixtures = {
  loginPage: LoginPage;
}

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  }
});