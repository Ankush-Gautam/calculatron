const buttons = document.querySelectorAll('.btn');
const display = document.querySelector('.display');
const result = document.querySelector('.result');

let userInput = '';
let operator = '';
let operands = [];
let operatorsList = ['+', '-', '*', '/', '='];

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    console.log('operands length = ', operands.length);

    //to extract firstNum before user hits any operators or clearscreen
    if (operatorsList.includes(btn.textContent)) {
      //do calculations if '=' is pressed and all numbers are entered
      if (btn.textContent === '=' && operands.length === 2) {
        operands.push(parseFloat(userInput));
        result.textContent = operate(operands[0], operator, operands[1]);
        operands.shift();
      }

      //ignore '=' to be include in operator
      if (btn.textContent != '=') {
        operator = btn.textContent;
      }
      operands.push(parseFloat(userInput));
      userInput = '';
    }

    //clear screen if 'AC' is pressed and reset all values
    else if (btn.textContent === 'AC') {
      display.textContent = '';
      result.textContent = 0;
      operands = [];
      operator = '';
      userInput = '';
    } else {
      userInput += btn.textContent;
      display.textContent = userInput;
    }

    console.log(operands);
    console.log(operator);
  });
});

//calculate
function operate(firstNum, operator, secondNum) {
  switch (operator) {
    case '+':
      return firstNum + secondNum;

    case '-':
      return firstNum - secondNum;

    case '*':
      return firstNum * secondNum;

    case '/':
      return firstNum / secondNum;

    default:
      return 'Error!';
  }
}
