import { test } from '@playwright/test';
import { HomePage } from '../../pages/home_page';
import { CartPage } from '../../pages/cart_page';
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

test('complete_cart_flow_happy_path', async ({ page }) => {
  const homepage = new HomePage(page);
  const cartpage = new CartPage(page);
  const loginpage = new LoginPage(page);

  await runLoggedStep(1, 'Login to Sauce demo App', page, async () => {
    await reusableScriptsvalidLoginspecjs(page); // script: reusable_scripts/valid_login.spec.js
  });

  await runLoggedStep(2, 'Click on backpack', page, async () => {
    await homepage.clickOnBackpack();
  });

  await runLoggedStep(3, 'Click on Bike light', page, async () => {
    await homepage.clickOnBikeLight();
  });

  await runLoggedStep(4, 'Click on Cart link', page, async () => {
    await homepage.clickOnCartLink();
  });

  await runLoggedStep(5, 'Remove backpack item', page, async () => {
    await cartpage.removeBackpackItem();
  });

  await runLoggedStep(6, 'Click on Checkout', page, async () => {
    await cartpage.clickOnCheckout();
  });

  await runLoggedStep(7, 'Click on First name field', page, async () => {
    await cartpage.clickOnFirstNameField();
  });

  await runLoggedStep(8, 'Enter First name', page, async () => {
    await cartpage.enterFirstName();
  });

  await runLoggedStep(9, 'Click on Last name', page, async () => {
    await cartpage.clickOnLastName();
  });

  await runLoggedStep(10, 'Enter Last name', page, async () => {
    await cartpage.enterLastName();
  });

  await runLoggedStep(11, 'Click on Post code', page, async () => {
    await cartpage.clickOnPostCode();
  });

  await runLoggedStep(12, 'Enter Postcode', page, async () => {
    await cartpage.enterPostcode();
  });

  await runLoggedStep(13, 'Click on Continue', page, async () => {
    await cartpage.clickOnContinue();
  });

  await runLoggedStep(14, 'Click on Finish', page, async () => {
    await cartpage.clickOnFinish();
  });

  await runLoggedStep(15, 'Click on Back to products', page, async () => {
    await cartpage.clickOnBackToProducts();
  });

  await runLoggedStep(16, 'Click on menu button', page, async () => {
    await homepage.clickOnMenuButton();
  });

  await runLoggedStep(17, 'Click on Side bar link', page, async () => {
    await homepage.clickOnSideBarLink();
  });

  await runLoggedStep(18, 'Click on login logo', page, async () => {
    await loginpage.clickOnLoginLogo();
  });

});
