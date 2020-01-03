const {By} = require('selenium-webdriver');
const BasePage = require('./base.po');

class CreateTasks extends BasePage {
    constructor(
        webdriver,
        driver
    ) {
        const taskNameInput = By.css('[data-test-key=TaskNameInput]');
        const dueDateInput = By.css('[data-test-key=.react-datepicker__input-container input]');
        const createTaskButton = By.css('[data-test-key=CreateTaskButton]');
        super(webdriver, driver);
    }

    async createTaskAppears() {
        const taskInput = await this.driver.findElement(this.taskNameInput);
        return taskInput.isDisplayed();
    }

    async createNewTask(taskName, dueDate) {
        const taskInput = await this.driver.findElement(taskNameInput);
        await this.enterText(taskInput, taskName);
        const dateField = await this.driver.findElement(this.dueDateInput);
        const dateFieldLength = await dateField.getAttribute('value');
        while (i < dateFieldLength.length) {
            await this.driver.findElement(By.css('div[class*="datepicker__input-container"]>input')).sendKeys(Key.BACK_SPACE);
            i++;
        }
        await this.enterText(this.dueDateInput, dueDate);
        await this.driver.findElement(this.createTaskButton).click();
    }

}

module.exports = CreateTasks;
