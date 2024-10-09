const StringCalculator = require("../components/calculator");

test("should return 0 for an empty string", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("")).toBe(0);
});

test("should return sum of two number passed as string separated by comma", () => {
  const calculator = new StringCalculator();
  expect(
    calculator.add(
      "1000000000000000000000000000000000000000000000000000000,1000000000000000000000000000000000000000000000000000000,2"
    )
  ).toBe(2000000000000000000000000000000000000000000000000000002);
});

test("should return the sum of numbers with input new lines", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("1\n2\n3")).toBe(6);
});

test("should return the sum of numbers with input new lines & commas", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("1\n2,3")).toBe(6);
});
