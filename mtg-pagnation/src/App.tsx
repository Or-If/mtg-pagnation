import { useEffect, useState } from 'react'
import './App.css'
import { MagicCard } from './components/MagicCard'
import { useGetMagicCardData } from './hooks/useGetMagicCardData'

function App() {
  const [pageData, setPageData] = useState({cardsOnPage: 8, scrollEventLength: 1550});
  const {magicCardData, getMagicCardData} = useGetMagicCardData(); // i suppose I dont see the reason to hold this info here, what is this truely doing

  window.onscroll = () => {
    if(document.body.scrollTop > pageData.scrollEventLength || document.documentElement.scrollTop > pageData.scrollEventLength) {
      setPageData({cardsOnPage: pageData.cardsOnPage + 2, scrollEventLength: pageData.scrollEventLength + 500})
    }
  }

  useEffect(() => {
    getMagicCardData()

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