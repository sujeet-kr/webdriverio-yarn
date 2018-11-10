// import Page from './page'
var Page = require ('./page');

class LoginPage extends Page {
    get username() { return browser.element('//input[@id="username"]'); }
    get password() { return browser.element('//input[@id="password"]'); }
    get loginButton() { return browser.element('//button[@type="submit"]/i[@class="fa fa-2x fa-sign-in"]')}

    open() {
        super.open("http://the-internet.herokuapp.com/login");
    }

    loginToApplication() {
        this.username.setValue('tomsmith');
        this.password.setValue('SuperSecretPassword!');
        this.loginButton.click();
    }
}

module.exports = new LoginPage();