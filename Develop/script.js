var generateBtn = document.querySelector("#generate");
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseLetters = upperCaseLetters.toLowerCase();
var specialCharacters = "!@#$%^&*()_+-";
var numbers = "012345689";
var allChar = upperCaseLetters + lowerCaseLetters + specialCharacters + numbers;
var NoCaps = lowerCaseLetters + specialCharacters + numbers;
//User is going to be questioned regarding password preference
function createPassword() {

  upperChar();
}
//List of questions regarding password preference
function upperChar() {
  upperCharAnswer = confirm("Do you want to use an uppercase letter?");
  if (upperCharAnswer === false) {
    alert("No Upper Character");
  }
  specialChar();
}

function specialChar() {
  specialCharAnswer = confirm("Do you want to use an special character?");
  lowerChar();
}

function lowerChar() {
  lowerCharAnswer = confirm("Do you want to use a lowercase letter?");
  numChar();
}

function numChar() {
  numCharAnswer = confirm("Do you want to use a number?");
  passwordSelection = createPassword + numChar + lowerChar + specialChar + upperChar;
  if (passwordSelection === "") {
    alert("You have to select an option");
  }
  function getRandomPass(number) {
    var result = "";
    for (var i = 0; i < number; i++) {
      result += allChar.charAt(Math.floor(Math.random() * allChar.length));

    }
    console.log(result);
    document.querySelector("#password").placeholder = result;
  }

  var numOfCharAnswer = Number(prompt("How many characters do you want?"));
  while (numOfCharAnswer > 128 || numOfCharAnswer < 8) {
    alert("Has to be a number between 8 to 128");
    numOfCharAnswer = Number(prompt("How many characters do you want?"));
    //User won't be able to continue if they select an option less than 8 or more than 128 
  }
  getRandomPass(numOfCharAnswer);

}
// document.querySelector("#password").placeholder = result;
