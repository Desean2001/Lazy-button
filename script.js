// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLengthPrompt;
var uppercasePrompt;
var lowercasePrompt;
var numericPrompt;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var lengthPrompt = "Please type a number between 8 and 128 to determine the length of the password.";
var upperPrompt = "Would you like to use Uppercase letters in your password? (Type yes or no)";
var lowerPrompt = "Would you like to use Lowercase letters in your password? (Type yes or no)";
var numberPrompt = "Would you like to use Numbers in your password? (Type yes or no)";

function criteriaPrompt(criteria) {
  return prompt (criteria);
}

// Created a function to determine input for the length variable
// It takes the input and unless it falls in the condition it calls it again
// If the answer falls in the correct catagory it will reassign it to a different variable and return that
function length () {
  let passwordLengthPrompt = criteriaPrompt (lengthPrompt);
  if (passwordLengthPrompt > 128 && passwordLengthPrompt < 8) {
    length ();
  } else if (passwordLengthPrompt >= 8 && passwordLengthPrompt <= 128) {
    return passwordLengthPrompt;
  } else {
    length ();
  }
}

// Created a function to determine input for determining whether or not to use Uppercase 
function uppercase () {
  let uppercasePrompt = criteriaPrompt (upperPrompt);
  if (uppercasePrompt == "yes" || uppercasePrompt == "Yes") {
    return uppercasePrompt;
  } else if (uppercasePrompt == "no" || uppercasePrompt == "No") {
    return uppercasePrompt;
  } else {
    uppercase ();
  }
}

function lowercase () {
  let lowercasePrompt = criteriaPrompt (lowerPrompt);
  if (lowercasePrompt == "yes" || lowercasePrompt == "Yes") {
    return lowercasePrompt;
  } else if (lowercasePrompt == "no" || lowercasePrompt == "No") {
    return lowercasePrompt;
  } else {
    lowercase ();
  }
}

function numeric () {
  let numericPrompt = criteriaPrompt (numberPrompt);
  if (numericPrompt == "yes" || numericPrompt == "Yes") {
    return numericPrompt;
  } else if (numericPrompt == "no" || numericPrompt == "No") {
    return numericPrompt;
  } else {
    numeric ();
  }
}

function generatePassword () {
  var a = length ();
  var b = uppercase ();
  var c = lowercase ();
  var d = numeric ();
  return;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);