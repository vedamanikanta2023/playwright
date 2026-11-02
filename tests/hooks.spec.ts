import test, { expect } from "@playwright/test";

// test.describe("Demo on hooks", async () => {
  test.beforeAll(async () => {
    console.log("I'm before All");
    // await page.goto("https://demoqa.com/");
  });

  test.beforeEach(async ({ page }) => {
    console.log("I'm in before Each");
    await page.goto("https://demoqa.com/");
  });

  test.afterEach(async ({ page }, testInfo) => {
    console.log("I'm in after each");
    console.log(testInfo.title);
    console.log(testInfo.status);
    if (testInfo.status !== testInfo.expectedStatus) {
      await page.screenshot({
        path: `./test-results/${testInfo.title}.png`,
        fullPage: true,
      });
      console.log('Capture');
    }
  });

  test.afterAll(async () => {
    console.log("I'm in after all");
  });

  test("DemoQA  TC-1", async ({ page }) => {
    await expect(page).toHaveTitle("demosite");
    await expect(page.getByText("Elements", {})).toBeVisible();
  });

  test("DemoQA TC-2", async ({ page }) => {
    await expect(page).toHaveTitle("demosite");
    await page.getByText("Elements").click();
  });

  test("DemoQA TC-3", async ({ page }) => {
    await page.getByText("F orms").click();
  });
// });
