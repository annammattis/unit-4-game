$( document ).ready(function() {
// allow for number listed to be between 19-120
var number = Math.round(Math.random() * 121) + 19;

// allow for the 4 crystals to be valued between 1-12
$('#crystals').text(Random);
var crystal1 = Math.round(Math.random() * 13) + 1;
var crystal2 = Math.round(Math.random() * 13) + 1;
var crystal3 = Math.round(Math.random() * 13) + 1;
var crystal4 = Math.round(Math.random() * 13) + 1;

//create variables for wins, losses
var wins = 0;
var losses = 0;
}



// var numOfGuesses;
// var displayWord = [];

// function gameSetUp() {
//   numOfGuesses = 15;
//   randomWord = [Math.floor(Math.random() * words.length)];
//   for (var i = 0; i < randomWord.length; i++) {
//     displayWord.push('_');
//   }
//   console.log('randomWord', randomWord);
//   console.log('displayWord', displayWord);

//   document.getElementById('guessedWord').innerHTML = displayWord.join(' ');
// }

// gameSetUp();