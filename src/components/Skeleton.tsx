import React from 'react'
import { skeletons } from '../constant/index'
import { Box , Skeleton , Grid } from '@mui/material'

interface ISkeletonProps {
  isSearchPage : boolean ,
}

const SkeletonBox = ({isSearchPage}:ISkeletonProps) => {
  return (
    <Grid height={'100vh'} width={'100%'} container gap={2}> 
      {
        skeletons.map( (item) => (
            <Grid key={item} item md={ isSearchPage ? 11 : 2.8} >
                <Skeleton variant='rectangular' width={'100%'} height={'60%'}/>
                <Box display={'flex'} paddingTop={2}>
                  <Skeleton variant='circular' width={50} height={40} sx={{marginRight:'20px'}} />
                  <div style={{width:'100%'}}>
                    <Skeleton variant='text' width={'80%'} height={20} />
                    <Skeleton variant='text' width={'60%'} height={20}/>
                  </div>
                </Box>
            </Grid>
        ) )
      }
    </Grid>
  )
}

export default SkeletonBox