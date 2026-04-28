import { Page } from '@playwright/test'
import { LoginPageLocators } from '../Locators/LoginPageLocators';

export class LoginPage {
    page: Page;
    loginPageLocators: LoginPageLocators;

    constructor(page: Page) {
        this.page = page;
        this.loginPageLocators = new LoginPageLocators(page);
    }
    //Actions
    async login(username: string, password: string) {
        await this.loginPageLocators.userName.fill(username);
        await this.loginPageLocators.password.fill(password);
        await this.loginPageLocators.loginBtn.click()
    }
    get swagLabText() {
        return this.loginPageLocators.swagLabText;
    }







}