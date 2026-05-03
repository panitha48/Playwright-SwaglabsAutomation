import { test as base, chromium } from '@playwright/test';
import { getUsers } from '../utils/dataloader';
import { BASE_URLS, ENV } from '../config/env';

type UserRole = 'admin' | 'user';

export const test = base.extend<{
  role: UserRole;
}>({
  role: ['admin', { option: true }],

  storageState: async ({ role }, use, testInfo) => {
    const fileName = `.auth/${role}-${testInfo.workerIndex}.json`;

    const users = getUsers();
    const creds = users[role];

    const browser = await chromium.launch();
    const page = await browser.newPage();

    //dynamic URL
    await page.goto(BASE_URLS[ENV]);

    //dynamic creds
    await page.fill('#user-name', creds.username);
    await page.fill('#password', creds.password);
    await page.click('#login-button');

    await page.context().storageState({ path: fileName });
    await browser.close();

    await use(fileName);
  }
});

