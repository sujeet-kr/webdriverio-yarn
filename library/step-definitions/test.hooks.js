const {AfterAll, BeforeAll} = require('cucumber');
const {After, Before} = require('cucumber');
const YamlEnvRead = require('../support/yaml-reader');
const argv = require('yargs').argv;


// Synchronous
BeforeAll(function () {
    // perform some shared setup
});
  
// // Asynchronous Callback
// BeforeAll(function (callback) {
// // perform some shared setup

// // execute the callback (optionally passing an error when done)
// });

// Asynchronous Promise
AfterAll(function () {
// perform some shared teardown
return Promise.resolve()
});

Before(function () {
  // This hook will be executed before all scenarios
  const executionEnvData = YamlEnvRead.yamlDataAsObject('resources/env-url.yml');
  let envToExecute = argv.env;  
  if(!envToExecute){
    envToExecute = 'dev';
  }
  browser.url(executionEnvData[envToExecute].ui_login_url);
});

Before({tags: "@foo"}, function () {
  // This hook will be executed before scenarios tagged with @foo
});

Before({tags: "@foo and @bar"}, function () {
  // This hook will be executed before scenarios tagged with @foo and @bar
});

Before({tags: "@foo or @bar"}, function () {
  // This hook will be executed before scenarios tagged with @foo or @bar
});

// You can use the following shorthand when only specifying tags
Before("@foo", function () {
  // This hook will be executed before scenarios tagged with @foo
});

After({tags: "@ReloadSession"}, function () {
  browser.reload();
});

After(function () {
});
