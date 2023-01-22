import { Box } from '@mui/system'
import { Typography } from "@mui/material"
import React from 'react'
import SignInButton from './Button/SignInButton'

interface RequireLoginProps {
  icon : JSX.Element ,
  title : string ,
  subTitle : string ,
}

const RequireLogin = ({icon , title , subTitle}:RequireLoginProps) => {
  return (
    <Box height={'70vh'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
     {
        icon
     } 
     <Box margin={'24px 0'}>
     <Typography textAlign={'center'} marginBottom={'16px'} fontSize={'24px'}>{title}</Typography>
     <Typography textAlign={'center'}>{subTitle}</Typography>
     </Box>
     <SignInButton
     style={{
        marginRight : '0' ,
     }}
     />
    </Box>
  )
}

export default RequireLogin