import { test } from '@playwright/test';
import { CompleteCartFlowHappyPathPage } from '../pages/complete_cart_flow_happy_path_page';

async function saucedemoLoginspecjs(page) {
  // Launch the App
  await page.goto(`https://www.saucedemo.com/`);
  // Enter Username
  await page.locator(`#user-name`).fill(`standard_user`);
  // Enter password
  await page.locator(`#password`).fill(`secret_sauce`);
  // Click login button
  await page.locator(`#login-button`).click();
}

test('Complete cart flow happy path', async ({ page }) => {
  const completecartflowhappypathpage = new CompleteCartFlowHappyPathPage(page);

  await saucedemoLoginspecjs(page); // script: saucedemo_login.spec.js

  await completecartflowhappypathpage.clickOnBackpack();
  await completecartflowhappypathpage.clickOnBikeLight();
  await completecartflowhappypathpage.clickOnCartLink();
  await completecartflowhappypathpage.removeBackpackItem();
  await completecartflowhappypathpage.clickOnCheckout();
  await completecartflowhappypathpage.clickOnFirstNameField();
  await completecartflowhappypathpage.enterFirstName();
  await completecartflowhappypathpage.clickOnLastName();
  await completecartflowhappypathpage.enterLastName();
  await completecartflowhappypathpage.clickOnPostCode();
  await completecartflowhappypathpage.enterPostcode();
  await completecartflowhappypathpage.clickOnContinue();
  await completecartflowhappypathpage.clickOnFinish();
  await completecartflowhappypathpage.clickOnBackToProducts();
  await completecartflowhappypathpage.clickOnMenuButton();
  await completecartflowhappypathpage.clickOnSideBarLink();
  await completecartflowhappypathpage.clickOnLoginLogo();
});
