import React from 'react'
import { YoutubeSubscribe } from '../components/icons';
import RequireLogin from '../components/RequireLogin';
import useCheckUser from '../hooks/useCheckUser'

const SubcriptionsPage = () => {
   
  const { isUserLogin } = useCheckUser() ;

  const haveUser = isUserLogin() ;

  return (
    <>
    {
        haveUser ? <div>Sub</div> : 
        <RequireLogin
         icon={<YoutubeSubscribe width='120px' height='120px'/>}
         title={'Đừng bỏ lỡ video mới'}
         subTitle={'Đăng nhập để xem cập nhật từ các kênh YouTube yêu thích của bạn'}
        /> 
    }
    </>
  )
}

export default SubcriptionsPage