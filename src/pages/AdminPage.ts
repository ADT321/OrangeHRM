import { Page , expect, Locator } from '@playwright/test';

export default class AdminPage {
    private readonly page: Page;
    private readonly addlocator: Locator;
    private readonly userrolelocator: Locator;
    private readonly employeenamelocator: Locator;
    private readonly statuslocator: Locator;
    private readonly usernamelocator: Locator;
    private readonly passwordlocator: Locator;
    private readonly confirmpasswordlocator: Locator;
    private readonly savelocator: Locator;


    constructor(page: Page) {
        this.page = page;
        this.addlocator = this.page.getByRole('button', { name: 'Add', exact: false });
        this.userrolelocator = this.page.getByRole('combobox', { name: 'User Role', exact: false });
        this.employeenamelocator = this.page.getByRole('textbox', { name: 'Employee Name', exact: false });
        this.statuslocator = this.page.getByRole('combobox', { name: 'Status', exact: false });
        this.usernamelocator = this.page.getByRole('textbox', { name: 'Username', exact: false });
        this.passwordlocator = this.page.getByRole('textbox', { name: 'Password', exact: false });
        this.confirmpasswordlocator = this.page.getByRole('textbox', { name: 'Confirm Password', exact: false });
        this.savelocator = this.page.getByRole('button', { name: 'Save' });
    }

async adduser(
    userrole: string,
    empname: string,
    status: string,
    username: string,
    password: string,
    confirmpassword: string
): Promise<void> {
    await this.addlocator.click();

    // User Role dropdown
    await this.userrolelocator.click();
    await this.page.getByText(userrole, { exact: true }).click();

    // Employee Name (autocomplete textbox)
    await this.employeenamelocator.fill(empname);

    // Status dropdown
    await this.statuslocator.click();
    await this.page.getByText(status, { exact: true }).click();

    // Username / Password fields
    await this.usernamelocator.fill(username);
    await this.passwordlocator.fill(password);
    await this.confirmpasswordlocator.fill(confirmpassword);

    // Save
    await this.savelocator.click();

    // Confirmation
    await expect(this.page.getByText('Successfully Saved')).toBeVisible({ timeout: 10000 });
}

}