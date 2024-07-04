import React, { useState } from 'react'
import Button from '../Button'
import './index.css';

// Реализовать счетчик с помощью функциональных компонентов, должна быть реализована кнопка, с помощью которой
// будет увеличиваться значение счетчика на единицу. Когда значение счетчика будет более 10, то цвет кнопки должен быть
// красным, первоначальный цвет кнопки зеленый

export default function Task2() {
  let [counter, SetCounter] = useState(0);
  function handleClick() {
    SetCounter(counter + 1);
  }

  return (
    <>
      <Button />
      <div id='Task2'>
        <div className={counter > 10 ? 'button-red' : 'button'} onClick={handleClick}>Counter: {counter}</div>
      </div>
    </>

  )
}
