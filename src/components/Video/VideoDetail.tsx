import React, { useEffect, useContext, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { Box, Stack } from "@mui/system";

import SmallButton from "../Button/SmallButton";

import { AppContext } from "../../context/AppProvider";

import { fetchDataFromAPI } from "../../utils/fetchData";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

import { IVideo ,IChannel,} from "../../interface";
import VideoComment from "./VideoComment";

import VideoDetailContact from "./VideoDetailContact";
import DescriptionVideo from "./VideoDescription";
import useChannelDetail from "../../hooks/useChannelDetail";
import Videos from "./Videos";


const VideoDetail = () => {
  const { setLoadingVideos , channelId , globalVideo } = useContext(AppContext);
  const [video, setVideo] = useState<IVideo>();
  const [channelDetail] = useChannelDetail(channelId); 

  const { id } = useParams();

  useEffect(() => {
    try {
      const getVideoDetail = async () => {
        const data = await fetchDataFromAPI(
          {
            url : `videos?part=snippet,statistics&id=${id}` ,
          }
        );
        console.log(data.data.items[0]);
        setVideo(data.data.items[0]);
        setLoadingVideos(false);
      };
      getVideoDetail();
    } catch (error) {}
  }, []);


  return (
    <Box
      sx={{
        padding: "25px 80px",
        display: "flex",
      }}
    >
      <Stack
      sx={{
        width:'885px'
      }}
      >
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          width={"100%"}
          height={"498px"}
          controls={true}
        />
        <Typography marginTop={"15px"} fontWeight={"bold"} fontSize={"20px"}>
          {video?.snippet.title || "This is a title Video"}
        </Typography>
       <VideoDetailContact
       channelTitle = {channelDetail?.snippet.title} 
       subscriberCount = {channelDetail?.statistics?.subscriberCount}
       likeCount = {video?.statistics?.likeCount}
       urlImg = { channelDetail?.snippet.thumbnails.medium.url }
       video = { video }
       />
        <DescriptionVideo
        description = {video?.snippet.description} 
        createAt = {video?.snippet.publishedAt}
        viewCount = {video?.statistics?.viewCount}
        />
        <VideoComment 
        idVideo={id}
        />
      </Stack>
      <Stack
        sx={{
          padding: "5px 20px",
          width:'400px',
        }}
      >
        <Stack direction={"row"} spacing={1}>
          <SmallButton isSelected={true}>Tất cả</SmallButton>
          <SmallButton isSelected={false}>Video có liên quan</SmallButton>
        </Stack>
        <Videos
        videos={globalVideo} 
        isSearchPage={true}
        style={
          {
            widthCard : '402px' ,
            heightCard : '94px' ,
            isRow : true , 
            heightCardImg : '94px' ,
            widthCardImg : '168px' ,
            widthCardContent : '202px' ,
            paddingCardContent : '0 10px' ,
            isBoldTitle : true ,
            fontSizeTitle : '14px' ,
            heightContentTitle : '40px' ,
            marginBetweenContent:'5px 0' ,
            isHaveDescription : false ,
          }
        }
        />
      </Stack>
    </Box>
  );
};

export default VideoDetail;
