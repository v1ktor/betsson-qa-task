import { APIRequestContext, request, test as base } from "@playwright/test";
import { LoginPage } from "../ui/pages/login/login-page";
import { InventoryPage } from "../ui/pages/inventory/inventory-page";
import { CartPage } from "../ui/pages/cart/cart-page";
import { CheckoutPage } from "../ui/pages/checkout/checkout-page";

export type APIRequestOptions = {
  apiBaseURL: string;
};

type APIRequestFixture = {
  apiRequest: APIRequestContext;
};

type Fixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
};

export const test = base.extend<
  Fixtures & APIRequestOptions & APIRequestFixture
>({
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
  },
  apiBaseURL: ["", { option: true }],
  apiRequest: async ({ apiBaseURL }, use) => {
    const apiRequestContext = await request.newContext({
      baseURL: apiBaseURL,
    });
    await use(apiRequestContext);
    await apiRequestContext.dispose();
  },
});
