
@NewACcountFeature
Feature: Creating new account functionality validation
@Scenario1
Scenario Outline: User should be able to land on dashboard Page 

Given User is on the TechFios login page
When User enters username as "<userName>"
When User  enters password as "<password>"
When User clicks on the Submit button
And User should land on dashboard page

Examples: 

|userName|	|password|
|demo@techfios.com|	|abc123|

@Scenarios2
Scenario Outline: User should be able to create new account


Given User is on the TechFios login page
When User enters username as "<userName>"
When User  enters password as "<password>"
When User clicks on the Submit button
And User should land on dashboard page
When User clicks on Bank and Cash Button
When User Clicks on New Account Button
Then User Should Land on Accounts Page
When User enters AccountTitle as "<accountTitle>" 
When User enters Description as "<description>"
When User enters InitialBalance as "<initialBalance>"
When User enters AccountNumber as "<accountNumber>"
When User enters ContactPerson as "<contactPerson>"
And User enters PhoneNumber as "<phoneNumber>"
Then User clicks on SubmitButton

Examples: 

|accountTitle|	|description|	|initialBalance|	|accountNumber|	|contactPerson|	|phoneNumber|		|userName|			|password|	
|savings|					|AutoLoan|		|$500,000|				|564329|					|Mark|				|6543|			|demo@techfios.com|		|abc123|		

