import React ,{ useEffect , useContext } from 'react'
import NProgress from 'nprogress'

import { AppContext } from '../context/AppProvider'

const ProgressBar = () => {

  const { loadingVideos } = useContext(AppContext) ;
  
  const handleStartProgressBar = () => {
    NProgress.start()
  }

  const handleDoneProgressBar = () => {
    NProgress.done()
  }

  useEffect( () => {
    loadingVideos ? handleStartProgressBar() : handleDoneProgressBar() ;
  },[loadingVideos] )

  return null;
}

export default ProgressBar