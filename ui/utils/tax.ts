import { Big } from "big.js";

export const calculateTax = (productPrice: string): string => {
  const taxRate = new Big("8.01");

  return new Big(productPrice).times(taxRate).div(100).toFixed(2);
}