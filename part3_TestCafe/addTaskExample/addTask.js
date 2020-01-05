import {Selector, t} from "testcafe";

const taskName = 'Testing Adding new task'
const formatTaskName = taskName.toLowerCase().replace(/\s/g, '');

fixture`Add Task Example`
    .page(`http://www.automation-todos.com/latest`)

test("Adding Task", async t => {
    await t
        .expect(Selector("title").innerText).eql('Codemash 2020 Todo List')
        .typeText(Selector('[data-test-key="TaskNameInput"]'), 'Testing Adding new task')
        .click(Selector('[data-test-key="CreateTaskButton"]'))
        .expect(Selector('[data-test-key="' + formatTaskName + 'item"]').innerText).contains(taskName);
});