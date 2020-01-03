const {Builder, webdriver, until, By, Key} = require('selenium-webdriver');
const {expect} = require('chai');
const moment = require('moment');
const BasePage = require('./pages/base.po');
const HeaderPage = require('./pages/header.po');
const TodoListPage = require('./pages/todoList.po');
const CreateTasks = require('./pages/createTasks.po');

async function main() {
    let driver = new Builder()
        .forBrowser('chrome')
        .usingServer('http://localhost:4444/wd/hub')
        .build();
    let base = new BasePage(webdriver, driver);
    let page = new CreateTasks(webdriver, driver);
    let header = new HeaderPage(webdriver, driver);
    let tasks = new TodoListPage(webdriver, driver);

    await base.getPage('http://www.automation-todos.com/latest');
    await base.returnPageTitle().then(function(title) {
        expect(title).to.contain('Codemash')
    });
    await header.headerVisible();

    const taskName = 'Testing adding new task';
    const tomorrow = moment().add(1, 'days').format("MM/DD/YYYY");
    await page.createNewTask(taskName, tomorrow);

    // TODO: Ensure task appears in task list


    // TODO: Mark test as completed


    // TODO: Delete the task you just created

    await base.quitDriver();
}
main();
