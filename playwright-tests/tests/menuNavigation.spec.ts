import {test} from '@playwright/test';
import {NavigationMenu} from '../pages/navigationMenu';
import { getTestConfigs } from '../config';

const { url} = getTestConfigs().DEFAULT;

test.describe('Menu Navigation Tests', () => {

    test.beforeEach(async ({page}) => {
        await page.goto(url);
    });

    test('Navigate to Forms Menu', async ({page})=>{
        const navigationMenu = new NavigationMenu(page);
        await navigationMenu.navigateToFormsMenu();
    });

    test('Navigate to Form Layouts Menu', async ({page})=>{
        const navigationMenu = new NavigationMenu(page);
        await navigationMenu.navigateToFormLayoutsMenu();
    });

    test('Navigate to Form DatePicker Menu', async ({page})=>{
        const navigationMenu = new NavigationMenu(page);
        await navigationMenu.navigateToDatePickerMenu();
    });
    
});