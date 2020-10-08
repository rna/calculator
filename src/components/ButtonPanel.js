import React from 'react';
import Button from './Button';

const ButtonPanel = () => {
  const group1 = ['AC', '+/-', '%', '÷'];
  const group2 = ['7', '8', '9', 'x'];
  const group3 = ['4', '5', '6', '-'];
  const group4 = ['1', '2', '3', '+'];
  const group5 = ['0', '.', '='];

  const operators = ['÷', 'x', '-', '+', '='];

  return (
    <div className="button-panel">
      <div id="row-1">{group1.map(element => <Button key={element} name={element} color={operators.indexOf(element) === -1 ? 'lightgray' : undefined} />)}</div>
      <div id="row-2">{group2.map(element => <Button key={element} name={element} color={operators.indexOf(element) === -1 ? 'lightgray' : undefined} />)}</div>
      <div id="row-3">{group3.map(element => <Button key={element} name={element} color={operators.indexOf(element) === -1 ? 'lightgray' : undefined} />)}</div>
      <div id="row-4">{group4.map(element => <Button key={element} name={element} color={operators.indexOf(element) === -1 ? 'lightgray' : undefined} />)}</div>
      <div id="row-5">{group5.map(element => <Button key={element} name={element} color={operators.indexOf(element) === -1 ? 'lightgray' : undefined} wide={element === '0'} />)}</div>
    </div>
  );
};

export default ButtonPanel;
