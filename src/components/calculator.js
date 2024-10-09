class StringCalculator {
  constructor() {}
  add(string) {
    if (string === "") {
      return 0;
    }

    const arrOfNumbers = string.split(/[\s,]+/);
    const sum = arrOfNumbers.reduce(
      (accumulator, num) => accumulator + parseInt(num),
      0
    );
    return sum;
  }
}

module.exports = StringCalculator;
