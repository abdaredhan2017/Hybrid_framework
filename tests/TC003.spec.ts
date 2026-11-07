// To provide the actual test script for TC003: Delete Employee

import {test} from '@playwright/test';
import { General } from '../lib/General';

test('TC003-Delete Employee', async({page}) =>{
    
    let obj = new General(page);
        obj.openApplication();
        obj.login();
        // obj.deleteEmployee();
        obj.logout();
})