class StringCalculator {
  constructor() {}
  add(string) {
    if (string === "") {
      return 0;
    }
    return string
      .split(",")
      .reduce((accumulator, num) => accumulator + parseInt(num), 0);
  }
}

module.exports = StringCalculator;
