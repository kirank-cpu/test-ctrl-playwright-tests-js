import { expect } from '@playwright/test';

export class ValidLoginTestPage {
  constructor(page) {
    this.page = page;
    this.clickUserNameLocator = page.locator(`#user-name`);
    this.fillUserNameFieldLocator = page.locator(`#user-name`);
    this.clickPasswordLocator = page.locator(`#password`);
    this.fillPasswordFieldLocator = page.locator(`#password`);
    this.clickLoginButtonLocator = page.locator(`#login-button`);
    this.clickAddToCart1Locator = page.locator(`#add-to-cart-sauce-labs-backpack`);
    this.clickAddToCart2Locator = page.locator(`#add-to-cart-sauce-labs-bike-light`);
    this.clickCartIconLocator = page.locator(`//span[normalize-space()="2"]`);
    this.clickRemoveLocator = page.locator(`#remove-sauce-labs-backpack`);
    this.clickContinueShoppingLocator = page.locator(`#continue-shopping`);
    this.clickOpenMenuLocator = page.locator(`#react-burger-menu-btn`);
    this.clickLogoutLocator = page.locator(`#logout_sidebar_link`);
    this.verifyTheUsernameElementLocator = page.locator(`#user-name`);
  }

  async launchTheUrl() {
    // Launch the URL
    await this.page.goto(`https://www.saucedemo.com/`);
  }

  async clickUserName() {
    // Click "User Name"
    await this.clickUserNameLocator.click();
  }

  async fillUserNameField() {
    // Fill "User Name" field
    await this.fillUserNameFieldLocator.fill(`standard_user`);
  }

  async clickPassword() {
    // Click "Password"
    await this.clickPasswordLocator.click();
  }

  async fillPasswordField() {
    // Fill "Password" field
    await this.fillPasswordFieldLocator.fill(`secret_sauce`);
  }

  async clickLoginButton() {
    // Click "Login Button"
    await this.clickLoginButtonLocator.click();
  }

  async clickAddToCart1() {
    // Click "Add to cart1"
    await this.clickAddToCart1Locator.click();
  }

  async clickAddToCart2() {
    // Click "Add to cart2"
    await this.clickAddToCart2Locator.click();
  }

  async clickCartIcon() {
    // Click Cart icon
    await this.clickCartIconLocator.click();
  }

  async clickRemove() {
    // Click "Remove"
    await this.clickRemoveLocator.click();
  }

  async clickContinueShopping() {
    // Click "Continue Shopping"
    await this.clickContinueShoppingLocator.click();
  }

  async clickOpenMenu() {
    // Click "Open Menu"
    await this.clickOpenMenuLocator.click();
  }

  async clickLogout() {
    // Click "Logout"
    await this.clickLogoutLocator.click();
  }

  async verifyTheUsernameElement() {
    // Verify the username element
    await expect(this.verifyTheUsernameElementLocator).toBeVisible();
  }

}
