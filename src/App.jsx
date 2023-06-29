import React, { useEffect, useState } from 'react'
import { getRandomFact } from './services/facts'
import './App.css'

// const CAT_RANDOM_IMAGE = 'https://cataas.com/cat/says/hello'

export default function App () {
  const [fact, setFact] = useState('')
  // const [image, setImage] = useState('')

  useEffect(() => {
    getRandomFact().then(setFact)
  }, [])

  const handleClick = () => {
    getRandomFact().then(setFact)
  }

  return (
    <main>
      <h1>App de gatos</h1>
      <button onClick={handleClick}>New fact</button>
      <p>{fact}</p>
      {/* {image && <img src={image} alt='Imagen aleatoria de la api de gatos' />} */}
    </main>
  )
}
