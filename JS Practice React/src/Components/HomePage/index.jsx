import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default function index() {
  return (
    <div className='nav'>
      <Link className='button-link' to="/Task1">Task1</Link>
      <Link className='button-link' to="/Task2">Task2</Link>
      <Link className='button-link' to="/Task3">Task3</Link>
    </div>
  );
}
