// Description NOTE - THE tests provided for this kata is wrong. They contridict the examples given below. My solution works according to the examples and description. 

/*
Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False

*/

function validBraces(braces){
  let newS = braces.split("");
  let bracer = { "[" : "]", "(" : ")", "{": "}" }
  
   if (newS.length == 2) { 
      if (bracer[newS[0]] == newS[1]) {
      return true; 
      } else {
        return false;
      }
    }
    
    if (newS.length % 2 > 0) {
        return false;
    }
    
  for (i = 0; i < newS.length; i ++) {   
       if (bracer[newS[i]] == newS[i++]) {
       let newStringToTest =  newS.slice(0, i) + newS.slice(i + 2);
       return validBraces(newStringToTest);
      }
  }
  return false; 
}
