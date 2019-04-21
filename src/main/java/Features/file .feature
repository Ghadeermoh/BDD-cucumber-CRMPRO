Feature: CRMPRO Login 
This feature verify Login Functionality 
Scenario Outline: Check login in CRMPRO with user name and password
Given user launch the CRMPRO Login page
When title of page is CRMPRO
Then user enters "<user name>" and "<password>" 
And user clicks login button 
Then user is in home page 
Then close the browser
Examples:
| user name | password |
| ghadeermoh | Ghadeer25 |

