import { expect } from '@playwright/test';

export class MyTestPage {
  constructor(page) {
    this.page = page;
  }

  async launchTheApp() {
    // Launch the app
    await this.page.goto(`https://www.gihub.com`);
  }

}
