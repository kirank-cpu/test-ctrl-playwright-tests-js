import { expect } from '@playwright/test';

export class SaucedemoLoginPage {
  constructor(page) {
    this.page = page;
    this.enterUsernameLocator = page.locator(`#user-name`);
    this.enterPasswordLocator = page.locator(`#password`);
    this.clickLoginButtonLocator = page.locator(`#login-button`);
  }

  async launchTheApp() {
    // Launch the App
    await this.page.goto(`https://www.saucedemo.com/`);
  }

  async enterUsername() {
    // Enter Username
    await this.enterUsernameLocator.fill(`standard_user`);
  }

  async enterPassword() {
    // Enter password
    await this.enterPasswordLocator.fill(`secret_sauce`);
  }

  async clickLoginButton() {
    // Click login button
    await this.clickLoginButtonLocator.click();
  }

}
