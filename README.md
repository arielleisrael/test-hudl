# test-hudl

This repository contains code for automated tests to verify the login functionality of hudl.com. These tests are implemented using Selenium WebDriver, Node.js, and npm. The purpose of these tests is to ensure that the login process of the website works as expected.

## Table of Contents
- Prerequisites
- Installation
- Running the Tests
- Takeaways & Optimization

## Prerequisites
Before running the automated tests, please ensure that the following software is installed on your machine:
1. [Node.js](https://nodejs.org/)
2. npm 
3. [Selenium WebDriver](https://www.selenium.dev/documentation/webdriver/getting_started/)
4. [Firefox Browser](https://www.mozilla.org/en-US/firefox/new/)

## Installation
To set up the project and install the required dependencies, follow these steps:

1. Clone this repository to the local machine:
```
git clone https://github.com/arielleisrael/test-hudl.git
cd test-hudl
```
2. Install the project dependencies using npm:
```
npm install
```
## Running the Tests
To run the login tests, use the following command:
```
node tests/login.js
```

*Note: After the tests execute, the results will display in the terminal.*

## Takeaways & Optimization
During the development of this test suite, I identified some areas for code optimization:

1. Organize the Tests
Utilizing test frameworks like Mocha would allow for additional test organization (such as adding before and after hooks). This would provide the ability to set up the test environment before each test case and perform cleanup afterward.

2. Remove Hardcoded Wait Times
To improve efficiency, hardcoded wait times could be replaced with explicit waits. For example, using explicit waits, such as await driver.wait(), will ensure that the tests wait only as long as necessary for specific elements to be available.

3. Refactor Repeated Code
The test code could be improved for better maintainability by creating more reusable functions, ultimately reducing code duplication.

  
*Thank you for the opportunity to create this test suite, and I look forward to talking with the team!*






