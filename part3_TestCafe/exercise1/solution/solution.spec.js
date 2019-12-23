import {Selector, t} from "testcafe";
import moment from 'moment';
import ToDo from "../Pages/todo";
import Common from "../Pages/common";

const todo = new ToDo();
const common = new Common();
const title = 'Codemash 2020 Todo List'
const taskName = 'Testing Adding new task'
const taskComplete = 'Learn about testcafe'
const deleteComplete = 'Testing Deleting new task'
const tomorrow = moment().add(1, 'days').format("MM/DD/YYYY")
const tomorrowRow = moment().add(1, 'days').format("YYYY-MM-DD")

fixture`Add Task Example`
    .page(`http://www.automation-todos.com/latest`)


test("Enter value of tomorrow for task due date", async t => {
    await common.verifyBrowserTitle(title);
    await t
        .typeText(todo.taskName, taskName);
    await todo.enterDate(tomorrow);
    await t
        .click(todo.createTask)
    await todo.validateTaskAndDate(taskName, tomorrowRow);
});

test("Mark test as completed", async t => {
    await todo.markCompleted(taskComplete);
    await todo.taskCompleted(taskComplete);
});

test("Delete the task you just created", async t => {
    await t
        .typeText(todo.taskName, deleteComplete);
    await t
        .click(todo.createTask);
    await todo.deleteRow(deleteComplete);
});