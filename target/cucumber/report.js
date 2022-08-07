$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/NewAccount.feature");
formatter.feature({
  "line": 3,
  "name": "Creating new account functionality validation",
  "description": "",
  "id": "creating-new-account-functionality-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@NewACcountFeature"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User should be able to land on dashboard Page",
  "description": "",
  "id": "creating-new-account-functionality-validation;user-should-be-able-to-land-on-dashboard-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on the TechFios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters username as \"\u003cuserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User  enters password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on the Submit button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User should land on dashboard page",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "creating-new-account-functionality-validation;user-should-be-able-to-land-on-dashboard-page;",
  "rows": [
    {
      "cells": [
        "userName",
        "",
        "password"
      ],
      "line": 15,
      "id": "creating-new-account-functionality-validation;user-should-be-able-to-land-on-dashboard-page;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "",
        "abc123"
      ],
      "line": 16,
      "id": "creating-new-account-functionality-validation;user-should-be-able-to-land-on-dashboard-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2048374400,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User should be able to land on dashboard Page",
  "description": "",
  "id": "creating-new-account-functionality-validation;user-should-be-able-to-land-on-dashboard-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@NewACcountFeature"
    },
    {
      "line": 4,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on the TechFios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User  enters password as \"abc123\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on the Submit button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User should land on dashboard page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_the_TechFios_login_page()"
});
formatter.result({
  "duration": 1234729400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginStepDefination.user_enters_username_as(String)"
});
formatter.result({
  "duration": 3096046300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 26
    }
  ],
  "location": "LoginStepDefination.user_enters_password_as(String)"
});
formatter.result({
  "duration": 3075948300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_the_Submit_button()"
});
formatter.result({
  "duration": 9885719500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_should_land_on_dashboard_page()"
});
formatter.result({
  "duration": 191470600,
  "status": "passed"
});
formatter.after({
  "duration": 752096900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "User should be able to create new account",
  "description": "",
  "id": "creating-new-account-functionality-validation;user-should-be-able-to-create-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@Scenarios2"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User is on the TechFios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User enters username as \"\u003cuserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User  enters password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User clicks on the Submit button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User should land on dashboard page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User clicks on Bank and Cash Button",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User Clicks on New Account Button",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User Should Land on Accounts Page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "User enters AccountTitle as \"\u003caccountTitle\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "User enters Description as \"\u003cdescription\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "User enters InitialBalance as \"\u003cinitialBalance\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "User enters AccountNumber as \"\u003caccountNumber\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User enters ContactPerson as \"\u003ccontactPerson\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "User enters PhoneNumber as \"\u003cphoneNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User clicks on SubmitButton",
  "keyword": "Then "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "creating-new-account-functionality-validation;user-should-be-able-to-create-new-account;",
  "rows": [
    {
      "cells": [
        "accountTitle",
        "",
        "description",
        "",
        "initialBalance",
        "",
        "accountNumber",
        "",
        "contactPerson",
        "",
        "phoneNumber",
        "",
        "userName",
        "",
        "password"
      ],
      "line": 40,
      "id": "creating-new-account-functionality-validation;user-should-be-able-to-create-new-account;;1"
    },
    {
      "cells": [
        "savings",
        "",
        "AutoLoan",
        "",
        "$500,000",
        "",
        "564329",
        "",
        "Mark",
        "",
        "6543",
        "",
        "demo@techfios.com",
        "",
        "abc123"
      ],
      "line": 41,
      "id": "creating-new-account-functionality-validation;user-should-be-able-to-create-new-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1327467100,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "User should be able to create new account",
  "description": "",
  "id": "creating-new-account-functionality-validation;user-should-be-able-to-create-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@NewACcountFeature"
    },
    {
      "line": 18,
      "name": "@Scenarios2"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User is on the TechFios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User enters username as \"demo@techfios.com\"",
  "matchedColumns": [
    12
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User  enters password as \"abc123\"",
  "matchedColumns": [
    14
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User clicks on the Submit button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User should land on dashboard page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User clicks on Bank and Cash Button",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User Clicks on New Account Button",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User Should Land on Accounts Page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "User enters AccountTitle as \"savings\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "User enters Description as \"AutoLoan\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "User enters InitialBalance as \"$500,000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "User enters AccountNumber as \"564329\"",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User enters ContactPerson as \"Mark\"",
  "matchedColumns": [
    8
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "User enters PhoneNumber as \"6543\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User clicks on SubmitButton",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_the_TechFios_login_page()"
});
formatter.result({
  "duration": 1385684800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginStepDefination.user_enters_username_as(String)"
});
formatter.result({
  "duration": 3092691900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 26
    }
  ],
  "location": "LoginStepDefination.user_enters_password_as(String)"
});
formatter.result({
  "duration": 3073067400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_the_Submit_button()"
});
formatter.result({
  "duration": 6785315900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_should_land_on_dashboard_page()"
});
formatter.result({
  "duration": 144422800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_Bank_and_Cash_Button()"
});
formatter.result({
  "duration": 3058524600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_Clicks_on_New_Account_Button()"
});
formatter.result({
  "duration": 3770990300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_should_land_on_accounts_page()"
});
formatter.result({
  "duration": 37350800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "savings",
      "offset": 29
    }
  ],
  "location": "LoginStepDefination.user_enters_accountTitle_as(String)"
});
formatter.result({
  "duration": 3097590900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AutoLoan",
      "offset": 28
    }
  ],
  "location": "LoginStepDefination.user_enters_description_as(String)"
});
formatter.result({
  "duration": 3105041600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$500,000",
      "offset": 31
    }
  ],
  "location": "LoginStepDefination.user_enters_initialBalance_as(String)"
});
formatter.result({
  "duration": 3100040200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "564329",
      "offset": 30
    }
  ],
  "location": "LoginStepDefination.user_enters_accountNumber_as(String)"
});
formatter.result({
  "duration": 68725500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mark",
      "offset": 30
    }
  ],
  "location": "LoginStepDefination.user_enters_contactPerson_as(String)"
});
formatter.result({
  "duration": 3068219800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6543",
      "offset": 28
    }
  ],
  "location": "LoginStepDefination.user_enters_phoneNumber_as(String)"
});
formatter.result({
  "duration": 3087146400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_submitButton()"
});
formatter.result({
  "duration": 5866847100,
  "status": "passed"
});
formatter.after({
  "duration": 763984600,
  "status": "passed"
});
});