import Typography from '@mui/material/Typography'
import { Box, Stack } from '@mui/system'
import React, { } from 'react'
import { EmojiIcons } from '../../constant/EmojiIcon'

const ModalIcon = () => {

  return (
    <>
    <Box sx={{
        padding:'16px' ,
        position:'absolute' ,
        backgroundColor:'inherit' ,
        left : '0' ,
        boxShadow: '0 16px 24px 2px rgb(0 0 0 / 14%), 0 6px 30px 5px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 40%)' ,
    }}>
      <input 
      style={{
          width:'424px',
          padding:'4px 8px' ,
          height:'32px' ,
          backgroundColor : '#f9f9f9' ,
          borderRadius:'4px' ,
          border:'none' ,
        }}
        type="text" placeholder='Tìm kiếm biểu tượng cảm xúc' />
        <Box display={'flex'} margin={'8px 0'} justifyContent={'center'} alignItems={'center'}>
            {
                EmojiIcons.map( item => <a href={`#${item.category}`} style={{margin:'0 2px'}}>{item.icon}</a> ) 
            }
        </Box>
    <Box 
    sx={{
        height:'146px' ,
        overflowY:'scroll' ,
        scrollBehavior:'smooth' ,
        position:'relative' ,
    }}
    >
        {
            EmojiIcons.map( (item) => (
                <Box id={item.category} 
                sx={{
                    height:'100px',
                }}
                >
                <Typography
                sx={{
                    position:'sticky' ,
                    top:'0' ,
                    fontSize:'13px' ,
                    backgroundColor : '#f9f9f9',
                    color:'#949494' ,
                    fontWeight:'bold',
                    opacity:'0.8',
                }}
                >{item.category}</Typography>
                <Box display={'flex'}>
                  {
                      item.items.map( (img) => <img 
                      src={img.url} 
                      style={{
                        height:'32px' ,
                        width :'32px' ,
                        padding:'4px' ,
                      }}
                      className="imgIcon" 
                      /> )
                  }
                </Box>
                </Box>
              ) )
        }
    </Box>    
    </Box>
    </>
  )
}

export default ModalIcon