import {Selector, t} from "testcafe";
import ToDo from "../exercise1/Pages/todo";
import Common from "../exercise1/Pages/common";

const todo = new ToDo();
const common = new Common();
const title = 'Codemash 2020 Todo List'
const taskName = 'Testing Adding new task'

fixture`Add Task Example`
    .page(`http://www.automation-todos.com/latest`)


test.only("Adding Task", async t => {
    await common.verifyBrowserTitle(title);
    await t
        .typeText(todo.taskName, taskName);
    await t
        .click(todo.createTask)
    await todo.validateTaskAdded(taskName);
});