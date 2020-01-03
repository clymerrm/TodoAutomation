const {Builder, webdriver, until, By} = require('selenium-webdriver');
const {expect} = require('chai');

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
    expect(matchingTasks.length).to.equal(1);
    driver.quit();
}
main();
