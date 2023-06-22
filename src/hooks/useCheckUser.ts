import React ,{ useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider'
import { handleClickSignInWithGoogle } from '../firebase';

const useCheckUser = () => {
  
  const { user } = useContext(AuthContext) ;
  const navigate = useNavigate() ;

  const handleRedirectUser = () => {
    if ( !user ) {
       handleClickSignInWithGoogle()
    }
  }

  const isUserLogin = () => {
    return user ? true : false ;
  }

  return {
    handleRedirectUser ,
    isUserLogin ,
  }
}

export default useCheckUser