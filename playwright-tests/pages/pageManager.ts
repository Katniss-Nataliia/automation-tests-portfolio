import { Page } from "@playwright/test";
import { NavigationMenu } from "./navigationMenu";
import { FormsPage } from "./formsPage";
import { DatePickerPage } from "./datePickerPage";

export class PageManager{

    private readonly page: Page
    private readonly navigationMenu: NavigationMenu
    private readonly formSubmission: FormsPage
    private readonly datePickerPage: DatePickerPage

    constructor(page:Page){
        this.page = page
        this.navigationMenu = new NavigationMenu(this.page)
        this.formSubmission = new FormsPage(this.page)
        this.datePickerPage = new DatePickerPage(this.page)
    }
    navigateTo(){
        return this.navigationMenu
    }
    onFormLayoutsPage(){
        return this.formSubmission
    }
    onDatePickerPage(){
        return this.datePickerPage
    }

}