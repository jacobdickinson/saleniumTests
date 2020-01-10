// Task 3: Navigate to bbc.com and print out the names of all of the headlines of the stories
const {Builder, By, className} = require("selenium-webdriver");
const driver = new Builder().forBrowser("chrome").build();
driver.get("http://bbc.com");
driver.findElements(By.className("block-link__overlay-link"))
    .then(function (className) {
        className.forEach(function (className) {
            className.getText().then(function (className) {
                console.log(className);
            });
        });
    });