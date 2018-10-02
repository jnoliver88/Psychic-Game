//Setting variables and zeroing counters (`var attempts` set to 9 yeilds 10 total attempts as numbering begins with zero)
var won = 0;
var lost = 0;
var attempts = 9;
var usedArray = [];
var ranLetter = ranLetter;
var letters = "qwertyuiopasdfghjklzxcvbnm"


//GENERATING THE COMPUTERS SECRET LETTER
//Generates random number (decimal from 0 to 1) which is multiplied by 26 and the rounded down to the nearest whole number by the Math.floor method. 
//ranLetter = letters[Math.floor(Math.random() * letters.length)];
//console.log(ranLetter);

//Uses random whole number generated above to select a random letter from the array [letters] and assigns it to the var ranLetter
function jsGuess() {
      ranLetter = letters[Math.floor(Math.random() * letters.length)];
     console.log(ranLetter);

}

jsGuess();

//CAPTURING THE PLAYERS INPUT
//.onkeyup captures the players input as playerGuess
document.onkeyup = function (event) {
    var sofar = event.key;


if (sofar !== ranLetter) {
      attempts--;

}

      
     //HANDELING INCORRECT GUESSES
      //tests if players guess Does Not Equal ranLetter and decriments attempts by 1
   
       //when remaining attempts equals zero, lost is incrimented by 1; attempts is reset to 10, and used letters array is cleared
       if (attempts == 0) {
        lost++;
        usedArray = []
        attempts = 9;
  }

      
      // HANDELING CORRECT GUESSES
      //test if players guess equals ranLetter, if true it increments wins by 1, and clears used letters array. Supposed to reset guess # to 10 but starts at 9 instead, 
      if (sofar === ranLetter) {
            won++;
            attempts = 9;
            usedArray = [];

      }

     
    
      //HANDELING INCORRECT GUESSES - OUTPUT
      //this 'if' prevents a letter selected a 2nd time from being written to the usedArray again, although it still counts as a guess
      if (usedArray.indexOf(sofar) >= 0) {

      } else {
            //this pushes the players incorrect guess to the usedArray and writes it to the HTML
            usedArray.push(sofar);
            document.getElementById('sofar').innerHTML = usedArray;
            console.log(usedArray);

      }
      //OUTPUT TO HTML
      //these statements write the values/scores generated to the HTML
      document.getElementById('wins').innerHTML = won;
      document.getElementById('losses').innerHTML = lost;
      document.getElementById('attempts').innerHTML = attempts;

}