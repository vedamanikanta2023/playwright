// https://www.saucedemo.com/

import test from "@playwright/test";

test("order shirt", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  //login page//
  await page.locator("#user-name").fill("standard_user");
  await page.locator("#password").fill("secret_sauce");
  await page.locator("#login-button").click();
  //sorting //
  await page.locator(".product_sort_container").selectOption("lohi");
  //adding product to cart and routing to cart//
  await page.locator("#add-to-cart-sauce-labs-onesie").click();
  await page.locator("#shopping_cart_container").click();
  await page.locator("#checkout").click();
  //in checkout page//
  await page.locator("#first-name").fill("vedamanikanta");
  await page.locator("#last-name").fill("vanga");
  await page.locator("#postal-code").fill("505522");
  await page.locator("#continue").click();
  await page.locator("#finish").click();
  await page.locator("#generate-pdf-order").click();
  await page.waitForTimeout(4000);
});
