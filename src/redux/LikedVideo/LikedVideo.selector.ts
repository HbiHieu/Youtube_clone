import { IinitialState } from "./LikedVideoSlice"
import { IVideo } from "../../interface"
import { RootState } from "../store"

export const selectorLikedVideo = ( state:RootState ) => state.LikedVideoSlice.likedVideos   