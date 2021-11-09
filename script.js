// Assignment code

var length = Number(prompt("How many characters would you like your password to be?"));
while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));

var uppers = confirm("Would you like to use uppercase letters?");
var lowers = confirm("Would you like to use lowercase letters?");
var numbers = confirm("Would you like to use numbers?");
var symbols = confirm("Would you like to use special characters?");

while (!uppers && !lowers && !numbers && !symbols) {
   alert("You must select at least one character type!");
   uppers = confirm("Would you like to use uppercase letters?");
   lowers = confirm("Would you like to use lowercase letters?");
   numbers = confirm("Would you like to use numbers?");
   symbols = confirm("Would you like to use special characters?");
}

window.addEventListener('load', function() {
   generateNewPassword();
});

function generateNewPassword() {
   var password = "";

   var allowed = {};
   if (uppers) password += rando(allowed.uppers = "QWERTYUIOPASDFGHJKLZXCVBNM");
   if (lowers) password += rando(allowed.lowers = "qwertyuiopasdfghjklzxcvbnm");
   if (numbers) password += rando(allowed.numbers = "1234567890");
   if (symbols) password += rando(allowed.symbols = "!@#$%^&*(){}[]=<>/,.");

   for (var i = password.length; i < length; i++) password += rando(rando(allowed).value);

   document.getElementById("password").value = randoSequence(password).join("");
}

function generatePassword() {
  var passwordLength = prompt("Please enter the number of characters you want for you new password.  It must be more than 12 but less than 128.");
  var numbers = confirm("Do you want numbers in your password?");
  var lowerCases = confirm("Do you want lowercases in your password?");
  var upperCases = confirm("Do you want uppercases in your password?");
  var special = confirm("Do you want special characters in your password?");
}

const specialCharacters = "!@#$%^&*()";
const generateButton = document.getElementById('generateBtn')
generateButton.addEventListener('click', writePassword)

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

  function generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }