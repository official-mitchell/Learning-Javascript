// how it works. 
// define how to pick a random word from an array.
// define the arrays
// define the output
// run the wfunction

// credit to JS4k

// Round 2

var randomAdverbs = ["Largley", "Ridiculously", "Absurdly"];
var randomAdjectives = ["Lonley", "Silly", "Ghoulish"];
var randomNouns = ["Mankey", "Git", "Fool"];

var randomAdverb = randomAdverbs[Math.floor(Math.random() * 3)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
var randomNoun = randomNouns[Math.floor(Math.random() * 3)];
var randomString = "You are a " + randomAdverb + " " + randomAdjective + " " + randomNoun;
randomString;

  
