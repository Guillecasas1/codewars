// My solution

const quarterOf = (month) => {
  if (month <= 3) {
    return 1
  } else if (month <= 6) {
    return 2
  } else if (month <= 9) {
    return 3
  } else if (month <= 12) {
    return 4
  } 
}

// Most voted solution

const quarterOf = (month) => {
  return Math.ceil(month / 3);
}