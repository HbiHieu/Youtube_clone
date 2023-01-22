import { createSlice } from "@reduxjs/toolkit";
import { IVideos } from "../../interface";
import { handleAddLikedVideo } from "./LikedVideo.ultil";

interface initialState {
  likedVideos: IVideos["videos"] ,
} 

const initialState : initialState = {
    likedVideos : [] ,
} 

export const likedVideosSlice = createSlice({
    name : "likedVideos" ,
    initialState ,
    reducers : {
        addLikedVideos : ( state , action ) => {
            state.likedVideos = handleAddLikedVideo( state.likedVideos , action.payload ) ;
        }
    }
}) 

export default likedVideosSlice.reducer ;