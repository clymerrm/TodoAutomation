const {By} = require('selenium-webdriver');

function HeaderPage(BasePage) {
    this.driver = BasePage.driver;
    this.titleText = By.css('[data-test-key=Header]');
    this.homeButton = By.css('[data-test-key=HomeLink]');
    this.scheduleButton = By.css('[data-test-key=ScheduleLink]');
    this.speakersButton = By.css('[data-test-key=SpeakersLink]');
}

HeaderPage.prototype.headerVisible = async function() {
    const headerText = await this.driver.findElement(this.titleText);
    return headerText.isDisplayed();
};

HeaderPage.prototype.clickButton = async function(whichButton) {
    if (whichButton === 'schedule') {
        await this.driver.findElement(this.scheduleButton).click();
    } else if (whichButton === 'speakers') {
        await this.driver.findElement(this.speakersButton).click();
    } else if (whichButton === 'home') {
        await this.driver.findElement(this.homeButton).click();
    }
};

HeaderPage.prototype.returnHeaderText = async function() {
    const headerText = await this.driver.findElement(this.titleText);
    return headerText.getText();
};

module.exports = HeaderPage;
