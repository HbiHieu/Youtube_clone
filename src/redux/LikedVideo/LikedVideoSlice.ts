import { createSlice } from "@reduxjs/toolkit";
import { IVideos } from "../../interface";
import { handleAddLikedVideo } from "./LikedVideo.ultil";

export interface IinitialState {
  likedVideos: IVideos["videos"] ,
} 

const initialState : IinitialState = {
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