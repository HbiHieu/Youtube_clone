import React from 'react'
import { useSelector } from 'react-redux';
import { Videos } from '../components';
import { selectorLikedVideo } from '../redux/LikedVideo/LikedVideo.selector';

const LikedVideosPage = () => {
  
  const likedVideo = useSelector( selectorLikedVideo ) ;

  return (
    <Videos
          videos={likedVideo}
          isSearchPage={true} 
          style={{
            widthCard : '806px' ,
            heightCard : '210px' ,
            isRow : true , 
            heightCardImg : '201px' ,
            widthCardImg : '360px' ,
            widthCardContent : '400px' ,
            paddingCardContent : '0 16px' ,
            isBoldTitle : false ,
            fontSizeTitle : '18px' ,
            heightContentTitle : 'auto' ,
            marginBetweenContent:'20px 0' ,
            isHaveDescription : true ,
          }}
        />
  )
}

export default LikedVideosPage