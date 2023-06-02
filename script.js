// Assignment code here
function optionsPrompts () {
  var characterLength = parseInt(prompt("Choose a length of at least 8 characters and no more than 128 characters"));

}

function generatePassword () {


}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
