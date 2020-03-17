// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseLetters = upperCaseLetters.toLowerCase();
var specialCharacters = "!@#$%^&*()_+-";
//List of questions regarding password preference
var userSelect = {
  numOfCharacters: function () {
    numOfCharAnswer = prompt("How many characters do you want?");
  },
  upperChar: function () {
    upperCharAnswer = confirm("Do you want to use an uppercase letter?");
    if (upperCharAnswer === true) {
      var result = "";
      result += upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
    } else {
      alert("No uppercase letter has been selected");
    };
    return result;
  },

  specialChar: function () {
    specialCharAnswer = confirm("Do you want to use an special character?");
    if (upperCharAnswer === true) {
      var result = "";
      result += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    } else {
      alert("No special character has been selected");
    };
    return result;
  },

  lowerChar: function () {
    lowerCharAnswer = confirm("Do you want to use a lowercase letter?");
    if (lowerCharAnswer === true) {
      var result = "";
      result += lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
    } else {
      alert("No lowercase letter has been selected");
    };
    return result;
  },
  numChar: function () {
    numCharAnswer = confirm("Do you want to use a number?");
    if (numCharAnswer === true) {
      var result = "";
      result += Math.floor(Math.random() * 127) + 1;
    } else {
      alert("No number has been selected");
    };
    return result;
  }
};
// Write password to the #password input
function writePassword() {
  generateBtn.addEventListener("click", createPassword);
  // var passwordText = document.querySelector("#password");
  // passwordText.value = password;
  var upperCharResult = userSelect.upperChar();
  var specialCharResult = userSelect.specialChar();
  var lowerCharResult = userSelect.lowerChar();
  var numCharResult = userSelect.numChar();
  const userResult = upperCharResult + specialCharResult + lowerCharResult + numCharResult;
  console.log(userResult);
  document.getElementById("password").placeholder = userResult;
}
////look up document object add text and button click
// Add event listener to generate button

//User is going to be questioned regarding password preference
function createPassword() {
  numOfCharAnswer = prompt("How many characters do you want?\nHas to be a number between 8 and 128");
  while (numOfCharAnswer > 128 || numOfCharAnswer < 8) {
    alert("Has to be a number between 8 to 128");
    numOfCharAnswer = prompt("How many characters do you want?");
    //User won't be able to continue if they select an option less than 8 or more than 128 
  }
  alert("Thank you");
  writePassword();
}


