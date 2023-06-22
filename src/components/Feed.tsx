import React, { useEffect, useState , useContext } from "react";
import { fetchDataFromAPI } from "../utils/fetchData";

import { Videos } from "./";
import { IVideos } from "../interface";
import { videosFake } from "../constant/video"
import { AppContext } from "../context/AppProvider";
import CategoryNav from "./CategoryNav";
import useIfiniteScroll from "../hooks/useIfiniteScroll";

const Feed = () => {

  const { selectedCategory , setLoadingVideos , setGlobalVideo } = useContext(AppContext) ;

  const [videos, setVideos] = useState<IVideos["videos"]>([
    // {
    //   id: { videoId: "11" },
    //   snippet: { channelId: "11" },
    // },
  ]);
  const [loadedVideoQuantity,setLoadedVideoQuantity] = useState<number>(16) ;

  useIfiniteScroll( () => {
      setLoadedVideoQuantity( (prev) => prev + 8 ) ;
      setLoadingVideos(true) ;
  } )

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDataFromAPI(
          {
            url : `search?part=snippet&q=${selectedCategory}`,
            numberMaxResults  :loadedVideoQuantity ,
          }
        );
        //setVideos( [...videos , data.data.items] ) ;
        //setVideos(data.data.items) ;
        setGlobalVideo(data.data.items)
        setVideos( (prev) => [...prev , ...data.data.items] )
        setLoadingVideos(false) ;
        console.log(data.data.items) 
      } catch (error) {
        setVideos(videosFake);
        setLoadingVideos(false) ;
        console.log(error)
      }
    };
    fetchData();
  }, [selectedCategory,loadedVideoQuantity]);

  console.log(videos) ;

  return (
    <> 
        <CategoryNav/>
        <Videos 
        videos={videos} 
        isSearchPage={false} 
        style={
          { 
            widthCard : '100%' ,
            heightCard : '300px' ,
            isRow : false ,
            heightCardImg : '180px' ,
            widthCardImg : '100%' ,
            widthCardContent : '100%' ,
            paddingCardContent : '16px 0' ,
            isBoldTitle : true ,
            fontSizeTitle : '14px' ,
            heightContentTitle : '42px' ,
            marginBetweenContent:'0' ,
            isHaveDescription : false ,
          }
        }
        />
    </>
  );
};

export default Feed;
