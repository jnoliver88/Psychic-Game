//Setting variables //

var won = 0;
var lost = 0;
var attempts = 10;
var empty = [];
var ranLetter = ranLetter;
var letters = "abcdefghijklmnopqrstuvwxyz";


//Attempting to create a secret letter from computer//
ranLetter = letters[Math.floor(Math.random()* letters.lengh)];
console.log(ranLetter);