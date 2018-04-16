
// Representing Cards: A players hand is stored in an array. Each index is a
// card value.  The card rank is as follows (from lowest to highest):
// `'2','3','4','5','6','7','8','9','T','J','Q','K','A'`.  Hands are
// passed to the fullstackJack functions as arguments, see the examples below.

// // player1Hand = ['A', '7', '8'];
// // player2Hand = ['K', '5', '9'];
// fullstackJack(['A', '7', '8'], ['K', '5', '9']);
// // --> returns "Player 1 wins 2 to 1!"


// fullstackJack(['K', 'Q', 'J'], ['Q', 'K', 'J'])
// // --> returns  "Tie!"


function fullstackJack(player1,player2){
  var rank = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
  var player1Score = 0;
  var player2Score = 0;
  var msg;

  for(idx = 0;idx < player1.length;idx++){
    if(rank.indexOf(player1[idx]) > rank.indexOf(player2[idx])){
      player1Score++;
    }
    else if(rank.indexOf(player1[idx]) < rank.indexOf(player2[idx])){
      player2Score++;
    }
    else{
    }
  }


  if(player1Score > player2Score){
    msg = "Player 1 wins " + player1Score + " to " + player2Score + "!";
  }
  else if(player1Score < player2Score){
    msg = "Player 2 wins " + player2Score + " to " + player1Score + "!";
  }
  else{
    msg = "Tie!";
  }
  return msg;
}







// TESTS
console.log(fullstackJack(['A', '7', '8'], ['K', '5', '9']));
// logs ==> 'Player 1 wins 2 to 1!'

console.log(fullstackJack(['K', 'Q', 'J'], ['Q', 'K', 'J']));
// logs ==> returns "Tie!";
