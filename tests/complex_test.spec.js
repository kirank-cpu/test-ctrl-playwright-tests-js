import { test } from '@playwright/test';
import { ComplexTestPage } from '../pages/complex_test_page';

test('complex test', async ({ page }) => {
  const complextestpage = new ComplexTestPage(page);

  await complextestpage.launchTheUrl();
  await complextestpage.clickUserName();
  await complextestpage.fillUserNameField();
  await complextestpage.clickPassword();
  await complextestpage.fillPasswordField();
  await complextestpage.clickLoginButton();
  await complextestpage.clickAddToCart();
  await complextestpage.clickAddToCart2();
  await complextestpage.clickAddToCart3();
  await complextestpage.clickAddToCart4();
  await complextestpage.click4();
  await complextestpage.clickRemove();
  await complextestpage.clickRemove2();
  await complextestpage.clickCheckout();
  await complextestpage.clickCancel();
  await complextestpage.clickRemove3();
  await complextestpage.clickRemove4();
  await complextestpage.clickContinueShopping();
  await complextestpage.clickOpenMenu();
  await complextestpage.clickLogout();
  await complextestpage.verifyUserName2();
});
