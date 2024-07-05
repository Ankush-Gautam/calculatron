function add(firstNum, secondNum) {
  return firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
  return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
  return firstNum * secondNum;
}

function divide(firstNum, secondNum) {
  return firstNum / secondNum;
}

function calc(firstNum, secondNum, operator) {
  let result = 0;

  switch (operator) {
    case '+':
      result = add(firstNum, secondNum);
      break;

    case '-':
      result = subtract(firstNum, secondNum);
      break;

    case '*':
      result = multiply(firstNum, secondNum);
      break;

    case '/':
      result = divide(firstNum, secondNum);
      break;
  }

  return result;
}

// DOM
const digitsContainer = document.body.querySelector('.digits-btns');
const displayOperations = document.body.querySelector('#display-operations');

digitsContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('button')) {
    const firstNum = event.target.getAttribute('data-button');
    displayOperations.textContent = firstNum;
  }
});
