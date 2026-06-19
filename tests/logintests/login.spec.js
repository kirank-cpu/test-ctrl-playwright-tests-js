import { test } from '@playwright/test';
import { LoginPage } from '../../pages/login_page';

test('login', async ({ page }) => {
  const loginpage = new LoginPage(page);

  await loginpage.launch();
});
