const {By} = require('selenium-webdriver');

function TodoList(BasePage) {
    this.driver = BasePage.driver;
    this.allTasksNames = By.css('[data-test-key=TaskTitle]');
    this.allTasksDuedates = By.css('[data-test-key=DueDate]');
    this.allTasksStatuses = By.css('[data-test-status]');
    this.completedTasksNames = By.css('div[data-test-status=completed] [data-test-key=TaskTitle]');
    this.completedTasksDuedates = By.css('div[data-test-status=completed] [data-test-key=DueDate]');
    this.activeTasksNames = By.css('div[data-test-status=active] [data-test-key=TaskTitle]');
    this.activeTasksDuedates = By.css('div[data-test-status=active] [data-test-key=DueDate]');

}

TodoList.prototype.getAllTasks = async function() {
    let allTasks = {};
    const tasks = await this.driver.findElements(this.allTasksNames);
    const dueDates = await this.driver.findElements(this.allTasksDuedates);
    const attributes = await this.driver.findElements(this.allTasksStatuses);
    for (let i = 0; i < tasks.length; i++) {
        const taskName = await tasks[i].text.replace(' ', '').toLowerCase();
        const dueDate = await dueDates[i].text;
        const status = await attributes[i].getAttribute('data-test-status');
        const id = await attributes[i].getAttribute('id');
        await allTasks[taskName]['dueDate'] = dueDate;
        await allTasks[taskName]['status'] = status;
        await allTasks[taskName]['id'] = id;
    }
    return allTasks
};

TodoList.prototype.getCompletedTasks = async function () {
    const completedTasks = {};
    const tasks = await this.driver.findElements(this.completedTasksNames);
    const dueDates = await this.driver.findElements(this.completedTasksDuedates);
    for (let i = 0; i < tasks.length; i++) {
        const taskName = await tasks[i].text.replace(' ', '').toLowerCase();
        await completedTasks[taskName] = await dueDates[i].text;
    }
    return completedTasks;
};

TodoList.prototype.getActiveTasks = async function () {
    const activeTasks = {};
    const tasks = await this.driver.findElements(this.activeTasksNames);
    const dueDates = await this.driver.findElements(this.activeTasksDuedates);
    for (let i = 0; i < tasks.length; i++) {
        const taskName = await tasks[i].text.replace(' ', '').toLowerCase();
        await activeTasks[taskName] = await dueDates[i].text;
    }
    return activeTasks;
};

TodoList.prototype.returnSpecificTaskByName = async function(desiredName) {
    const tasks = this.getAllTasks();
    const desiredTask = await desiredNametext.replace(' ', '').toLowerCase();
    try {
        return tasks[desiredTask];
    } catch (err) {
        return false;
    }
};

TodoList.prototype.markTaskCompleted = async function (desiredName) {
    try {
        const taskDetails = this.returnSpecificTaskByName(desiredName);
        const taskCheckbox = this.driver.findElement(By.xpath("//div[@id=" + task_details["id"].toString() + "]/p/input"))
        this.clickElement(taskCheckbox);
    } catch (err) {
        throw desiredName + ' is not a valid task name';
    }
};

TodoList.prototype.deleteTask = async function (desiredName) {
    try {
        const taskDetails = this.returnSpecificTaskByName(desiredName);
        const taskCheckbox = this.driver.findElement(By.xpath("//div[@id=" + task_details["id"].toString() + "]/button"))
        this.clickElement(taskCheckbox);
    } catch (err) {
        throw desiredName + ' is not a valid task name';
    }
};

module.exports = TodoList;
