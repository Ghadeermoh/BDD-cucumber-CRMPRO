Feature: CRMPRO create contacts
Scenario Outline: CRMPRO create new contact 
Given user launch the CRMPRO Login page
When title of page is CRMPRO
Then user enters "<user name>" and "<password>" 
And user clicks login button 
Then user is in home page
Then user mouseover contacts link and click on new contact 
Then user enters contact details"<firstname>" and "<lastname>" and "<position>"
Then close the browser

Examples:
 |user name | password | firstname | lastname | position | 
 |ghadeermoh | Ghadeer25 | Ahmed | mohamed | IT Manager |
 |ghadeermoh | Ghadeer25 | Amr | Diab | Singer|