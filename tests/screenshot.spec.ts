import { expect, test } from "@playwright/test";

test("Screenshot", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await page.screenshot({ path: "./screenshots/playwright.png" });
  const logo = await page.locator("//a[@class='navbar__brand']");
  await logo.screenshot({ path: "./screenshots/playwrightlogo.png" });
});
