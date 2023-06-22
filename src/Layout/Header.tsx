import React , { useContext }from 'react'
import { Outlet , Link } from "react-router-dom"

import { Stack, Switch, Typography , Button } from '@mui/material';

import { YoutubeIcon } from '../components/icons';
import MenuIcon from '@mui/icons-material/Menu';

import { SearchInput } from '../components';
import AvatarHeader from '../components/AvatarHeader';
import { AppContext } from '../context/AppProvider';
import { Box } from '@mui/system';

const Header = () => {

  const { setDarkTheme , darkTheme } = useContext(AppContext)
  
  return (
    <>
    <Stack 
    direction={'row'}
    justifyContent={"space-between"}
    alignItems={"center"}
    padding={"10px 16px"}
    position={'fixed'}
    width={'100%'}
    sx={{
      backgroundColor: darkTheme ? 'black' : 'white' ,
      color : darkTheme ? 'white' : 'black' ,
      zIndex:10,
    }}
    > 
     <Box display={'flex'} alignItems={'center'} >
     <Button>
       <MenuIcon/>
     </Button>
     <Link to={'/'}>
     <span style={{position:'relative',display:'flex',alignItems:'flex-end'}}>
      <YoutubeIcon/>
      <sup 
      style={{
        fontSize:'12px',position:'absolute',top:'-12px',right:'-20px' ,
        color:'#aaa' ,
      }}
      >VN</sup>
      </span>
     </Link>
     </Box>
     <SearchInput
     isDarkTheme={darkTheme} 
     />
     {/* <Switch
     onChange={ () => {
      setDarkTheme( !darkTheme ) ;
     } }
     /> */}
     <AvatarHeader/>
    </Stack>
    </>
  )
}

export default Header