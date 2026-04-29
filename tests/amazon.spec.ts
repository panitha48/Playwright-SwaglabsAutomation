import { test,expect } from '@playwright/test';
import * as allure from 'allure-js-commons';

test("Amazon footer automation test using following sibling", async ({ page }) => {

  await allure.step('Open Amazon homepage', async () => {
    await page.goto("https://www.amazon.in/");
  });

  let linkTexts = "";

  await allure.step('Fetch footer links', async () => {
   const footer = page.locator("//div[text()='Make Money with Us']");
   await footer.scrollIntoViewIfNeeded();
  //await footer.waitFor();

    const linkTexts = await footer
      .locator("xpath=following-sibling::ul")
      .innerText();
  });

  await allure.step('Attach footer links to report', async () => {
    await allure.attachment(
      "Footer Links",
      linkTexts,
      "text/plain"
    );
  });

  await allure.step('Capture screenshot', async () => {
    const screenshot = await page.screenshot();
    await allure.attachment(
      'Screenshot',
      screenshot,
      'image/png'
    );
  });

});