const {Builder, webdriver, until, By, Key} = require('selenium-webdriver');
const {expect} = require('chai');
const BasePage = require('./pages/base.po');
const HeaderPage = require('./pages/header.po');
const TodoListPage = require('./pages/todoList.po');
const CreateTasks = require('./pages/createTasks.po');
const moment = require('moment');

async function main() {
    let driver = new Builder()
        .forBrowser('chrome')
        .usingServer('http://localhost:4444/wd/hub')
        .build();
    let base = new BasePage(driver);
    let header = new HeaderPage(base);
    let tasks = new TodoListPage(base);
    let page = new CreateTasks(base);

    await base.getPage('http://www.automation-todos.com/latest');
    await base.returnPageTitle().then(function(title) {
        expect(title).to.contain('Codemash')
    });
    await header.headerVisible();

    const taskName = 'Testing adding new task';
    const tomorrow = moment().add(1, 'days').format("MM/DD/YYYY");
    await page.createNewTask(taskName, tomorrow);

    // TODO: Ensure task appears in task list
    await tasks.returnSpecificTaskByName(taskName);

    // TODO: Mark test as completed
    await tasks.markTaskCompleted(taskName);

    // TODO: Delete the task you just created
    await tasks.deleteTask(taskName);

    await base.quitDriver();
}
main();
