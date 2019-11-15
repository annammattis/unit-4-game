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
var totalScore = 0;

$('#wins').text(wins);
$('#losses').text(losses);

//game reset

function reset(){
    number = Math.floor(Math.random()*101+19);
    console.log(number)
    $('#number').text(number);
    crystal1= Math.floor(Math.random()*11+1);
    crystal2= Math.floor(Math.random()*11+1);
    crystal3= Math.floor(Math.random()*11+1);
    crystal4= Math.floor(Math.random()*11+1);
    totalScore= 0;
    $('#totalScore').text(totalScore);
    } 

    //add wins to the totalScore
    function win(){
    alert("You won!");
      wins++; 
      $('#wins').text(wins);
      reset();
    }
    //add loses to the totalScore
    function lose(){
    alert ("You lose!");
      losses++;
      $('#losses').text(losses);
      reset()
    }

        //set up jewel clicks
        $('#crystal-one').on ('click', function(){
            userTotal = userTotal + num1;
            console.log("New userTotal= " + userTotal);
            $('#finalTotal').text(userTotal); 

        //sets win/lose conditions
                if (userTotal == Random){
                yay();
                }
                else if ( userTotal > Random){
                loser();
                }   
        })  
        $('#crystal-two').on ('click', function(){
            userTotal = userTotal + num2;
            console.log("New userTotal= " + userTotal);
            $('#finalTotal').text(userTotal); 
                if (userTotal == Random){
                yay();
                }
                else if ( userTotal > Random){
                loser();
                } 
        })  
        $('#crystal-three').on ('click', function(){
            userTotal = userTotal + num3;
            console.log("New userTotal= " + userTotal);
            $('#finalTotal').text(userTotal);

        //sets win/lose conditions
            if (userTotal == Random){
            yay();
            }
            else if ( userTotal > Random){
            loser();
            } 
          })  
        $('#crystal-four').on ('click', function(){
            userTotal = userTotal + num4;
            console.log("New userTotal= " + userTotal);
            $('#finalTotal').text(userTotal); 
            
                if (userTotal == Random){
                yay();
                }
                else if ( userTotal > Random){
                loser();
                }
        });   
    }); 


}





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