import { IUser } from "./interfaceUser" 
import { IVideos } from "./InterfaceVideo"

export interface IAppContext {
    value : {
        selectedCategory : string ,
        setSelectedCategory : ( value:string ) => void  , 
        darkTheme : boolean ,
        setDarkTheme: ( value : boolean ) => void,
        loadingVideos : boolean ,
        setLoadingVideos : ( value : boolean ) => void ,
        channelId : string ,
        setChannelId: ( value : string ) => void ,
        globalVideo : IVideos["videos"] | undefined ,
        setGlobalVideo : ( value: IVideos["videos"] ) => void ,
    }
}