import { Page } from '@playwright/test';
import logger from '../utils/LoggerUtil';
import HomePage from './HomePage';

export default class LoginPage {
    private readonly page: Page;
    private readonly usernameInput;
    private readonly passwordInput;
    private readonly loginButton;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = this.page.getByRole('textbox', { name: 'Username' });
        this.passwordInput = this.page.getByPlaceholder('Password');
        this.loginButton = this.page.getByRole('button', { name: 'Login' });
    }

    async navigateToLoginPage(): Promise<void> {
        await this.page.goto('/');
    }

    async login(username: string, password: string): Promise<HomePage> {
      await this.usernameInput.fill(username);
      logger.info(`Username entered: ${username}`);
      await this.passwordInput.fill(password);
      console.log(`Password entered: ${password}`);
      await this.loginButton.click();
      console.log('Login button clicked');
      return new HomePage(this.page);
}}

//async clickloginbutton() {
  //  await this.page.locator('#btnLogin').click().catch((error) => {
    //    console.error('Error clicking login button:', error);
  //});

 // const homePage = new HomePage(this.page);
  //return homePage;}

 
