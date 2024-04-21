import { useState } from "react";

export const useGetPageData = () => {
  const [pageData, setPageData] = useState({cardsOnPage: 8, scrollEventLength: 1550});

  const getPageData = () => {
    if(document.body.scrollTop > pageData.scrollEventLength || document.documentElement.scrollTop > pageData.scrollEventLength) {
      setPageData({cardsOnPage: pageData.cardsOnPage + 2, scrollEventLength: pageData.scrollEventLength + 500})
    }
  }


  return {pageData, getPageData};
}