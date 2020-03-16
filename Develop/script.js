// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseLetters = upperCaseLetters.toLowerCase();
var specialCharacters = "!@#$%^&*()_+-";
//List of questions regarding password preference
var userSelect = {
  numOfCharacters: function () {
    numOfCharAnswer = window.prompt("How many characters do you want?");
    if (numOfCharAnswer < 8) {
      alert("Password has to be 8 characters or more");
    } else if (numOfCharAnswer > 128) {
      alert("Password cannot be more than 128 characters");
    }
  },
  upperChar: function () {
    upperCharAnswer = window.prompt("Do you want to use an uppercase letter?");
    if (upperCharAnswer === true) {
      for (var i = 0; i < numOfCharAnswer; i++) {
        result += upperCaseLetters.charAt(Math.floor(Math.random() * upperCaseLetters));
      }
    }
  },
  specialChar: function () {
    specialCharAnswer = window.prompt(
      "Do you want to use an special character?"
    );
    if (specialCharAnswer === true) {
      for (var i = 0; i < numOfCharAnswer; i++) {
        result += specialCharacters.charAt(Math.floor(Math.random() * specialCharacters));
      }
    }
  },
  lowerChar: function () {
    lowerCharAnswer = window.prompt("Do you want to use a lowercase letter?");
    if (lowerCharAnswer === true) {
      for (var i = 0; i < numOfCharAnswer; i++) {
        result += lowerCaseLetters.charAt(Math.floor(Math.random() * lowerCaseLetters));
      }
    }
  },
  numChar: function () {
    numCharAnswer = window.confirm("Do you want to use a number?");
    if (numCharAnswer === true) {
      result += Math.floor(Math.random() * 127) + 1;
    }
  }
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

////look up document object add text and button click

// Add event listener to generate button
generateBtn.addEventListener("click", createPassword);

//User is going to be questioned regarding password preference
// function createPassword() {
//   Object.values(userSelect)
// } 
//Need to find a way to loop through object's values 


