const StringCalculator = require("../components/calculator");

test("should return 0 for an empty string", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("")).toBe(0);
});

test("should ignore number greater than 1000", () => {
  const calculator = new StringCalculator();
  expect(
    calculator.add(
      "1000000000000000000000000000000000000000000000000000000,1000000000000000000000000000000000000000000000000000000,2"
    )
  ).toBe(2);
});

test("should return the sum of numbers with input new lines", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("1\n2\n3")).toBe(6);
});

test("should return the sum of numbers with input new lines & commas", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("1\n2,3")).toBe(6);
});

test("should support custom delimiter and handle negative numbers", () => {
  const calculator = new StringCalculator();
  expect(() => calculator.add("//;\n1;2;-3")).toThrow(
    "negative numbers not allowed: -3"
  );
});

test("should throw an exception for multiple negative numbers", () => {
  const calculator = new StringCalculator();
  expect(() => calculator.add("1,-2,-3")).toThrow(
    "negative numbers not allowed: -2, -3"
  );
});
