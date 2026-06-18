import { test } from '@playwright/test';
import { FirstTestPage } from '../../pages/first_test_page';

const toStepAttachmentName = (stepNumber, title) => {
  const safeTitle = String(title || 'step')
    .replace(/[^a-z0-9]+/gi, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase()
    .slice(0, 60) || 'step';
  return `step-${String(stepNumber).padStart(3, '0')}-${safeTitle}`;
};

async function runLoggedStep(stepNumber, title, page, action) {
  const label = `Step ${stepNumber}: ${title}`;
  console.log(`[step:${stepNumber}] START ${title}`);
  try {
    await test.step(label, async (stepInfo) => {
      try {
        await action();
      } catch (error) {
        try {
          const screenshot = await page.screenshot({ fullPage: true });
          await stepInfo.attach(toStepAttachmentName(stepNumber, title), {
            body: screenshot,
            contentType: 'image/png',
          });
        } catch (screenshotError) {
          console.warn(`[step:${stepNumber}] screenshot skipped: ${screenshotError.message}`);
        }
        throw error;
      }
    });
    console.log(`[step:${stepNumber}] PASS ${title}`);
  } catch (error) {
    console.error(`[step:${stepNumber}] FAIL ${title}: ${error.message}`);
    throw error;
  }
}

async function reusableScriptsvalidLoginspecjs(page) {
  // Launch the app
  await page.goto(`https://www.saucedemo.com/`);
  // Click "User Name"
  await page.locator(`#user-name`).click();
  // Fill "User Name" field
  await page.locator(`#user-name`).fill(`standard_user`);
  // Fill "Password" field
  await page.locator(`#password`).fill(`secret_sauce`);
  // Click "Login Button"
  await page.locator(`#login-button`).click();
  // Click "Products"
  await expect(page.locator(`//span[normalize-space()="Products"]`)).toBeVisible();
}

test('first-test', async ({ page }) => {
  const firsttestpage = new FirstTestPage(page);

  await runLoggedStep(1, 'Login', page, async () => {
    await reusableScriptsvalidLoginspecjs(page); // script: reusable_scripts/valid_login.spec.js
  });

  await runLoggedStep(2, 'Test Zoom', page, async () => {
    await firsttestpage.testZoom();
  });

});
