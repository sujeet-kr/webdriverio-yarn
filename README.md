# WebdriverIO Test Automation Framework with Yarn

The automation framework uses WebdriverIO as the browser driving library.  
It also uses WDIO Test Runner to execute the tests.  
Allure is integrated as the Test Reporter.  


## To Execute the test:
Run `yarn run setup`  - to setup weddriver server if not setup
Run `yarn run start`  - to start the server
Run `yarn run test:cucumber`  - to run the task test that contains the suite
or any other script defined in 'package.json'

## To generate test report in allure:
Run `./generateAllureReport.sh`

## To run a specific test tagged with a particular key
Run `./node_modules/.bin/wdio --cucumberOpts.tagExpression='@Regression or @Sujeet and not @BadTest' ./wdio.conf.js"`


