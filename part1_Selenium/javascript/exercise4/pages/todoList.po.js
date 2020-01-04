const {By} = require('selenium-webdriver');
const BasePage = require('./base.po');

class TodoList extends BasePage {
    constructor(
        webdriver,
        driver
    ) {
        super(webdriver, driver);
    }
    allTasksNames = By.css('[data-test-key=TaskTitle]');
    allTasksDuedates = By.css('[data-test-key=DueDate]');
    allTasksStatuses = By.css('[data-test-status]');
    completedTasksNames = By.css('div[data-test-status=completed] [data-test-key=TaskTitle]');
    completedTasksDuedates = By.css('div[data-test-status=completed] [data-test-key=DueDate]');
    activeTasksNames = By.css('div[data-test-status=active] [data-test-key=TaskTitle]');
    activeTasksDuedates = By.css('div[data-test-status=active] [data-test-key=DueDate]');

    async getAllTasks() {
        let allTasks = {};
        const tasks = await this.driver.findElements(this.allTasksNames);
        const dueDates = await this.driver.findElements(this.allTasksDuedates);
        const attributes = await this.driver.findElements(this.allTasksStatuses);
        for (let i = 0; i < tasks.length; i++) {
            let taskName = await tasks[i].getText();
            taskName = taskName.split(' ').join('').toLowerCase();
            const dueDate = await dueDates[i].getText();
            const status = await attributes[i].getAttribute('data-test-status');
            const id = await attributes[i].getAttribute('id');
            allTasks[taskName] = {
                    dueDate: dueDate,
                    status: status,
                    id: id
                }
        }
        return allTasks
    }

    async getCompletedTasks() {
        const completedTasks = {};
        const tasks = await this.driver.findElements(this.completedTasksNames);
        const dueDates = await this.driver.findElements(this.completedTasksDuedates);
        for (let i = 0; i < tasks.length; i++) {
            let taskName = await tasks[i].getText();
            taskName = taskName.split(' ').join('').toLowerCase();
            const dueDate = await dueDates[i].getText();
            completedTasks[taskName] = dueDate;
        }
        return completedTasks;
    }

    async getActiveTasks() {
        const activeTasks = {};
        const tasks = await this.driver.findElements(this.activeTasksNames);
        const dueDates = await this.driver.findElements(this.activeTasksDuedates);
        for (let i = 0; i < tasks.length; i++) {
            let taskName = await tasks[i].getText();
            taskName = taskName.split(' ').join('').toLowerCase();
            const dueDate = await dueDates[i].getText();
            activeTasks[taskName] = dueDate;
        }
        return activeTasks;
    }

    async returnSpecificTaskByName(desiredName) {
        const tasks = await this.getAllTasks();
        const desiredTask = await desiredName.split(' ').join('').toLowerCase();
        try {
            return tasks[desiredTask];
        } catch (err) {
            return false;
        }
    }

    async markTaskCompleted(desiredName) {
        try {
            const taskDetails = await this.returnSpecificTaskByName(desiredName);
            const taskCheckbox = await this.driver.findElement(By.xpath("//div[@id=" + taskDetails["id"].toString() + "]/p/input"))
            await this.clickElement(taskCheckbox);
        } catch (err) {
            throw desiredName + ' is not a valid task name';
        }
    }

    async deleteTask(desiredName) {
        try {
            const taskDetails = await this.returnSpecificTaskByName(desiredName);
            const taskCheckbox = await this.driver.findElement(By.xpath("//div[@id=" + taskDetails["id"].toString() + "]/button"))
            await this.clickElement(taskCheckbox);
        } catch (err) {
            throw desiredName + ' is not a valid task name';
        }
    }
}

module.exports = TodoList;
