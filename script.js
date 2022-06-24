// Assignment code here
var passwordEl = document.getElementById("password");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbercase = "0123456789";
var specialcase = "!@#$%^&*()_+-=";
var passwordLength = 128;
var passwordHolder = "";
var pw = "";
function generatePassword () {
 var passwordLength = prompt("What is the length of your password?")
 if (passwordLength < 8 || passwordLength > 128) {
  alert("the password length should be greater than 8 or less than 128")
  return generatePassword()
 }
 var upperConfirm = confirm("would you like upper characters?")
 var lowerConfrim = confirm("would you like lower characters?")
 var numbers = confirm("would you like numbers?")
 var specialCharacters = confirm ("would you like special characters?")

 if (upperConfirm) {
  passwordHolder += uppercase 
 }
 if (lowerConfrim) {
  passwordHolder += lowercase
 }
 if (numbers) {
  passwordHolder += numbercase
 }
 if (specialCharacters) {
passwordHolder += specialcase
 }


 
  for (var i = 0; i <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * passwordHolder.length);
    pw += passwordHolder.substring(randomNumber, randomNumber + 1);
  }
  return pw

}

//passwordEl.value = password;

function copyPassword() {
  passwordEl.ariaSelected();
  document.commandId("copy");
}

//generateBtn.addEventListener("click", writePassword);





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
