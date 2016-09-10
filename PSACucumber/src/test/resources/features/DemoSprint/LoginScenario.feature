Feature: As a user I can login to NOC portal with valid credentials so that only authorized user have
access to my resources. 

@SmokeTest
Scenario Outline: Verify authorized login

 Given User can navigate to NOC Portal for "<Environment>"
 When Enter Login credentials "<EmailId>" and  "<Password>"
 Then Verify user is login to NOC portal
 And Verify user is able to logout
 Examples: 
 |      EmailId                |  Password  |TestCaseId|SheetName      |Environment|
 | automationBDD@continuum.net |  Abc@12345 | 12345    |DemoSprint.xlsx|DT|
  | sandeep.kale@dtsdm1.net     |  Abc@12345 |12345    |DemoSprint.xlsx|DT|