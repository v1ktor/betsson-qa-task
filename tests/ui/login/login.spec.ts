import { expect } from "@playwright/test";
import { test } from "../../../config/test-fixtures";
import { LoginUser } from "../../../ui/pages/login/login-page.types";

test.describe("LOGIN", () => {
  const loginUsers: { username: LoginUser }[] = [
    { username: "standard_user" },
    { username: "problem_user" },
    { username: "performance_glitch_user" },
    { username: "error_user" },
    { username: "visual_user" },
  ];
  const password = "secret_sauce";

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigateTo();
  });

  loginUsers.forEach((loginUser) => {
    test(`user can login with valid ${loginUser.username} username`, async ({
      page,
      loginPage,
    }) => {
      await loginPage.fillLoginForm({ username: loginUser.username, password });
      await loginPage.clickLoginButton();

      await expect(
        page.locator(".header_secondary_container > .title"),
      ).toHaveText("Products");
    });
  });

  test("user will receive an error if he is locked out", async ({
    loginPage,
  }) => {
    await loginPage.fillLoginForm({ username: "locked_out_user", password });
    await loginPage.clickLoginButton();

    await loginPage.validator.validateErrorMessage(
      "Epic sadface: Sorry, this user has been locked out.",
    );
  });

  test("user will receive an error if he enters invalid credentials", async ({
    loginPage,
  }) => {
    await loginPage.fillLoginForm({
      username: "invalid_user",
      password: "invalid_password",
    });
    await loginPage.clickLoginButton();

    await loginPage.validator.validateErrorMessage(
      "Epic sadface: Username and password do not match any user in this service",
    );
  });
});
