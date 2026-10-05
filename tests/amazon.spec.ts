import test from "@playwright/test";


test('amazon test', async({page})=>{
    await page.goto('https://www.amazon.in/')

    await page.locator('#searchDropdownBox').selectOption('search-alias=beauty')
    // await page.locator('#searchDropdownBox').selectOption({label:'Computers'});

    await page.locator("//input[@id='twotabsearchtextbox']").fill('Soap');
    await page.locator('#nav-search-submit-button').click();
    // await page.locator('#s-result-sort-select').selectOption('price-asc-rank')
    await page.locator('#s-result-sort-select').selectOption('price-asc-rank')
})