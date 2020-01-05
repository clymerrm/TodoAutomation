const {Builder} = require('selenium-webdriver');

async function main() {
    let driver = new Builder()
        .forBrowser('chrome')
        .usingServer('http://localhost:4444/wd/hub')
        .build();

    // Get a specific URL
    driver.get('www.google.com');

    // Quit the driver and close all associated windows
    driver.quit();

    // Close current browser window
    driver.close();

    // Refresh current browser session
    driver.navigate().refresh();

    // Get title of page
    driver.getTitle();

    // Navigate forward in browser
    driver.navigate().forward();

    // Navigate backwards in browser
    driver.navigate().back();

    // Add a cookie to browser session
    driver.addCookie({'foo':'bar'});

    // Clear all cookies from browser session
    driver.deleteAllCookies();

    // Execute a javascript command
    driver.executeScript('javascript function');

    // Return page source
    driver.getPageSource();

    // Return current page url
    driver.getCurrentUrl();
}