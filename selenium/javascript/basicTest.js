const {Builder} = require('selenium-webdriver');
const {expect} = require('chai');

let driver = new Builder()
    .forBrowser('chrome')
    .usingServer('http://localhost:4444/wd/hub')
    .build();

driver.get('http://www.automation-todos.com/latest');
driver.getTitle().then(function(title) {
    expect(title).to.contain('Codemash')
});

// driver.quit();