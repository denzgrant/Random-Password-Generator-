// Assignment Code
const generateBtn = document.querySelector("#generate");
const clearForm = document.querySelector(".btn");

let possibleCharacters = "";
let userPassword = [];

//user selection will add a character to final password
const ranLowerCase = "abcdefghijklmnopqrstuvwxyz";
const ranUpperCase = ranLowerCase.toUpperCase();
const ranSpecialChar = "~!@#$%^&*()_+:;.,";
const ranNumber = "1234567890";
let numOfCharAnswer;

//Generate button will start the questions for the user
generateBtn.addEventListener("click", function () {
  numberCharQ();
});

//List of questions regarding password preference

let numberCharQ = () => {
  let charLength = prompt("How many characters do you want?");
  if (charLength === false) {
    return "Good Bye!";
  }
  while (charLength > 128 || charLength < 8) {
    alert("Has to be a number between 8 to 128");
    charLength = prompt("How many characters do you want?");
  }
  numOfCharAnswer = charLength;
  userPrompts();
};

let userPrompts = () => {
  possibleCharacters = ''

  let specialCharAnswer = confirm("Do you want to use an special character?");
  specialCharAnswer ? possibleCharacters = possibleCharacters + ranSpecialChar : "";

  let lowerCharAnswer = confirm("Do you want to use a lowercase letter?");
  lowerCharAnswer ? possibleCharacters = possibleCharacters + ranLowerCase : "";

  let numConfirm = confirm("Do you want to use a number?");
  numConfirm ? possibleCharacters = possibleCharacters + ranNumber : "";

  let upperCharAnswer = confirm("Do you want to use an uppercase letter?");
  upperCharAnswer ? possibleCharacters = possibleCharacters + ranUpperCase : "";

  //Condition to confirm that a citeria was selected 
  if (
    upperCharAnswer === false &&
    specialCharAnswer === false &&
    lowerCharAnswer === false &&
    numConfirm === false
  ) {
    alert("You have to select an option");
    userPrompts();
  }
  console.log(possibleCharacters);
  generatePassword();
};

let generatePassword = () => {
  //loop for each character requested
  console.log(`Password length: ${numOfCharAnswer}`);
  let password = "";
  for (let i = 0; i < numOfCharAnswer; i++) {
    //pick random character from possible characters
    password =
      password +
      possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
  }
  console.log(password);
  let passwordText = document.querySelector('#password');

  passwordText.value = password;

};


