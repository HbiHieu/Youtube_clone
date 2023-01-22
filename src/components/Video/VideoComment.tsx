import React , {useState , useEffect}from 'react'
import { IComment } from '../../interface'
import CommentInput from '../Comment/CommentInput'
import { fetchDataFromAPI } from '../../utils/fetchData'
import CommentDetail from '../Comment/CommentDetail'

interface IVideoCommentProps {
  idVideo : string | undefined,
}

const VideoComment = ({idVideo}:IVideoCommentProps ) => {
  const [commentList , setCommentList] = useState<IComment[]>([]) ;
  
  useEffect( () => {
    try {
      const getCommentDetail = async () => {
        const data = await fetchDataFromAPI({
          url : `commentThreads?part=snippet&videoId=${idVideo}` ,
          numberMaxResults : 10  ,
        }) ;
        setCommentList(data.data.items) ;
      }
      getCommentDetail() ;
    } catch (error) {
      console.log(error) 
    }
  } ,[])
  
  console.log('comment is..' ,commentList) ;
  return (
    <div style={{
      height:'300px' ,
      paddingTop:'30px',
    }}>
      <CommentInput
      setCommentList = {setCommentList}
      commentList = {commentList}
      />
      {
        commentList.map( (comment , index) => <CommentDetail
        comment={comment}
        key={index}
        setCommentList={setCommentList}
        />)
      }
    </div>
  )
}

export default VideoComment