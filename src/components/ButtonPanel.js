import React from 'react';
import Button from './Button';

function ButtonPanel() {
  const group1 = ['AC', '+/-', '%', '÷'];
  const group2 = ['7', '8', '9', 'X'];
  const group3 = ['4', '5', '6', '-'];
  const group4 = ['1', '2', '3', '+'];
  const group5 = ['0', '.', '='];
  return (
    <div>
      <div id="row-1">{group1.map(element => <Button key={element} name={element} />)}</div>
      <div id="row-2">{group2.map(element => <Button key={element} name={element} />)}</div>
      <div id="row-3">{group3.map(element => <Button key={element} name={element} />)}</div>
      <div id="row-4">{group4.map(element => <Button key={element} name={element} />)}</div>
      <div id="row-5">{group5.map(element => <Button key={element} name={element} />)}</div>
    </div>
  );
}

export default ButtonPanel;
