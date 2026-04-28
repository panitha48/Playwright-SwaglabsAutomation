import { test as setup } from '@playwright/test';

setup('authenticate', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // save session
  await page.context().storageState({ path: 'auth.json' });
});