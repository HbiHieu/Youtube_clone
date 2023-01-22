import { Grid , Skeleton } from '@mui/material'
import React, { useContext } from 'react'
import { AppContext } from '../../context/AppProvider'
import { IVideos } from '../../interface'
import { VideoCard , ChannelCard , SkeletonBox } from ".."

interface IVideosProps {
  videos : IVideos["videos"] | undefined,
  isSearchPage : boolean ;
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

const Videos = ({videos , style , isSearchPage } :IVideosProps) => {
   
  const { loadingVideos , darkTheme } = useContext(AppContext) ;

  return (
    <Grid
    container
    gap={2}
    sx={{
      backgroundColor: darkTheme ? 'black' : 'white' ,
      marginTop :'20px' ,
    }} 
    >
     {  loadingVideos ? <SkeletonBox isSearchPage={isSearchPage}/> :
        videos?.map( (item,index) =>  (   
            <Grid 
            item 
            md={ 
              style.isRow ? 11 : 2.8 
            } 
            key={index} 
            marginLeft={ item.id?.channelId ? '23px' : '' }
            borderBottom={ item.id?.channelId ? '1px solid #ccc' : '' }
            >
            { ( item.id.videoId || item.id.playlistId || item.id )  && 
            <VideoCard 
            style={style}
            item = {item} /> }
            {item.id.channelId && 
            <ChannelCard isSearchPage={isSearchPage} item = {item} /> } 
            </Grid> 
        ) )
     }
    </Grid>
  )
}

export default Videos