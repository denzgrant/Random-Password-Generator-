// Assignment Code
const generateBtn = document.querySelector("#generate");
const clearForm = document.querySelector(".btn");

// const possipleCharacterSlection = [0,1,2,3,4,5,6,7,8,9,0,]
const userPassword = [];


//user selection will add a character to final password 
const ranLowerCase = ['abcdefghijklmnopqrstuvwxyz']
const ranUpperCase = ranLowerCase.toString().toUpperCase().split();
console.log(ranUpperCase)
const ranSpecialChar = ['~!@#$%^&*()_+:;.,']
console.log(ranSpecialChar)
const ranNumber = ['1234567890']
console.log(ranNumber)

//Generate button will start the questions for the user 
generateBtn.addEventListener("click", function () {
 numberCharQ(); 
});

//List of questions regarding password preference

let numOfCharAnswer;

let numberCharQ = () => { 
  let numOfCharAnswer = Number(prompt("How many characters do you want?"));
  while (numOfCharAnswer > 128 || numOfCharAnswer < 8) {
    alert("Has to be a number between 8 to 128");
    numOfCharAnswer = Number(prompt("How many characters do you want?"));
  }
  let charNum = parseInt(numOfCharAnswer);
  return charNum; 
 }
charNum = numberCharQ();
 console.log(charNum) 

 specialCharAnswer = confirm("Do you want to use an special character?");
 if (specialCharAnswer == true) {
   userPassword.push(ranSpecialChar)
  
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
 let stringArray = [...ranLowerCase, ...ranUpperCase, ...ranSpecialChar, ...ranNumber];
 userSelection = stringArray.join('')

 console.log(userSelection); 

 if (upperCharAnswer == false &&
   specialCharAnswer == false &&
   lowerCharAnswer == false &&
   numCharAnswer == false) {

   alert("You have to select an option");
   UserQues();
 }
 for (var i = 0; i < charNum; i++) {
  let randomElement = userSelection[Math.floor(Math.random() * userSelection.length )];
  console.log(userSelection.length)
  console.log(randomElement); 
}


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