# test-hudl

This repository contains code for automated tests to verify the login functionality of hudl.com. These tests are implemented using Selenium WebDriver, Node.js, and npm. The purpose of these tests is to ensure that the login process of the website works as expected.

## Table of Contents
- Prerequisites
- Installation
- Running the Tests

## Prerequisites
Before running the automated tests, please ensure that the following software is installed on your machine:
1. Node.js: JavaScript runtime environment. *(If not installed, you can download it from: https://nodejs.org/)*
2. npm: npm (Node Package Manager) is required to install dependencies for test scripts. *(This is installed automatically with Node.js.)*
3. Selenium WebDriver: Allows user to automate interactions with a web browser. *(Installation instructions for Selenium can be found here: https://www.selenium.dev/documentation/webdriver/getting_started/)*

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
