const {By} = require('selenium-webdriver');

function CreateTasks(BasePage) {
    this.driver = BasePage.driver;
    this.taskNameInput = By.css('[data-test-key=TaskNameInput]');
    this.dueDateInput = By.css('[data-test-key=.react-datepicker__input-container input]');
    this.createTaskButton = By.css('[data-test-key=CreateTaskButton]');
}

CreateTasks.prototype.createTaskAppears = async function() {
    const taskInput = await this.driver.findElement(this.taskNameInput);
    return taskInput.isDisplayed();
};

CreateTasks.prototype.createNewTask = async function(taskName, dueDate) {
    const taskInput = await this.driver.findElement(this.taskNameInput);
    await this.enterText(taskInput, taskName);
    const dateField = await this.driver.findElement(this.dueDateInput);
    const dateFieldLength = await dateField.getAttribute('value').length;
    while (i < dateFieldLength) {
        await driver.findElement(By.css('div[class*="datepicker__input-container"]>input')).sendKeys(Key.BACK_SPACE);
        i++;
    }
    await this.enterText(this.dueDateInput, dueDate);
    await this.driver.findElement(this.createTaskButton).click();
};

module.exports = CreateTasks;
