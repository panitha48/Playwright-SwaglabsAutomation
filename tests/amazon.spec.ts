import { test, expect } from '@playwright/test';
import * as allure from 'allure-js-commons';

test("Amazon footer automation test using following sibling", async ({ page }) => {

  await allure.step('Open Amazon homepage', async () => {
    await page.goto("https://www.amazon.in/");
  });
  const element = page.locator("//div[@role='presentation']//div[5]//ul[1]");
  await element.scrollIntoViewIfNeeded();
  console.log(await element.innerText());
  let text = await element.textContent();
  let cleanedText = text
    ?.replace(/[\n+]/g, '')   // remove \n and +
    .replace(/\s+/g, ' ')     // remove extra spaces
    .trim();                  // remove leading/trailing spaces

  console.log(cleanedText);
  expect(cleanedText).toContain("Supply to Amazon");

const linkTexts = ""
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
