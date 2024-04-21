import { useEffect, useState } from 'react'
import './App.css'
import { MagicCard } from './components/MagicCard'
import { useGetMagicCardData } from './hooks/useGetMagicCardData'
import { useGetPageData } from './hooks/useGetPageData'

function App() {
  const {pageData, getPageData} = useGetPageData();
  const {magicCardData, getMagicCardData} = useGetMagicCardData(); // i suppose I dont see the reason to hold this info here, what is this truely doing

  window.onscroll = getPageData

  useEffect(() => {
    getMagicCardData()
    getPageData()
  }, [])

  
  const magicMap = magicCardData?.data.slice(0, pageData.cardsOnPage).map((d) => {
    return <MagicCard magicCardData={d}></MagicCard>
  })

  return (
    <>
    <div className='card-container'>
      {magicMap}
    </div>
    </>
  )
}

export default App