import React, { useState, useEffect, useContext, } from "react";

import { useParams } from "react-router-dom";
import { fetchDataFromAPI } from "../utils/fetchData";

import { Videos } from "./";
import { IVideos } from "../interface";
import { AppContext } from "../context/AppProvider";

import "../styles/nprogress.css" 
import useIfiniteScroll from "../hooks/useIfiniteScroll";

const SearchFeed = () => {

  const { setLoadingVideos } = useContext(AppContext) ;

  const { id } = useParams();

  const [videos, setVideos] = useState<IVideos["videos"]>([
    {
      id: { videoId: "" },
      snippet: { channelId: "" },
    },
  ]);
  const [loadedVideoQuantity, setLoadedVideoQuantity] = useState<number>(16);

  useIfiniteScroll( () => {
    setLoadedVideoQuantity( (prev) => prev + 8 ) ;
    setLoadingVideos(true) ;
} )

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDataFromAPI(
          {
            url : `search?part=snippet&q=${id}`,
            numberMaxResults  :loadedVideoQuantity ,
          }
        );
        console.log(data) ;
        setVideos(data.data.items);
        console.log(data.data.items);
        setLoadingVideos(false);
      } catch (error) {}
    };
    fetchData();
  }, [loadedVideoQuantity,id]);

  return (
    <div>  
        <Videos 
        videos={videos} 
        isSearchPage={true}
        style={
          {
            widthCard : '806px' ,
            heightCard : '210px' ,
            isRow : true , 
            heightCardImg : '201px' ,
            widthCardImg : '360px' ,
            widthCardContent : '400px' ,
            paddingCardContent : '0 16px' ,
            isBoldTitle : false ,
            fontSizeTitle : '18px' ,
            heightContentTitle : 'auto' ,
            marginBetweenContent:'20px 0' ,
            isHaveDescription : true ,
          }
        }
        />
    </div>
  );
};

export default SearchFeed;
