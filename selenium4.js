//Task 4: Navigate to amazon.co.uk and search for "Alexa", then click on the first link that comes back and print out the name and price of that item.
const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://www.amazon.co.uk/');
        await driver.findElement(By.id("twotabsearchtextbox")).sendKeys('alexa', Key.RETURN);
        await driver.wait(until.titleIs('Amazon.co.uk: alexa'));
        await driver.findElement(By.xpath("//*[@id=\"search\"]/div[1]/div[2]/div/span[4]/div[1]/div[1]/div/span/div/div/div[2]/div[1]/div/div/span/a")).click()
        let title = await driver.findElement(By.id("productTitle")).getText();
        console.log(title);
        let price = await driver.findElement(By.id("priceblock_ourprice")).getText();
        console.log(price)
    } finally {
        await driver.quit();
    }
})();