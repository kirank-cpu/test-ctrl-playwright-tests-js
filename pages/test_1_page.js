import { expect } from '@playwright/test';

export class Test1Page {
  constructor(page) {
    this.page = page;
  }

  async testStep1() {
    // Test step1
    await this.page.goto(`https://www.saucedemo.com/`);
  }

}
