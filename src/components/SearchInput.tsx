import React , { useState , useRef , useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { Button ,Dialog , Box, Typography, Avatar } from '@mui/material';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

import { AppContext } from '../context/AppProvider';
import { handleActiveSpeechRecogition } from '../utils/activeVoice';

interface ISearchInputProps {
  isDarkTheme : boolean ,
}

const SearchInput = ({isDarkTheme} : ISearchInputProps) => {

    const searchResult = useRef('') ;
    const navigate = useNavigate() ;
    const [textInput,setTextInput] = useState<string | string[]>('') ; 
    const [openDialog , setOpenDialog ] = useState<boolean>(false) ;

    const { setLoadingVideos } = useContext(AppContext)

    const handleFocusInput = (e:React.FocusEvent<HTMLInputElement, Element>) => {
       e.target.nextElementSibling?.classList.remove('focusInput') ;
    }

    const handleBlurInput = ( e: React.FocusEvent<HTMLInputElement, Element> ) => {
        e.target.nextElementSibling?.classList.add('focusInput') ;
    }

    const handleCloseVoiceDialog = () => {
      setOpenDialog(false) ;
    }

    const handleWhenVoiceStart = ( e : SpeechRecognitionEvent ) => {
        searchResult.current = Array.from(e.results).map( result => result[0] ).map( result => result.transcript ).toString() ;
        setTextInput(searchResult.current) ;
      }
      
      const handleWhenVoiceEnd = ( ) => {
       searchResult.current = '' ;
       navigate(`/search/${searchResult.current}`) ;
      }

    const handleSubmitSearch = (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault() ;
      navigate(`/search/${textInput}`) ;
      setLoadingVideos(true) ;
    }

    const handleChangeValueInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTextInput(e.target.value) ;
    }

    const handleRemoveText = () => {
      setTextInput('') ;
    }

    const handleClickVoiceBtn = () => {
      setOpenDialog(true) ;
      setTextInput('') ;
      handleActiveSpeechRecogition(
        handleWhenVoiceStart ,
        handleWhenVoiceEnd ,
      )
    }
 
  return (
    <form style={{
      display:'flex',
      flexDirection:'row-reverse' ,
      border :'1px solid #ccc' ,
      borderRadius:'20px' ,
      alignItems:'center' ,
      position:'relative' ,
      backgroundColor:isDarkTheme ? 'black' : 'white' ,
    }}
    className='container-input'
    onSubmit={
      handleSubmitSearch
    }
    >
    <Button
    sx={{
      height:'40px' ,
      width:'40px' ,
      borderRadius:'50%' ,
      minWidth:'40px' ,
      color : isDarkTheme ? 'white' : 'black' ,
    }}
    onClick={handleRemoveText}
    >
    <CloseIcon
    fontSize='small'
     sx={{
      position:'absolute' ,
      right:'10px',
     }}
     />
    </Button>
    <Button
     onClick={handleClickVoiceBtn}
     >
     <KeyboardVoiceIcon/>
     </Button>
    <input
     onFocus={
        handleFocusInput
    }
    onBlur={
        handleBlurInput
    }
    value={textInput} 
    onChange={
      handleChangeValueInput
    }
     type="text" className='search-bar' placeholder='Tìm kiếm'
     style={{
      backgroundColor:isDarkTheme ? 'black' : 'white' ,
      color : isDarkTheme ? 'white' : 'black' ,
     }}
     />
     <div
     className='focusInput'
     style={{
      paddingLeft:'10px' ,
      marginTop:'7px' ,
     }}
     >
      <SearchIcon/>
     </div>
     <Dialog
     open={openDialog} 
     onClose={handleCloseVoiceDialog}
     sx={{
      "	.MuiDialog-container" : {
        alignItems : 'flex-start' ,
      }
     }}
     >
     <Box height={'400px'} width={'560px'} padding={'0 0 16px 32px'} borderRadius={'8px'}>
        <Typography fontSize={'28px'} padding={'48px 0 24px'}>Đang nghe...</Typography>
        <Typography height={'156px'} textOverflow={'ellipsis'} overflow={'hidden'}>{textInput}</Typography>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <Avatar className='scale' sx={{width:'64px' , height : '64px' , backgroundColor : 'red'}} >
            <KeyboardVoiceIcon sx={{height : '40px' , width : '40px'}}/>
          </Avatar>
        </Box>
     </Box>
     </Dialog>
    </form>
  )
}

export default SearchInput