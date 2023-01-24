import React from 'react'
import { skeletons } from '../../constant/index'
import { Box , Skeleton , Grid } from '@mui/material'

interface ISkeletonProps {
  style : {
    widthCard : string , 
    heightCard : string ,
    isRow : boolean ,
    widthCardImg : string ,
    heightCardImg : string ,
    widthCardContent : string ,
    paddingCardContent : string , 
    fontSizeTitle : string ,
    isBoldTitle : boolean ,
    heightContentTitle : string ,
    isHaveDescription : boolean ,
    marginBetweenContent : string ,
  },
}

const SkeletonBox = ({style}:ISkeletonProps) => {
  return (
    <Grid height={'100vh'} width={'100%'} container gap={2}> 
      {
        skeletons.map( (item) => (
            <Grid display={ style.isRow ? 'flex' : 'block' } key={item} height={style.heightCard} item md={ style.isRow ? 11 : 2.8}>
                <Skeleton variant='rectangular' width={style.widthCardImg} height={style.heightCardImg} sx={{borderRadius : '16px'}}/>
                <Box display={'flex'} paddingTop={ style.isRow ? 0 : 2} width={style.widthCardContent} marginLeft={ style.isRow ? '10px' : '0'} >
                  {
                    !style.isRow && 
                    <Skeleton variant='circular' width={50} height={40} sx={{marginRight:'20px'}} />
                  }
                  <div style={{width:'100%' , display : style.isRow ? 'flex' : 'block' , flexDirection:'column' , justifyContent:'flex-start'}}>
                    <Skeleton variant='text' width={'80%'} height={ style.isRow ? 50 : 20} />
                    <Skeleton variant='text' width={'60%'} height={ style.isRow ? 30 : 20}/>
                    {
                    style.isRow &&   
                    <Skeleton variant='text' width={'40%'} height={ style.isRow ? 30 : 20} sx={{
                      marginTop:'10px' ,
                    }}/>
                    }
                  </div>
                </Box>
            </Grid>
        ) )
      }
    </Grid>
  )
}

export default SkeletonBox