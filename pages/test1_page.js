import { expect } from '@playwright/test';

export class Test1Page {
  constructor(page) {
    this.page = page;
    this.clickOnLoginLocator = page.locator(`#login-button`);
  }

  async clickOnLogin() {
    // Click on login
    await this.clickOnLoginLocator.click();
  }

}
