// Assignment code here
var passwordLength = 8;
var symbol = ['!', '@', '#', '$', '%', '^', '&','*','(',')','_','+','{','}']
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var lowerCaseLetter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseLetter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var allCharacters = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//create a function containing generatePassword
function generatePassword(){

  //add values for password length, special characters, uppercase, lowercase and numbers
  var length = prompt('Choose your values to the length of your password (8-128)');
  function length(){
    var passwordlength = 8 >= 128;
    return;
  }

  var number = prompt("Do you want to add numbers on your password?");
    function number(){
      var passwordNumber = '0 1 2 3 4 5 6 7 8 9' ;
      return;
    }

  var symbol = prompt('Do you want to add symbols on your password?');
  function symbol(){
    var passwordSpecialCharacters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    return;
  }

  var symbol = prompt('Do you want to add Upper Case letters?');
  function letter(){
    if (letter == true);   var passwordLowerCase = 'abcdefghijklmnopqrstuvwxyz'
    }


    var password = " ";
    for (var i=0; i <= 128; i++){
      var randomPassword = Math.floor(Math.random()* chars.length);
      password =  randomNumber + chars.substring(randomNumber, randomNumber +1);
    }
    
//show it on screen
  return;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

