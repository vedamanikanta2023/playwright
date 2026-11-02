import { expect, test } from "@playwright/test";

test("Browser --> context --> Page: sharing vs isolated", async ({
  browser,
}) => {
  //isolated session like icognito
  const context1 = await browser.newContext();
  const page1 = await context1.newPage();
  await page1.goto("https://the-internet.herokuapp.com/login");
  await page1.fill("#username", "tomsmith");
  await page1.locator("#password").pressSequentially("SuperSecretPassword!");
  await page1.locator("//button[@type='submit']").click();
  await expect(page1).toHaveURL(/\/secure/);
  await expect(page1).toHaveURL("/secure");

  //page2 -  creating new tab in the same context
  const page2 = await context1.newPage();
  await page2.goto("https://the-internet.herokuapp.com/secure");
  await expect(page2).toHaveURL("/secure");

  // context 2 - like new icognito window
  const context2 = await browser.newContext();
  const page3 = await context2.newPage();
  await page3.goto("https://the-internet.herokuapp.com/secure");
  await expect(page3).toHaveURL(/\/secure/);

  //closing the contexts.
  await context1.close();
  await context2.close();
});
