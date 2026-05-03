import { test, expect } from '../fixtures/base-fixture';

test("Verify swag labs text", async ({ loginPage, page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html');
    const text = loginPage.swagLabText;
    await expect(text).toHaveText("Swag Labs");
})
test.skip("Verify all products", async ({ page, inventoryPage }) => {
    await page.goto('https://www.saucedemo.com/inventory.html');
    const productsList = await inventoryPage.getAllProducts();
    expect(productsList).toContain('Sauce Labs Backpack');
    expect(productsList.length).toBeGreaterThan(0);
})
