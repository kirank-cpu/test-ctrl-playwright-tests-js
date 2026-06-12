import { expect } from '@playwright/test';

export class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async launchTheApp() {
    // Launch the app
    await this.page.goto(`https://www.github.com`);
  }

}
