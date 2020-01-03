function BasePage(driver) {
    this.driver = driver;
    this.title = 'Codemash 2020 Task List';
}

BasePage.prototype.getPage = async function(url) {
    await this.driver.get(url);
};

BasePage.prototype.returnPageTitle = function() {
    return this.driver.getTitle();
};

BasePage.prototype.enterText = async function(desiredElement, desiredText) {
    await desiredElement.clear();
    await desiredElement.sendKeys(desiredText);
};

BasePage.prototype.clickElement = async function (desiredElement) {
    await desiredElement.click()
};

BasePage.prototype.quitDriver = async function () {
    await driver.quit();
};

module.exports = BasePage;
