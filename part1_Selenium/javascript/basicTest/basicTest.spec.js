const {Builder} = require('selenium-webdriver');
const {expect} = require('chai');

async function main() {
    let driver = new Builder()
        .forBrowser('chrome')
        .usingServer('http://localhost:4444/wd/hub')
        .build();

    await driver.get('http://www.automation-todos.com/latest');
    await driver.getTitle().then(function (title) {
        expect(title).to.contain('Codemash')
    });

    // driver.quit();
}
main();
