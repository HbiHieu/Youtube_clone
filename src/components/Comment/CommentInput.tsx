import React , { useState , useContext } from 'react'
import { v4 as uuidv4 } from "uuid"

import { Input , Box, Avatar , Button } from "@mui/material"
import EmojiModal from '../EmojiModal/EmojiModal'
import MediumButton from '../Button/MediumButton'
import DetailVideoButton from '../Button/DetailVideoButton'
import { IComment } from '../../interface'
import useCheckUser from '../../hooks/useCheckUser'
import { AuthContext } from '../../context/AuthProvider'

interface ICommentInputProps {
  setCommentList : React.Dispatch<React.SetStateAction<IComment[]>> ,
  commentList :IComment[] ,
}


const CommentInput = ({setCommentList , commentList} : ICommentInputProps) => {
  
  const [valueInput , setValueInput] = useState<string>() ;
  const { handleRedirectUser } = useCheckUser() ;
  const { user } = useContext(AuthContext) ;


  const handleAddComment = () => {
    setCommentList([
      { 
        id: user?.uid,
        snippet : {
          topLevelComment : {
              snippet : {
                  authorDisplayName : user?.displayName ,
                  authorProfileImageUrl : user?.photoURL ,
                  textDisplay : valueInput || '',
                  updatedAt : '1 giây trước' ,
              }
          }
      }
      }
      ,...commentList] )
   setValueInput('') ;
  }

  const handleChangeInput = ( e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValueInput(e.target.value) ;
  }

  return (
    <form
    style={{
      display:'flex' ,
      alignItems:'flex-start' ,
      paddingBottom:'30px' ,
    }}
    onSubmit={
      (e) => {
        e.preventDefault() ;
        handleAddComment();
      } 
    } 
    >
      <Avatar
      sx={{
        height:'40px' ,
        width : '40px' ,
        marginTop:'5px' ,
      }}
      src={user ? user.photoURL : ''} 
      />
      <Box width={'100%'} marginLeft={'15px'}>
      <Input
      placeholder='Viết bình luận...'
      sx={{
        width:'100%' ,
      }}
      value={valueInput}
      onChange={ handleChangeInput }
      onFocus ={ handleRedirectUser }
      />
      <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} paddingTop={'10px'}>
      <EmojiModal/>
       <Box>
         <DetailVideoButton
         style={{
          backgroundColor : 'inherit' ,
          marginRight:'10px' ,
         }}
         >Hủy</DetailVideoButton>
        <MediumButton
        style={{
          width : 'auto' ,
          height : '36px' ,
          padding : '12px' ,
          maxHeight : '36px' ,
          backgroundColor : '#065fd4' ,
          '&.MuiButton-root:hover' : { 
            backgroundColor : '#065fd4' ,
            opacity : '0.85' ,
          }
        }}
         handleClickBtn={handleAddComment}
        >Bình luận</MediumButton>
       </Box>
      </Box>
      </Box>
    </form>
  )
}

export default CommentInput