import { test, expect } from '@playwright/test';
import { FormsPage } from '../pages/formsPage';
import { NavigationMenu } from '../pages/navigationMenu';
import { PageManager } from '../pages/pageManager';
import { getTestConfigs } from '../config';

const { url, userEmail, password, name} = getTestConfigs().DEFAULT;

test.describe('Fill Inline Form', () => {

    test.beforeEach(async ({page}) => {
        await page.goto(url);
    });

    test('Fill and submit inline form', async ({page})=>{
        const formsPage = new FormsPage(page);
        const navigationMenu = new NavigationMenu(page);
        await navigationMenu.navigateToFormLayoutsMenu();
        await formsPage.fillInlineForm(name, userEmail, true);
    });

    test ('Submit Using The Grid form', async({page}) => {
        const pm = new PageManager(page);
        const option = "Option 1";
        await pm.navigateTo().navigateToFormLayoutsMenu();
        await pm.onFormLayoutsPage().submitUsingTheGridForm(userEmail, password, option);
    });
    
});
