const {Builder, webdriver, until, By, Key} = require('selenium-webdriver');
const {expect, should} = require('chai');
const moment = require('moment');
const BasePage = require('./pages/base.po');
const HeaderPage = require('./pages/header.po');
const TodoListPage = require('./pages/todoList.po');
const CreateTasks = require('./pages/createTasks.po');



describe("Handling New Tasks", function() {
    const driver = new Builder()
        .forBrowser('chrome')
        .usingServer('http://localhost:4444/wd/hub')
        .build();
    const base = new BasePage(webdriver, driver);
    const page = new CreateTasks(webdriver, driver);
    const header = new HeaderPage(webdriver, driver);
    const tasks = new TodoListPage(webdriver, driver);
    const taskName = 'Testing adding new task';
    const taskLocator = taskName.split(' ').join('').toLowerCase();
    const tomorrow = moment().add(1, 'days').format("MM/DD/YYYY");

    beforeEach(async function() {
        await base.getPage('http://www.automation-todos.com/latest');
        await driver.wait(until.titleContains('Codemash'), 5000);
        await header.headerVisible();
        await page.createNewTask(taskName, tomorrow);
        const taskKey = '[data-test-key=' + taskLocator + 'item]'
        await driver.wait(until.elementLocated(By.css(taskKey), 5000));
    });

    afterEach(async function() {
        try {
            const strippedName = await taskName.split(' ').join('').toLowerCase();
            await tasks.deleteTask(strippedName);
        } catch {}
    });

    after(function() {
        base.quitDriver();
    });

    it('displays the new task', async function() {
        const task = await tasks.returnSpecificTaskByName(taskName);
        return expect(task).to.have.keys(['dueDate', 'status', 'id']);
    });

    it('allows you to mark as completed', async function() {
        await tasks.markTaskCompleted(taskLocator);
        const completedTasks = await tasks.getCompletedTasks();
        return expect(completedTasks).to.have.any.keys(taskLocator);
    });

    it('allows you to delete the task', async function() {
        await tasks.deleteTask(taskLocator);
        const allTasks = await tasks.getAllTasks();
        return expect(allTasks).to.not.have.key(taskLocator);
    });
});

