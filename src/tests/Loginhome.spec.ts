import { test } from '@playwright/test';
import logger from '../utils/LoggerUtil';
import LoginPage from '../pages/LoginPage';
import cdata from '../testdata/contact.json';

test('Login Test', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigateToLoginPage();

  //const homePage = await loginPage.login(process.env.Ausername!, process.env.Apassword!);
  const homePage = await loginPage.login(cdata[0].username, cdata[0].password);
  logger.info('Login successful');
  logger.info('change commit for auto CICD');
  //await homePage.expectAdminLinkVisible();

  //const adminPage = await homePage.navigateToAdmin();
  //await adminPage.adduser('Admin', 'Linda Rose', 'Enabled', 'LRose', 'Pakistan2', 'Pakistan2');
});

