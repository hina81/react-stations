// @ts-check

import { useEffect, useState } from 'react'
import BreedsSelect from './BreedsSelect'
import DogImage from './DogImage'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState()
  const [breedList, setBreedList] = useState([])

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => {
        setBreeds(Object.keys(data.message))
      })
  }, [])

  const fetchBreedImages = () => {
    const url = selectedBreed
      ? `https://dog.ceo/api/breed/${selectedBreed}/images/random/10`
      : 'https://dog.ceo/api/breed/hound/images/random/10' //false(値がない時)

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setBreedList(data.message)
      })
  }

  return (
    <>
      <BreedsSelect
        breeds={breeds}
        selectedBreed={selectedBreed}
        setSelectedBreed={setSelectedBreed}
      />
      <button onClick={fetchBreedImages}>表示</button>
      <ul>
        {breedList.map(breedUrl => {
          return (
            <li key={breedUrl}>
              <DogImage imageUrl={breedUrl} />
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default DogListContainer
