import { BasePage } from "./BasePage";
import { type Page, type Locator } from "@playwright/test";

export class HomePage extends BasePage {
  readonly elementsCard: Locator;

  constructor(page: Page) {
    super(page);
    this.elementsCard = page.locator(".card", { hasText: "Elements" });
  }

  async open(): Promise<void> {
    await this.openWebSite("https://demoqa.com/");
  }

  async clickElementsCard(): Promise<void>{
    await this.elementsCard.click()
  }
}
