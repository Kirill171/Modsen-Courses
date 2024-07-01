import React, { useState } from 'react'
import Button from '../Button'
import './index.css';

// Реализовать форму c помощью функциональных компонентов, в форме должно быть реализовано одно поле и
// значение этого поля нужно выводить в консоль после нажатия на кнопку, которая
// реализована в форме. В задаче нужно использовать хук useState.

export default function index() {
  const [inputValue, setInputValue] = useState('')

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSumbit(e) {
    e.preventDefault();
    console.log(inputValue);
  }

  return (
    <>
      <Button />
      <div id='Task3'>
        <form id='form' onSubmit={handleSumbit}>
          <label htmlFor='input'>Введите текст: </label>
          <input 
            id='input'
            type='text'
            value={inputValue}
            onChange={handleChange}
          />
          <button type='submit'>Отправить</button>
        </form>
      </div>
    </> 
  )
}
