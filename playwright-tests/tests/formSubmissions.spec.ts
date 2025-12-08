import { test, expect } from '@playwright/test';
import { FormsPage } from '../pages/formsPage';
import { NavigationMenu } from '../pages/navigationMenu';
import { PageManager } from '../pages/pageManager';


test.describe('Fill Inline Form', () => {

    test.beforeEach(async ({page}) => {
        await page.goto('http://localhost:4200/');
    });

    test('Fill and submit inline form', async ({page})=>{
        const formsPage = new FormsPage(page);
        const navigationMenu = new NavigationMenu(page);
        const name = "John Smith";
        const email = "john.smith@gmail.com";

        await navigationMenu.navigateToFormLayoutsMenu();
        await formsPage.fillInlineForm(name, email, true);
    });

    test ('Submit Using The Grid form', async({page}) => {
        const pm = new PageManager(page);
        const email = "john.smith@gmail.com";
        const password = "123456";
        const option = "Option 1";
        await pm.navigateTo().navigateToFormLayoutsMenu();
        await pm.onFormLayoutsPage().submitUsingTheGridForm(email, password, option);
    });
    
});
