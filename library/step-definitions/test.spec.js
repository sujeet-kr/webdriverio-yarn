const { Given, When, Then } = require('cucumber')
const { expect } = require ('chai')


Given('a variable set to {int}', function(number){
    console.log("This is the Given for simple_math");
    this.setTo(number);
    
})

When('I increment the variable by {int}', function(number) {
    console.log("This is the When for simple_math");
    this.incrementBy(number)
})
  
Then('the variable should contain {int}', function(number) {
    console.log("This is the Then for simple_math");
    expect(this.variable).to.eql(number)
})

Given('that I am logged into the application', function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("This is the given step for sample feature");
});


When('I perform an assertion', function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("This is the WHEN step for sample");
});

Then('I should recieve the output expected', function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("This is the THEN step for sample");
});