import { expect } from '@playwright/test';

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.clickUserNameTestFieldLocator = page.locator(`#user-name`);
    this.fillUserNameFieldLocator = page.locator(`#user-name`);
    this.fillPasswordFieldLocator = page.locator(`#password`);
    this.clickLoginButtonLocator = page.locator(`#login-button`);
    this.verifyHeaderProductsLocator = page.locator(`//span[normalize-space()="Products"]`);
  }

  async launchTheApp() {
    // Launch the app
    await this.page.goto(`https://www.saucedemo.com/`);
  }

  async clickUserNameTestField() {
    // Click "User Name" test field
    await this.clickUserNameTestFieldLocator.click();
  }

  async fillUserNameField() {
    // Fill "User Name" field
    await this.fillUserNameFieldLocator.fill(`standard_user`);
  }

  async fillPasswordField() {
    // Fill "Password" field
    await this.fillPasswordFieldLocator.fill(`secret_sauce`);
  }

  async clickLoginButton() {
    // Click "Login Button"
    await this.clickLoginButtonLocator.click();
  }

  async verifyHeaderProducts() {
    // Verify Header - "Products" 
    await expect(this.verifyHeaderProductsLocator).toBeVisible();
  }

}
