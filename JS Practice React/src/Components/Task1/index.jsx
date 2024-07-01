import React from 'react'
import Button from '../Button'
import './index.css';

// Необходимо отрисовать список элементов photos с помощью функциональных компонентов.
const photos = [
  {
    "albumId": 1,
    "id": 1,
    "title": "green",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "purple",
    "url": "https://via.placeholder.com/600/771796",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  },
]

export default function index() {
  return (
    <>
      <Button />
      <div id='Task1'>
        {photos.map(item => (
          <div key={item.id} id={item.id}>
            <h2 style={{ color: item.title }} >{item.albumId} {item.title}</h2>
            <img src={item.url} alt="600x600 picture" />
            <img src={item.thumbnailUrl} alt="150x150 picture" />
          </div>
        ))}
      </div>
    </>

  )
}