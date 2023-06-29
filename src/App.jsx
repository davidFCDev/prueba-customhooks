import React, { useEffect, useState } from 'react'

const CAT_RANDOM_IMAGE = 'https://cataas.com/cat/says/hello'

export default function App () {
  const [fact, setFact] = useState('')
  const [image, setImage] = useState('')

  useEffect(() => {

  }, [])

  return (
    <div>
      <h1>App de gatos</h1>
      {fact && <p>{fact}</p>}
      {image && <img src={image} alt='Imagen aleatoria de la api de gatos' />}
    </div>
  )
}
