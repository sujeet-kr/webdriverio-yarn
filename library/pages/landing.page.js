var Page = require('./page');

class LandingPage extends Page {

    get flashMessage() { return browser.element('//div[@id="flash"][@class="flash success"]'); }
    get logoutButton() { return browser.element('//a[@class="button secondary radius"]'); }

    logout() {
        this.logoutButton.click();
    }
}

module.exports = new LandingPage();