import { Avatar, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { IVideo } from '../../interface'
import { likedVideosSlice } from '../../redux/LikedVideo/LikedVideoSlice'

import { convertNumber } from '../../utils/convertNumber'
import DetailVideoButton from '../Button/DetailVideoButton'
import MediumButton from '../Button/MediumButton'
import { DislikeIcon, LikeIcon, MoreIconDetail, ShareIcon } from '../icons'

interface IVideoDetailContactProps {
  channelTitle : string | undefined,
  subscriberCount : string | undefined ,
  likeCount : string | undefined ,
  urlImg : string | undefined ,
  video : IVideo | undefined ,
}

const VideoDetailContact = ( { channelTitle , subscriberCount , likeCount , urlImg , video } : IVideoDetailContactProps ) => {

  const dispatch = useDispatch() ;
  
  const handleLikeVideo = () => {
    dispatch( 
      likedVideosSlice.actions.addLikedVideos(video) 
     )
  }

  return (
     <Stack
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={"row"}
          margin={'12px 0'}
        >
          <Box display={"flex"} alignItems={"flex-end"}>
            <Avatar
              sx={{
                height: "40px",
                width: "40px",
                backgroundColor: "orange",
              }}
              src={urlImg}
            />
            <div
              style={{
                margin: "0 12px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography fontWeight={"bold"} fontSize={"15px"} height={'100%'}>
                {
                  channelTitle
                }
              </Typography>
              <span style={{ fontSize: "13px", color: "#606060" }}>
                { `${convertNumber( subscriberCount || "")} người đăng ký`  }
              </span>
            </div>
            <MediumButton
              style={{
                height: "36px",
                maxHeight: "36px",
                marginLeft: "12px",
              }}
            >
              Đăng ký
            </MediumButton>
          </Box>
          <Box display={"flex"}>
            <div>
              <DetailVideoButton
                style={{
                  borderRadius: "20px 0 0 20px",
                  "&.MuiButton-root::after": {
                    content: '" "',
                    backgroundColor: "#606060",
                    position: "absolute",
                    right: "0",
                    top: "6px",
                    height: "24px",
                    width: "1px",
                  },
                }}
                handleClickBtn={handleLikeVideo}
                startIcon={<LikeIcon />}
              >
                {convertNumber( likeCount || "")}
              </DetailVideoButton>
              <DetailVideoButton
                style={{
                  borderRadius: "0 20px 20px 0",
                }}
              >
                <DislikeIcon />
              </DetailVideoButton>
            </div>
            <DetailVideoButton
              startIcon={<ShareIcon />}
              style={{
                margin: "0 10px",
              }}
            >
              Chia sẻ
            </DetailVideoButton>
            <DetailVideoButton
              style={{
                borderRadius: "50%",
                width: "36px",
                padding: "0px",
                minWidth: "36px",
              }}
            >
              <MoreIconDetail />
            </DetailVideoButton>
          </Box>
        </Stack> 
  )
}

export default VideoDetailContact