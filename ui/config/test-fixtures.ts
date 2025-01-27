import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/login/login-page";
import { InventoryPage } from "../pages/inventory/inventory-page";
import { CartPage } from "../pages/cart/cart-page";
import { CheckoutPage } from "../pages/checkout/checkout-page";

type Fixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
}

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page, page.context()));
  },
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  }
});