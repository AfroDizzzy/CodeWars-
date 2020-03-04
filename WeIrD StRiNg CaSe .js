/* Description

Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

*/

function toWeirdCase(string) {
  let arrayString = string.split(" "); 
  let upperCased = "";
  if (arrayString.length == 1) {
    upperCased += stringer(arrayString[0]);
    return upperCased;
  }
  if (arrayString.length > 1) {
    for (let i = 0; i < arrayString.length; i ++) {
      upperCased += stringer(arrayString[i]);
      if (i !== arrayString.length - 1) {
        upperCased += " "; 
      }
    }
    return upperCased; 
  }
}

function stringer(word) {
  
    let newArrayString = word.split("");
    let newArrayStringS = ""; 
    for (i = 0; i < newArrayString.length; i ++) {
      if (i % 2 == 0) {
        newArrayStringS += newArrayString[i].toUpperCase();
      } else {
        newArrayStringS += newArrayString[i];
      }
    }
    return newArrayStringS;
} 
