import {type Page} from "@playwright/test";

export class BasePage{
    constructor (protected readonly page:Page){}

    async openWebSite(path:string = "/"){
        await this.page.goto(path);
    }
}