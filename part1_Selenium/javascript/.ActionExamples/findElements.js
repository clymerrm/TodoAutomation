const {Builder} = require('selenium-webdriver');

async function main() {
    let driver = new Builder()
        .forBrowser('chrome')
        .usingServer('http://localhost:4444/wd/hub')
        .build();

    // Id
    driver.findElement(By.id("some id"));

    // XPATH
    driver.findElement(By.xpath("some xpath"));

    // Link Text
    driver.findElement(By.linkText("some link text"));

    // Partial Link Text
    driver.findElement(By.partialLinkText("some partial link text"));

    // CSS Selector
    driver.findElement(By.css("some css"));

    // Class Name
    driver.findElement(By.className("some class name"));

    // Name
    driver.findElement(By.name("some name"));

    // Find all elements with matching selector
    driver.findElements(By.xpath("some xpath"));
}