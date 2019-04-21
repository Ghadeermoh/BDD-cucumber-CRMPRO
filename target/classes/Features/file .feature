Feature: CRMPRO Login 
This feature verify Login Functionality 
Scenario: Check login in CRMPRO with user name and password
Given user launch the CRMPRO Login page
When title of page is CRMPRO
Then user enters "ghadeermoh" and "Ghadeer25" 
And user clicks login button 
Then user is in home page
Then close the browser