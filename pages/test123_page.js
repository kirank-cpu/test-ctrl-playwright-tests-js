import { expect } from '@playwright/test';

export class Test123Page {
  constructor(page) {
    this.page = page;
    this.clickUserNameLocator = page.locator(`#user-name`);
    this.fillUserNameFieldLocator = page.locator(`#user-name`);
    this.clickPasswordLocator = page.locator(`#password`);
    this.fillPasswordFieldLocator = page.locator(`#password`);
    this.clickLoginButtonLocator = page.locator(`#login-button`);
    this.clickAddToCartLocator = page.locator(`#add-to-cart-sauce-labs-backpack`);
    this.click1Locator = page.locator(`//span[normalize-space()="1"]`);
    this.clickRemoveLocator = page.locator(`#remove-sauce-labs-backpack`);
    this.clickContinueShoppingLocator = page.locator(`#continue-shopping`);
    this.clickOpenMenuLocator = page.locator(`#react-burger-menu-btn`);
    this.clickLogoutLocator = page.locator(`#logout_sidebar_link`);
  }

  async launchTheApp() {
    // Launch the app
    await this.page.goto(`https://www.saucedemo.com`);
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

  async clickAddToCart() {
    // Click "Add to cart"
    await this.clickAddToCartLocator.click();
  }

  async click1() {
    // Click "1"
    await this.click1Locator.click();
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

}
