Feature: As a user status I want to create ticket on PSA Connectwise with different status and update corrsponding status on NOC

@PSATest
Scenario Outline: As an MSP, I want to assign tickets to NOC from Connectwise PSA

Given User is login to Connectwise portal
When  User is able to create ticket in ConnectWise portal for "<Company>", "<Board>"
Then Verify ticket created in PSA Database 
And User is login to NOC portal 
And Verify same ticket is created in NOC
 
  
Examples: 
|Company       |Board        |Member  |
| PSADTM6-site1| RESTSerBoard|PSADTTM6|

@PSATest1
 Scenario Outline: Verify PSA ticket status is correspondingly updated on NOC portal  

 Given User is login to Connectwise portal
 When Update ticket status on Connectwise portal "<ConnectwiseStatus>"
 Then User is login to NOC portal 
 And Verify corresponding status is updated on NOC portal "<NOCStatus>"
  
Examples: 
 |ConnectwiseStatus   |NOCStatus       |
 | Assigned to NOC    |New,Acknowldge  |
 |Resolved            |NOC Completed|
 |Needs-Info          |Info Needed ,Work assigned by backoffice|
 |In-progress by MSP  |Work in Progress by NOC|
 |Closed              |Closed|
 |Deleted             |Closed|






 



 