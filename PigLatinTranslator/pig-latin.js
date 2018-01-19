// var allArguments = process.argv.slice(2);


// var pigL = [];

// function pigLatin(allArguments) {
//   for (var i = 0; i < allArguments.length; i++) {
//     var word = allArguments[i];
//     var newString = [];
//     for (var j = 0; j < word.length; i++) {
//       newString.push(word[j]);
//     }

//   }
// }

// access each argument using a for loop
// you now have each word
// find a way to move first letter in a word to the end
//


// var allArguments = process.argv.slice(2);


// function pigLatin(allArguments) {
//   var pigLatinFinal = [];
//   var string = '';
//   for (var i = 0; i <= allArguments.length - 1; i++) {
//     string = allArguments[i];
//     var stringRev = [];
//     for (var j = 0;j <= string.length - 1; j++) {
//       stringRev.push(string[j]);
//     }
//     stringRev.push(stringRev[0]);
//     stringRev.shift();
//     stringRev.push('ay');
//     pigLatinFinal.push(stringRev.join(''));
//  }

// return pigLatinFinal;
// }

// console.log(pigLatin(allArguments));




var allArguments = process.argv.slice(2);

var pigLatinFinal = [];
var string = '';
function pigLatin(allArguments) {
 for (var i = 0; i < allArguments.length; i++) {
   string = allArguments[i];
   var stringRev = [];
   for (var j = 0;j < string.length; j++) {
     stringRev.push(string[j]);
   }
   stringRev.push(stringRev[0]);
   stringRev.shift();
   stringRev.push('ay');
   pigLatinFinal.push(stringRev.join(''));
 }
return pigLatinFinal;
}

console.log(pigLatin(allArguments));