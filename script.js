// Assignment Code
const generateBtn = document.querySelector("#generate");
const clearForm = document.querySelector(".btn");

// const possipleCharacterSlection = [0,1,2,3,4,5,6,7,8,9,0,]
var userPassword = [];


//user selection will add a character to final password 
const ranLowerCase = ['abcdefghijklmnopqrstuvwxyz']
const ranUpperCase = ranLowerCase.toString().toUpperCase().split();
const ranSpecialChar = ['~!@#$%^&*()_+:;.,']
const ranNumber = ['1234567890']

//Generate button will start the questions for the user 
generateBtn.addEventListener("click", function () {
 numberCharQ(); 
});

//List of questions regarding password preference

let numOfCharAnswer;

let numberCharQ = () => { 
  let numOfCharAnswer = prompt("How many characters do you want?");
  userPrompts();
  while (numOfCharAnswer > 128 || numOfCharAnswer < 8) {
    alert("Has to be a number between 8 to 128");
    numOfCharAnswer = prompt("How many characters do you want?");
  }
  return numOfCharAnswer
 }
console.log(numOfCharAnswer);

 let userPrompts = () => {
 specialCharAnswer = confirm("Do you want to use an special character?");
 if (specialCharAnswer === true) {
   userPassword += [...userPassword, specialCharAnswer]
   return userPassword
 }
 lowerCharAnswer = confirm("Do you want to use a lowercase letter?");
 if (lowerCharAnswer === true) {
   userPassword += [...userPassword, lowerCharAnswer];
   return userPassword
 }
 numCharAnswer = confirm("Do you want to use a number?");
 if (numCharAnswer === true) {
   userPassword += [...userPassword, numOfCharAnswer];
   return userPassword
 }
 upperCharAnswer = confirm("Do you want to use an uppercase letter?");
 if (upperCharAnswer === true) {
   userPassword += [...userPassword,ranUpperCase];
   return userPassword; 
 }

 
 if (upperCharAnswer == false &&
   specialCharAnswer == false &&
   lowerCharAnswer == false &&
   numCharAnswer == false) {

   alert("You have to select an option");
   userPrompts(); 
 }
 }
 
 console.log(userPassword);
 //use spread to put ran vars if confirm is true
//  let stringArray = [...ranLowerCase, ...ranUpperCase, ...ranSpecialChar, ...ranNumber];
//  userSelection = stringArray.join('')

//  console.log(userSelection); 

//  for (var i = 0; i < charNum; i++) {
//   let randomElement = userSelection[Math.floor(Math.random() * userSelection.length )];
// }

// console.log(userSelection.length)
// console.log(randomElement); 
// let passwordType = (char) => {
//   confirm("Do you want a " + char + "?")
//   if (passwordType === true) {
//     console.log("test")
//   }
// }

// passwordType("Number?");
// passwordType("Special Character?");
// passwordType("Uppercase letter?");
// passwordType("Lowercase letter?");