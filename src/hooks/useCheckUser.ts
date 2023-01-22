import React ,{ useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider'

const useCheckUser = () => {
  
  const { user } = useContext(AuthContext) ;
  const navigate = useNavigate() ;

  const handleRedirectUser = () => {
    if ( !user ) {
       navigate('/signIn') ;
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