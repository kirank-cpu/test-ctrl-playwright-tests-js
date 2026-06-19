import { test } from '@playwright/test';
import { Test1Page } from '../../pages/test1_page';

test('test1', async ({ page }) => {
  const test1page = new Test1Page(page);

  await test1page.clickOnLogin();
});
