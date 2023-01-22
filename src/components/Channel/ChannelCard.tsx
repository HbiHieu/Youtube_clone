import React ,{ useContext , useEffect } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";

import { IChannel, IVideo } from "../../interface";
import { demoChannelTitle } from "../../constant";
import { AppContext } from "../../context/AppProvider";
import MediumButton from "../Button/MediumButton";

interface VideoProps {
  item: IVideo ;
  isSearchPage: boolean;
}

const ChannelCard = ({ item, isSearchPage }: VideoProps) => {
 
  const { darkTheme , setLoadingVideos } = useContext(AppContext) ;

  return (
    <Card
      sx={{
        height: isSearchPage ? "140px" : "300px",
        "&.MuiCard-root": { boxShadow: "unset" },
        width: "100%",
        display: "flex",
        backgroundColor:'transparent' ,
        justifyContent:'space-between' ,
      }}
      >
      <Link 
      to={`/channel/${item?.id.channelId}`}
      style={{
        color : darkTheme ? 'white' : 'black' ,
        width:'100%' ,
      }}
      onClick={ (e) => {
        setLoadingVideos(true) ;
      } }
      >
        <CardActionArea
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: isSearchPage ? "row" : "column",
            alignItems: isSearchPage ? "flex-start" : "center",
            justifyContent: isSearchPage ? "flex-start" : 'space-around',
            width: "100%",
            "&.MuiCardActionArea-root:hover .MuiCardActionArea-focusHighlight":
              { opacity: "0" },
          }}
        >
          <div
            style={{
              width: isSearchPage ? "360px" : "",
              display: isSearchPage ? "flex" : "block",
              justifyContent: "center",
              minWidth: isSearchPage ? "360px" : "",
            }}
          >
            <CardMedia
              component={"img"}
              image={item?.snippet?.thumbnails?.high.url}
              sx={{
                borderRadius: "50%",
                width: "136px",
                height: "136px",
              }}
            />
          </div>
          <CardContent
            sx={{
              padding: isSearchPage ? "0 16px" : "16px 0",
            }}
          >
            <Box
              width={"264px"}
              display={"flex"}
              alignItems={ isSearchPage ? "flex-start" : "center" }
              flexDirection={"column"}
            >
              <Typography fontSize={"18px"} margin={"10px 0"}>
                {item.snippet.title || demoChannelTitle}
              </Typography>
              {isSearchPage && (
                <Typography
                  fontSize={"12px"}
                  sx={{
                    overflow: "hidden",
                    lineClamp: "2",
                    textOverflow: "ellipsis",
                    "WebkitLineClamp": "2",
                    "WebkitBoxOrient": "vertical",
                  }}
                >
                  {item.snippet.description}
                </Typography>
              )}
            </Box>
          </CardContent>
        </CardActionArea>
      </Link>
      {
      isSearchPage && 
      <MediumButton
      isSearchPage={isSearchPage}
      >Đăng ký</MediumButton>
      }
    </Card>
  );
};

export default ChannelCard;
