import React, { useEffect, useState } from 'react'
import { IChannel } from '../interface';
import { fetchDataFromAPI } from '../utils/fetchData';


const useChannelDetail = ( channelId:string ) => {
    
    const [ channelDetail , setChannelDetail ] = useState<IChannel>() ;

    useEffect(() => {
        try {
          const getChannelDetail = async () => {
            const data = await fetchDataFromAPI({
              url : `channels?part=snippet&id=${channelId}` ,
            })
            console.log(data) ;
            setChannelDetail(data.data.items[0]) ;
          };
          getChannelDetail();
        } catch (error) {}
      },[]);

  return [channelDetail] ;
}

export default useChannelDetail