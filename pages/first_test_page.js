import { expect } from '@playwright/test';

export class FirstTestPage {
  constructor(page) {
    this.page = page;
  }

  async testZoom() {
    // Test Zoom
    await this.page.evaluate(() => { document.body.style.zoom = '150%'; });
  }

}
