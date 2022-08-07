
@OtherLoginFeature @regression
Feature: TechFios other Login functionality validation

Background:
Given User is on the TechFios login page
@OtherScenario1 @smoke
Scenario Outline: User should not be able to login with incorrect credential
When User enters username as "<username>"
When User  enters password as "<password>"
When User clicks on the Submit button
Then User should land on dashboard page

Examples:

		|username|						|password|
|demo2@techfios.com|	|abc123|
|demo@techfios.com|		|abcd123|
|demo1@techfios.com|	|abcd123|


#@OtherScenario2 
#Scenario: User should not be able to login with incorrect credential
#When User enters username as "demo@techfios.com"
#When User  enters password as "abc124"
#When User clicks on the Submit button
#Then User should land on dashboard page

#@OtherScenario3
#Scenario: User should not be able to login with incorrect credential
#When User enters username as "demo2@techfios.com"
#When User  enters password as "abc124"
#When User clicks on the Submit button
#Then User should land on dashboard page

