import React from 'react'
import { convertNumber } from '../../utils/convertNumber';
import MediumButton from '../Button/MediumButton';
import { Box , Avatar, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { IChannel } from '../../interface';

interface ChannelDetailHeaderProps {
    channelDetail : IChannel | undefined ,
}

const ChannelDetailHeader = ({channelDetail} : ChannelDetailHeaderProps) => {
  return (
    <Box display={'flex'} justifyContent={'space-between'}  padding={'16px 105px'} >
          <Box display='flex'>
            <Avatar
            src={channelDetail?.snippet.thumbnails.medium.url || ''} 
            sx={{
             width:' 80px' ,
             height:'80px' ,
             marginRight:'24px' ,
            }}
            />
            <Stack>
              <Typography fontSize={'24px'}>{channelDetail?.snippet.title}</Typography>
              <Typography fontSize={'14px'} color={'#606060'}>{channelDetail?.snippet.customUrl}</Typography>
              <Typography fontSize={'14px'} color={'#606060'}>{`${convertNumber(channelDetail?.statistics?.subscriberCount || "")} người đăng ký`}</Typography>
            </Stack>
          </Box>
          <MediumButton
      isSearchPage={true}
      >Đăng ký</MediumButton>
        </Box>
  )
}

export default ChannelDetailHeader