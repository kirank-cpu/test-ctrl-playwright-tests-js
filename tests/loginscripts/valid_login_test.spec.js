import { test } from '@playwright/test';
import { ValidLoginTestPage } from '../../pages/valid_login_test_page';

test('valid login test', async ({ page }) => {
  const validlogintestpage = new ValidLoginTestPage(page);

  await validlogintestpage.launchTheUrl();
  await validlogintestpage.clickUserName();
  await validlogintestpage.fillUserNameField();
  await validlogintestpage.clickPassword();
  await validlogintestpage.fillPasswordField();
  await validlogintestpage.clickLoginButton();
  await validlogintestpage.clickAddToCart1();
  await validlogintestpage.clickAddToCart2();
  await validlogintestpage.clickCartIcon();
  await validlogintestpage.clickRemove();
  await validlogintestpage.clickContinueShopping();
  await validlogintestpage.clickOpenMenu();
  await validlogintestpage.clickLogout();
  await validlogintestpage.verifyTheUsernameElement();
});
