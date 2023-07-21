# Lazy-button
A button that generates passwords based on responses to questions asked to the user.


User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```


This program, when activated by the user by clicking the generate button, will give the user a series of prompts, brought up by the prompt command. 
Credit to W3schools for their webpage explaining prompts.

It asks the user about various criteria with which they can use to make their password unique. 

The options include Uppercase letters, Lowercase letters, Numbers, and how long the password will be.

If the user responds outside of the bounds required for the prompt, the prompt reappears with the same question till answered properly.

If the user answers no to all questions, an alert is displayed saying that they need to say yes to at least one of the prompts, and then goes back to the beggining. 

The password is then randomly generated based off of the responses recorded in the prompts and it is displayed on the screen where the placeholder used to be.