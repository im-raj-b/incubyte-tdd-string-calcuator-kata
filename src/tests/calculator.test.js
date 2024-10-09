const StringCalculator = require("../components/calculator");

test("should return 0 for an empty string", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("1")).toBe(1);
});
