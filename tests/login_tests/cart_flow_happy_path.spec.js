import { test } from '@playwright/test';
import { CartFlowHappyPathPage } from '../../pages/cart_flow_happy_path_page';

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

test('cart_flow_happy_path', async ({ page }) => {
  const cartflowhappypathpage = new CartFlowHappyPathPage(page);

  await saucedemoLoginspecjs(page); // script: saucedemo_login.spec.js

  await cartflowhappypathpage.scr();
  await cartflowhappypathpage.clickOnBackpack();
  await cartflowhappypathpage.clickOnBikeLight();
  await cartflowhappypathpage.clickOnCartLink();
  await cartflowhappypathpage.removeBackpackItem();
  await cartflowhappypathpage.clickOnCheckout();
  await cartflowhappypathpage.clickOnFirstNameField();
  await cartflowhappypathpage.enterFirstName();
  await cartflowhappypathpage.clickOnLastName();
  await cartflowhappypathpage.enterLastName();
  await cartflowhappypathpage.clickOnPostCode();
  await cartflowhappypathpage.enterPostcode();
  await cartflowhappypathpage.clickOnContinue();
  await cartflowhappypathpage.clickOnFinish();
  await cartflowhappypathpage.clickOnBackToProducts();
  await cartflowhappypathpage.clickOnMenuButton();
  await cartflowhappypathpage.clickOnSideBarLink();
  await cartflowhappypathpage.clickOnLoginLogo();
});
