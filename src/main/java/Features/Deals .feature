Feature: deal data creation
Scenario: CRMPRO create new deal 
Given user launch the CRMPRO Login page
When title of page is CRMPRO
Then user enters user name and password
| ghadeermoh | Ghadeer25 |
And user clicks login button 
Then user is in home page
Then user mouseover deals link and click on new deal
Then user enters deal details 
|test deal|Excees|10|100|

