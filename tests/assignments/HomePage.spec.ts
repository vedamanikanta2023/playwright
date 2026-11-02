import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";

test.describe("Home Page", () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.open();
  });

  test("Elements card visible", async () => {
    await expect(homePage.elementsCard).toBeVisible();
  });

  test("Clicking elements card opens the Elements page", async ({ page }) => {
    await homePage.clickElementsCard();
    await expect(page).toHaveURL(/\/elements/);
  });
});
