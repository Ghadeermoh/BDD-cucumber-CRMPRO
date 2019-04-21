$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/ghadeermoh/eclipse-workspace/CRMBDDFramework/src/main/java/Features/Deals .feature");
formatter.feature({
  "line": 1,
  "name": "deal data creation",
  "description": "",
  "id": "deal-data-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "CRMPRO create new deal",
  "description": "",
  "id": "deal-data-creation;crmpro-create-new-deal",
  "type": "scenario",
  "keyword": "Scenario"
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
  "name": "user enters user name and password",
  "rows": [
    {
      "cells": [
        "ghadeermoh",
        "Ghadeer25"
      ],
      "line": 6
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user is in home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user mouseover deals link and click on new deal",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "test deal",
        "Excees",
        "10",
        "100"
      ],
      "line": 11
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_launch_login_page()"
});
formatter.result({
  "duration": 34849219924,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.When_Title_is_CRMRO()"
});
formatter.result({
  "duration": 674763680,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_user_name_and_password(DataTable)"
});
formatter.result({
  "duration": 2489700990,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_login_button()"
});
formatter.result({
  "duration": 23788093198,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_is_in_home_page()"
});
formatter.result({
  "duration": 15887457,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_mouseover_deals_link_and_click_on_new_deal()"
});
formatter.result({
  "duration": 5482197267,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_deal_details(DataTable)"
});
formatter.result({
  "duration": 4783333955,
  "status": "passed"
});
});