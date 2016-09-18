Feature: As a user status I want to create ticket on PSA Connectwise with different status and update corrsponding status on NOC

@PSATest
Scenario Outline: As an MSP, I want to assign tickets to NOC from Connectwise PSA with different status and verify mapped status in NOC

Given User is login to Connectwise portal
When  User is able to create ticket in ConnectWise portal for "<Company>", "<Board>"
Then Verify ticket created in PSA Database 
And Verify same ticket is created in NOC
 
  
Examples: 
|Company           |Board        |Member  |
| 02mar2013testMDM5| RESTSerBoard|PSADTTM6|

@PSATest
 Scenario Outline: Verify PSA ticket status is correspondingly updated on NOC portal  

 Given User is login to Connectwise portal
 When Update ticket status on Connectwise portal "<ConnectwiseStatus>"
 Then User is login to NOC portal 
 And Verify corresponding status is updated on NOC portal "<NOCStatus>"
  
Examples: 
 |ConnectwiseStatus   |NOCStatus       |
 | Assigned to NOC    |New,Acknowldge  |
 |Resolved            |NOC Completed|






 



 