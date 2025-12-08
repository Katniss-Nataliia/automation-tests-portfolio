import { Page, expect } from "@playwright/test";
import { HelperBase } from "./helperBase";


export class DatePickerPage extends HelperBase{

    constructor(page:Page){
        super(page);
    };
    
    async selectDaysFromToday(numberOfDaysFromToday: number){
        const calendarInputField = this.page.getByPlaceholder('Form Picker');
        await calendarInputField.click();
        const dateToAssert = await this.selectDateInTheCalendar(numberOfDaysFromToday);
        await expect(calendarInputField).toHaveValue(dateToAssert);
    };
    //date range selection
    async selectDateRange(startDate: number, endDate:number){
        const calendarInputField = this.page.getByPlaceholder('Range Picker');
        await calendarInputField.click();

        const startDateToAssert = await this.selectDateInTheCalendar(startDate);
        const endDateToAssert = await this.selectDateInTheCalendar(endDate);
        const dateToAssert = `${startDateToAssert} - ${endDateToAssert}`;
        await expect(calendarInputField).toHaveValue(dateToAssert);

    };

    //reusable method to pick the date from the calendar
    private async selectDateInTheCalendar(numberOfDaysFromToday: number){
        let date = new Date();
        date.setDate(date.getDate() + numberOfDaysFromToday);
        const expectedDay = date.getDate().toString();
        const expectedMonth = date.toLocaleString('En-Us', {month: 'short'});
        const expectedMonthLong = date.toLocaleString('En-Us', {month: 'long'});
        const expectedYear = date.getFullYear();
        const dateToAssert = `${expectedMonth} ${expectedDay}, ${expectedYear}`;
    
        let calendarMonthAndYear = await this.page.locator('nb-calendar-view-mode').textContent();
        const expectedMonthAndYear = ` ${expectedMonthLong} ${expectedYear} `;
        // while(!calendarMonthAndYear.includes(expectedMonthAndYear)){
        //     await this.page.locator('nb-calendar-pageable-navigation [data-name="chevron-right"]').click();
        //     calendarMonthAndYear = await this.page.locator('nb-calendar-view-mode').textContent();
        // };
    
        await this.page.locator('day-cell ng-star-inserted').getByText(expectedDay, {exact: true}).click();
        return dateToAssert;
    };
};