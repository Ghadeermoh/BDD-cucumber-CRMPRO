$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/ghadeermoh/eclipse-workspace/CRMBDDFramework/src/main/java/Features/contact .feature");
formatter.feature({
  "line": 1,
  "name": "CRMPRO create contacts",
  "description": "",
  "id": "crmpro-create-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "CRMPRO create new contact",
  "description": "",
  "id": "crmpro-create-contacts;crmpro-create-new-contact",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user launch the CRMPRO Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "title of page is CRMPRO",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enters \"\u003cuser name\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user clicks login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user is in home page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user mouseover contacts link and click on new contact",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enters contact details\"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "crmpro-create-contacts;crmpro-create-new-contact;",
  "rows": [
    {
      "cells": [
        "user name",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 13,
      "id": "crmpro-create-contacts;crmpro-create-new-contact;;1"
    },
    {
      "cells": [
        "ghadeermoh",
        "Ghadeer25",
        "Ahmed",
        "mohamed",
        "IT Manager"
      ],
      "line": 14,
      "id": "crmpro-create-contacts;crmpro-create-new-contact;;2"
    },
    {
      "cells": [
        "ghadeermoh",
        "Ghadeer25",
        "Amr",
        "Diab",
        "Singer"
      ],
      "line": 15,
      "id": "crmpro-create-contacts;crmpro-create-new-contact;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "CRMPRO create new contact",
  "description": "",
  "id": "crmpro-create-contacts;crmpro-create-new-contact;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user launch the CRMPRO Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "title of page is CRMPRO",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enters \"ghadeermoh\" and \"Ghadeer25\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user clicks login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user is in home page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user mouseover contacts link and click on new contact",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enters contact details\"Ahmed\" and \"mohamed\" and \"IT Manager\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_launch_login_page()"
});
formatter.result({
  "duration": 21767808522,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.When_Title_is_CRMRO()"
});
formatter.result({
  "duration": 201668996,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ghadeermoh",
      "offset": 13
    },
    {
      "val": "Ghadeer25",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_enter_user_name_and_password(String,String)"
});
formatter.result({
  "duration": 1552973864,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_login_button()"
});
formatter.result({
  "duration": 24658743891,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_in_home_page()"
});
formatter.result({
  "duration": 22125515,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_mouseover_contacts_link_and_click_on_new_contact()"
});
formatter.result({
  "duration": 7156782771,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ahmed",
      "offset": 28
    },
    {
      "val": "mohamed",
      "offset": 40
    },
    {
      "val": "IT Manager",
      "offset": 54
    }
  ],
  "location": "LoginStepDefinition.user_enters_contact_details_and_and(String,String,String)"
});
formatter.result({
  "duration": 14797493529,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 828617178,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "CRMPRO create new contact",
  "description": "",
  "id": "crmpro-create-contacts;crmpro-create-new-contact;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user launch the CRMPRO Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "title of page is CRMPRO",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enters \"ghadeermoh\" and \"Ghadeer25\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user clicks login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user is in home page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user mouseover contacts link and click on new contact",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enters contact details\"Amr\" and \"Diab\" and \"Singer\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_launch_login_page()"
});
formatter.result({
  "duration": 8280886042,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.When_Title_is_CRMRO()"
});
formatter.result({
  "duration": 25376640,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ghadeermoh",
      "offset": 13
    },
    {
      "val": "Ghadeer25",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_enter_user_name_and_password(String,String)"
});
formatter.result({
  "duration": 920092935,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_login_button()"
});
formatter.result({
  "duration": 10238333594,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_in_home_page()"
});
formatter.result({
  "duration": 15052345,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_mouseover_contacts_link_and_click_on_new_contact()"
});
formatter.result({
  "duration": 3891712822,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Amr",
      "offset": 28
    },
    {
      "val": "Diab",
      "offset": 38
    },
    {
      "val": "Singer",
      "offset": 49
    }
  ],
  "location": "LoginStepDefinition.user_enters_contact_details_and_and(String,String,String)"
});
formatter.result({
  "duration": 7915092186,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 919165190,
  "status": "passed"
});
});