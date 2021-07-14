const displayFizzBuzz = (number) => {
  if (number % 5 === 0 && number % 3 === 0) {
    return "FizzBuzz";
  } else if (number % 5 === 0) {
    return "BuZZ";
  } else if (number % 3 === 0) {
    return "FIZZ";
  } else {
    return number;
  }
};

console.log(displayFizzBuzz(15));
