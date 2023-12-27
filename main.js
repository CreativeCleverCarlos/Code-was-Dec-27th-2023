/**
 Welcome.
//https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.
**/

function alphabetPosition(text) {
    let splitEm = text.split("")
    for (let i = 0; i < text.length; i++){
      if (splitEm[i] = " "){
        splitEm.splice(i, 1)
         
     } else{
       ++i
     }
     return splitEm
   }
    }
  

  console.log(alphabetPosition("Test Run"))

  /**
  The solution. They converted to all upper case, and then used the CharCodeAt thing to make it easier

function alphabetPosition(text) {
  var result = "";
  for (var i = 0; i < text.length; i++){
    var code = text.toUpperCase().charCodeAt(i) //
    if (code > 64 && code < 91) result += (code - 64) + " ";
  }

  return result.slice(0, result.length-1);
}


  **/