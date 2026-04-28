import { Page, Locator } from '@playwright/test'

export class InventoryPageLocators {

    readonly page: Page;
    readonly products: Locator;
    readonly addtoCartFirst: Locator;
    readonly addtoCartLast: Locator;
    readonly addtoCartnth:Locator;
    readonly cartlink: Locator;
    readonly continueShopping: Locator;
    readonly cartItems: Locator;
    readonly checkOut:Locator;
    readonly firstName:Locator;
    readonly lastName:Locator;
    readonly zipCode:Locator;
    readonly continueBtn:Locator;
    readonly totalPrice:Locator;
    readonly finishBtn:Locator;
    readonly successMsg:Locator;
    readonly backHomeBtn:Locator;
    readonly openMenu:Locator;
    readonly logoutBtn:Locator;

    constructor(page: Page) {
        this.page = page;
        this.products = page.locator('.inventory_item_name');
        this.addtoCartFirst = page.getByRole('button', { name: 'Add to cart' }).first();
        this.addtoCartLast = page.getByRole('button', { name: 'Add to cart' }).last();
        this.addtoCartnth = page.getByRole('button', { name: 'Add to cart' });
        this.cartlink = page.locator(".shopping_cart_link");
        this.continueShopping = page.locator("#continue-shopping");
        this.cartItems = page.locator('div.cart_item');
        this.checkOut=page.getByRole('button',{name:'Checkout'});
        this.firstName=page.locator("#first-name");
        this.lastName=page.locator("#last-name");
        this.zipCode=page.locator('#postal-code');
        this.continueBtn=page.locator('#continue');
        this.totalPrice=page.locator('.summary_total_label');
        this.finishBtn=page.locator('#finish');
        this.successMsg=page.getByText('Thank you for your order!', { exact: true });
        this.backHomeBtn=page.locator("#back-to-products");
        this.openMenu=page.getByRole('button',{name:'Open Menu'});
        this.logoutBtn=page.locator('#logout_sidebar_link');
        

        
    }
}