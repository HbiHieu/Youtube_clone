import { createBrowserRouter, redirect } from "react-router-dom";
import { VideoDetail , ChannelDetail , Feed ,SearchFeed } from "../components"
import MainLayout from "../Layout/MainLayout";
import { HistoryPage, LibraryPage, SubcriptionsPage , LikedVideosPage } from "../Pages";
import SignIn from "../Pages/SignIn";
import { useContext } from "react"
import { AppContext } from "../context/AppProvider";

//const { user } = useContext(AppContext) ;


export const router = createBrowserRouter([
       {
        element : <MainLayout/> ,
        children : [
            {
                    path:"/" ,
                    element:<Feed/> ,
                },
                {
                  path:"/video/:id" ,
                  element:<VideoDetail/>
                },
                {
                  path:"/channel/:channelId",
                  element:<ChannelDetail/>
                },
                {
                  path:"/search/:id" ,
                  element:<SearchFeed/> ,
                } ,
                {
                  path:"/subscriptions" ,
                  element:<SubcriptionsPage/> ,
                } ,        
                {
                  path:"/library" ,
                  element:<LibraryPage/> ,
                } ,
                {
                  path:"/history" ,
                  element:<HistoryPage/>
                } ,
                {
                  path:"/likedVideos" ,
                  element:<LikedVideosPage/>
                }
        ]
       } ,
       {
        path:'/signIn' ,
        element : <SignIn/>
       }
]
) ;
