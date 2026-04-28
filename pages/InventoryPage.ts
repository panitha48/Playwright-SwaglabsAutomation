import { Page } from '@playwright/test'
import { InventoryPageLocators } from '../Locators/InventoryPageLocators'

export class InventoryPage {
    page: Page;
    inventoryPageLocators: InventoryPageLocators;

    constructor(page: Page) {
        this.page = page;
        this.inventoryPageLocators = new InventoryPageLocators(page);
    }
    //Actions
    async getAllProducts() {
        //return await this.inventoryPageLocators.products.allTextContents();
        return await this.inventoryPageLocators.products.allInnerTexts();
    }
    get AddToCartFirst() {
        return this.inventoryPageLocators.addtoCartFirst;
    }
    get AddToCartLast() {
        return this.inventoryPageLocators.addtoCartLast;
    }
    async AddToCartnth(i:number) {
        return this.inventoryPageLocators.addtoCartnth.nth(i).click();
    }
    get gotoCart() {
        return this.inventoryPageLocators.cartlink;
    }
    get clickOnContinueShopping() {
        return this.inventoryPageLocators.continueShopping;
    }
    get cartItemCount() {
        return this.inventoryPageLocators.cartItems;
    }
    get checkOut(){
        return this.inventoryPageLocators.checkOut;
    } 
    async enterYourInfo(fname:string,lname:string,zipcode:string){
        await this.inventoryPageLocators.firstName.fill(fname);
        await this.inventoryPageLocators.lastName.fill(lname);
        await this.inventoryPageLocators.zipCode.fill(zipcode);
        await this.inventoryPageLocators.continueBtn.click();
    }
    async totalPrice(){
        return await this.inventoryPageLocators.totalPrice.innerText();
    }
    async clickonFinish(){
        await this.inventoryPageLocators.finishBtn.click();
    }
    get successMsg(){
        return this.inventoryPageLocators.successMsg;
    }
    get clickOnBackBtn(){
        return this.inventoryPageLocators.backHomeBtn;
    }
    get clickOnOpenMenu(){
        return this.inventoryPageLocators.openMenu;
    }
    get clickOnLogout(){
        return this.inventoryPageLocators.logoutBtn;
    }
}
