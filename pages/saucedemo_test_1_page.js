import { expect } from '@playwright/test';

export class SaucedemoTest1Page {
  constructor(page) {
    this.page = page;
    this.enterUsernameStandardUserLocator = page.locator(`[placeholder="Username" i], [name="username" i], [aria-label="Username" i], #username`);
    this.enterPasswordSecretSauceLocator = page.locator(`[placeholder="Password" i], [name="password" i], [aria-label="Password" i], #password`);
    this.clickOnLoginButtonLocator = page.locator(`button:has-text("login"), a:has-text("login"), [role="button"]:has-text("login"), [value="login" i]`);
  }

  async launchHttpswwwsaucedemocom() {
    // launch https://www.saucedemo.com/
    await this.page.goto(`https://www.saucedemo.com/`);
  }

  async enterUsernameStandardUser() {
    // Enter username 'standard_user'
    await this.enterUsernameStandardUserLocator.fill(`standard_user`);
  }

  async enterPasswordSecretSauce() {
    // Enter password 'secret_sauce'
    await this.enterPasswordSecretSauceLocator.fill(`secret_sauce`);
  }

  async clickOnLoginButton() {
    // Click on login button
    await this.clickOnLoginButtonLocator.click();
  }

}
