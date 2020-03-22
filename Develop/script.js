// Assignment Code
var generateBtn = document.querySelector("#generate");
var clearForm = document.querySelector(".btn");

var userPassword = [];
var upperCaseLettersArr = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90,];
var lowerCaseLetters = [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 118, 120, 121, 122,];
var specialCharacters = [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 63, 67];
var numbers = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];



//user selection will add a character to final password 
var ranUpperCase = String.fromCharCode(Math.floor(Math.random() * (90 - 65)) + 65)
var ranLowerCase = String.fromCharCode(Math.floor(Math.random() * (122 - 97)) + 97)
var ranSpecialChar = String.fromCharCode(Math.floor(Math.random() * (67 - 30)) + 30)
var ranNumber = String.fromCharCode(Math.floor(Math.random() * (57 - 48)) + 48)

//Generate button will start the questions for the user 
generateBtn.addEventListener("click", function () {
  UserQues();
});

//List of questions regarding password preference
var selectedChars = [];
function UserQues() { 
  numOfCharAnswer = Number(prompt("How many characters do you want?"));
  while (numOfCharAnswer > 128 || numOfCharAnswer < 8) {
    alert("Has to be a number between 8 to 128");
    numOfCharAnswer = Number(prompt("How many characters do you want?"));
  }
  console.log(numOfCharAnswer);
  specialCharAnswer = confirm("Do you want to use an special character?");
  if (specialCharAnswer == true) {
    selectedChars.push(ranSpecialChar)
    console.log(selectedChars);
  }
  lowerCharAnswer = confirm("Do you want to use a lowercase letter?");
  if (lowerCharAnswer == true) {
    selectedChars.push(ranLowerCase);
  }
  numCharAnswer = confirm("Do you want to use a number?");
  if (numCharAnswer == true) {
    selectedChars.push(ranNumber);
  }
  upperCharAnswer = confirm("Do you want to use an uppercase letter?");
  if (upperCharAnswer == true) {
    selectedChars.push(ranUpperCase);
  }

  if (upperCharAnswer == false &&
    specialCharAnswer == false &&
    lowerCharAnswer == false &&
    numCharAnswer == false) {

    alert("You have to select an option");
    UserQues();
  }
  //User selects all options
  if (upperCharAnswer == true &&
    specialCharAnswer == true &&
    lowerCharAnswer == true &&
    numCharAnswer == true) {
    var allChars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    for (var i = 0; i < numOfCharAnswer-4; i++) {
      var num = allChars[Math.floor(Math.random() * allChars.length)];
      selectedChars.push(num);
    }
    console.log(selectedChars); 
  }
  //user only selects uppercase letters 
  if (upperCharAnswer == true &&
    specialCharAnswer == false &&
    lowerCharAnswer == false &&
    numCharAnswer == false) {
    var allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 0; i < numOfCharAnswer-1; i++) {
      var x = allChars[Math.floor(Math.random() * allChars.length)];
      selectedChars.push(x);
    }
  }
  //user only selects special characters 
  if (upperCharAnswer == false &&
    specialCharAnswer == true &&
    lowerCharAnswer == false &&
    numCharAnswer == false) {
    var allChars = "!@#$%^&*()-+<>";
    for (var i = 0; i < numOfCharAnswer-1; i++) {
      var num = allChars[Math.floor(Math.random() * allChars.length)];
      selectedChars.push(num);
    }
  }
  //user only selects lowercase characters 
  if (upperCharAnswer == false &&
    specialCharAnswer == false &&
    lowerCharAnswer == true &&
    numCharAnswer == false) {
    var allChars = "abcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < numOfCharAnswer-1; i++) {
      var num = allChars[Math.floor(Math.random() * allChars.length)];
      selectedChars.push(num);
    }
  }
  //User only selects numbers
  if (upperCharAnswer == false &&
    specialCharAnswer == false &&
    lowerCharAnswer == false &&
    numCharAnswer == true) {
    for (var i = 0; i < numOfCharAnswer - 1; i++) {
      var num = Math.floor(Math.random() * 9) + 1;
      selectedChars.push(num);
    }
  }

  //User selects everything besides Uppercase letters
  if (upperCharAnswer == false &&
    specialCharAnswer == true &&
    lowerCharAnswer == true &&
    numCharAnswer == true) {
    var allChars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>1234567890";
    for (var i = 0; i < numOfCharAnswer - 3; i++) {
      var num = allChars[Math.floor(Math.random() * allChars.length)];
      selectedChars.push(num);
    }
  }
  //User selects everything besides special characters
  if (upperCharAnswer == true &&
    specialCharAnswer == false &&
    lowerCharAnswer == true &&
    numCharAnswer == true) {
    var allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    for (var i = 0; i < numOfCharAnswer - 3; i++) {
      var num = allChars[Math.floor(Math.random() * allChars.length)];
      selectedChars.push(num);
    }
  }
  //User selects everything besides lowercase characters
  if (upperCharAnswer == true &&
    specialCharAnswer == true &&
    lowerCharAnswer == false &&
    numCharAnswer == true) {
    var allChars = "!@#$%^&*()-+<>ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    for (var i = 0; i < numOfCharAnswer - 3; i++) {
      var num = allChars[Math.floor(Math.random() * allChars.length)];
      selectedChars.push(num);
    }
  }
  //User selects everything besides numbers
  if (upperCharAnswer == true &&
    specialCharAnswer == true &&
    lowerCharAnswer == true &&
    numCharAnswer == false) {
    var allChars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 0; i < numOfCharAnswer - 3; i++) {
      var num = allChars[Math.floor(Math.random() * allChars.length)];
      selectedChars.push(num);
    }
  }
  //User only selects Lowercase letters and numbers
  if (upperCharAnswer == false &&
    specialCharAnswer == false &&
    lowerCharAnswer == true &&
    numCharAnswer == true) {
    var allChars = "abcdefghijklmnopqrstuvwxyz1234567890";
    for (var i = 0; i < numOfCharAnswer - 2; i++) {
      var num = allChars[Math.floor(Math.random() * allChars.length)];
      selectedChars.push(num);
    }
  }
  //User only selects special characters and uppercase letters
  if (upperCharAnswer == true &&
    specialCharAnswer == true &&
    lowerCharAnswer == false &&
    numCharAnswer == false) {
    var allChars = "!@#$%^&*()-+<>ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 0; i < numOfCharAnswer - 2; i++) {
      var num = allChars[Math.floor(Math.random() * allChars.length)];
      selectedChars.push(num);
    }
  }
  //User only selects special characters and lower letters
  if (upperCharAnswer == false &&
    specialCharAnswer == true &&
    lowerCharAnswer == true &&
    numCharAnswer == false) {
    var allChars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()";
    for (var i = 0; i < numOfCharAnswer - 2; i++) {
      var num = allChars[Math.floor(Math.random() * allChars.length)];
      selectedChars.push(num);
    }
  }
   //User only selects uppercase letters and numbers
   if (upperCharAnswer == true &&
    specialCharAnswer == false &&
    lowerCharAnswer == false &&
    numCharAnswer == true) {
    var allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    for (var i = 0; i < numOfCharAnswer - 2; i++) {
      var num = allChars[Math.floor(Math.random() * allChars.length)];
      selectedChars.push(num);
    }
  }
  //User only selects special characters and numbers
  if (upperCharAnswer == false &&
    specialCharAnswer == true &&
    lowerCharAnswer == false &&
    numCharAnswer == true) {
    var allChars = "!@#$%^&*()-+<>1234567890";
    for (var i = 0; i < numOfCharAnswer - 2; i++) {
      var num = allChars[Math.floor(Math.random() * allChars.length)];
      selectedChars.push(num);
    }
  }
  //User only selects uppercase and lowercase 
  if (upperCharAnswer == true &&
    specialCharAnswer == false &&
    lowerCharAnswer == true &&
    numCharAnswer == false) {
    var allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < numOfCharAnswer - 2; i++) {
      var num = allChars[Math.floor(Math.random() * allChars.length)];
      selectedChars.push(num);
    }
  }
  console.log(selectedChars);

  document.querySelector("#password").placeholder = selectedChars.join('');
 
}

