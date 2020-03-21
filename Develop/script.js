// Assignment Code
var generateBtn = document.querySelector("#generate");

var userPassword = [];
var upperCaseLettersArr = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90,];
var lowerCaseLetters = [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 118, 120, 121, 122,];
var specialCharacters = [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 63, 67];
var numbers = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];

var numOfCharAnswer = undefined; 

var ranUpperCase = String.fromCharCode(Math.floor(Math.random() * (90 - 65)) + 65)
var ranLowerCase = String.fromCharCode(Math.floor(Math.random() * (122 - 97)) + 97)
var ranSpecialChar = String.fromCharCode(Math.floor(Math.random() * (67 - 30)) + 30)
var ranNumber = String.fromCharCode(Math.floor(Math.random() * (57 - 48)) + 48)
console.log(ranUpperCase);
console.log(ranLowerCase);
console.log(ranSpecialChar);
console.log(ranNumber); 

buttomElement = document.querySelector("#generate");
generateBtn.addEventListener("click", function () {
  UserQues();
});
//List of questions regarding password preference

function UserQues () {
  numOfCharAnswer = Number(prompt("How many characters do you want?"));
  while (numOfCharAnswer > 128 || numOfCharAnswer < 8) {
    alert("Has to be a number between 8 to 128");
    numOfCharAnswer = Number(prompt("How many characters do you want?"));
  }
  specialCharAnswer = confirm("Do you want to use an special character?");
  if (specialCharAnswer == true) {
    userPassword.push(ranSpecialChar)
    console.log(userPassword);
  }
  lowerCharAnswer = confirm("Do you want to use a lowercase letter?");
  if (lowerCharAnswer == true) {
    userPassword.push(ranLowerCase); 
  }
  numCharAnswer = confirm("Do you want to use a number?");
  if (numCharAnswer == true) {
    userPassword.push(ranNumber); 
  }
  upperCharAnswer = confirm("Do you want to use an uppercase letter?");
  if (upperCharAnswer == true) {
    userPassword.push(ranUpperCase); 
  }

  console.log(userPassword);

  document.querySelector("#password").placeholder = userPassword.join('');
  
  if (upperCharAnswer == false &&
    specialCharAnswer == false &&
    lowerCharAnswer == false &&
    numCharAnswer == false) {

    alert("You have to select an option");
    UserQues();
    }
    return userPassword; 
}
 
// document.querySelector("#password").placeholder = result;
// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword()
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
