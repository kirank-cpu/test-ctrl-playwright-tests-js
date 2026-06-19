import { test } from '@playwright/test';
import { LoginPage } from '../../pages/login_page';
import { HomePage } from '../../pages/home_page';
import { CartPage } from '../../pages/cart_page';

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

test('complex_test', async ({ page }) => {
  const loginpage = new LoginPage(page);
  const homepage = new HomePage(page);
  const cartpage = new CartPage(page);

  await runLoggedStep(1, 'Launch the URL', page, async () => {
    await loginpage.launchTheUrl();
  });

  await runLoggedStep(2, 'Click "User Name"', page, async () => {
    await loginpage.clickUserName();
  });

  await runLoggedStep(3, 'Fill "User Name" field', page, async () => {
    await loginpage.fillUserNameField();
  });

  await runLoggedStep(4, 'Click "Password"', page, async () => {
    await loginpage.clickPassword();
  });

  await runLoggedStep(5, 'Fill "Password" field', page, async () => {
    await loginpage.fillPasswordField();
  });

  await runLoggedStep(6, 'Click "Login Button"', page, async () => {
    await loginpage.clickLoginButton();
  });

  await runLoggedStep(7, 'Click "Add to cart"', page, async () => {
    await homepage.clickAddToCart();
  });

  await runLoggedStep(8, 'Click "Add to cart"', page, async () => {
    await homepage.clickAddToCart2();
  });

  await runLoggedStep(9, 'Click "Add to cart"', page, async () => {
    await homepage.clickAddToCart3();
  });

  await runLoggedStep(10, 'Click "Add to cart"', page, async () => {
    await homepage.clickAddToCart4();
  });

  await runLoggedStep(11, 'Click "4"', page, async () => {
    await homepage.click4();
  });

  await runLoggedStep(12, 'Click "Remove"', page, async () => {
    await cartpage.clickRemove();
  });

  await runLoggedStep(13, 'Click "Remove"', page, async () => {
    await cartpage.clickRemove2();
  });

  await runLoggedStep(14, 'Click "Checkout"', page, async () => {
    await cartpage.clickCheckout();
  });

  await runLoggedStep(15, 'Click "Cancel"', page, async () => {
    await cartpage.clickCancel();
  });

  await runLoggedStep(16, 'Click "Remove"', page, async () => {
    await cartpage.clickRemove3();
  });

  await runLoggedStep(17, 'Click "Remove"', page, async () => {
    await cartpage.clickRemove4();
  });

  await runLoggedStep(18, 'Click "Continue Shopping"', page, async () => {
    await cartpage.clickContinueShopping();
  });

  await runLoggedStep(19, 'Click "Open Menu"', page, async () => {
    await homepage.clickOpenMenu();
  });

  await runLoggedStep(20, 'Click "Logout"', page, async () => {
    await homepage.clickLogout();
  });

  await runLoggedStep(21, 'Verify "User Name" (2)', page, async () => {
    await loginpage.verifyUserName2();
  });

});
