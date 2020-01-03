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
        await driver.quit();
    }
}

module.exports = BasePage;

//
// et BasePage = function(driver) {
//     this.driver = driver;
//     this.title = 'Codemash 2020 Task List';
//
//
//     this.getPage = async function (url) {
//         await this.driver.get(url);
//     };
//
//     this.returnPageTitle = function () {
//         return this.driver.getTitle();
//     };
//
//     this.enterText = async function (desiredElement, desiredText) {
//         await desiredElement.clear();
//         await desiredElement.sendKeys(desiredText);
//     };
//
//     this.clickElement = async function (desiredElement) {
//         await desiredElement.click()
//     };
//
//     this.quitDriver = async function () {
//         await driver.quit();
//     };
// };
//
// module.exports = BasePage;
