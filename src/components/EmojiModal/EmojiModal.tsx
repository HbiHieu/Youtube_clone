import { Box } from '@mui/material';
import React from 'react'
import useToogle from '../../hooks/useToogle'
import DetailVideoButton from '../Button/DetailVideoButton';
import { EmojiIcon } from '../icons';
import ModalIcon from './ModalIcon';

const EmojiModal = () => {
   const { isToogle  , onToogle } = useToogle() ;
   console.log('re-render') ;
  return (
    <span style={{
      position:'relative' ,
    }}>
    <DetailVideoButton
    handleClickBtn={ onToogle } 
    style={{
      height:'40px' ,
      width : '40px' ,
      borderRadius:'50%' ,
      padding : '0' ,
      minWidth :'40px' ,
      backgroundColor : 'inherit' ,
    }}
    >
      <EmojiIcon/>
    </DetailVideoButton>
    {
      isToogle && 
      <ModalIcon/>
    }
    </span>
  )
}

export default EmojiModal