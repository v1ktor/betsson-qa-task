import { test } from "../../../ui/config/test-fixtures";
import { ProductKey } from "../../../ui/data/product";

test.describe("CHECKOUT", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.loginAs("standard_user");
  })

  test('user can checkout the products', async ({ inventoryPage, cartPage, checkoutPage }) => {
    const products: ProductKey[] = ["BACKPACK", "FLEECE_JACKET"];

    await inventoryPage.addProductsToCart(products);
    await inventoryPage.goToCart();

    await cartPage.validator.validateProductsInCart(products);
    await cartPage.goToCheckout();

    await checkoutPage.fillCheckoutForm({ firstName: "John", lastName: "Doe", postalCode: "12345" });
    await checkoutPage.clickContinue();

    await checkoutPage.validator.validateProductsInCheckout(products)
    await checkoutPage.validator.validatePaymentAndShippingInfo(products)
    await checkoutPage.clickFinish()

    await checkoutPage.validator.validateCheckoutIsCompleted()
  });

  test('prices are calculated correctly', async ({ inventoryPage, checkoutPage }) => {
    const products: ProductKey[] = ["BIKE_LIGHT", "FLEECE_JACKET"];

    await inventoryPage.addProductsToCart(products);
    await inventoryPage.goToCart();

    await checkoutPage.navigateToCheckoutOverview();

    await checkoutPage.validator.validateProductsInCheckout(products)
    await checkoutPage.validator.validatePaymentAndShippingInfo(products)
  });
});