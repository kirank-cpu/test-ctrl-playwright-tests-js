import { test } from '@playwright/test';
import { DemoTestPage } from '../../pages/demo_test_page';

test('demo test', async ({ page }) => {
  const demotestpage = new DemoTestPage(page);

  await demotestpage.launchTheApp();
});
