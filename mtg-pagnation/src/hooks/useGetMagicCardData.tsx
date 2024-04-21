import React from 'react'
import { MagicCardType } from '../types/MagicCardTypes';


export const useGetMagicCardData = () => {

  const testApi = 'https://api.scryfall.com/cards/search?order=released&q=oracleid%3A5f5e0b10-c8cf-450c-bfd3-bcb0528ec330&unique=prints'
  const regApi = 'https://api.scryfall.com/cards/search?q=c%3Ared+pow%3D3'
  const [magicCardData, setMagicCardData] = React.useState<MagicCardType | undefined>(undefined)

  const getMagicCardData = async () => {
    const response = await fetch(testApi)
    const data = await response.json();
    setMagicCardData(data);
  }
  

  return {magicCardData, getMagicCardData}; // why is this an object instead of an array
};