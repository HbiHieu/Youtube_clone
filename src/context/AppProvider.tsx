import React from 'react'

import { useState , createContext } from "react" ;
import { IAppContext , IUser, IVideos } from '../interface';

export const AppContext = createContext<IAppContext["value"]>({
    selectedCategory:"New" ,
    setSelectedCategory: (value:string) => {} ,
    darkTheme:false , 
    setDarkTheme:(value:boolean) => {},
    loadingVideos : true ,
    setLoadingVideos : (value:boolean) => {} ,
    channelId:'' ,
    setChannelId : (value:string) => {} ,
    globalVideo : undefined ,
    setGlobalVideo : ( value:IVideos["videos"] ) => { } ,
}) ;

interface childrenProps {
    children : JSX.Element 
}

const AppProvider = ({children} : childrenProps) => {
  
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [darkTheme,setDarkTheme] = useState<boolean>(false) ;
  const [loadingVideos,setLoadingVideos] = useState<boolean>(true) ;
  const [channelId , setChannelId] = useState<string>('') ;
  const [ globalVideo , setGlobalVideo ] = useState<IVideos["videos"]>() ;

    const value = {
        selectedCategory ,
        setSelectedCategory,
        darkTheme ,
        setDarkTheme ,
        loadingVideos ,
        setLoadingVideos ,
        channelId ,
        setChannelId ,
        globalVideo ,
        setGlobalVideo ,
    }

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppProvider