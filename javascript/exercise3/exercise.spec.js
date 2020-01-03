const {Builder, webdriver, until, By, Key} = require('selenium-webdriver');
const {expect} = require('chai');
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

    beforeEach(async function() {
        await base.getPage('http://www.automation-todos.com/latest');
        await base.returnPageTitle().then(function(title) {
            expect(title).to.contain('Codemash')
        });
        await header.headerVisible();

        const taskName = 'Testing adding new task';
        const tomorrow = moment().add(1, 'days').format("MM/DD/YYYY");
        await page.createNewTask(taskName, tomorrow);
    });

    after(async function() {
        await base.quitDriver();
    });

    it('displays the new task', async function() {
        // TODO: Ensure task appears in task list
    });

    it('allows you to mark as completed', async function() {
        // TODO: Mark test as completed
    });

    it('allows you to delete the task', async function() {
        // TODO: Delete the task you just created
    });
});

// mocha part1_selenium/javascript/exercise3/solution/solution.spec.js --timeout 10000
