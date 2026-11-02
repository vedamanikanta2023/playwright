import { test, expect } from "@playwright/test";
import creds from "../test-Data/credentials.json";

test("Read test data from JSON file", async ({
  page,
  browser,
  browserName,
}, testInfo) => {
  // Get the browser name
  console.log(browserName);

  // Get the test case title and status
  console.log("My title is: " + testInfo.title);
  console.log("My status : " + testInfo.status);
  console.log("My output directory is: " + testInfo.outputPath);

  await page.goto("https://www.saucedemo.com/");
  await page.getByPlaceholder("Username").fill(creds.SauceDetails.username);
  await page.getByPlaceholder("Password").fill(creds.SauceDetails.password);

  await page
    .getByRole("textbox", { name: "Username" })
    .fill(creds.SauceDetails.username);
  await page
    .getByRole("textbox", { name: "Password" })
    .fill(creds.SauceDetails.password);

  //   await page.locator('#user-name').fill(creds.SauceDetails.username);
  //   await page.locator('#password').fill(creds.SauceDetails.password);

  await page
    .locator('//div[@class="form_group"]//input')
    .first()
    .fill(creds.SauceDetails.username);
  await page
    .locator('//div[@class="form_group"]//input')
    .last()
    .fill(creds.SauceDetails.username);
  await page
    .locator('//div[@class="form_group"]//input')
    .nth(0)
    .fill(creds.SauceDetails.username);

  await page.getByRole("button", { name: "Login" }).click();
});
