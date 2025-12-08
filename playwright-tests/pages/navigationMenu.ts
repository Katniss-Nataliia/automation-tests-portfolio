import {Page} from "@playwright/test";
import { HelperBase } from "./helperBase";

export class NavigationMenu extends HelperBase{

    constructor(page: Page) {
        super (page);
    };

    async navigateToFormsMenu(){
        await this.page.getByText('Forms').click();
    };

    async navigateToFormLayoutsMenu(){
        const formLayoutsPage = this.page.locator('a[title="Form Layouts"]');
        const formsMenu = this.page.getByText('Forms');
        const ariaExpanded = await formsMenu.getAttribute('aria-expanded');
        if (ariaExpanded !== 'true') {
            await formsMenu.click();
            await formLayoutsPage.click();
        } else {
            await formLayoutsPage.click();
        };
        await this.waitForNumberOfSeconds(2);
    };

    async navigateToDatePickerMenu() {
        const datePickerPage = this.page.locator('a[title="Datepicker"]');
        const formsMenu = this.page.getByText('Forms');
        const ariaExpanded = await formsMenu.getAttribute('aria-expanded');
        if (ariaExpanded !== 'true') {
            await formsMenu.click();
            await datePickerPage.click();
        } else {
            await datePickerPage.click();
        };
    };

}