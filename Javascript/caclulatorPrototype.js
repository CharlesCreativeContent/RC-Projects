const calculator = function (a, operator, b) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "/":
      return a / b;
    case "*":
      return a * b;
  }
};

/********Calculator Test*********/
// console.log(calculator(5, "*", 10));
