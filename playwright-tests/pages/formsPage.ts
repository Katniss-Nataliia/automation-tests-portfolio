import { Page } from "@playwright/test";

export class FormsPage {
    private page: Page;
    
    constructor(page: Page) {
        this.page = page;
    };

    async fillInlineForm(name: string, email: string, optionCheckbox: boolean) {
        const inlineForm = this.page.locator('nb-card', { hasText: 'Inline form' });
        await inlineForm.getByPlaceholder('Jane Doe').fill(name);
        await inlineForm.getByPlaceholder('Email').fill(email);
        if(optionCheckbox){
            await inlineForm.getByRole('checkbox').check({force: true});
        }
        await inlineForm.getByRole('button', { name: 'Submit' }).click();
    };

    async submitUsingTheGridForm(email: string, password: string, option: string){
        const usingTheGridForm = this.page.locator('nb-card', { hasText:"Using the Grid"})
        await usingTheGridForm.getByRole('textbox', {name:"Email"}).fill(email)
        await usingTheGridForm.getByRole('textbox', {name:"Password"}).fill(password)
        await usingTheGridForm.getByText(option).click();
        await usingTheGridForm.getByRole('button').click()
    }

}