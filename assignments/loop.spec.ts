import { test, expect } from '@playwright/test';
 
 
test('Get the Cards Count & Click on Selected card Value', async ({ page }) => {
    // Specify the card to click
    const selectCard = 'Interactions';
    await page.goto('https://demoqa.com/');
 
    const cards = page.locator("//div[@class='card-body']");
    const Countcards = await cards.count();
    console.log(Countcards);
 
    for (let i = 0; i < Countcards; i++) {
        const card = cards.nth(i);
        const cardName = await card.textContent();
        console.log(`cardName ${i + 1}: ${cardName}`);
        if (cardName === selectCard) {
            await card.click();
            console.log(`Clicked Card Name : ${cardName}`);
            break;
        }
 
    }
 
});
demosite
 