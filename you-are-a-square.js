// My Solution

var isSquare = function(n){
  const square = Math.sqrt(n);
  if (Number.isInteger(square)) {
    return true;
  }
  return false;
}

// Most voted solution

function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}
