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
  "name": "Verify same ticket is created in NOC",
  "keyword": "And ",
  "line": 9
});
formatter.examples({
  "id": "as-a-user-status-i-want-to-create-ticket-on-psa-connectwise-with-different-status-and-update-corrsponding-status-on-noc;as-an-msp,-i-want-to-assign-tickets-to-noc-from-connectwise-psa-with-different-status-and-verify-mapped-status-in-noc;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 12,
  "rows": [
    {
      "id": "as-a-user-status-i-want-to-create-ticket-on-psa-connectwise-with-different-status-and-update-corrsponding-status-on-noc;as-an-msp,-i-want-to-assign-tickets-to-noc-from-connectwise-psa-with-different-status-and-verify-mapped-status-in-noc;;1",
      "cells": [
        "Company",
        "Board",
        "Member"
      ],
      "line": 13
    },
    {
      "id": "as-a-user-status-i-want-to-create-ticket-on-psa-connectwise-with-different-status-and-update-corrsponding-status-on-noc;as-an-msp,-i-want-to-assign-tickets-to-noc-from-connectwise-psa-with-different-status-and-verify-mapped-status-in-noc;;2",
      "cells": [
        "02mar2013testMDM5",
        "RESTSerBoard",
        "PSADTTM6"
      ],
      "line": 14
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
  "line": 14,
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
  "name": "Verify same ticket is created in NOC",
  "keyword": "And ",
  "line": 9
});
formatter.match({
  "location": "StepDefinations.user_is_login_to_ConnectWise_portal()"
});
formatter.result({
  "duration": 91621978824,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "02mar2013testMDM5",
      "offset": 57
    },
    {
      "val": "RESTSerBoard",
      "offset": 78
    }
  ],
  "location": "StepDefinations.user_is_able_to_create_ticket_in_ConnectWise_portal_for_with_status_in(String,String)"
});
formatter.result({
  "duration": 466549001,
  "status": "failed",
  "error_message": "java.lang.AssertionError: Not able to locate element : Service ticket tab with locator ://div[contains(text(),\u0027Service Desk\u0027)]\r\n\tat org.testng.Assert.fail(Assert.java:83)\r\n\tat continuum.cucumber.WebdriverWrapper.getWebElement(WebdriverWrapper.java:129)\r\n\tat continuum.cucumber.WebdriverWrapper.clickElement(WebdriverWrapper.java:838)\r\n\tat continuum.cucumber.Page.ConnectwisePage.gotToServiceTicket(ConnectwisePage.java:84)\r\n\tat continuum.cucumber.stepDefinations.StepDefinations.user_is_able_to_create_ticket_in_ConnectWise_portal_for_with_status_in(StepDefinations.java:76)\r\n\tat ✽.When User is able to create ticket in ConnectWise portal for \"02mar2013testMDM5\", \"RESTSerBoard\"(PSAtoNOCTicket.feature:7)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[contains(text(),\u0027Service Desk\u0027)]\"}\n  (Session info: chrome\u003d53.0.2785.116)\n  (Driver info: chromedriver\u003d2.20.353145 (343b531d31eeb933ec778dbcf7081628a1396067),platform\u003dWindows NT 6.1 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 113 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027RMM-LT-618\u0027, ip: \u0027192.168.0.101\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_79\u0027\n*** Element info: {Using\u003dxpath, value\u003d//div[contains(text(),\u0027Service Desk\u0027)]}\nSession ID: f30ad8386fb6a2d2724a678df39562e2\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{platform\u003dXP, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, browserName\u003dchrome, chrome\u003d{userDataDir\u003dC:\\Users\\SNEHA~1.CHE\\AppData\\Local\\Temp\\scoped_dir28572_21438}, rotatable\u003dfalse, locationContextEnabled\u003dtrue, mobileEmulationEnabled\u003dfalse, version\u003d53.0.2785.116, takesHeapSnapshot\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, browserConnectionEnabled\u003dfalse, webStorageEnabled\u003dtrue, nativeEvents\u003dtrue, hasTouchScreen\u003dfalse, applicationCacheEnabled\u003dfalse, takesScreenshot\u003dtrue}]\nCommand duration or timeout: 453 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027RMM-LT-618\u0027, ip: \u0027192.168.0.101\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_79\u0027\n*** Element info: {Using\u003dxpath, value\u003d//div[contains(text(),\u0027Service Desk\u0027)]}\nSession ID: 244f3079-92df-48a0-9a29-22a9e29bb787\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities [{platform\u003dXP, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, browserName\u003dchrome, chrome\u003d{userDataDir\u003dC:\\Users\\SNEHA~1.CHE\\AppData\\Local\\Temp\\scoped_dir28572_21438}, rotatable\u003dfalse, locationContextEnabled\u003dtrue, mobileEmulationEnabled\u003dfalse, webdriver.remote.sessionid\u003d244f3079-92df-48a0-9a29-22a9e29bb787, version\u003d53.0.2785.116, takesHeapSnapshot\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, browserConnectionEnabled\u003dfalse, webStorageEnabled\u003dtrue, nativeEvents\u003dtrue, hasTouchScreen\u003dfalse, applicationCacheEnabled\u003dfalse, takesScreenshot\u003dtrue}]\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat continuum.cucumber.WebdriverWrapper.getWebElement(WebdriverWrapper.java:114)\r\n\tat continuum.cucumber.WebdriverWrapper.clickElement(WebdriverWrapper.java:838)\r\n\tat continuum.cucumber.Page.ConnectwisePage.gotToServiceTicket(ConnectwisePage.java:84)\r\n\tat continuum.cucumber.stepDefinations.StepDefinations.user_is_able_to_create_ticket_in_ConnectWise_portal_for_with_status_in(StepDefinations.java:76)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:606)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:606)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:295)\r\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:84)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:90)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:203)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:155)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:103)\r\nCaused by: org.openqa.selenium.remote.ScreenshotException: Screen shot has been taken\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027RMM-LT-618\u0027, ip: \u0027192.168.0.101\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_79\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:138)\r\n\t... 53 more\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[contains(text(),\u0027Service Desk\u0027)]\"}\n  (Session info: chrome\u003d53.0.2785.116)\n  (Driver info: chromedriver\u003d2.20.353145 (343b531d31eeb933ec778dbcf7081628a1396067),platform\u003dWindows NT 6.1 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 113 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027RMM-LT-618\u0027, ip: \u0027192.168.0.101\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_79\u0027\n*** Element info: {Using\u003dxpath, value\u003d//div[contains(text(),\u0027Service Desk\u0027)]}\nSession ID: f30ad8386fb6a2d2724a678df39562e2\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{platform\u003dXP, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, browserName\u003dchrome, chrome\u003d{userDataDir\u003dC:\\Users\\SNEHA~1.CHE\\AppData\\Local\\Temp\\scoped_dir28572_21438}, rotatable\u003dfalse, locationContextEnabled\u003dtrue, mobileEmulationEnabled\u003dfalse, version\u003d53.0.2785.116, takesHeapSnapshot\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, browserConnectionEnabled\u003dfalse, webStorageEnabled\u003dtrue, nativeEvents\u003dtrue, hasTouchScreen\u003dfalse, applicationCacheEnabled\u003dfalse, takesScreenshot\u003dtrue}]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027RMM-LT-618\u0027, ip: \u0027192.168.0.101\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_79\u0027\nDriver info: driver.version: EventFiringWebDriver\r\n\tat sun.reflect.GeneratedConstructorAccessor23.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat sun.reflect.GeneratedMethodAccessor19.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$2.invoke(EventFiringWebDriver.java:103)\r\n\tat com.sun.proxy.$Proxy1.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:188)\r\n\tat org.openqa.selenium.remote.server.handler.FindElement.call(FindElement.java:48)\r\n\tat org.openqa.selenium.remote.server.handler.FindElement.call(FindElement.java:1)\r\n\tat java.util.concurrent.FutureTask.run(Unknown Source)\r\n\tat org.openqa.selenium.remote.server.DefaultSession$1.run(DefaultSession.java:176)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source)\r\n\tat java.lang.Thread.run(Unknown Source)\r\n"
});
formatter.match({
  "location": "StepDefinations.veirfy_ticket_created_in_PSA_Database()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.verify_same_ticket_is_created_in_NOC()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "id": "as-a-user-status-i-want-to-create-ticket-on-psa-connectwise-with-different-status-and-update-corrsponding-status-on-noc;verify-psa-ticket-status-is-correspondingly-updated-on-noc-portal",
  "tags": [
    {
      "name": "@PSATest",
      "line": 16
    }
  ],
  "description": "",
  "name": "Verify PSA ticket status is correspondingly updated on NOC portal",
  "keyword": "Scenario Outline",
  "line": 17,
  "type": "scenario_outline"
});
formatter.step({
  "name": "User is login to Connectwise portal",
  "keyword": "Given ",
  "line": 19
});
formatter.step({
  "name": "Update ticket status on Connectwise portal \"\u003cConnectwiseStatus\u003e\"",
  "keyword": "When ",
  "line": 20
});
formatter.step({
  "name": "User is login to NOC portal",
  "keyword": "Then ",
  "line": 21
});
formatter.step({
  "name": "Verify corresponding status is updated on NOC portal \"\u003cNOCStatus\u003e\"",
  "keyword": "And ",
  "line": 22
});
formatter.examples({
  "id": "as-a-user-status-i-want-to-create-ticket-on-psa-connectwise-with-different-status-and-update-corrsponding-status-on-noc;verify-psa-ticket-status-is-correspondingly-updated-on-noc-portal;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 24,
  "rows": [
    {
      "id": "as-a-user-status-i-want-to-create-ticket-on-psa-connectwise-with-different-status-and-update-corrsponding-status-on-noc;verify-psa-ticket-status-is-correspondingly-updated-on-noc-portal;;1",
      "cells": [
        "ConnectwiseStatus",
        "NOCStatus"
      ],
      "line": 25
    },
    {
      "id": "as-a-user-status-i-want-to-create-ticket-on-psa-connectwise-with-different-status-and-update-corrsponding-status-on-noc;verify-psa-ticket-status-is-correspondingly-updated-on-noc-portal;;2",
      "cells": [
        "Assigned to NOC",
        "New,Acknowldge"
      ],
      "line": 26
    },
    {
      "id": "as-a-user-status-i-want-to-create-ticket-on-psa-connectwise-with-different-status-and-update-corrsponding-status-on-noc;verify-psa-ticket-status-is-correspondingly-updated-on-noc-portal;;3",
      "cells": [
        "Resolved",
        "NOC Completed"
      ],
      "line": 27
    }
  ]
});
formatter.scenario({
  "id": "as-a-user-status-i-want-to-create-ticket-on-psa-connectwise-with-different-status-and-update-corrsponding-status-on-noc;verify-psa-ticket-status-is-correspondingly-updated-on-noc-portal;;2",
  "tags": [
    {
      "name": "@PSATest",
      "line": 16
    }
  ],
  "description": "",
  "name": "Verify PSA ticket status is correspondingly updated on NOC portal",
  "keyword": "Scenario Outline",
  "line": 26,
  "type": "scenario"
});
formatter.step({
  "name": "User is login to Connectwise portal",
  "keyword": "Given ",
  "line": 19
});
formatter.step({
  "name": "Update ticket status on Connectwise portal \"Assigned to NOC\"",
  "keyword": "When ",
  "line": 20,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "User is login to NOC portal",
  "keyword": "Then ",
  "line": 21
});
formatter.step({
  "name": "Verify corresponding status is updated on NOC portal \"New,Acknowldge\"",
  "keyword": "And ",
  "line": 22,
  "matchedColumns": [
    1
  ]
});
formatter.match({
  "location": "StepDefinations.user_is_login_to_ConnectWise_portal()"
});
formatter.result({
  "duration": 5995821785,
  "status": "failed",
  "error_message": "java.lang.AssertionError: Not able to locate element : Company text box with locator :company\r\n\tat org.testng.Assert.fail(Assert.java:83)\r\n\tat continuum.cucumber.WebdriverWrapper.getWebElement(WebdriverWrapper.java:129)\r\n\tat continuum.cucumber.WebdriverWrapper.clearandSendKeys(WebdriverWrapper.java:665)\r\n\tat continuum.cucumber.Page.ConnectwisePage.loginToconnectwise(ConnectwisePage.java:62)\r\n\tat continuum.cucumber.stepDefinations.StepDefinations.user_is_login_to_ConnectWise_portal(StepDefinations.java:38)\r\n\tat ✽.Given User is login to Connectwise portal(PSAtoNOCTicket.feature:19)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"company\"}\n  (Session info: chrome\u003d53.0.2785.116)\n  (Driver info: chromedriver\u003d2.20.353145 (343b531d31eeb933ec778dbcf7081628a1396067),platform\u003dWindows NT 6.1 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 25 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027RMM-LT-618\u0027, ip: \u0027192.168.0.101\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_79\u0027\n*** Element info: {Using\u003did, value\u003dcompany}\nSession ID: f30ad8386fb6a2d2724a678df39562e2\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{platform\u003dXP, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, browserName\u003dchrome, chrome\u003d{userDataDir\u003dC:\\Users\\SNEHA~1.CHE\\AppData\\Local\\Temp\\scoped_dir28572_21438}, rotatable\u003dfalse, locationContextEnabled\u003dtrue, mobileEmulationEnabled\u003dfalse, version\u003d53.0.2785.116, takesHeapSnapshot\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, browserConnectionEnabled\u003dfalse, webStorageEnabled\u003dtrue, nativeEvents\u003dtrue, hasTouchScreen\u003dfalse, applicationCacheEnabled\u003dfalse, takesScreenshot\u003dtrue}]\nCommand duration or timeout: 382 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027RMM-LT-618\u0027, ip: \u0027192.168.0.101\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_79\u0027\n*** Element info: {Using\u003did, value\u003dcompany}\nSession ID: 244f3079-92df-48a0-9a29-22a9e29bb787\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities [{platform\u003dXP, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, browserName\u003dchrome, chrome\u003d{userDataDir\u003dC:\\Users\\SNEHA~1.CHE\\AppData\\Local\\Temp\\scoped_dir28572_21438}, rotatable\u003dfalse, locationContextEnabled\u003dtrue, mobileEmulationEnabled\u003dfalse, webdriver.remote.sessionid\u003d244f3079-92df-48a0-9a29-22a9e29bb787, version\u003d53.0.2785.116, takesHeapSnapshot\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, browserConnectionEnabled\u003dfalse, webStorageEnabled\u003dtrue, nativeEvents\u003dtrue, hasTouchScreen\u003dfalse, applicationCacheEnabled\u003dfalse, takesScreenshot\u003dtrue}]\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:413)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat continuum.cucumber.WebdriverWrapper.getWebElement(WebdriverWrapper.java:106)\r\n\tat continuum.cucumber.WebdriverWrapper.clearandSendKeys(WebdriverWrapper.java:665)\r\n\tat continuum.cucumber.Page.ConnectwisePage.loginToconnectwise(ConnectwisePage.java:62)\r\n\tat continuum.cucumber.stepDefinations.StepDefinations.user_is_login_to_ConnectWise_portal(StepDefinations.java:38)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:606)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:606)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:295)\r\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:84)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:90)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:203)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:155)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:103)\r\nCaused by: org.openqa.selenium.remote.ScreenshotException: Screen shot has been taken\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027RMM-LT-618\u0027, ip: \u0027192.168.0.101\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_79\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:138)\r\n\t... 53 more\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"company\"}\n  (Session info: chrome\u003d53.0.2785.116)\n  (Driver info: chromedriver\u003d2.20.353145 (343b531d31eeb933ec778dbcf7081628a1396067),platform\u003dWindows NT 6.1 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 25 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027RMM-LT-618\u0027, ip: \u0027192.168.0.101\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_79\u0027\n*** Element info: {Using\u003did, value\u003dcompany}\nSession ID: f30ad8386fb6a2d2724a678df39562e2\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{platform\u003dXP, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, browserName\u003dchrome, chrome\u003d{userDataDir\u003dC:\\Users\\SNEHA~1.CHE\\AppData\\Local\\Temp\\scoped_dir28572_21438}, rotatable\u003dfalse, locationContextEnabled\u003dtrue, mobileEmulationEnabled\u003dfalse, version\u003d53.0.2785.116, takesHeapSnapshot\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, browserConnectionEnabled\u003dfalse, webStorageEnabled\u003dtrue, nativeEvents\u003dtrue, hasTouchScreen\u003dfalse, applicationCacheEnabled\u003dfalse, takesScreenshot\u003dtrue}]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027RMM-LT-618\u0027, ip: \u0027192.168.0.101\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_79\u0027\nDriver info: driver.version: EventFiringWebDriver\r\n\tat sun.reflect.GeneratedConstructorAccessor23.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:413)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat sun.reflect.GeneratedMethodAccessor19.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$2.invoke(EventFiringWebDriver.java:103)\r\n\tat com.sun.proxy.$Proxy1.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:188)\r\n\tat org.openqa.selenium.remote.server.handler.FindElement.call(FindElement.java:48)\r\n\tat org.openqa.selenium.remote.server.handler.FindElement.call(FindElement.java:1)\r\n\tat java.util.concurrent.FutureTask.run(Unknown Source)\r\n\tat org.openqa.selenium.remote.server.DefaultSession$1.run(DefaultSession.java:176)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source)\r\n\tat java.lang.Thread.run(Unknown Source)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "Assigned to NOC",
      "offset": 44
    }
  ],
  "location": "StepDefinations.update_ticket_status_on_Connectwise_portal(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.user_is_login_to_NOC_portal()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "New,Acknowldge",
      "offset": 54
    }
  ],
  "location": "StepDefinations.verify_corresponding_status_is_updated_on_NOC_portal(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "id": "as-a-user-status-i-want-to-create-ticket-on-psa-connectwise-with-different-status-and-update-corrsponding-status-on-noc;verify-psa-ticket-status-is-correspondingly-updated-on-noc-portal;;3",
  "tags": [
    {
      "name": "@PSATest",
      "line": 16
    }
  ],
  "description": "",
  "name": "Verify PSA ticket status is correspondingly updated on NOC portal",
  "keyword": "Scenario Outline",
  "line": 27,
  "type": "scenario"
});
formatter.step({
  "name": "User is login to Connectwise portal",
  "keyword": "Given ",
  "line": 19
});
formatter.step({
  "name": "Update ticket status on Connectwise portal \"Resolved\"",
  "keyword": "When ",
  "line": 20,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "User is login to NOC portal",
  "keyword": "Then ",
  "line": 21
});
formatter.step({
  "name": "Verify corresponding status is updated on NOC portal \"NOC Completed\"",
  "keyword": "And ",
  "line": 22,
  "matchedColumns": [
    1
  ]
});
formatter.match({
  "location": "StepDefinations.user_is_login_to_ConnectWise_portal()"
});
formatter.result({
  "duration": 4197432000,
  "status": "failed",
  "error_message": "java.lang.AssertionError: Not able to locate element : Company text box with locator :company\r\n\tat org.testng.Assert.fail(Assert.java:83)\r\n\tat continuum.cucumber.WebdriverWrapper.getWebElement(WebdriverWrapper.java:129)\r\n\tat continuum.cucumber.WebdriverWrapper.clearandSendKeys(WebdriverWrapper.java:665)\r\n\tat continuum.cucumber.Page.ConnectwisePage.loginToconnectwise(ConnectwisePage.java:62)\r\n\tat continuum.cucumber.stepDefinations.StepDefinations.user_is_login_to_ConnectWise_portal(StepDefinations.java:38)\r\n\tat ✽.Given User is login to Connectwise portal(PSAtoNOCTicket.feature:19)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"company\"}\n  (Session info: chrome\u003d53.0.2785.116)\n  (Driver info: chromedriver\u003d2.20.353145 (343b531d31eeb933ec778dbcf7081628a1396067),platform\u003dWindows NT 6.1 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 8 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027RMM-LT-618\u0027, ip: \u0027192.168.0.101\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_79\u0027\n*** Element info: {Using\u003did, value\u003dcompany}\nSession ID: f30ad8386fb6a2d2724a678df39562e2\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{platform\u003dXP, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, browserName\u003dchrome, chrome\u003d{userDataDir\u003dC:\\Users\\SNEHA~1.CHE\\AppData\\Local\\Temp\\scoped_dir28572_21438}, rotatable\u003dfalse, locationContextEnabled\u003dtrue, mobileEmulationEnabled\u003dfalse, version\u003d53.0.2785.116, takesHeapSnapshot\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, browserConnectionEnabled\u003dfalse, webStorageEnabled\u003dtrue, nativeEvents\u003dtrue, hasTouchScreen\u003dfalse, applicationCacheEnabled\u003dfalse, takesScreenshot\u003dtrue}]\nCommand duration or timeout: 261 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027RMM-LT-618\u0027, ip: \u0027192.168.0.101\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_79\u0027\n*** Element info: {Using\u003did, value\u003dcompany}\nSession ID: 244f3079-92df-48a0-9a29-22a9e29bb787\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities [{platform\u003dXP, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, browserName\u003dchrome, chrome\u003d{userDataDir\u003dC:\\Users\\SNEHA~1.CHE\\AppData\\Local\\Temp\\scoped_dir28572_21438}, rotatable\u003dfalse, locationContextEnabled\u003dtrue, mobileEmulationEnabled\u003dfalse, webdriver.remote.sessionid\u003d244f3079-92df-48a0-9a29-22a9e29bb787, version\u003d53.0.2785.116, takesHeapSnapshot\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, browserConnectionEnabled\u003dfalse, webStorageEnabled\u003dtrue, nativeEvents\u003dtrue, hasTouchScreen\u003dfalse, applicationCacheEnabled\u003dfalse, takesScreenshot\u003dtrue}]\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:413)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat continuum.cucumber.WebdriverWrapper.getWebElement(WebdriverWrapper.java:106)\r\n\tat continuum.cucumber.WebdriverWrapper.clearandSendKeys(WebdriverWrapper.java:665)\r\n\tat continuum.cucumber.Page.ConnectwisePage.loginToconnectwise(ConnectwisePage.java:62)\r\n\tat continuum.cucumber.stepDefinations.StepDefinations.user_is_login_to_ConnectWise_portal(StepDefinations.java:38)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:606)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:606)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:295)\r\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:84)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:90)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:203)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:155)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:103)\r\nCaused by: org.openqa.selenium.remote.ScreenshotException: Screen shot has been taken\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027RMM-LT-618\u0027, ip: \u0027192.168.0.101\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_79\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:138)\r\n\t... 53 more\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"company\"}\n  (Session info: chrome\u003d53.0.2785.116)\n  (Driver info: chromedriver\u003d2.20.353145 (343b531d31eeb933ec778dbcf7081628a1396067),platform\u003dWindows NT 6.1 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 8 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027RMM-LT-618\u0027, ip: \u0027192.168.0.101\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_79\u0027\n*** Element info: {Using\u003did, value\u003dcompany}\nSession ID: f30ad8386fb6a2d2724a678df39562e2\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{platform\u003dXP, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, browserName\u003dchrome, chrome\u003d{userDataDir\u003dC:\\Users\\SNEHA~1.CHE\\AppData\\Local\\Temp\\scoped_dir28572_21438}, rotatable\u003dfalse, locationContextEnabled\u003dtrue, mobileEmulationEnabled\u003dfalse, version\u003d53.0.2785.116, takesHeapSnapshot\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, browserConnectionEnabled\u003dfalse, webStorageEnabled\u003dtrue, nativeEvents\u003dtrue, hasTouchScreen\u003dfalse, applicationCacheEnabled\u003dfalse, takesScreenshot\u003dtrue}]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027RMM-LT-618\u0027, ip: \u0027192.168.0.101\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_79\u0027\nDriver info: driver.version: EventFiringWebDriver\r\n\tat sun.reflect.GeneratedConstructorAccessor23.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:413)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat sun.reflect.GeneratedMethodAccessor19.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$2.invoke(EventFiringWebDriver.java:103)\r\n\tat com.sun.proxy.$Proxy1.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:188)\r\n\tat org.openqa.selenium.remote.server.handler.FindElement.call(FindElement.java:48)\r\n\tat org.openqa.selenium.remote.server.handler.FindElement.call(FindElement.java:1)\r\n\tat java.util.concurrent.FutureTask.run(Unknown Source)\r\n\tat org.openqa.selenium.remote.server.DefaultSession$1.run(DefaultSession.java:176)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source)\r\n\tat java.lang.Thread.run(Unknown Source)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "Resolved",
      "offset": 44
    }
  ],
  "location": "StepDefinations.update_ticket_status_on_Connectwise_portal(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.user_is_login_to_NOC_portal()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "NOC Completed",
      "offset": 54
    }
  ],
  "location": "StepDefinations.verify_corresponding_status_is_updated_on_NOC_portal(String)"
});
formatter.result({
  "status": "skipped"
});
});