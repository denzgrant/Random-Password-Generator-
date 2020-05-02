// Assignment Code
const generateBtn = document.querySelector("#generate");
const clearForm = document.querySelector(".btn");

// const possipleCharacterSlection = [0,1,2,3,4,5,6,7,8,9,0,]
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
  while (charLength > 128 || charLength < 8) {
    alert("Has to be a number between 8 to 128");
    charLength = prompt("How many characters do you want?");
  }
  numOfCharAnswer = charLength;
  userPrompts();
};

let userPrompts = () => {
  let specialCharAnswer = confirm("Do you want to use an special character?");
  if (specialCharAnswer === true) {
    possibleCharacters = possibleCharacters + ranSpecialChar;
  }
  let lowerCharAnswer = confirm("Do you want to use a lowercase letter?");
  if (lowerCharAnswer === true) {
    possibleCharacters = possibleCharacters + ranLowerCase;
  }
  let numConfrim = confirm("Do you want to use a number?");
  if (numConfrim === true) {
    possibleCharacters = possibleCharacters + ranNumber;
  }
  let upperCharAnswer = confirm("Do you want to use an uppercase letter?");
  if (upperCharAnswer === true) {
    possibleCharacters = possibleCharacters + ranUpperCase;
  }
  //Condition to confirm that a citeria was selected 
  if (
    upperCharAnswer === false &&
    specialCharAnswer === false &&
    lowerCharAnswer === false &&
    numConfrim === false
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


