const {By} = require('selenium-webdriver');
const BasePage = require('./base.po');

class HeaderPage extends BasePage {
    constructor(
        webdriver,
        driver
    ) {
        super(webdriver, driver);
        this.locators = {
            titleText: By.css('[data-test-key=Header]'),
            homeButton: By.css('[data-test-key=HomeLink]'),
            scheduleButton: By.css('[data-test-key=ScheduleLink]'),
            speakersButton: By.css('[data-test-key=SpeakersLink]')
        }

    }


    async headerVisible() {
        const headerText = await this.driver.findElement(this.locators.titleText);
        return headerText.isDisplayed();
    }

    async clickButton(whichButton) {
        if (whichButton === 'schedule') {
            await this.driver.findElement(this.locators.scheduleButton).click();
        } else if (whichButton === 'speakers') {
            await this.driver.findElement(this.locators.speakersButton).click();
        } else if (whichButton === 'home') {
            await this.driver.findElement(this.locators.homeButton).click();
        }
    }

    async returnHeaderText() {
        const headerText = await this.driver.findElement(this.locators.titleText);
        return headerText.getText();
    }
}

module.exports = HeaderPage;
