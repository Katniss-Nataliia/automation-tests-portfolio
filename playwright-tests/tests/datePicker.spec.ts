import { test, expect } from '@playwright/test';
import { DatePickerPage } from '../pages/datePickerPage';
import { NavigationMenu } from '../pages/navigationMenu';
import { getTestConfigs } from '../config';

const { url } = getTestConfigs().DEFAULT;
test.describe('Date Picker Tests', () => {

    test.beforeEach(async ({page}) => {
        await page.goto(url);
    });

    test('Select Date From Today', async ({page})=>{
        const navigationMenu = new NavigationMenu(page);
        await navigationMenu.navigateToDatePickerMenu();
        const datePickerPage = new DatePickerPage(page);
        await datePickerPage.selectDaysFromToday(5);
    });

    test('Select Date Range', async({page}) => {
        const navigationMenu = new NavigationMenu(page);
        await navigationMenu.navigateToDatePickerMenu();
        const datePickerPage = new DatePickerPage(page);
        await datePickerPage.selectDateRange(5, 6);
    }); 

});