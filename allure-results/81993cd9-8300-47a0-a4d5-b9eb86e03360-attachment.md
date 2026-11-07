# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TestSuite.spec.ts >> Test Suite >> TC002
- Location: tests\TestSuite.spec.ts:16:5

# Error details

```
Error: page.goto: Test ended.
Call log:
  - navigating to "https://ctcorphyd.com/SureshIT/login.php", waiting until "load"

```

# Test source

```ts
  1  | //To Provide all re-usabel methods / functions related to whole application
  2  | 
  3  | import { Global } from "./Global";
  4  | export class General extends Global {
  5  |     //Open Application
  6  |     async openApplication() {
> 7  |         await this.page.goto(this.url);
     |                         ^ Error: page.goto: Test ended.
  8  |         console.log("Application Opened");
  9  |         await this.page.waitForTimeout(3000);
  10 |     }
  11 | 
  12 |     //Login to Application
  13 |     async login() {
  14 |         await this.page.locator(this.textbox_loginname).fill(this.username);
  15 |         await this.page.locator(this.textbox_password).fill(this.password);
  16 |         // await this.page.waitForTimeout(3000);
  17 |         await this.page.locator(this.button_login).click();
  18 |         console.log("Login completed");
  19 |         await this.page.waitForTimeout(3000);
  20 |     }
  21 | 
  22 |     //Logout from Application
  23 |     async logout() {
  24 |         await this.page.locator(this.link_logout).click();
  25 |         console.log("Logout Completed");
  26 |         await this.page.waitForTimeout(3000);
  27 |     }
  28 |  
  29 |     //Add New Employee
  30 |     async addNewEmployee() {
  31 |         const frame = this.page.frameLocator(this.frame_empinfo);
  32 |         await frame.locator(this.button_add).click();
  33 |         await frame.locator(this.textbox_emp_firstname).fill(this.emp_firstname);
  34 |         await frame.locator(this.textbox_emp_lastname).fill(this.emp_lastname);
  35 |         await this.page.waitForTimeout(3000);
  36 |         await frame.locator(this.button_save).click();
  37 |         console.log("New Employee Added");
  38 |     }
  39 | };
  40 | 
```