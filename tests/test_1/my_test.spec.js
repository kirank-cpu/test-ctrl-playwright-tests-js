import { test } from '@playwright/test';
import { MyTestPage } from '../../pages/my_test_page';

test('My test', async ({ page }) => {
  const mytestpage = new MyTestPage(page);

  await mytestpage.launchTheApp();
});
