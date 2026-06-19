import { expect } from '@playwright/test';

export class AddToCartPage {
  constructor(page) {
    this.page = page;
    this.fillUsernameFieldLocator = page.locator(`#user-name`);
    this.fillPasswordFieldLocator = page.locator(`#password`);
    this.clickLoginButtonLocator = page.locator(`#login-button`);
    this.clickAddToCartLocator = page.locator(`#add-to-cart-sauce-labs-backpack`);
    this.clickCartLocator = page.locator(`a.shopping_cart_link`);
    this.clickContinueShoppingLocator = page.locator(`#continue-shopping`);
    this.clickAddToCartLocator = page.locator(`#add-to-cart-sauce-labs-bike-light`);
    this.click2Locator = page.locator(`//a[normalize-space()="2"]`);
    this.clickCheckoutLocator = page.locator(`#checkout`);
    this.clickFirstNameLocator = page.locator(`#first-name`);
    this.fillFirstNameFieldLocator = page.locator(`#first-name`);
    this.clickLastNameLocator = page.locator(`#last-name`);
    this.fillLastNameFieldLocator = page.locator(`#last-name`);
    this.clickPostalCodeLocator = page.locator(`#postal-code`);
    this.fillPostalCodeFieldLocator = page.locator(`#postal-code`);
    this.clickCancelLocator = page.locator(`#cancel`);
    this.clickRemoveLocator = page.locator(`#remove-sauce-labs-backpack`);
    this.clickRemoveLocator = page.locator(`#remove-sauce-labs-bike-light`);
    this.clickContinueShoppingLocator = page.locator(`#continue-shopping`);
    this.clickOpenMenuLocator = page.locator(`#react-burger-menu-btn`);
    this.clickLogoutLocator = page.locator(`#logout_sidebar_link`);
    this.clickSwagLabsLocator = page.locator(`div.login_logo`);
  }

  async launchTheApp() {
    // Launch the App
    await this.page.goto(`https://www.saucedemo.com/`);
  }

  async fillUsernameField() {
    // Fill username field
    await this.fillUsernameFieldLocator.fill(`standard_user`);
  }

  async fillPasswordField() {
    // Fill password field
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

  async clickCart() {
    // Click cart
    await this.clickCartLocator.click();
  }

  async clickContinueShopping() {
    // Click "Continue Shopping"
    await this.clickContinueShoppingLocator.click();
  }

  async clickAddToCart() {
    // Click "Add to cart"
    await this.clickAddToCartLocator.click();
  }

  async click2() {
    // Click "2"
    await this.click2Locator.click();
  }

  async clickCheckout() {
    // Click "Checkout"
    await this.clickCheckoutLocator.click();
  }

  async clickFirstName() {
    // Click "First Name"
    await this.clickFirstNameLocator.click();
  }

  async fillFirstNameField() {
    // Fill "First Name" field
    await this.fillFirstNameFieldLocator.fill(`Test name`);
  }

  async clickLastName() {
    // Click "Last Name"
    await this.clickLastNameLocator.click();
  }

  async fillLastNameField() {
    // Fill "Last Name" field
    await this.fillLastNameFieldLocator.fill(`LM`);
  }

  async clickPostalCode() {
    // Click "Postal Code"
    await this.clickPostalCodeLocator.click();
  }

  async fillPostalCodeField() {
    // Fill "Postal Code" field
    await this.fillPostalCodeFieldLocator.fill(`654321`);
  }

  async clickCancel() {
    // Click "Cancel"
    await this.clickCancelLocator.click();
  }

  async clickRemove() {
    // Click "Remove"
    await this.clickRemoveLocator.click();
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

  async clickSwagLabs() {
    // Click "Swag Labs"
    await this.clickSwagLabsLocator.click();
  }

}
