import { expect } from '@playwright/test';

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.clickOnLoginLogoLocator = page.locator(`div.login_logo`);
  }

  async clickOnLoginLogo() {
    // Click on login logo
    await this.clickOnLoginLogoLocator.click();
  }

}
