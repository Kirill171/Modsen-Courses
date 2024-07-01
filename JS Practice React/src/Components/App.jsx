import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage'
import Task1 from './Task1'
import Task2 from './Task2'
import Task3 from './Task3'

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Task1" element={<Task1 />} />
          <Route path="/Task2" element={<Task2 />} />
          <Route path="/Task3" element={<Task3 />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
