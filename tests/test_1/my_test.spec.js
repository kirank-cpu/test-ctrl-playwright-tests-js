import { test } from '@playwright/test';
import { LoginPage } from '../../pages/login_page';

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

test('my_test', async ({ page }) => {
  const loginpage = new LoginPage(page);

  await runLoggedStep(1, 'Launch the app', page, async () => {
    await loginpage.launchTheApp();
  });

});
