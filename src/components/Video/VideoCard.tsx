import React, { useContext } from "react";

import {
  CardActionArea,
  CardMedia,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import { IVideo } from "../../interface";
import { demoThumbnailUrl, demoVideoTitle } from "../../constant/index";
import { Link } from "react-router-dom";

import { historyCreateVideo } from "../../utils/historyCreate";
import { AppContext } from "../../context/AppProvider";
import { LiveIcon } from "../icons";

interface VideoProps {
  item: IVideo;
  style : {
    widthCard : string , 
    heightCard : string ,
    isRow : boolean ,
    widthCardImg : string ,
    heightCardImg : string ,
    widthCardContent : string ,
    paddingCardContent : string , 
    fontSizeTitle : string ,
    isBoldTitle : boolean ,
    heightContentTitle : string ,
    isHaveDescription : boolean ,
    marginBetweenContent : string ,
  },
}

const VideoCard = ({ item, style }: VideoProps) => {
  const { darkTheme , setLoadingVideos , setChannelId } = useContext(AppContext);
  const isLive = item.snippet.liveBroadcastContent != "none";

  return (
    <Link 
     to={`/video/${item.id.videoId || item.id}`}
     onClick={ () => { 
      setLoadingVideos(true) ;
      setChannelId(item.snippet.channelId) ;
    }  }

     >
      <Card
        sx={{
          display: "inline-block",
          width: style.widthCard ,
          height: style.heightCard ,
          color: darkTheme ? "white" : "black",
          backgroundColor: "transparent",
          "&.MuiCard-root": { boxShadow: "unset" },
        }}
      >
        <CardActionArea
          sx={{
            height: "100%",
            display: style.isRow ? "flex" : "block",
            alignItems: style.isRow ? "flex-start" : "",
            justifyContent:style.isRow ? "flex-start" : "" ,
            "&.MuiCardActionArea-root:hover .MuiCardActionArea-focusHighlight":
            { opacity: "0" },
          }}
        >
          <CardMedia
            component={"img"}
            image={item?.snippet?.thumbnails?.high.url || demoThumbnailUrl}
            height={style.heightCardImg}
            sx={{
              width: style.widthCardImg , 
              backgroundSize: "cover",            
              borderRadius: "16px",
              borderBottom: isLive ? "4px solid red" : "none",
            }}
          />
          <CardContent
            sx={{
              width: style.widthCardContent,
              padding: style.paddingCardContent ,
            }}
          >
            <Typography
              fontWeight={ style.isBoldTitle ? "bold" : ""}
              height={"42px"}
              overflow={"hidden"}
              gutterBottom
              sx={{
                texOverflow: "ellipsis",
                display: "-webkit-box",
                "WebkitLineClamp": "2" /* number of lines to show */,
                "lineClamp": 2,
                "WebkitBoxOrient": "vertical",
                fontSize: style.fontSizeTitle ,
                height: style.heightContentTitle ,
              }}
            >
              {item.snippet.title || demoVideoTitle}
            </Typography>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              sx={{
                flexDirection: style.isRow ? "column-reverse" : "row",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  color: "#606060",
                  margin: style.marginBetweenContent ,
                }}  
              >
                {item.snippet.channelTitle}
              </span>
              <span
                style={{
                  fontSize: "12px",
                  color: "#606060",
                  height:"24px",
                }}
              >
                {isLive ? (
                  <span
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                      borderRadius: "4px",
                      width: "92px",
                    }}
                  >
                    <LiveIcon />{" "}
                    <span style={{ fontWeight: "bold", marginRight: "3px" }}>
                      TRỰC TIẾP
                    </span>{" "}
                  </span>
                ) : (
                  historyCreateVideo(item.snippet.publishedAt || "")
                )}
              </span>
            </Box>
            { style.isHaveDescription && (
              <div
                style={{
                  fontSize: "12px",
                }}
              >
                {item.snippet.description}
              </div>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default VideoCard;
