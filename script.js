const buttons = document.querySelectorAll('.btn');
const display = document.querySelector('.result');

let userInput = '';
let operator = '';
let operands = [];
const operatorsList = ['+', '-', '*', '/', '='];

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    //to extract number after user hits any operators or clearscreen
    if (operatorsList.includes(btn.textContent)) {
      if (operands.includes(NaN)) {
        operands.length = 0;
      }

      //do calculations if '=' is pressed and all numbers are entered
      if (btn.textContent === '=' && operands.length <= 2) {
        operands.push(parseFloat(userInput));

        //calculating & displaying the result, the last two elements of the array contains the accumulated result
        display.textContent = operate(
          operands[operands.length - 2],
          operator,
          operands[operands.length - 1]
        ).toFixed(4);
        operands.push(parseFloat(display.textContent));
      }

      //getting operator, '=' excluded
      if (btn.textContent != '=') {
        operator = btn.textContent;
      }

      if (operands.length < 2) operands.push(parseFloat(userInput));
      else operands.shift();

      userInput = '';
    }

    //clear screen if 'AC' is pressed and reset all values
    else if (btn.textContent === 'AC') {
      display.textContent = 0;
      operands.length = 0;
      operator = '';
      userInput = '';
    }

    //user inputting the numbers other than operators
    else {
      if (userInput.length < 10) {
        userInput += btn.textContent;
        display.textContent = parseFloat(userInput);
      }
    }
  });
});

//calculate
function operate(firstNum, operator, secondNum) {
  //handling error prone
  if (
    firstNum === undefined ||
    secondNum === undefined ||
    firstNum === NaN ||
    secondNum === NaN
  ) {
    operands.length = 0;
    operator = '';
    userInput = '';
    display.textContent = 0;
    return 0;
  }

  switch (operator) {
    case '+':
      return firstNum + secondNum;

    case '-':
      return firstNum - secondNum;

    case '*':
      return firstNum * secondNum;

    case '/':
      if (secondNum === 0) {
        display.textContent = 'ERROR';
        throw 'Error: Division by 0!';
      }
      return firstNum / secondNum;

    default:
      return 'Error!';
  }
}
