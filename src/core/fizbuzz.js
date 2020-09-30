const fizbuzz = (num) => {
  const divisibleBy = (divider, n) => n % divider === 0;

  if (divisibleBy(15,num)) {
    return 'fizzbuzz';
  } else if (divisibleBy(5, num)) {
    return 'buzz';
  } else if (divisibleBy(3, num)) {
    return 'fizz';
  }
  return num;
}

module.exports = fizbuzz;