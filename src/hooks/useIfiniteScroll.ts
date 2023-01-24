import React , { useEffect } from 'react'

const useIfiniteScroll = ( doWhenScrollActive : Function ) => {
   
    const handleLoadMoreData = () => {
        const heightOfPage = document.documentElement.scrollHeight ;
        const distanceFromTopWhenScroll = document.documentElement.scrollTop ;
        const heightOfScreen = window.innerHeight ;
        if ( heightOfScreen + distanceFromTopWhenScroll + 1 >= heightOfPage ) {
          doWhenScrollActive() 
        }
      }

  useEffect(()=> {
    window.addEventListener("scroll",handleLoadMoreData)
    return () => {
    window.removeEventListener("scroll",handleLoadMoreData)
    } 
  } , [])
  return null 
}

export default useIfiniteScroll