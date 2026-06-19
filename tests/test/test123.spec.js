import { test } from '@playwright/test';
import { Test123Page } from '../../pages/test123_page';

test('test123', async ({ page }) => {
  const test123page = new Test123Page(page);

  await test123page.launchTheApp();
  await test123page.clickUserName();
  await test123page.fillUserNameField();
  await test123page.clickPassword();
  await test123page.fillPasswordField();
  await test123page.clickLoginButton();
  await test123page.clickAddToCart();
  await test123page.click1();
  await test123page.clickRemove();
  await test123page.clickContinueShopping();
  await test123page.clickOpenMenu();
  await test123page.clickLogout();
});
