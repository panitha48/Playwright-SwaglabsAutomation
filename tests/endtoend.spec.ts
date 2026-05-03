import { test, expect } from '../fixtures/base-fixture';

// Reuse authenticated session (avoids login every test → faster execution)
test.use({ role: 'admin' });

test('[@admin] Add product to cart', async ({ page, loginPage, inventoryPage }) => {
    // Navigate directly to inventory page (since user is already logged in)
    await page.goto('/inventory.html');
    // Add first product to cart
    await inventoryPage.AddToCartFirst.click();
    // Open cart page
    await inventoryPage.gotoCart.click();
    // Click continue shopping to go back to inventory
    await inventoryPage.clickOnContinueShopping.click();
    // Add last product to cart
    await inventoryPage.AddToCartLast.click();
    // Add specific product by index (dynamic selection)
    await inventoryPage.AddToCartnth(3);
    // Navigate to cart again
    await inventoryPage.gotoCart.click();
    // Validate total number of items added in cart
   const cartList= await inventoryPage.cartItemCount.count();
    expect(cartList).toBeGreaterThan(2);
    // Proceed to checkout
    await inventoryPage.checkOut.click();
    // Enter user details for checkout
    await inventoryPage.enterYourInfo("test", "lastName", "500016");
    // Log total price (useful for debugging or validation if needed)
    console.log(await inventoryPage.totalPrice())
    // Complete the order
    await inventoryPage.clickonFinish();
    // Validate successful order message
    await expect(inventoryPage.successMsg).toHaveText("Thank you for your order!");
    // Navigate back to inventory page
    await inventoryPage.clickOnBackBtn.click();
    // Open side menu
    await inventoryPage.clickOnOpenMenu.click();
    // Logout from application
    await inventoryPage.clickOnLogout.click();
    // Capture login page text after logout
    const text = loginPage.swagLabText;
    // Validate user is redirected to login page
    await expect(text).toHaveText("Swag Labs");
})
test('[@user] Add product to cart', async ({ page, loginPage, inventoryPage }) => {
    // Navigate directly to inventory page (since user is already logged in)
    await page.goto('/inventory.html');
    // Add first product to cart
    await inventoryPage.AddToCartFirst.click();
    // Open cart page
    await inventoryPage.gotoCart.click();
    // Click continue shopping to go back to inventory
    await inventoryPage.clickOnContinueShopping.click();
    // Add last product to cart
    await inventoryPage.AddToCartLast.click();
    // Add specific product by index (dynamic selection)
    await inventoryPage.AddToCartnth(3);
    // Navigate to cart again
    await inventoryPage.gotoCart.click();
    // Validate total number of items added in cart
   const cartList= await inventoryPage.cartItemCount.count();
    expect(cartList).toBeGreaterThan(2);
    // Proceed to checkout
    await inventoryPage.checkOut.click();
    // Enter user details for checkout
    await inventoryPage.enterYourInfo("test", "lastName", "500016");
    // Log total price (useful for debugging or validation if needed)
    console.log(await inventoryPage.totalPrice())
    // Complete the order
    await inventoryPage.clickonFinish();
    // Validate successful order message
    await expect(inventoryPage.successMsg).toHaveText("Thank you for your order!");
    // Navigate back to inventory page
    await inventoryPage.clickOnBackBtn.click();
    // Open side menu
    await inventoryPage.clickOnOpenMenu.click();
    // Logout from application
    await inventoryPage.clickOnLogout.click();
    // Capture login page text after logout
    const text = loginPage.swagLabText;
    // Validate user is redirected to login page
    await expect(text).toHaveText("Swag Labs");
})