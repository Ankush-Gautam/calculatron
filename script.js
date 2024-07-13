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
      //do calculations if '=' is pressed and all numbers are entered
      if (btn.textContent === '=' && operands.length <= 2) {
        operands.push(parseFloat(userInput));

        //calculate the last two operands of the array
        display.textContent = operate(
          operands[operands.length - 2],
          operator,
          operands[operands.length - 1]
        );
        operands.push(parseFloat(display.textContent));
      }

      //ignore '=' to be include in operator
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
      userInput += btn.textContent;
      display.textContent = parseFloat(userInput);
    }

    console.log(operands);
    console.log(operator);
  });
});

//calculate
function operate(firstNum = 0, operator, secondNum = 0) {
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
