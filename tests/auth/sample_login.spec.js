const { test, expect } = require("@playwright/test");
const { SampleLoginPage } = require("../../pages/sample_login_page.js");
test("sample login", async ({ page }) => {
  const lp = new SampleLoginPage(page);
  await page.goto("https://example.com");
});