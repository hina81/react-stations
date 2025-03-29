// @ts-check
import { useState } from 'react'
import DogImage from './DogImage'

async function getDog() {
  const url = 'https://dog.ceo/api/breeds/image/random'
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`レスポンスステータス: ${response.status}`)
    }
    const json = await response.json()
    console.log(json.message)
    return json.message
  } catch (error) {
    console.error('error:', { error })
  }
}

export const Description = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg',
  )
  const urlUpdate = async () => {
    const newUrl = await getDog()
    setDogUrl(newUrl)
  }
  return (
    <>
      <div className="dog">
        <p className="text">犬の画像です（ランダム）</p>
        <DogImage imageUrl={dogUrl} />
      </div>
      <div className="button-container">
        <button onClick={urlUpdate}>更新</button>
      </div>
    </>
  )
}

export default Description
