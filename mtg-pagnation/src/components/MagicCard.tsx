import React from 'react'
import { Daum } from '../types/MagicCardTypes'

interface MagicCardProp {
  magicCardData: Daum
}

export const MagicCard = ({magicCardData}: MagicCardProp) => {

  

return (
  <>
  <div className='card'>
    <h1>{/*magicCardData.name*/}</h1>
    <h1>{/*magicCardData.oracle_text*/}</h1>
    <img src={magicCardData.image_uris?.normal}
    ></img>
  </div>
  </>
)
}