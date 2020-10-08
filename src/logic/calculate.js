const calculate = (data, buttonName) => {
  let { total, next, operation } = data;

  switch (buttonName) {
    case '+/-':
      total *= -1;
      next *= -1;
      break;
    case '=':
      total = data.total;
      break;
    case '%':
      total %= next;
      break;
    case 'AC': {
      total = null;
      next = null;
      operation = null;
      break;
    }
    default:
      break;
  }
  return data;
};

export default calculate;
