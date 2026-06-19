import { test } from '@playwright/test';
import { Test1Page } from '../pages/test_1_page';

test('Test-1', async ({ page }) => {
  const test1page = new Test1Page(page);

  await test1page.testStep1();
});
