
var Page = require ('./page');

class LoginPage extends Page {
    get username() { return browser.element('[id=username]'); }
    get password() { return browser.element('[id=password]'); }
    get loginButton() { return browser.element('//button[@type="submit"]/i[@class="fa fa-2x fa-sign-in"]')}

    loginToApplication() {
        // this.username.setValue('tomsmith');
        this.username.setValue(super.getCredentialsData(userCred).username);
        // this.password.setValue('SuperSecretPassword!');
        this.password.setValue(super.getCredentialsData(userCred).password);
        this.loginButton.click();
    }
}

module.exports = new LoginPage();