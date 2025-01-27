import { expect } from "@playwright/test";
import { test } from "../../../ui/config/test-fixtures";

test.describe("LOGIN", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigateTo();
  })

  test('user can login with valid credentials', async ({ page, loginPage }) => {
    await loginPage.fillLoginForm({ username: "standard_user", password: "secret_sauce" });
    await loginPage.clickLoginButton();

    await expect(page.locator('.header_secondary_container > .title')).toHaveText('Products');
  });
})