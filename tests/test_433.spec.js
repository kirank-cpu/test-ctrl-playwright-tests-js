import { test } from '@playwright/test';
import { Test433Page } from '../pages/test_433_page';

test('test-433', async ({ page }) => {
  const test433page = new Test433Page(page);

  await test433page.launch();
});
