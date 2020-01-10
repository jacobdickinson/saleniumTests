//Task 2: Navigate to Facebook.com and login using your username and password
const {Builder, By, Key} = require ("selenium-webdriver");

const driver = new Builder().forBrowser("chrome").build();
driver.get("http://facebook.com");
driver.findElement(By.id("email")).sendKeys("Enter the USERNAME");
// Don't want to expose my real credentials ;)
driver.findElement(By.id("pass")).sendKeys("Enter the PASSWORD" , Key.RETURN);
