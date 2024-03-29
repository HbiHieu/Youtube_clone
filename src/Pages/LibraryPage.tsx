import React from 'react'
import { YoutubeLibrary } from '../components/icons';
import RequireLogin from '../components/RequireLogin';
import useCheckUser from '../hooks/useCheckUser'
import { Feed } from '../components';

const LibraryPage = () => {
    const { isUserLogin } = useCheckUser() ;

    const haveUser = isUserLogin() ;
  
    return (
      <>
      {
          haveUser ? <Feed/> : 
          <RequireLogin
           icon={<YoutubeLibrary width='120px' height='120px'/>}
           title={'Thưởng thức các video yêu thích của bạn'}
           subTitle={'Đăng nhập để truy cập video bạn đã thích hoặc đã lưu'}
          /> 
      }
      </>
    )
}

export default LibraryPage