'strict'

const argv = require('yargs').argv;

const chromeDC = {
    browserName: 'chrome',
    acceptInsecureCerts: true,
    // version: 'latest',
    // platform: '',
    maxInstances: 1,
    // chromeOptions: {
    // to run chrome headless the following flags are required
    // (see https://developers.google.com/web/updates/2017/04/headless-chrome)
    // args: ['--headless', '--disable-gpu'],
    // } 
}

const firefoxDC = {
    // maxInstances can get overwritten per capability. So if you have an in house Selenium
    // grid with only 5 firefox instance available you can make sure that not more than
    // 5 instance gets started at a time.
    browserName: 'firefox',
    // version: 'latest',
    // platform: '',
    maxInstances: 1,
    handleAlerts: true,
    acceptSslCerts: true,
    acceptInsecureCerts: true,
    // specs: [
    //     'test/ffOnly/*'
    // ],
    "moz:firefoxOptions": {
      // flag to activate Firefox headless mode (see https://github.com/mozilla/geckodriver/blob/master/README.md#firefox-capabilities for more details about moz:firefoxOptions)
      // args: ['-headless']
    }
}

module.exports = {
     executionCapabilities(){
        const browserSelection = argv.browsers;
        let browserDC = [];
        if(browserSelection){
            const browsers = browserSelection.split(",");
            browsers.forEach(element => {
                if(element == 'chrome'){
                    browserDC.push(chromeDC);
                } else if(element == 'firefox'){
                    browserDC.push(firefoxDC);
                } else {
                    throw "Browser name is not valid should be one of chrome, firefox"
                }
            });
        } else {
            browserDC.push(chromeDC);
        }
        return browserDC;
    }
}
