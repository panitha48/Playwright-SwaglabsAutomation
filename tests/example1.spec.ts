//Opens a login page
// Logs in using username & password
// Waits for dashboard page
// Verifies:
// URL contains /dashboard
// Username is displayed on UI

import {test,expect} from '@playwright/test'

test.skip("Verify Login functionality",async({page})=>{
    const username="testuser"
    await page.goto("url");
    await page.fill("#username",username);
    await page.fill("#password","password");
    await page.click("#loginBtn");
    expect(page).toHaveURL("/.*dashboard");
    expect(page.getByText(username)).toBeVisible();

})