//To provide actual Test Scripts for TC001: LoginLogout

import { test } from "@playwright/test";
import { General } from "../lib/General";

test("TC001_LoginLogout", async ({ page }) => {

    let obj = new General(page);
        await obj.openApplication();
        await obj.login();
        await obj.logout();
}
);
