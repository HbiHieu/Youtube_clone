import React , { useContext , useEffect }from 'react'
import Header from "./Header" 
import { SideBar } from '../components'
import { Box } from '@mui/material'

import { AppContext } from '../context/AppProvider'

import { Outlet, useLocation } from 'react-router-dom'
import ProgressBar from '../components/ProgressBar'

const MainLayout = ( 
  ) => {
   
  const objectParam = useLocation() ;
  const isDetailVideoPage = objectParam.pathname.includes('video') ;
  const { darkTheme } = useContext(AppContext) ;

  return (
    <div
    style={{
      backgroundColor : darkTheme ? 'black' : 'white' ,
      color : darkTheme ? 'white' : 'black' ,
    }}
    >
    <ProgressBar/>
    <Header
    />
    <Box display={'flex'}>
      { isDetailVideoPage || <SideBar/> }
      <div style={{
        padding:'20px' ,
        width:'100%' ,
        marginLeft: isDetailVideoPage ? '20px' : '210px',
        marginTop:'62px',
        height:'auto' ,
        }}>
      <Outlet/>
      </div>
    </Box>
    </div>
  )
}

export default MainLayout