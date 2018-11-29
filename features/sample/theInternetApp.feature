Feature: To check if I am able to make the internet app work

    @Smoke
    @Regression
    Scenario: As a user I should be able to login to the application
        Given I am at the login page of the application
        When I login to the application
        Then I should reach the landing page of the application
