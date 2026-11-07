//--Test Suite

import {test} from '@playwright/test';
import { General } from '../lib/General';

test.describe("Test Suite", () =>{

    test("TC001", async ({ page }) => {

    let obj = new General(page);
        await obj.openApplication();
        await obj.login();
        await obj.logout();
});

    test('TC002', async ({page}) => {

    let obj = new General(page);
        obj.openApplication();
        obj.login();
        obj.addNewEmployee();
        obj.logout();
});
});