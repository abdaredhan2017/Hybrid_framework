//To Provide all re-usabel methods / functions related to whole application

import { Global } from "./Global";
export class General extends Global {
    //Open Application
    async openApplication() {
        await this.page.goto(this.url);
        console.log("Application Opened");
        await this.page.waitForTimeout(3000);
    }

    //Login to Application
    async login() {
        await this.page.locator(this.textbox_loginname).fill(this.username);
        await this.page.locator(this.textbox_password).fill(this.password);
        // await this.page.waitForTimeout(3000);
        await this.page.locator(this.button_login).click();
        console.log("Login completed");
        await this.page.waitForTimeout(3000);
    }

    //Logout from Application
    async logout() {
        await this.page.locator(this.link_logout).click();
        console.log("Logout Completed");
        await this.page.waitForTimeout(3000);
    }
 
    //Add New Employee
    async addNewEmployee() {
        const frame = this.page.frameLocator(this.frame_empinfo);
        await frame.locator(this.button_add).click();
        await frame.locator(this.textbox_emp_firstname).fill(this.emp_firstname);
        await frame.locator(this.textbox_emp_lastname).fill(this.emp_lastname);
        await this.page.waitForTimeout(3000);
        await frame.locator(this.button_save).click();
        console.log("New Employee Added");
    }
};
