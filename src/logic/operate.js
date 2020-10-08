import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const num1 = Big(numberOne);
  const num2 = Big(numberTwo);

  let result;

  switch (operation) {
    case '+':
      result = num1.plus(num2);
      break;
    case '-':
      result = num1.minus(num2);
      break;
    case 'x':
      result = num1.times(num2);
      break;
    case '÷':
      result = num1 === 0 ? 'Not divisible by Zero' : num1.div(num2);
      break;
    case '%':
      result = num1.div(100);
      break;
    default:
  }

  return result;
};

export default operate;
