import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;

  switch (buttonName) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      if (next === null && total === null) {
        total = buttonName;
      } else if (next === null) {
        total = (total + buttonName).toString();
      } else if (next !== null) {
        next = Number(next + buttonName).toString();
      } else if (operation !== null && next === null) {
        total = buttonName;
        operation = null;
        next = null;
      }
      break;
    case '+/-':
      total *= -1;
      next *= -1;
      break;
    case '=':
      total = operate(total, next, operation);
      next = null;
      operation = null;
      break;
    case '%':
    case '+':
    case '-':
    case '÷':
    case 'x':
      next = '0';
      operation = buttonName;
      break;
    case 'AC': {
      total = null;
      next = null;
      operation = null;
      break;
    }
    case '.':
      if (total === null || total === '0') {
        total = '0.';
      } else if (!total.includes('.')) {
        total = (total + buttonName).toString();
      } else if (next === null || next === '0') {
        next = '0.';
      } else if (!next.includes('.')) {
        next = (next + buttonName).toString();
      }
      break;
    default:
  }
  return { total, next, operation };
};

export default calculate;
