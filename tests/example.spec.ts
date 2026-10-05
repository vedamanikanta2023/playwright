import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  // await page.goto('https://playwright.dev/');

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('#name').fill("vedamanikanta vanga");

    await page.locator('#email').fill("vedam@gmail.com");
    await page.locator('#textarea').fill('hyderabad, 500000, ameerpet');

    await page.locator('#male').check();

    await page.locator("//button[contains(text(),'Point Me')]").hover();
 
    await page.locator("//button[contains(text(),'Copy Text')]").dblclick();
    //
    
    const sourcelocator = page.locator ("//div[@id='draggable']")
    const destinationlocator = page.locator ("//div[@id='droppable']")
    await sourcelocator.dragTo (destinationlocator)
    

    await page.locator("//option[@value='deer']").click();
    await page.waitForTimeout(2000);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(2000);
    await page.keyboard.press('ArrowDown'); 

    //
    await page.locator('#sunday').check()
    await page.locator('#wednesday').check()

    await page.locator('#country').selectOption('uk');//with value
    await page.locator('#country').selectOption({label:'France'});// with label

    await page.locator('#colors').selectOption('white');
    await page.locator('#colors').selectOption({label:'Green'});

    //button[@name='start'] x-path
    await page.locator("//button[contains(text(),'START')]").click();



//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
  // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
