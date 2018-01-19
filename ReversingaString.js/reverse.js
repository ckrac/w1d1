// var clarg = process.argv.slice(2);

// console.log(clarg);

// function revString(clarg) {
//   for (var i = 0; i < clarg.length; i++) {
//     var arg = clarg[i];
//     for (var j = arg.length - 1; j >= 0; j--) {
//       var revString = "";
//       revString += arg[i];
//     }
//   }
//   return clarg;
// }

// console.log(revString(clarg));

var allArguments = process.argv.slice(2);


var revArguments = [];
var string = "";
function reverse(allArguments) {
 for (var i = 0; i <= allArguments.length - 1; i++) {
   string = allArguments[i];
   var stringRev = "";
   for (var j = string.length - 1; j >= 0 ; j--) {
     stringRev += string[j];
   }
   revArguments.push(stringRev);

 }
return revArguments;
}


console.log(reverse(allArguments));

// function revString(clarg) {
//   var argument;
//   for(var i = 0; i < clarg.length - 1; i++) {
//     var stringRev = "";
//     argument = clarg[i];
//     for (var j = argument.length - 1; j >= 0; j--) {
//       stringRev += argument[i];
//     }
//     console.log(stringRev);
//   }
// }

// revString(clarg);

// // function rS (string) {
//   var revString = ""
//   var string = "hello"
//   for (var i = string.length - 1; i >= 0; i--) {
//     revString +=  string[i];
//   }


//   console.log("hello");
//  console.log(revString);

// console.log(rS("hello"));