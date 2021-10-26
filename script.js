var generateBtn = document.querySelector("#generate");
var smalls = "abcdefghijklmnopqrstuvwxyz";
var biggie = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
var numChar = "0123456789";
var smblsChar = "!#$%&'()*+-./:;<=>?@[\^_`{|}~";

function generatePassword() {
    var password = "";
    var passwordChar = "";

  // alert box to select number of characters for password //
    var passwordLengthUser = prompt("How many would you like?");
    passwordLengthUser = parseInt(passwordLengthUser);
    if (passwordLengthUser < 8) {
    alert("8 is the minimum");
    return "";
}
    
    if (passwordLengthUser > 128) {
    alert("No more than 128 buddy!");
    return ""
}
  //add upper case letters
    var capsCharactersChoice = confirm("Include the capital letters?")
    if (capsCharactersChoice) {
    passwordChar += biggieChar;
}

        //add lower letters
    var lowerCharactersChoice = confirm("Include lowercase letters?");
    if (lowerCharactersChoice) {
    passwordChar += smallsChar;
}
  // add numbers
    var numberCharactersChoice = confirm("Numbers?");
    if (numberCharactersChoice) {
    passwordChar += numChar;
    }
  // add symbols characters
    var symbolsCharacterChoice = confirm("Symbols/ Special Characters?");
    if (symbolsCharacterChoice) {
    passwordChar += smblsChar;
    }
    for (var i = 0; i < passwordLengthUser; i++) {
    password += passwordChar[Math.floor(Math.random() * passwordChar.length)]
    }

  // show password
    function writePassword(password) {
    var pwTextArea = document.getElementById("password");

    pwTextArea.value = password;
    return;
}

    writePassword(password)
}
generateBtn.addEventListener("click", generatePassword);
