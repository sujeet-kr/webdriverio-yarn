// import LoginPage from '../pages/login.page';

const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');
const LoginPage = require('../pages/login.page');
const LandingPage = require('../pages/landing.page');

Given('I am at the login page of the application', function () {
    console.log("This is the Given test for Browser test");
});

When('I login to the application', function () {
    LoginPage.open();
    LoginPage.loginToApplication();
});

Then('I should reach the landing page of the application', function () {
    expect(LandingPage.flashMessage.isVisible()).to.equal(true);
    expect(LandingPage.flashMessage.getText()).to.include('You logged into a secure area!');
    LandingPage.logout();
});