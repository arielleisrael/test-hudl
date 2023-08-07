const {Builder, By, until} = require('selenium-webdriver');
const assert = require('assert');

const testData = require('./testData.js');

function testLoginFlows() {
    let validEmail = testData.validEmail;
    let validPwd = testData.validPwd;
    let invalidEmail = testData.invalidEmail;
    let invalidPwd = testData.invalidPwd;
    
    // Test Valid Email & Valid Password
    testLogin(validEmail,validPwd,"valid");

    // Test Missing Email and Missing Password
    testLogin("","","missing");

    // Test Missing Email
    testLogin("",validPwd,"missing");

    // Test Missing Password
    testLogin(validEmail,"","missing");

    // Test Invalid Email
    testLogin(invalidEmail,validPwd,"invalid");

    // Test Invalid Password
    testLogin(validEmail,invalidPwd,"invalid");
}

async function testLogin(email, pwd, testType){

    // SET UP FOR THE TEST

    // Launch the browser  
    let driver = await new Builder().forBrowser("firefox").build();

    // Navigate to hudl.com
    await driver.get("https://www.hudl.com/");

    // Click on “Log in” button
    let loginBtn = await driver.findElement(By.css("[data-qa-id='login-select']"));
    loginBtn.click();

    // Select “Hudl” from the dropdown menu
    let loginHudl = await driver.findElement(By.css("[data-qa-id='login-hudl']"));
    loginHudl.click();

    // Verify Log In page displays
    await driver.sleep(3000);

    let loginForm = await driver.findElement(By.className("login-box"));

    assert(loginForm.isDisplayed, "Log In Page did NOT display.");

    // Input email address
    let emailInput = await driver.findElement(By.id("email"));
    emailInput.sendKeys(email);

    // Input password
    let pwdInput = await driver.findElement(By.id("password"));
    pwdInput.sendKeys(pwd);

    // Click "Continue" button
    let continueBtn = await driver.findElement(By.id("logIn"));
    continueBtn.click();

    // Wait for Error message
    await driver.sleep(5000);
    
    switch(testType) {
        case "missing": {  // TEST BLANK EMAIL OR PASSWORD
            let reqErrorText = await driver.findElement(By.css("[data-qa-id='undefined-text']")).getText();

            // Check for Error message
            assert.strictEqual(reqErrorText, "Please fill in all of the required fields");
            console.log("** TEST PASSED: Error message displayed for MISSING FIELD(S)");
            break;
        }    
        case "invalid": {   // TEST INVALID EMAIL OR PASSWORD
            let invalidErrorText = await driver.findElement(By.css("[data-qa-id='undefined-text']")).getText();

             // Check for Error message
             assert.strictEqual(invalidErrorText, "We don't recognize that email and/or password");
            console.log("** TEST PASSED: Error message displayed for INVALID VALUE(S)");
            break;
        }    
        case "valid": {    // TEST VALID EMAIL & VALID PASSWORD

            // Verify that the Hudl Fan Page successfully displays
            let fanHomePage = await driver.findElement(By.css("[data-qa-id='fan-home-page']"));
            assert(fanHomePage.isDisplayed, "Hudl Fan Home Page did NOT display");
            console.log("** TEST PASSED: Hudl Fan Home Page displays successfully for VALID EMAIL AND PASSWORD.");

            // Wait for Hudl Fan Page to finish loading
            await driver.sleep(3000);

            // Log Out of Hudl Fan Page
            let menuDropDwn = await driver.findElement(By.className("fanWebnav_globalUserItemDisplayName__QgQU2"));
            menuDropDwn.click();

            // Wait for dropdown to expand
            await driver.sleep(3000);

            let logOutBtn = await driver.findElement(By.css("[data-qa-id='hui-logout']"));
            logOutBtn.click();
            break;
        }
    }

    // CLEAN UP AFTER THE TEST

    // Wait before closing browser
    await driver.sleep(3000);

    // Close the browser and quit the application
    await driver.quit();

}

testLoginFlows();
