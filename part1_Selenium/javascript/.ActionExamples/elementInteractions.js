const {Builder, Key} = require('selenium-webdriver');

async function main() {
    let driver = new Builder()
        .forBrowser('chrome')
        .usingServer('http://localhost:4444/wd/hub')
        .build();

    const element = driver.findElement(By.xpath("some xpath"));

    // Return text of element
    element.getText();

    // Return attribute of element
    element.getAttribute('attribute name');

    // Return true if element is displayed, exception if element doesnt exist
    element.isDisplayed();

    // Return true if element is selected
    element.isSelected();

    // Send key actions to an element
    element.sendKeys('some string');
    element.sendKeys(Key.ENTER);

    // Clear text form element
    element.clear();

    // Click an element
    element.click();
}