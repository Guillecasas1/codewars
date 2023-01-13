// Mi respuesta

function toCamelCase(str){
  const specialCharsDeleted = str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ' ');
  
  const firstWord = specialCharsDeleted.split(' ').slice(0, 1).toString();
  console.log(firstWord)
  
  const lastWord = specialCharsDeleted.toLowerCase().split(' ').slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join();
  console.log(lastWord)
  const finalWord = firstWord+lastWord.replace(/,/g, '');
  
  return finalWord;
}

console.log(toCamelCase("the_stealth_warrior"))

// La mejor respuesta

function toCamelCase(str){
      var regExp=/[-_]\w/ig;
      return str.replace(regExp,function(match){
            return match.charAt(1).toUpperCase();
       });
}
