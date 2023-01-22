import { Stack , Box } from '@mui/system'
import React ,{ useContext , useState } from 'react'
import { sidebar } from '../constant'
import { Button , Typography } from "@mui/material"

import { AppContext } from '../context/AppProvider'
import { AuthContext } from '../context/AuthProvider'
import SignInButton from './Button/SignInButton'
import { useNavigate } from 'react-router-dom'


const SideBar = ( ) => {
  
  const { darkTheme } = useContext(AppContext)
  const [ selectedCategory , setSelectedCategory ] = useState<string>('Trang chủ') ;
  const { user } = useContext(AuthContext) ;
  const navigate = useNavigate() ;

  return (
    <>
    <Stack
    sx={{
      overflowY:'auto' ,
      flexDirection:{ xs : 'row' , md : 'column' },
      height:{ xs:'auto' , md : '100%' } ,
      width:'auto' ,
      minWidth:'210px',
      padding:'10px' ,
      position:'fixed' ,
      marginTop:'62px' ,
   }}
    >
     {
        sidebar.filter( (category , index ) => {
          if (!user) {
            return index < 5 ;
          }
          else {
            return index == index ;
          }
        } ).map( ( category , index ) => 
        <div key={index}>
        <Button
        sx={{
           height:{xs:'' , md:'50px'},
           width:{xs:'',md:'204px'},
           display:'flex',
           justifyContent:'flex-start',
           textTransform:'initial',
           borderRadius:'10px' ,
           backgroundColor : selectedCategory == category.name ? ( darkTheme ? '#272727' : '#f2f2f2' ) : ( darkTheme ? 'black' : 'white' ) , 
           color : darkTheme ? 'white' : 'black' ,
        }}
        onClick={ () => {
           setSelectedCategory(category.name) ;
           navigate(category.param);
        } }
        > 
        <span>{category.icon}</span> 
        <Typography
        sx={{
           marginLeft:'40px' ,
           fontWeight: selectedCategory == category.name ? 'bold' : 'normal' ,
        }}
        >{category.name}</Typography>
        </Button>
         { index == 2 && <div 
         style={{
           margin:'10px 0' ,
           height:'0.2px' ,
           backgroundColor : '#272727' ,
         }}></div> }
        </div>
      )
     }
     {
      !user && 
      <Box 
      sx={{
        height:'auto',
        width:{xs:'',md:'204px'},
        borderTop:'1px solid #272727',
        borderBottom:'1px solid #272727',
      }}
      padding={'16px 14px'}
      >
       <Typography marginBottom={'16px'} fontSize={'14px'}>Hãy đăng nhập để thích video, bình luận và đăng ký kênh.</Typography>
       <SignInButton/>
      </Box>
     }
    </Stack>
    </>
  )
}

export default SideBar
