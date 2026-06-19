import { expect } from '@playwright/test';

export class Test433Page {
  constructor(page) {
    this.page = page;
  }

  async launch() {
    // Launch
    await this.page.goto(`https://www.google.co.in`);
  }

}
