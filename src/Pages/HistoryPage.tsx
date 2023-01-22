import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Videos } from '../components';
import { HistoryVideo } from '../components/icons';
import RequireLogin from '../components/RequireLogin';
import useCheckUser from '../hooks/useCheckUser'
import { selectorLikedVideo } from '../redux/LikedVideo/LikedVideo.selector';

const HistoryPage = () => {
    const { isUserLogin } = useCheckUser() ;

    const haveUser = isUserLogin() ;

    const likedVideo = useSelector( selectorLikedVideo ) ;

    console.log(likedVideo) 
  
    return (
      <>
      {
          haveUser ? 
          <div>video</div> : 
          <RequireLogin
           icon={<HistoryVideo width='120px' height='120px'/>}
           title={'Theo dõi nội dung mà bạn xem'}
           subTitle={'Bạn không thể xem được nhật ký xem khi đã đăng xuất.'}
          /> 
      }
      </>
    )
}

export default HistoryPage