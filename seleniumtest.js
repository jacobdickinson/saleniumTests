// Task 1: Navigate to Google.com and search for "Cats"
// define key variables
const {Builder, By, Key} = require ("selenium-webdriver");
// assign driver
const driver = new Builder().forBrowser("chrome").build();
// define where to go
driver.get("http://google.com");
// define what to enter
driver.findElement(By.name("q")).sendKeys("Cats",Key.RETURN);

