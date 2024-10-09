const StringCalculator = require("../components/calculator");

test("should return 0 for an empty string", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("")).toBe(0);
});

test("should return sum of two number passed as string separated by comma", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("2,2,4")).toBe(8);
});
