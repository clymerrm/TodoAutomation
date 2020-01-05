const {Builder, webdriver, until, By, Key} = require('selenium-webdriver');
const {expect} = require('chai');
const moment = require('moment');

async function main() {
    let driver = new Builder()
        .forBrowser('chrome')
        .usingServer('http://localhost:4444/wd/hub')
        .build();

    await driver.get('http://www.automation-todos.com/latest');
    await driver.getTitle().then(function(title) {
        expect(title).to.contain('Codemash')
    });

    const taskName = 'Testing adding new task';
    const taskInput = driver.findElement(By.css('input[data-test-key=TaskNameInput]'));
    await taskInput.clear();
    await taskInput.sendKeys(taskName);

    // UNCOMMENT ME TO CLEAR THE DATE FIELD
    let i = 0;
    const tomorrow = moment().add(1, 'days').format("MM/DD/YYYY");
    const dateField = await driver.findElement(By.css('div[class*="datepicker__input-container"]>input'));
    const dateFieldLength = await dateField.getAttribute('value').length;
    while (i < dateFieldLength) {
        await driver.findElement(By.css('div[class*="datepicker__input-container"]>input')).sendKeys(Key.BACK_SPACE);
        i++;
    }
    // TODO: Enter value of tomorrow for task due date (Helper bits added above as input is hard to clear)
    await dateField.sendKeys(tomorrow);


    await driver.findElement(By.css('input[data-test-key=CreateTaskButton]')).click();

    const matchingTasks = [];
    await driver.findElements(By.css('[data-test-key=TaskTitle]')).then(function(elements){
        elements.forEach(function(element){
            element.getText().then(function(text){
                if (text === taskName) {
                    matchingTasks.push(text);
                }
            });
        })
    });
    await expect(matchingTasks.length).to.equal(1);

    // TODO: Mark test as completed
    const desiredTask = taskName.toLowerCase().replace(/\s/g, '');
    await driver.findElement(By.css('div[data-test-key=' + desiredTask + 'item]>p>input[data-test-key=CompletedCheckbox]')).click();
    const completedMatches = [];
    await driver.findElements(By.css('[data-test-key*=item][style*="line-through"]>p>span[data-test-key=TaskTitle]')).then(function(elements){
        elements.forEach(function(element){
            element.getText().then(function(text){
                if (text === taskName) {
                    completedMatches.push(text);
                }
            });
        })
    });
    await expect(completedMatches.length).to.equal(1);

    // TODO: Delete the task you just created
    await driver.findElement(By.css('div[data-test-key=' + desiredTask + 'item]>button')).click();
    const deletedTasks = [];
    await driver.findElements(By.css('[data-test-key=TaskTitle]')).then(function(elements){
        elements.forEach(function(element){
            element.getText().then(function(text){
                if (text === taskName) {
                    deletedTasks.push(text);
                }
            });
        })
    });
    await expect(deletedTasks.length).to.equal(0);

    await driver.quit();
}
main();
