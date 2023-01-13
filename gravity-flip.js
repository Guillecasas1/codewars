// My solution

const flip = (d, a) => {
  
  function compareNumbers (a, b) {
    return a - b;
  }
  
  switch(d) {
      case "R": a.sort(compareNumbers);
        break;
      case "L": a.sort(compareNumbers).reverse();
        break;
      }
  
  return a;
  
}

// Most voted solution

const flip = (d, a) => a.sort((x, y) => d === 'R' ? x - y : y - x);
