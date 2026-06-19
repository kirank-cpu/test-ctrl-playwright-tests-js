import { expect } from '@playwright/test';

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.clickUserNameLocator = page.locator(`#user-name`);
    this.fillUserNameFieldLocator = page.locator(`#user-name`);
    this.clickPasswordLocator = page.locator(`#password`);
    this.fillPasswordFieldLocator = page.locator(`#password`);
    this.clickLoginButtonLocator = page.locator(`#login-button`);
    this.verifyUserName2Locator = page.locator(`#user-name`);
  }

  async launchTheUrl() {
    // Launch the URL
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

  async verifyUserName2() {
    // Verify "User Name" (2)
    await expect(this.verifyUserName2Locator).toBeVisible();
  }

}
