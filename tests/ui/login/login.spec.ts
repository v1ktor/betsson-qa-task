import { expect, test } from "@playwright/test";
import { LoginPage } from "../../../ui/pages/login/login-page";

test.describe("LOGIN", () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({page}) => {
    loginPage = new LoginPage(page);

    await loginPage.navigateTo();
  })

  test('user can login with valid credentials', async ({ page }) => {
    await loginPage.fillLoginForm({username: "standard_user", password: "secret_sauce"});
    await loginPage.clickLoginButton();

    await expect(page.locator('.header_secondary_container > .title')).toHaveText('Products');
  });
})