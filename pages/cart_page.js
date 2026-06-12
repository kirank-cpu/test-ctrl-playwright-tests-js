import { expect } from '@playwright/test';

export class CartPage {
  constructor(page) {
    this.page = page;
    this.removeBackpackItemLocator = page.locator(`#remove-sauce-labs-backpack`);
    this.clickOnCheckoutLocator = page.locator(`#checkout`);
    this.clickOnFirstNameFieldLocator = page.locator(`#first-name`);
    this.enterFirstNameLocator = page.locator(`#first-name`);
    this.clickOnLastNameLocator = page.locator(`#last-name`);
    this.enterLastNameLocator = page.locator(`#last-name`);
    this.clickOnPostCodeLocator = page.locator(`#postal-code`);
    this.enterPostcodeLocator = page.locator(`#postal-code`);
    this.clickOnContinueLocator = page.locator(`#continue`);
    this.clickOnFinishLocator = page.locator(`#finish`);
    this.clickOnBackToProductsLocator = page.locator(`#back-to-products`);
  }

  async removeBackpackItem() {
    // Remove backpack item
    await this.removeBackpackItemLocator.click();
  }

  async clickOnCheckout() {
    // Click on Checkout
    await this.clickOnCheckoutLocator.click();
  }

  async clickOnFirstNameField() {
    // Click on First name field
    await this.clickOnFirstNameFieldLocator.click();
  }

  async enterFirstName() {
    // Enter First name
    await this.enterFirstNameLocator.fill(`First my name`);
  }

  async clickOnLastName() {
    // Click on Last name
    await this.clickOnLastNameLocator.click();
  }

  async enterLastName() {
    // Enter Last name
    await this.enterLastNameLocator.fill(`My Last name`);
  }

  async clickOnPostCode() {
    // Click on Post code
    await this.clickOnPostCodeLocator.click();
  }

  async enterPostcode() {
    // Enter Postcode
    await this.enterPostcodeLocator.fill(`123456`);
  }

  async clickOnContinue() {
    // Click on Continue
    await this.clickOnContinueLocator.click();
  }

  async clickOnFinish() {
    // Click on Finish
    await this.clickOnFinishLocator.click();
  }

  async clickOnBackToProducts() {
    // Click on Back to products
    await this.clickOnBackToProductsLocator.click();
  }

}
