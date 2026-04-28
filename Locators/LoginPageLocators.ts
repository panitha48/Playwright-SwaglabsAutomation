import {Page, Locator} from '@playwright/test'

export class LoginPageLocators{

    readonly page:Page;
    readonly userName: Locator;
    readonly password: Locator;
    readonly loginBtn:Locator;
    readonly swagLabText: Locator;

    constructor(page: Page){
        this.page=page;
        this.userName=page.getByRole('textbox',{name:'Username'});
        this.password=page.getByRole('textbox',{name:'Password'});
        this.loginBtn=page.locator('#login-button');
        this.swagLabText=page.getByText("Swag Labs",{exact:true});
    }

}