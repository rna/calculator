import React from 'react';
import Button from './Button';

const ButtonPanel = () => {
  const groups = [['AC', '+/-', '%', '÷'], ['7', '8', '9', 'x'], ['4', '5', '6', '-'], ['1', '2', '3', '+'], ['0', '.', '=']];
  const operators = ['÷', 'x', '-', '+', '='];
  return (
    <div>
      {groups.map(group => <div key="group">{group.map(element => <Button key={element} name={element} color={operators.indexOf(element) === -1 ? 'light' : 'dark'} wide={element === '0'} />)}</div>)}
    </div>
  );
};

export default ButtonPanel;
