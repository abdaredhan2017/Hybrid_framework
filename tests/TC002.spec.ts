// To provide actual test script for TC002: AddNewEmployee

import {test} from '@playwright/test';
import { General } from '../lib/General';

test('TC002', async ({page}) => {

    let obj = new General(page);
        obj.openApplication();
        obj.login();
        obj.addNewEmployee();
        obj.logout();
}
);