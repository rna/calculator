import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;

  switch (buttonName) {
    case '+/-':
      total *= -1;
      next *= -1;
      break;
    case '=':
    case '%':
    case '+':
    case '-':
    case '÷':
    case 'x':
      total = operate(total, next, operation);
      break;
    case 'AC': {
      total = null;
      next = null;
      operation = null;
      break;
    }
    default:
  }
  return { total, next, operation };
};

export default calculate;
