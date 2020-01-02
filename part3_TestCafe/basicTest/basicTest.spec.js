import {Selector, t} from "testcafe";
import Common from "../exercise1/Pages/common";

const common = new Common();
const title = 'Codemash 2020 Todo List'

fixture`Basic Test`
    .page(`http://www.automation-todos.com/latest`)

test("Browser Title", async t => {
    await common.verifyBrowserTitle(title);
});