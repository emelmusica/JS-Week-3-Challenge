// Array of special characters to be included in password
var specialCharacters = [
  '@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];

// Assignment code here
function optionsPrompts () {
  var characterLength = parseInt(prompt("Choose a length of at least 8 characters and no more than 128 characters"));
  
  //write some if statements to make sure they chose at least 8 or atleast 128

var includeSpecial = confirm("Do you want to add any special characters?")
var includeNumbers = confirm("Do you want to add any numbers?")
var includeCapitals = confirm("Do you want to add any capital letters?")
var includelowercase = confirm("Do you want to add any lower case letters?")

//Need an if statement to make sure they chose a character type

var characterOptions = {
  characterLength: characterLength,
  includeCapitals: includeCapitals,
  includeNumbers: includeNumbers,
  includeSpecial: includeSpecial,
  includelowercase: includelowercase
}

return characterOptions;
}


// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}


function generatePassword () {
var passwordOptions = optionsPrompts()
var potentialOptions = [];
var guaranteedOptions = [];
var finalResults = [];

if(passwordOptions.includeSpecial){
potentialOptions = potentialOptions.concat(specialCharacters)
guaranteedOptions.push(getRandom(specialCharacters))
}
if(passwordOptions.includeNumbers){
potentialOptions = potentialOptions.concat(numericCharacters)
guaranteedOptions.push(getRandom(numericCharacters))
}
if(passwordOptions.includeCapitals){
potentialOptions = potentialOptions.concat(upperCasedCharacters)
guaranteedOptions.push(getRandom(upperCasedCharacters))
}
if(passwordOptions.includelowercase){
potentialOptions = potentialOptions.concat(lowerCasedCharacters)
guaranteedOptions.push(getRandom(lowerCasedCharacters))
}
//need to use .concat .push for loops
for (var i = 0; i < passwordOptions.characterLength - guaranteedOptions.length; i++) {
  var randomChar = getRandom(potentialOptions);
  finalResults.push(randomChar);
}

finalResults = finalResults.concat(guaranteedOptions);
finalResults = finalResults.join("");

return finalResults;
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
