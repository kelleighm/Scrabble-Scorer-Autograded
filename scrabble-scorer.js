// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

let newPointStructure = transform(oldPointStructure);


function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 };

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some scrabble!");
   word = input.question("Enter a word to score: ");
   // console.log(word);
   // oldScrabbleScorer(word); 
};

////

function scrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = 0;
   for (let i = 0; i < word.length; i++) {
         letterPoints = letterPoints += (newPointStructure[word.charAt(i).toLowerCase()]);
   }
   return letterPoints; 
 };



let simpleScore;

function simpleScorer(word) {
let score = 0; 
word = word.toLowerCase();
      for (i = 0; i < word.length; i++) {
         score = score + 1
      }
   return score;
};

let vowelBonusScore;

function vowelBonusScorer(word) {
let score = 0;
word = word.toLowerCase();
let vowels = ["a", "e", "i", "o", "u"]; 
   for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i])) {
      score = score + 3;
      } else { 
      score = score + 1;
      }
   }
return score;
};

const scoringAlgorithms = [
{name: 'Simple Score', description: 'Each letter is worth 1 point.', scorerFunction: simpleScorer}, 
{name: 'Bonus Vowels', description: 'Vowels are 3 pts, consonants are 1 pt.', scorerFunction: vowelBonusScorer},
{name: 'Scrabble', description: 'The traditional scoring algorithm', scorerFunction: scrabbleScorer}
];


function scorerPrompt() {
   console.log("Which scoring algorithm would you like to use?");
   console.log("0 -", scoringAlgorithms[0].name, ":", scoringAlgorithms[0].description);
   console.log("1 -", scoringAlgorithms[1].name, ":", scoringAlgorithms[1].description);
   console.log("2 -", scoringAlgorithms[2].name, ":", scoringAlgorithms[2].description);
   num = input.question("Enter 0, 1, or 2: ");
      if (num == 0) {
         finalScore = simpleScorer(word)
         return finalScore;
      } else if (num == 1) {
         finalScore = vowelBonusScorer(word);
         return finalScore;
      } else if (num == 2) {
         finalScore = scrabbleScorer(word); 
         return finalScore; 
}
}

function transform() {
   transformObject = {};
   for (key in oldPointStructure) {
      for (i = 0; i < oldPointStructure[key].length; i++) {
         transformObject[oldPointStructure[key][i].toLowerCase()] = +key;
      }
   }
   return transformObject; 
};

function runProgram() {
initialPrompt()
scorerPrompt();
console.log(`Score for ${word}: ${(finalScore)}`);
};

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
