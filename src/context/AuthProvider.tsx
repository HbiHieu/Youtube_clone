import { onAuthStateChanged } from 'firebase/auth';
import React , { createContext , useState , useEffect } from 'react'
import { auth } from '../firebase';
import { IAuthContext, IUser } from '../interface'

export const AuthContext = createContext<IAuthContext["value"]>({
    user : undefined ,
    setUser : () => {} 
})

interface IAppContextChildren {
    children : React.ReactNode
}

const AuthProvider = ({children}:IAppContextChildren) => {
  
    const [user,setUser] = useState<IUser | undefined>(undefined) ;

    useEffect( () => {
        const checkUser = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser({
               displayName:user.displayName || '' ,
               email:user.email || '',
               photoURL:user.photoURL || '',
               uid:user.uid || '',
              })
              // ...
            } else {
              // User is signed out
              // ...
            }
          });
          console.log(user) ;
          return () => checkUser() ;
         },[]) 

    const value = {
        user ,
        setUser ,
    }

  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider