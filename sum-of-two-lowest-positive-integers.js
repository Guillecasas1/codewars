// My solution

function sumTwoSmallestNumbers(numbers = [2, 40, 3, 20, 1]) {
  
  function compareNumbers (a, b) {
    return a - b;
  }
  
  const sortedNumbers = numbers.sort(compareNumbers);
  
  const result = sortedNumbers[0] + sortedNumbers[1];
  
  return result;
}

// Best solution

function sumTwoSmallestNumbers(numbers){  
  numbers = numbers.sort(function(a, b){return a - b; });
  return numbers[0] + numbers[1];
};
