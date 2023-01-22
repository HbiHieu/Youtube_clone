import React, { useState } from 'react'

//chỉ là 1 fuction bình thường , mag tính chất tái sử dụng ở nhiều nơi 

const useToogle = (defaultChecked?:boolean) => {
  
  const [ isToogle , setIsToogle ] = useState( defaultChecked || false ) ;

  const onToogle = ( ) => {
    setIsToogle( prev => !prev ) ;
  }

  return (
    {
      isToogle ,
      onToogle ,
    }
  )
}

export default useToogle