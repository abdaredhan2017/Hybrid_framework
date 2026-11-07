//To Provide Test Data & Objects/ elements related to whole application

import {Page} from "@playwright/test";
export class Global                     // Using export: Access this class in our project if it is required
{                   
   constructor(public page : Page)  // Page refrence is required to access all the methods avilable under page so it is define as global
   {                                // So it is applicable for whole project. Here, page reference created as a constructor so no need to call
    this.page = page;                   
    } 
    
//*************Test Data*************** */
public url : string = "https://ctcorphyd.com/SureshIT/login.php";
public username : string = "sureshit";
public password : string = "sureshit"
public emp_firstname : string = "SureshIT";
public emp_lastname : string = "Academy";

//***********Objects/ELements********** */
public textbox_loginname = "//input[@name='txtUserName']";  // Login
public textbox_password = "//input[@name='txtPassword']";
public button_login = "//input[@value='Login']";
public link_logout = "//a[text()='Logout']";
public frame_empinfo = "//iframe[@id='rightMenu'][@name='rightMenu']";  // Add New Employee
public button_add = "//input[@value='Add'][@type='button']";
public textbox_emp_firstname ="//input[@name='txtEmpFirstName']";
public textbox_emp_lastname ="//input[@name='txtEmpLastName']";
public button_save ="//input[@id='btnEdit']";
}
