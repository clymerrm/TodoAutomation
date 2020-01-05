import {Selector, t} from "testcafe";

fixture`Basic Test`
    .page(`http://www.automation-todos.com/latest`)

test("Browser Title", async t => {
    await t
        .expect(Selector("title").innerText).eql('Codemash 2020 Todo List');
});