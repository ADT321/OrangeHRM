import { test } from '@playwright/test';
import LoginPage from '../pages/LoginPage';

test('Login Test', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigateToLoginPage();

  const homePage = await loginPage.login('Admin', 'admin123');
  await homePage.expectAdminLinkVisible();

  const adminPage = await homePage.navigateToAdmin();
  await adminPage.adduser('Admin', 'Linda Rose', 'Enabled', 'LRose', 'Pakistan2', 'Pakistan2');
});

