const {By, Key} = require('selenium-webdriver');
const BasePage = require('./base.po');

class CreateTasks extends BasePage {
    constructor(
        webdriver,
        driver
    ) {
        super(webdriver, driver);
    }
    taskNameInput = By.css('[data-test-key=TaskNameInput]');
    dueDateInput = By.css('.react-datepicker__input-container input');
    createTaskButton = By.css('[data-test-key=CreateTaskButton]');

    async createTaskAppears() {
        const taskInput = await this.driver.findElement(this.taskNameInput);
        return taskInput.isDisplayed();
    }

    async createNewTask(taskName, dueDate) {
        this.createTaskAppears();
        const taskInput = await this.driver.findElement(this.taskNameInput);
        await this.enterText(taskInput, taskName);
        const dateField = await this.driver.findElement(this.dueDateInput);
        const dateFieldLength = await dateField.getAttribute('value');
        let i = 0;
        while (i < dateFieldLength.length) {
            await this.driver.findElement(By.css('div[class*="datepicker__input-container"]>input')).sendKeys(Key.BACK_SPACE);
            i++;
        }
        await this.enterText(dateField, dueDate);
        await this.driver.findElement(this.createTaskButton).click();
    }

}

module.exports = CreateTasks;
