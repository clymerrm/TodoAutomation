class BasePage {
    constructor(
        webdriver,
        driver
    ) {
        this.webdriver = webdriver;
        this.driver = driver;
        this.title = 'Codemash 2020 Task List'
    }

    async getPage(url) {
        await this.driver.get(url);
    }

    returnPageTitle() {
        return this.driver.getTitle();
    }

    async enterText(desiredElement, desiredText) {
        await desiredElement.clear();
        await desiredElement.sendKeys(desiredText);
    }

    async clickElement(desiredElement) {
        await desiredElement.click()
    }

    async quitDriver() {
        await this.driver.quit();
    }
}

module.exports = BasePage;
