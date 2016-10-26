Feature: As a user status I want to create ticket on NOC with different status and verify mapped status in PSA-Connectwise


Background:
    Given User is login to Connectwise portal
@PSATest3
Scenario Outline: Verify ticket created in NOC is created in PSA 

 Given User is login to NOC portal 
 When  User is able to create ticket in NOC portal for "<Member>", "<Site>","<Resource>" with status in "<Datasheet>"
 Then Veirfy ticket created in Database 
 And Verify same ticket is created in PSA-ConnectWise
 And Verify status is updated in Connectwise according to status mapped in sheet "<Datasheet >" 
  
Examples: 
 |Member   |Site           |Resource|Datasheet      |Environment|
 | PSADTTM6|PSADTM6-site1 |VOREX2  |DemoSprint.xlsx |DT         |


 @PSATest2
Scenario Outline:  As a user status I want to create ticket on IHD Helpdesk with different status and verify mapped status in PSA-Connectwise

 Given User is able to login to Helpdesk portal "<Environment>"
 When  User is able to create ticket in Helpdesk portal for "<Member>", "<Site>","<Resource>" with status in "<DataSheet>"
 Then Veirfy ticket created in  Database 
 And Verify same ticket is created in PSA-ConnectWise
 And Verify status is updated accodring to status mapped in sheet "<DataSheet>" 
  
Examples: 
 |Member   |Site           |Resource|Datasheet      |Environment|
 | PSADTTM6|PSADTM6-site1 |VOREX2  |DemoSprint.xlsx |DT         |