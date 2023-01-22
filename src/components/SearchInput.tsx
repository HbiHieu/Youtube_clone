import React , { useState , useRef , useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

import { AppContext } from '../context/AppProvider';
import axios from 'axios';

interface ISearchInputProps {
  isDarkTheme : boolean ,
}

const SearchInput = ({isDarkTheme} : ISearchInputProps) => {

    const searchResult = useRef('') ;
    const navigate = useNavigate() ;
    const [textInput,setTextInput] = useState<string>('') ; 

    const { setLoadingVideos } = useContext(AppContext)

    const handleFocusInput = (e:React.FocusEvent<HTMLInputElement, Element>) => {
       e.target.nextElementSibling?.classList.remove('focusInput') ;
    }

    const handleBlurInput = ( e: React.FocusEvent<HTMLInputElement, Element> ) => {
        e.target.nextElementSibling?.classList.add('focusInput') ;
    }

    const handleSubmitSearch = (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault() ;
      navigate(`/search/${textInput}`) ;
      setLoadingVideos(true) ;
    }

    const handleChangeValueInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTextInput(e.target.value) ;
        const fetchSuggest = async () => {
          try {
            const data = 
            await axios({             
            }) ;
            console.log(data)
          } catch (error) {
            console.log(error)
          }
        }
        //fetchSuggest() ;
    }

    const handleRemoveText = () => {
      setTextInput('') ;
    }

    const handleClickVoiceBtn = () => {

      const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.start() ;
      recognition.interimResults  = true ;
      recognition.addEventListener("result" , (e) => {
        searchResult.current = e.results[0][0].transcript ;
        console.log(searchResult.current) ;
        setTextInput(searchResult.current) ;
        navigate(`/search/${searchResult.current}`) ;
      }) ;
      // recognition.onaudioend = () => {
      // }
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
    </form>
  )
}

export default SearchInput