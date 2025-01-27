export class Product {
  private constructor(
    public readonly title: string,
    public readonly description: string,
    public readonly price: string
  ) {
  }

  static readonly BACKPACK = new Product(
    "Sauce Labs Backpack",
    "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.",
    "29.99"
  );

  static readonly BIKE_LIGHT = new Product(
    "Sauce Labs Bike Light",
    "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.",
    "9.99"
  );

  static readonly BOLT_T_SHIRT = new Product(
    "Sauce Labs Bolt T-Shirt",
    "Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.",
    "15.99"
  );

  static readonly FLEECE_JACKET = new Product(
    "Sauce Labs Fleece Jacket",
    "It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.",
    "49.99"
  );

  static readonly ONESIE = new Product(
    "Sauce Labs Onesie",
    "Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.",
    "7.99"
  );

  static readonly T_SHIRT_RED = new Product(
    "Test.allTheThings() T-Shirt (Red)",
    "This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.",
    "15.99"
  );
}

export type ProductKey = Exclude<keyof typeof Product, "prototype">;

export const products: Record<ProductKey, Product> = {
  FLEECE_JACKET: Product.FLEECE_JACKET,
  BOLT_T_SHIRT: Product.BOLT_T_SHIRT,
  ONESIE: Product.ONESIE,
  BACKPACK: Product.BACKPACK,
  BIKE_LIGHT: Product.BIKE_LIGHT,
  T_SHIRT_RED: Product.T_SHIRT_RED
}