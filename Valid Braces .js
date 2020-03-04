function validBraces(braces){
  let newS = braces.split("");
  let match1 = "[]";
  let match2 = "{}";
  let match3 = "()";
  for (i = 0; i < braces.length; i ++) {
    console.log(i);
    if (newS.length % 2 > 0) {
         return false;
    }
    
    if (newS[i] + newS[newS.length - 1 - i] == match1 || match2 || match3 ){
      console.log(newS[i] + " and " + newS[newS.length - 1 - i]);
      if (i == newS.length / 2) {
        return true; 
      }
    } else {
      	return false;
    }
  }
}
