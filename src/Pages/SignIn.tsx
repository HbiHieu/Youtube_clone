import { Box , Typography , TextField , Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { GoogleIcon } from '../components/icons'

const SignIn = () => {
  return (
    <form
    style={{
      display:'flex' ,
      justifyContent:'center' ,
      alignItems:'center' ,
      height:'100vh' 
    }}
     //display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100vh'}
     > 
      <Box padding={'48px 40px 36px 40px'} borderRadius={'8px'} border={'1px solid #ccc'} display={'flex'} flexDirection={'column'} alignItems={'center'} height={'fit-content'}>
       <GoogleIcon/>
       <Typography paddingTop={'16px'} fontSize={'24px'}>Đăng nhập</Typography>
       <Typography paddingTop={'7px'} fontSize={'16px'}>Tiếp tục tới youtube</Typography>
       <Box paddingTop={'24px'} width={'366px'} display='flex' flexDirection={'column'}>
         <TextField variant='outlined' label='Email hoặc số điện thoại' sx={{width:'100%'}}/>
         <span style={{
          color:'#4284f3' ,
          fontWeight:'bold' ,
          paddingTop:'9px' ,
          fontSize:'14px' ,
          cursor : 'pointer' ,
         }}>Bạn quên địa chỉ email?</span>
         <Typography fontSize={'14px'} lineHeight={"21px"} marginTop={'32px'}>
         Đây không phải máy tính của bạn? Hãy sử dụng chế độ Khách để đăng nhập một cách riêng tư. <a 
         style={{
          color : '#4284f3' ,
          fontWeight : 'bold' ,
         }}
         >Tìm hiểu thêm</a>
         </Typography>
         <Box marginTop={'32px'} display={'flex'} justifyContent={'space-between'} paddingBottom={'20px'}>
           <Link to={'/SignUp'} style={{
          color:'#4284f3' ,
          fontWeight:'bold' ,
          paddingTop:'9px' ,
          fontSize:'14px' ,
          cursor : 'pointer' ,}}>Tạo tài khoản</Link>
          <Button type='submit' variant='contained' sx={{
            fontSize:'14px' ,
            fontWeight:'bold' ,
            textTransform:'initial'
          }}>Tiếp theo</Button>
         </Box>
       </Box>
      </Box>
    </form> 
  )
}

export default SignIn