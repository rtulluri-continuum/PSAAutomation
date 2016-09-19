$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("PSAtoNOCTicket.feature");
formatter.feature({
  "id": "as-a-user-status-i-want-to-create-ticket-on-psa-connectwise-with-different-status-and-update-corrsponding-status-on-noc",
  "description": "",
  "name": "As a user status I want to create ticket on PSA Connectwise with different status and update corrsponding status on NOC",
  "keyword": "Feature",
  "line": 1
});
formatter.scenarioOutline({
  "id": "as-a-user-status-i-want-to-create-ticket-on-psa-connectwise-with-different-status-and-update-corrsponding-status-on-noc;as-an-msp,-i-want-to-assign-tickets-to-noc-from-connectwise-psa-with-different-status-and-verify-mapped-status-in-noc",
  "tags": [
    {
      "name": "@PSATest",
      "line": 3
    }
  ],
  "description": "",
  "name": "As an MSP, I want to assign tickets to NOC from Connectwise PSA with different status and verify mapped status in NOC",
  "keyword": "Scenario Outline",
  "line": 4,
  "type": "scenario_outline"
});
formatter.step({
  "name": "User is login to Connectwise portal",
  "keyword": "Given ",
  "line": 6
});
formatter.step({
  "name": "User is able to create ticket in ConnectWise portal for \"\u003cCompany\u003e\", \"\u003cBoard\u003e\"",
  "keyword": "When ",
  "line": 7
});
formatter.step({
  "name": "Verify ticket created in PSA Database",
  "keyword": "Then ",
  "line": 8
});
formatter.step({
  "name": "User is login to NOC portal",
  "keyword": "And ",
  "line": 9
});
formatter.step({
  "name": "Verify same ticket is created in NOC",
  "keyword": "And ",
  "line": 10
});
formatter.examples({
  "id": "as-a-user-status-i-want-to-create-ticket-on-psa-connectwise-with-different-status-and-update-corrsponding-status-on-noc;as-an-msp,-i-want-to-assign-tickets-to-noc-from-connectwise-psa-with-different-status-and-verify-mapped-status-in-noc;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 13,
  "rows": [
    {
      "id": "as-a-user-status-i-want-to-create-ticket-on-psa-connectwise-with-different-status-and-update-corrsponding-status-on-noc;as-an-msp,-i-want-to-assign-tickets-to-noc-from-connectwise-psa-with-different-status-and-verify-mapped-status-in-noc;;1",
      "cells": [
        "Company",
        "Board",
        "Member"
      ],
      "line": 14
    },
    {
      "id": "as-a-user-status-i-want-to-create-ticket-on-psa-connectwise-with-different-status-and-update-corrsponding-status-on-noc;as-an-msp,-i-want-to-assign-tickets-to-noc-from-connectwise-psa-with-different-status-and-verify-mapped-status-in-noc;;2",
      "cells": [
        "02mar2013testMDM5",
        "RESTSerBoard",
        "PSADTTM6"
      ],
      "line": 15
    }
  ]
});
formatter.scenario({
  "id": "as-a-user-status-i-want-to-create-ticket-on-psa-connectwise-with-different-status-and-update-corrsponding-status-on-noc;as-an-msp,-i-want-to-assign-tickets-to-noc-from-connectwise-psa-with-different-status-and-verify-mapped-status-in-noc;;2",
  "tags": [
    {
      "name": "@PSATest",
      "line": 3
    }
  ],
  "description": "",
  "name": "As an MSP, I want to assign tickets to NOC from Connectwise PSA with different status and verify mapped status in NOC",
  "keyword": "Scenario Outline",
  "line": 15,
  "type": "scenario"
});
formatter.step({
  "name": "User is login to Connectwise portal",
  "keyword": "Given ",
  "line": 6
});
formatter.step({
  "name": "User is able to create ticket in ConnectWise portal for \"02mar2013testMDM5\", \"RESTSerBoard\"",
  "keyword": "When ",
  "line": 7,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.step({
  "name": "Verify ticket created in PSA Database",
  "keyword": "Then ",
  "line": 8
});
formatter.step({
  "name": "User is login to NOC portal",
  "keyword": "And ",
  "line": 9
});
formatter.step({
  "name": "Verify same ticket is created in NOC",
  "keyword": "And ",
  "line": 10
});
formatter.match({
  "location": "StepDefinations.user_is_login_to_ConnectWise_portal()"
});
