import { test as base } from './auth-fixture';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

type MyFixtures = {
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
}
export const test = base.extend<MyFixtures>(
    {
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    inventoryPage: async ({ page, loginPage }, use) => {
        const inventoryPage = new InventoryPage(page);
        await use(inventoryPage);
    }

});
