import { Page, Locator, expect } from '@playwright/test';
import AdminPage from './AdminPage';

export default class HomePage {
    private readonly page: Page;
    private readonly AdminTitleLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        //this.dashboardTitleLocator = page.getByRole('heading', { name: 'Dashboard' });
        this.AdminTitleLocator = page.getByRole('link', { name: 'Admin' });
    }

        async expectAdminLinkVisible(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
    await expect(this.AdminTitleLocator).toBeVisible();
}

async navigateToAdmin(): Promise<AdminPage> {
    await this.AdminTitleLocator.click();
    return new AdminPage(this.page);
}
}