import React from 'react'
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'
import './App.css'

export default function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && (
          <img
            src={imageUrl}
            alt={`Image extracted using the first three words for ${fact}`}
          />
        )}
      </section>
    </main>
  )
}
