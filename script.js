// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword () {
  length ();
}

// Created a function to determine input for the length variable
// It takes the input and unless it falls in the condition it calls it again
// If the answer falls in the correct catagory it will reassign it to a different variable and return that
function length () {
  var passwordLengthPrompt = prompt ("Please type a number between 8 and 128 to determine the length of the password.");
  if (passwordLengthPrompt > 128 && passwordLengthPrompt < 8) {
    length ();
  } else if (passwordLengthPrompt >= 8 && passwordLengthPrompt <= 128) {
    passwordLengthPrompt = passwordLength;
    return passwordLength;
  } else {
    length ();
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);