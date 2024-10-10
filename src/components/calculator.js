class StringCalculator {
  constructor() {}
  add(numbers) {
    if (numbers === "") return 0;

    let delimiter = /[\s,]+/; // Default delimiters (comma and newline)

    // Check for custom delimiter
    if (numbers.startsWith("//")) {
      const delimiterEndIndex = numbers.indexOf("\n");
      delimiter = new RegExp(numbers.substring(2, delimiterEndIndex)); // Custom delimiter
      numbers = numbers.substring(delimiterEndIndex + 1); // Numbers after delimiter
    }

    // Split the numbers based on the delimiter
    const numArray = numbers.split(delimiter).map((num) => parseInt(num, 10));

    // Find negative numbers
    const negativeNumbers = numArray.filter((num) => num < 0);

    // If there are negative numbers, throw an exception
    if (negativeNumbers.length > 0) {
      throw new Error(
        `negative numbers not allowed: ${negativeNumbers.join(", ")}`
      );
    }

    // Ignore numbers greater than 1000 and sum the rest
    return numArray
      .filter((num) => num <= 1000 && !isNaN(num)) // Exclude numbers > 1000 and NaN
      .reduce((sum, num) => sum + num, 0);
  }
}

module.exports = StringCalculator;
