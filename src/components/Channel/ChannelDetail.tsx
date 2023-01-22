import React , { useContext, useEffect, useState }from 'react'
import { AppContext } from '../../context/AppProvider'
import { useParams } from 'react-router-dom';
import { fetchDataFromAPI } from '../../utils/fetchData';
import { Box } from '@mui/material';
import { Stack } from '@mui/system';
import useChannelDetail from '../../hooks/useChannelDetail';
import { demoChannelId } from '../../constant';
import ChannelDetailHeader from './ChannelDetailHeader';
import { navChannel } from '../../constant';
import Videos from '../Video/Videos';
import { IVideos } from '../../interface';

const ChannelDetail = () => {
  
  const { setLoadingVideos } = useContext(AppContext) ;

  const { channelId } = useParams() ;
  const [channelDetail] = useChannelDetail( channelId || demoChannelId ) ;
  const [isSelectedNav , setIsSelectedNav] = useState<string>("Trang chủ") ;
  const [videoChannel , setVideoChannel] = useState<IVideos["videos"]>() ;

  useEffect(()=> {

     const fetchVideoChannel = async () => {
      const data = await fetchDataFromAPI({
        url:`search?channelId=${channelId}&part=snippet&order=date` ,
        numberMaxResults : 20 ,
      }) ;
      console.log(data) ;
      setVideoChannel(data.data.items) ;
     }
     fetchVideoChannel() ;
    setLoadingVideos(false) ;
  },[]) ;

  console.log(channelDetail) ;

  return (
    <div style={{position:'relative'}}>
      <div style={{
        backgroundImage:"url(" + `${channelDetail?.brandingSettings.image.bannerExternalUrl}` + ")",
        height:'208px' ,
        backgroundSize:'cover' ,
        backgroundPosition:'center' ,
        backgroundRepeat:'no-repeat' ,
      }}>
      </div>
        <ChannelDetailHeader
        channelDetail={channelDetail}
        />
        <Box>
        <Stack 
        display={'flex'} flexDirection={'row'} position={'sticky'} top={'0px'} height={'48px'}
        sx={{
          color:'#606060',
          fontSize:'14px' ,
          fontWeight:'bold' ,
          textTransform:'uppercase' ,
        }}
        margin={'0 105px'} >
          {
            navChannel.map( (navItem) => (
              <span 
              style={{
                borderBottom: navItem.name == isSelectedNav ? '3px solid #0f0f0f' : '',
                color : navItem.name == isSelectedNav ? '#0f0f0f' : ''
              }}
              onClick={ () => { setIsSelectedNav(navItem.name) } }
              className='navChannel'>{navItem.name}</span>
            ) )
          }
        </Stack>
        </Box>
      <Box padding={'0 105px'}>
        <Videos
         videos={videoChannel}
         isSearchPage={false}
         style={{
            widthCard : '100%' ,
            heightCard : '217px' ,
            isRow : false ,
            heightCardImg : '141px' ,
            widthCardImg : '100%' ,
            widthCardContent : '100%' ,
            paddingCardContent : '16px 0' ,
            isBoldTitle : true ,
            fontSizeTitle : '14px' ,
            heightContentTitle : '42px' ,
            marginBetweenContent:'0' ,
            isHaveDescription : false ,
         }}
        />
      </Box>
    </div>
  )
}

export default ChannelDetail