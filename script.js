var generateBtn = document.querySelector("#generate");
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var capsChar = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
var numberChar = "0123456789";
var symbolsChar = "!#$%&'()*+-./:;<=>?@[\^_`{|}~";

function generatePassword() {
  var password = "";
  var passwordChar = "";

  // prompt to select password length
  var passwordLengthUser = prompt("How many would you like?");
  passwordLengthUser = parseInt(passwordLengthUser);
  if (passwordLengthUser < 8) {
    alert("Must have at least 8 characters!");
    return "";
  }
  if (passwordLengthUser > 128) {
    alert("Cannot exceed more than 128 characters!");
    return ""
  }
  //add capscase letters
  var capsCharactersChoice = confirm("Include the capital letters?")
  if (capsCharactersChoice) {
    passwordChar += capsChar;
  }
  //add lower letters
  var lowerCharactersChoice = confirm("Include lowercase letters?");
  if (lowerCharactersChoice) {
    passwordChar += lowerChar;

  }
  // add numbers
  var numberCharactersChoice = confirm("Numbers?");
  if (numberCharactersChoice) {
    passwordChar += numberChar;
  }
  // add symbols characters
  var symbolsCharacterChoice = confirm("Symbols/ Special Characters?");
  if (symbolsCharacterChoice) {
    passwordChar += symbolsChar;
  }
  for (var i = 0; i < passwordLengthUser; i++) {
    password += passwordChar[Math.floor(Math.random() * passwordChar.length)]
  }

  // Write password to the #password input
  function writePassword(password) {
    var pwTextArea = document.getElementById("password");

    pwTextArea.value = password;
    return;

  }
  writePassword(password)
}
generateBtn.addEventListener("click", generatePassword);
