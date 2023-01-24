import React, { useState , useContext } from 'react'
import { historyCreateVideo } from '../../utils/historyCreate'
import { convertNumber } from '../../utils/convertNumber'
import { AppContext } from '../../context/AppProvider'
import DetailVideoButton from '../Button/DetailVideoButton'

interface IDescriptionVideoProps {
  description : string | undefined ,
  createAt : string | undefined ,
  viewCount : string | undefined ,
}

const DescriptionVideo = ( {description , createAt , viewCount } : IDescriptionVideoProps ) => {
  
  const [ isShowMore , setIsShowMore ] = useState<boolean>(false) ;
  const { darkTheme } = useContext(AppContext)
 
  const handleShowMoreDescription = () => {
    if ( isShowMore ) {
      setIsShowMore(false) ;
      window.scrollTo({top:0,behavior:'smooth'}) ;
    }
    else {
      setIsShowMore(true) ;
    }
  }

  return (
    <>
    <div 
    className='formatStringDescription'
    style={{
      height: isShowMore ? 'auto' : '104px' ,
      overflow:'hidden',
      position:'relative' ,
      backgroundColor : darkTheme ? '#272727' : 'f2f2f2' ,
    }}
    >
      <div style={{fontWeight:'500'}}>
        {
          `${convertNumber(viewCount || '')} lượt xem ` 
        }
        <span style={{marginLeft:'5px'}}>{`${historyCreateVideo(createAt || '')}`}</span>
      </div>
      <span 
      style={{
      whiteSpace : 'pre-wrap'  ,
      display: "-webkit-box",
      "WebkitLineClamp": isShowMore ? '' : "3",
      "WebkitBoxOrient": "vertical",
      overflow:'hidden',
      paddingBottom:isShowMore ? '30px': '' ,
      }}
      >{description}</span>
      <DetailVideoButton 
       style={{
        position:'absolute',
        bottom:'0' ,
        right:isShowMore ? '' : '0' ,
        left :isShowMore ? '0' : '' ,
        backgroundColor:'inherit',
        '&.MuiButton-root:hover' : {
          backgroundColor : 'inherit'
        } ,
        fontWeight : 'bold' ,
       }}
       handleClickBtn={ handleShowMoreDescription }
      >{isShowMore ? 'Ẩn bớt' : 'Hiện thêm'}</DetailVideoButton>
    </div>
    </>
  )
}

export default DescriptionVideo