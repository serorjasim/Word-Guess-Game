//create an array of words

var words = ["michael", "james", "scott"];

//set number of guesses variable

var numberOfGuesses = 5;

//set win variable

var wins = 0;
var blankDiv = document.getElementById("blanks");

//randomly select word
// var obj = {
//     a: 'hello',
//     b: 'goodbye',
//     c: {
//         a: 'hellogoodbye'
//     }
// };

// var var_hello = obj.c.a;

var event = {
  isTrusted: true,
  key: "z",
  keyMap: "zKey",
  bubbles: false
};

// console.log();

function initializeGame() {
  document.removeEventListener("keydown", initializeGame);
  var guessedLetters = [];
  var randomWord = words[Math.floor(Math.random() * words.length)];
  console.log(randomWord);
  document.addEventListener("keydown", event => {
    var keyPressed = event.key;
    guessedLetters.push(keyPressed);
    console.log(event);

    //when a word is picked, display blank for each letter in word.
    var blankHtml = "";
    for (i = 0; i < randomWord.length; i++) {
      var currentLetter = randomWord[i];
      if (guessedLetters.includes(currentLetter)) {
        blankHtml += "<span>" + currentLetter + "</span>";
      } else {
        blankHtml += "<span>_</span>";
      }
    }

    blankDiv.innerHTML = blankHtml;
    console.log(blankHtml);
    //As the user guesses the correct letters, reveal them: m a d o _ _ a.

    //deduct number of guesses if the user is wrong.

    //Display letter guessed if incorect.

    //If user has won add 1 to win variable or used all guess attempts, pick a new word.

    //display amount of wins.
  });
}

//Press any key to get started!

document.addEventListener("keydown", initializeGame);
