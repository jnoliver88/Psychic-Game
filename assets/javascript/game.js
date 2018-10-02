//Setting variables and zeroing counters (`var attempts` set to 9 yeilds 10 total attempts as numbering begins with zero)
var won = 0;
var lost = 0;
var attempts = 9;
var usedletters = [];
var letters = "qwertyuiopasdfghjklzxcvbnm"


//GENERATING THE COMPUTERS SECRET LETTER
function jsGuess() {
    ranLetter = letters[Math.floor(Math.random() * letters.length)];
    console.log(ranLetter);
    usedletters = [];
}
jsGuess();

//CAPTURING THE PLAYERS INPUT
//.onkeyup captures the players input as playerGuess
document.onkeyup = function (event) {
    var sofar = event.key;

//HANDELING GUESSES - OUTPUT
//this 'if' prevents a letter selected a 2nd time from being written to the usedletters again, although it still counts as a guess
    if (usedletters.indexOf(sofar) >= 0) {

    } else {
        //this pushes the players incorrect guess to the usedletters and writes it to the HTML
        usedletters.push(sofar);
        document.getElementById('sofar').innerHTML = usedletters;
        console.log(usedletters);

    }

    //HANDELING GUESSES
    //tests if players guess Does Not Equal ranLetter and decriments attempts by 1
    if (sofar !== ranLetter) {
        attempts--;
    } else {
        won++;
        attempts = 9;
        usedletters = [];
        jsGuess();
        alert("You did it!");
    }


    //when remaining attempts equals zero, lost is incrimented by 1; attempts is reset to 10, and used letters array is cleared
    if (attempts === 0) {
        lost++;
        usedletters = [];
        attempts = 9;
        jsGuess();
        alert("Try again");
    }

    //OUTPUT TO HTML
    //these statements write the values/scores generated to the HTML
    document.getElementById('wins').innerHTML = won;
    document.getElementById('losses').innerHTML = lost;
    document.getElementById('attempts').innerHTML = attempts;

}